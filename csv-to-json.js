var fs = require('fs');


var csv = fs.readFileSync(process.argv[2], 'utf-8')

var lines = csv.split('\n')

var headers = lines.splice(0, 1).join(',').split(',')

var json = []

for(var i = 0; i < lines.length; i ++){
	var currentLine = lines[i].split(',')
	var obj = {}
	for(var j = 0; j < headers.length; j++){
		obj[headers[j]] = currentLine[j]
	}
	json.push(obj)
}

fs.writeFile(process.argv[3], JSON.stringify(json))
