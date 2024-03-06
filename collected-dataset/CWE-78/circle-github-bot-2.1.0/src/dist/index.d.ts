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
interface IOptions {
    /**
     * GitHub API domain, for enterprise support.
     * @default "api.github.com"
     */
    githubDomain?: string;
}
declare class Bot {
    private readonly env;
    static create(options?: IOptions): Bot;
    /** Get an absolute URL for the given artifact path. */
    artifactUrl(artifactPath: string): string;
    /** Render an HTML link to the path with the given text. */
    artifactLink(artifactPath: string, text: string): string;
    /** Get the message from the latest commit. */
    commitMessage(): string;
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
    comment(authToken: string, body?: string): void;
}
export = Bot;
