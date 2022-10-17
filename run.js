let morse = require("./index.js")
console.log("hello~".toMorse())

/*
let string = "hello world"
string.toMorse()
//or
"hello world".toMorse()
//# returns: .... . .-.. .-.. --- / .-- --- .-. .-.. -..

Arguments:

String.prototype.toMorse(e, t, undef)

e = "e" character, or ".". You can change it.
t = "t" character, or "-". You can change it too
undef = equals to a undefined character. Default is "?"

"hello~".toMorse("*", "°", "$")
//# returns: **** * *°** *°** °°° $
//# default: .... . .-.. .-.. --- ?
*/
