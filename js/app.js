// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

//We will declare variables and assign arrays for each buttons below *ARRAYS ARE SAME AS THE PROVIDED IMAGE
//for button 1
var Button1 = document.querySelector('.button1'); //I declared variable for button 1 here
var textToSpeakNoun = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat'];//Here is an array 

//for button 2
var Button2 = document.querySelector('.button2');
var textToSpeakVerb = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];

//for button 3
var Button3 = document.querySelector('.button3');
var textToSpeakAdjective = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];

//for button 4
var Button4 = document.querySelector('.button4');
var textToSpeakNoun2 = ['goat','monkey','fish','cow','frog','bug','worm'];

//for button 5
var Button5 = document.querySelector('.button5');
var textToSpeakPlaces = ['on the moom','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

//to pass text to speak to speak now
var Button6 = document.querySelector('.button6');

var sentence =new Array(); 
 
 //text content
 var text = document.querySelector('p');



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
//declaring function to take random things from assigned arrays
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
Button1.onclick = function() {
	//local vaiable to input random string to first variable
	 var first= randomValueFromArray(textToSpeakNoun);
	speakNow(first);	
	console.log(first);     
		 sentence[0] =  first;    
		
}

Button2.onclick = function() {
	//to store string in second variable
	var second = randomValueFromArray(textToSpeakVerb);   
	speakNow(second);
	console.log(second)    
	 sentence[1] = second;    
}

Button3.onclick = function() {

	//for third one
	third = randomValueFromArray(textToSpeakAdjective);
	speakNow(third);
	console.log(third);     
    sentence[2] = third;     
 }

Button4.onclick = function() {
	//storing in forth variable
    var forth = randomValueFromArray(textToSpeakNoun2);
	speakNow(forth);
	console.log(forth); 
	 sentence[3] = (forth);   
	}

Button5.onclick = function() {
	//for fifth variable
	var fifth = randomValueFromArray(textToSpeakPlaces);
	speakNow(fifth);
	console.log(fifth);  
	 sentence[4] =(fifth);   
}

Button6.onclick = function() {
	console.log(sentence);    
	speakNow(sentence);   
	sentence = [];        //emptying the array
}
