// Next stop: Get setInterval working. ref: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


var wordArray = ["happy", "healthy", "tolerant", "patient", "motivated", "calm", "focused", "disciplined", "kind", "productive", "learned", "confident", "positive", "action", "virtuous", "Thrive", "content", "smile", "mindful", "grateful", "persistent", "fortitude", "resilient", "faith", "inspired"];

function randomWord() {
	var wordCount = wordArray.length;
	var spWord = wordArray[Math.floor(Math.random()*wordCount)];
	return spWord;
}
setInterval(randomWord, 100);
var message = document.getElementById('message').textContent = randomWord();
