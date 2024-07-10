function getTokens(lines) {
	let tokenizedLines = []
	lines.forEach(line => {
		tokenizedLines.push(line.split(/[\s|\n\r]+/g))
	})
	return tokenizedLines
}

module.exports = { getTokens }