var a = require('assert')
var chars = require('.')

a.deepEqual(chars('Hello World!'), ['H', 'e', 'l', 'o', ' ', 'W', 'r', 'd', '!'])
