var jwt = require('jsonwebtoken')


var token = jwt.sign({ foo: 'bar' }, '123')

console.log("First token password = 123")
console.log(token)

console.log("")
console.log("")




console.log("Second token back date 30 seconds")
var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
console.log(older_token)

console.log("")
console.log("")


var fs = require('fs')

console.log("Third token sign with RSA SHA256")
var cert = fs.readFileSync('private.key');  // get private key
token = jwt.sign({audience: 'urn:foo', foo: 'nvovap' }, cert, { algorithm: 'RS256'});

console.log(token)


