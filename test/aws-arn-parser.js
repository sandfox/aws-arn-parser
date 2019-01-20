const assert = require('assert')

const parseTestData = require('./data/parse.json')
const toStringTestData = require('./data/to-string.json')
// const toStringTestData = []
const { parse, toString} = require('../src/arn') 

for (const key in parseTestData) {
	const arnObj = parse(key)
	assert.deepEqual(arnObj, parseTestData[key], `${key} failed to parse correctly`)
}

for (const key in toStringTestData) {
	const arnString = toString(toStringTestData[key])
	assert.equal(arnString, key)
}