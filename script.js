var word = prompt("enter your word")
var wordSplit = word.split("")
var wordreverse = wordSplit.reverse()
var wordJoin = wordreverse.join("")
if (word === wordJoin) {
	alert("این کلمه از هر دو طرف به یک شکل خوانده می شود")
} else {
	alert("این کلمه از هر دو طرف به یک شکل خوانده نمی شود")
}