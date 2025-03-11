import os
import re
import json
import difflib

index_file = "./index.json"

with open(index_file, "r") as index_fd:
    index_json = json.load(index_fd)

to_test = []
for pkg_json in index_json:
    vulns = pkg_json["vulns"]
    for vuln in vulns:
        if vuln["cwe"] == "CWE-22":
            to_test.append(vuln)

create_server_pattern = re.compile(r'\bcreateServer\b')
listen_pattern = re.compile(r'\.listen\((\d+|"(\d+)")\)')

def extract_port(match):
    return match.group(1) if match.group(1).isdigit() else match.group(2)

def prompt_diff(file_path, new_content):
    """Checks if a file exists and prompts for approval if changes are detected."""
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            old_content = f.readlines()
        new_lines = new_content.splitlines()
        diff = list(difflib.unified_diff(old_content, new_lines, lineterm=""))

        if diff:
            print(f"Changes detected for {file_path}:")
            print("\n".join(diff))
            response = input("Accept changes? (y/n): ").strip().lower()
            if response != "y":
                print("Changes discarded.")
                return

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"File {file_path} updated.")

def create_taint_summary(input_file, port):
    d = [{
        "filename" : f"{input_file}",
        "vuln_type": "path-traversal",
        "source" : "",
        "tainted_params" : [],
        "params_types" : {},
        "client" : {
            "type": "GET",
            "port": port
        }
        }]
    return json.dumps(d, indent=2)

for vuln in to_test:
    input_file = vuln["filename"]
    with open(input_file, "r") as fd:
        module_data = fd.read()

    project_dir = os.path.dirname(os.path.dirname(input_file))
    expected_outcome_file = os.path.join(project_dir, "expected_output.json")
    if create_server_pattern.search(module_data):
        listen_match = listen_pattern.search(module_data)
        if listen_match:
            port = int(extract_port(listen_match))
            relpath_file = os.path.relpath(input_file, project_dir)
            print(f"Found createServer in {input_file} (./{relpath_file}), listening on port {port}")
            taint_summary_data = create_taint_summary(relpath_file, port)
            prompt_diff(expected_outcome_file, taint_summary_data)

