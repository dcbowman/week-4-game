

//This is where the player's random number shows:
var number= Math.floor((Math.random() * 120) + 19);

//This is where the crystals random numbers are created:
var buttons= 
Math.floor((Math.random() * 12) + 1);

//fuction to be called when we reset:
var reset = function(){
	totalNumb=0
	number=Math.floor((Math.random() * 120) + 19);


}
// this is where the total shows
var totalNumb = (buttons+number);

//This is the counter for wins/losses:
var wins = 0
var losses = 0


//If there's a win:
if{
wins++;
document.querySelector('#wins').html = wins;
//reset
reset();
}
else{
	//if there's a loss
losses++;
document.querySelector('#losses').html =losses;
reset();
}

setupGame: function(){
	var number=Math.floor((Math.random() * 120) + 19);
}
