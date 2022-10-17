# to-morse
A node.js module to parse morse code

# Usage

The usage is very easy. Try this:
```js
let morse = require("to-morse")
console.log("Hello world".toMorse())
//#returns: .... . .-.. .-.. --- / .-- --- .-. .-.. -..
```

# Limits

Actually, the module only can parse letters of the Spanish alphabet (English alphabet + "ñ").

But, ¡More symbols coming soon!
# String.prototype.toMorse

The prototype has other three optional arguments, they are:

```js
String.prototype.toMorse(e, t, undef)

e = "e" character, or ".". You can change it.
t = "t" character, or "-". You can change it too
undef = equals to a undefined character. Default is "?"

"hello~".toMorse("*", "°", "$")
//# returns: **** * *°** *°** °°° $
//# default: .... . .-.. .-.. --- ?
```
