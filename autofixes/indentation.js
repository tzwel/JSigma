const characters = {
	'tab': '	'
}

function indentation(lines) {

	for (let index = 0; index < lines.length; index++) {
		const line = lines[index]
		let indentation = line.match(/^ +/gm)
		if (indentation) {
			indentation = indentation.toString()
			const len = Math.floor(indentation.length / 4)

			if (indentation.length % 4 !== 0) {
				throw new Error(`Uneven code indent at line ${index+1}`)
			}

			lines[index] = line.replace(indentation, characters.tab.repeat(len))
		}
	}

	return lines.join('\r\n')
}

module.exports = { indentation }