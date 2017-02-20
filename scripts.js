// Next stop: Get setInterval working. ref: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


var wordArray = ["relaxed", "happy", "healthy", "tolerant", "patient", "motivated", "calm", "focused", "disciplined", "kind", "productive", "learned", "confident", "positive", "action", "virtuous", "Thrive", "content", "smile", "mindful", "grateful", "persistent", "fortitude", "resilient", "faith", "inspired", "love", "mastery", "excellence"];

var int;

function startRoll() {
	int = setInterval(randomWord, 150);
}

function randomWord() {
	var target = document.getElementById('message')
	var wordCount = wordArray.length;
	var spWord = wordArray[Math.floor(Math.random()*wordCount)];
	target.innerHTML=spWord;
	running = true;
	console.log(running);
}

function stopRoll() {
	clearInterval(int);
}



