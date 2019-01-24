'use strict'

module.exports = function chars (str) {
	if (Array.isArray(str)) str = String.raw.apply(String, arguments)

	if (typeof str !== 'string') throw Error('Argument should be a string')

	var chars = {}
	var result = []

	for (var i = 0; i < str.length; i++) {
		var char = str.charAt(i)

		if (!chars[char]) {
			chars[char] = true
			result.push(char)
		}
	}

	return result
}
