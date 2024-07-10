#!/usr/bin/env node
const fs = require('node:fs')
const {
	globSync
} = require('glob')

const { getLines } = require('../parsers/lines.js')
const { getTokens } = require('../parsers/tokens.js')

const { indentation } = require('../autofixes/indentation.js')
const { semicolons } = require('../autofixes/semicolons.js')
const { forbidden } = require('../warners/forbidden.js')


const jsfiles = globSync(`${process.cwd()}/**.js`, { ignore: 'node_modules/**' })

jsfiles.forEach(filePath => {
	console.log(`Linting ${filePath}`)
	let code = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })

	const lineOps = [indentation, semicolons]
	const tokenOps = [forbidden]

	try {

		let lines = getLines(code)
		const tokens = getTokens(lines)
		tokenOps.forEach(op => {
			code = op(tokens, code)
		})

		lines = getLines(code)
		lineOps.forEach(op => {
			code = op(lines)
		})

		
	} catch (error) {
		console.log(`Error in file: ${filePath}:\n\n${error} \nThe file was not parsed further.
		`)
	}

	code = code.replaceAll(/^JSigma-ignored-line /gm, '')
	
	fs.writeFileSync(filePath, code)
})

console.log('JSigma: done');
