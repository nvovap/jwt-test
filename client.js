//https://github.com/auth0/node-jsonwebtoken
var jwt = require('jsonwebtoken')


var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NzUwNzEyOTd9.rw2-6e8vPsLyTIivh1WkQ8V-LLdn1w1ru8spMiHruvg'

// var decoded = jwt.verify(token, '123')
// console.log(decoded.foo)


// // verify a token symmetric
// jwt.verify(token, '123', function(err, decoded) {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}

//   	console.log(decoded.foo) // bar
// });




// // invalid token - synchronous
// try {
//   var decoded = jwt.verify(token, 'wrong-secret');
// } catch(err) {
//   console.log(err)
// }


// token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NzUwNzE2MTR9.dGkCVk3dhPICaRuKtLau1vCbwh_LvXB47TJNQnPPh0s'

// try {
//   var decoded = jwt.verify(token, 'shhhhh');
//   console.log(decoded)
// } catch(err) {
//   console.log(err)
// }



token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpZW5jZSI6InVybjpmb28iLCJmb28iOiJudm92YXAiLCJpYXQiOjE0NzUwNzQ3MzV9.Bz3L6c-qaQAbFEikCN5unvJTFBDbldSXaOefJ2v12jQQcD_4TUCtmO8NLyolZfs1y0Bm1z_upYAd9K6qbPfg8OGHJXRC-MdYwrga8kAytmHjon3vsN3spAd9HoPdt1k4nXk4UzC3Kyim5NajVdMNpvhPiSRlLmH3Dt3dw1rloEan2evDhprFgs7qD5rnh1HsJ_qc8ZnK4uhxEIWjL2wcovpnka7tPLIUtiDaQgms7_JYTVRQtHoT3aUuF9YkdSpPMSPPu_piCN5CySrIbWHl_NeCaVpMBTMobR8oiRWekJWgIxhyLoyOZ4CT7LwuOJIcqbM8Z4KQBDiHjGVfUWIRtQ'

var fs = require('fs')

// verify a token asymmetric
var cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, function(err, decoded) {
  console.log(decoded.foo) // bar
});


jwt.verify(token, cert, { audience: 'urn:foo' }, function(err, decoded) {
    if (err) {
		console.log(err)
		return
	}

	console.log(decoded.foo) 

});