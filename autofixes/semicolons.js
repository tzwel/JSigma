const semiRegex = /[^'"](;+$)/gm

function semicolons(lines) {

	for (let index = 0; index < lines.length; index++) {
		const line = lines[index]
		let semi = semiRegex.exec(line)
		if (semi) {
			semiRegex.lastIndex = 0; // fixes regex not catching some lines (https://dev.to/elwin013/when-javascript-regex-can-surprise-you-a-silly-bug-story-101f)
			lines[index] = line.replace(semi[1], '')
		}
	}

	return lines.join('\r\n')
}

module.exports = { semicolons }