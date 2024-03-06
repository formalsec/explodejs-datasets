"use strict";
/*!
Copyright 2017-present TheMadCreator

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var child_process_1 = require("child_process");
var path_1 = require("path");
// IEnvironment fields that must be defined or an Error is thrown.
var REQUIRED_ENV = ["buildUrl", "repo", "sha1", "username"];
// Synchronously execute command and return trimmed stdout as string
function exec(command, options) {
    return child_process_1.execSync(command, options)
        .toString("utf8")
        .trim();
}
// Syncronously POST to `url` with `data` content
function curl(url, data) {
    return exec("curl --silent --data @- " + url, { input: data });
}
var Bot = /** @class */ (function () {
    /** @internal */
    function Bot(env) {
        this.env = env;
    }
    Bot.create = function (options) {
        if (options === void 0) { options = {}; }
        var _a = options.githubDomain, githubDomain = _a === void 0 ? "api.github.com" : _a;
        // CI_PULL_REQUEST was deprecated in favor of CIRCLE_PULL_REQUEST in Circle 2.0.
        var prNumber = path_1.basename(process.env.CIRCLE_PULL_REQUEST || process.env.CI_PULL_REQUEST || "");
        var env = {
            buildUrl: process.env.CIRCLE_BUILD_URL,
            commitMessage: exec('git --no-pager log --pretty=format:"%s" -1').replace(/\\"/g, '\\\\"'),
            githubDomain: githubDomain,
            prNumber: prNumber,
            repo: process.env.CIRCLE_PROJECT_REPONAME,
            sha1: process.env.CIRCLE_SHA1,
            username: process.env.CIRCLE_PROJECT_USERNAME,
        };
        var missing = REQUIRED_ENV.filter(function (key) { return !env[key]; });
        if (missing.length > 0) {
            throw new Error("Missing required environment variables:\n  " + missing.join(", "));
        }
        return new Bot(env);
    };
    /** Get an absolute URL for the given artifact path. */
    Bot.prototype.artifactUrl = function (artifactPath) {
        return this.env.buildUrl + "/artifacts/0/" + artifactPath;
    };
    /** Render an HTML link to the path with the given text. */
    Bot.prototype.artifactLink = function (artifactPath, text) {
        return "<a href='" + this.artifactUrl(artifactPath) + "' target='_blank'>" + text + "</a>";
    };
    /** Get the message from the latest commit. */
    Bot.prototype.commitMessage = function () {
        return this.env.commitMessage;
    };
    /**
     * Post a comment with the given body.
     *
     * Requires a GitHub auth token. We recommend generating a new token
     * and saving it as an environment variable called `GH_AUTH_TOKEN`. Then
     * pass this variable when calling this method.
     *
     * ```js
     * bot.comment(process.env.GH_AUTH_TOKEN, "...");
     * ```
     */
    Bot.prototype.comment = function (authToken, body) {
        if (body === void 0) { body = ""; }
        if (!authToken) {
            throw new Error("Bot.comment() requires auth token.");
        }
        if (this.env.prNumber !== "") {
            return this.curl(authToken, "issues/" + this.env.prNumber + "/comments", body);
        }
        else {
            return this.curl(authToken, "commits/" + this.env.sha1 + "/comments", body);
        }
    };
    /** @internal */
    Bot.prototype.githubUrl = function (authToken, path) {
        var _a = this.env, githubDomain = _a.githubDomain, username = _a.username, repo = _a.repo;
        return "https://" + authToken + ":x-oauth-basic@" + githubDomain + "/repos/" + username + "/" + repo + "/" + path;
    };
    /** @internal */
    Bot.prototype.curl = function (authToken, path, body) {
        // tslint:disable:no-console
        console.log("Posting to " + path + "...");
        console.log(curl(this.githubUrl(authToken, path), JSON.stringify({ body: body })));
        // tslint:enable:no-console
    };
    return Bot;
}());
module.exports = Bot;
