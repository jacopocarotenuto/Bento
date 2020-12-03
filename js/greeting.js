// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Jacopo';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var morning = 'Good morning ';
var gree3 = 'Good afternoon ';
var evening = 'Good evening ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';
var greelist = ["All good man?", "Happy to see you sir.", "What a wonderful day to be alive!","Chase your dreams","Be happy", "Always know where your towel is","It is a lovely day and you are a terrible good", "This is a bloody mess!","Did you remember to do the thing?","Help me i'm trapped in here!","Do you have a moment to talk about our lord and saviour BigCheese?",
				"You are really handsome!","Are you single? ;)","Be fucking happy man!","We are all on this pale blue dot","Do you even lift bro?"]
// Here i define (re: copy from stack) a function to get a sample from a list
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 9) {
	document.getElementById('greetings').innerText = morning + name;
}else if (hour >= 21 && hour < 23) {
	document.getElementById('greetings').innerText = evening + name;
}else  {
    document.getElementById('greetings').innerText = greelist.sample();
}
