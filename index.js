function parseLetter(letter, e = ".", t = "-", undef = "?") {
	let morse = [
	  	["a", e+t],			//.-
	  	["b", t+e+e+e],		//-...
	  	["c", t+e+t+e],		//-.-.
	  	["d", t+e+e],		//-..
	  	["e", e],			//.
	  	["f", e+e+t+e],		//..-.
	  	["g", t+t+e],		//--.
	  	["h", e+e+e+e],		//....
	  	["i", e+e],			//..
	  	["j", e+t+t+t],		//.---
	  	["k", t+e+t],	  	//-.-
	  	["l", e+t+e+e],		//.-..
	  	["m", t+t],			//--
	  	["n", t+e],			//-.
  	  	["ñ", t+t+e+t+t],	//--.--
	  	["o", t+t+t],		//---
  	  	["p", e+t+t+e],		//.--.
  	  	["q", t+t+e+t],		//--.-
  	  	["r", e+t+e],	  	//.-.
  	  	["s", e+e+e],	  	//...
	  	["t", t],			//-
  	  	["u", e+e+t],		//..-
	  	["v", e+e+e+t],		//...-
	  	["w", e+t+t],		//.--
  	  	["x", t+e+e+t],		//-..-
		["y", t+e+t+t],		//-.--
  		["z", t+t+e+e],		//--..
	]
	letter = letter.toLowerCase()
	let res = morse.find(item =>
		item.find(find =>
			find == letter
		)
	)
	if(!res) res = [letter, undef]
	return res[1]
}
function parse(text, e = ".", t = "-", undef = "?") {
	let words = text.split(" ")
	let parsed = ""
	let c = 0
	words.forEach(word => {
		let letters = word.split("")
		letters.forEach(letter => {
			parsed += parseLetter(letter, e, t, undef)
			parsed += " "
		})
		c++
		if(c !== words.length) parsed += "/ "
	})
	return parsed
}

String.prototype.toMorse = function(e = ".", t = "-", undef = "?") {
	return parse(String(this), e, t, undef)
}

module.exports = () => {
	console.log("TO MORSE (HELP):\nFor help, visit https://github.com/aguadecoco1301/to-morse/")
	return "[!] Bad usage"
}
