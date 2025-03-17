const path = require("path");
const fs = require("fs");


// if (!modulePath) {
//   console.error('Please provide a module path as an argument');
//   process.exit(1);
// }

function getFunctionParameters(func) {
  const funcStr = func.toString().replace(/\/\*[\s\S]*?\*\/|\/\/.*$/mg, ''); // Remove comments
  const traditionalMatch = funcStr.match(/function\s*.*?\(([^)]*)\)/);
  const arrowMatch = funcStr.match(/\(?([^)]*)\)?\s*=>/);

  let params = [];
  if (traditionalMatch) {
    params = traditionalMatch[1];
  } else if (arrowMatch) {
    params = arrowMatch[1];
  }

  return params.split(',')
    .map(p => p.trim())
    .filter(p => p)
    .map(p => p.replace(/\s*=.*$/, '')); // Remove default values
}

let num_tests = 0;

function getExportedFunctions(modulePath) {
  let basename = path.basename(modulePath);
  let dirname = path.basename(path.dirname(modulePath));
  let filename = path.join(dirname, basename);
  let project_root = path.dirname(path.dirname(modulePath));
  let output_file = path.join(project_root, "no-vis.json");

  try {
    const exported = require(modulePath);
    const functions = [];

    const collectFunctions = (obj, prefix = '') => {
      for (const [name, value] of Object.entries(obj)) {
        if (typeof value === 'function') {
          const parameters = getFunctionParameters(value);
          functions.push({
            exportPath: prefix ? `${prefix}.${name}` : name,
            functionName: value.name || 'anonymous',
            parameters
          });
        } else if (typeof value === 'object' && value !== null) {
          collectFunctions(value, prefix ? `${prefix}.${name}` : name);
        }
      }
    };

    if (typeof exported === 'function') {
      const parameters = getFunctionParameters(exported);
      functions.push({
        exportPath: 'module.exports',
        functionName: exported.name || 'anonymous',
        parameters
      });
    } else if (typeof exported === 'object' && exported !== null) {
      collectFunctions(exported);
    }

    if (functions.length === 0) {
      console.log('No exported functions found');
    } else {
      num_tests++;
      console.log('Exported functions:');

      var tests = [];
      functions.forEach(({ exportPath, functionName, parameters }) => {
        params_types = {}
        for (var param of parameters) {
          var type = "any";
          if (param === "callback" || param === "cb")
            type = "function";
          params_types[param] = type;
        }
        var exportPath = exportPath;
        if (exportPath !== "module.exports" ) {
          exportPath = "module.exports." + exportPath;
        }
        var test = {
          filename: filename,
          source: exportPath,
          tainted_params: parameters,
          params_types: params_types
        }
        tests.push(test)
        // const params = parameters.length > 0 ? `(${parameters.join(', ')})` : '()';
        // console.log(`- ${exportPath}: ${functionName}${params}`);
      });
      // console.log(tests);
      console.log(output_file);
      let jsonData = JSON.stringify(tests, null, 4);
      fs.writeFileSync(output_file, jsonData);
    }
  } catch (error) {
    // console.error('Error:', error.message);
  }
}

const jsonFile = "./index.json";
const jsonData = fs.readFileSync(jsonFile);
const jsonArray = JSON.parse(jsonData);

let visited = {};
let count = 0;
jsonArray.forEach(item => {
  let vulns = item["vulns"];
  for (const vuln of vulns) {
    let cwe = vuln["cwe"];
    let filename = path.resolve(vuln["filename"]);
    if (cwe != "CWE-22" && !(filename in visited)) {
      getExportedFunctions(filename);
      visited[filename] = true;
    }
    count++;
  }
})

console.log(count);
console.log(num_tests);
