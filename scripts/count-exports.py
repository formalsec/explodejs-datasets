import os
import json
import glob

def read_json(fpath):
    with open(fpath, "r") as fd:
        return json.load(fd)

# cwe22 = glob.glob(os.path.join("CWE-22", "**", "run", "taint_summary.json"), recursive=True)
# cwe78 = glob.glob(os.path.join("CWE-78", "**", "run", "taint_summary.json"), recursive=True)
# cwe94 = glob.glob(os.path.join("CWE-94", "**", "run", "taint_summary.json"), recursive=True)
# cwe1321 = glob.glob(os.path.join("CWE-1321", "**", "run", "taint_summary.json"), recursive=True)

# empties will be: 55

empties = 0

# taint_summaries = list(cwe1321)
# for taint_summary_path in taint_summaries:
#     print(taint_summary_path)
#     taint_summary = read_json(taint_summary_path)
#     if taint_summary == []:
#         empties += 1

def get_depth(summary):
    for summ in summary:
        # Needs to instanciate a class to it will alway be bigger than one
        if summ["source"].startswith("new"):
            return True
        # Not a trivial one shot call
        if summ["source"] != "module.exports":
            return True
        # Chains of calls are always bigger than one
        if summ.get("returns", None) is not None:
            return True
    return False

# print("Empty summaries:", empties)

total = 0

bigger_than_one = 0

zeroday_path = os.path.join("zeroday-output", "**", "run", "taint_summary.json")

zeroday_summaries = glob.glob(zeroday_path, recursive=True)

for summary_path in zeroday_summaries:
    taint_summary = read_json(summary_path)
    is_bigger_than_one = get_depth(taint_summary)
    if is_bigger_than_one:
        bigger_than_one += 1
    else:
        print(summary_path)
    total += 1

print(bigger_than_one, total)

