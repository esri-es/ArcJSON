var ArcJSON = require('../lib/index');
var obj;

for (var key in ArcJSON) {
	obj = ArcJSON[key]();
	console.log("\n-----------------------\n")
	console.log("ArcJSON."+key+"() = "+JSON.stringify(obj, null, "\t"));
}
