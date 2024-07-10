const eqeqeq = /^(==|!=)$/
const quotes = /["'`]/

function forbidden(lines, code) {	
	let line
	let ignored = 0
	for (let li = 0; li < lines.length; li++) {
		line = lines[li+ignored]

		// questionable thing below
		if (line && line[0].startsWith('JSigma-ignored-line') === false) {
			const tokens = line

			for (let index = 0; index < tokens.length; index++) {
				const token = tokens[index]
				if (eqeqeq.test(token)) {
					//JSigma ignore below
					throw new Error(`The use of == and != is forbidden.`)
				}
		
				if (token === 'var') {
					const checkTokens = [tokens[index - 1], tokens[index + 1]]
					let isInQuotes = false
					checkTokens.forEach(token => {
						if (token && token !== quotes.test(token)) {
							isInQuotes
						}
					})
					if (!isInQuotes) {
						//JSigma ignore below
						throw new Error(`[Warn]: The use of var is forbidden.`)
					}
				}
			}

		} else {
			ignored+=1
		}

	}

	return code
}

module.exports = { forbidden }