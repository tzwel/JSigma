function getLines(code) {
	let lines = code.split(
		/\r\n/gm
	)

	// mark ignored lines
	for (let index = 0; index < lines.length; index++) {
		const line = lines[index].trim()
		if (line === '//JSigma ignore below') {
			lines[index+1] = 'JSigma-ignored-line ' + lines[index+1]
		}
	}
	return lines
}

module.exports = { getLines }