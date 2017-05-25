// TODO's: Hitting start shortens the interval between new words. Needs fixing.


var wordArray = ["relaxed", "happy", "healthy", "tolerant", "patient", "motivated", "calm", "focused", "disciplined", "kind", "productive", "learned", "confident", "positive", "action", "virtuous", "thrive", "content", "smile", "mindful", "grateful", "persistent", "fortitude", "resilient", "faith", "inspired", "love", "mastery", "excellence", "wonderful", "wise", "joy"];

var int;

document.getElementById('start').addEventListener('click', startRoll);
document.getElementById('stop').addEventListener('click', stopRoll);

function startRoll() {
	int = setInterval(randomWord, 150);
}

function randomWord() {
	var target = document.getElementById('message')
	var wordCount = wordArray.length;
	var spWord = wordArray[Math.floor(Math.random()*wordCount)];
	target.innerHTML=spWord;
	var running = true;
	console.log(running);
}

function stopRoll() {
	clearInterval(int);
	target.innerHTML="";
}



