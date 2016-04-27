
var crystalgame = {
//This is where the player's random number shows:
	number = function() {
	(Math.floor((Math.random() * 120) + 19));
	}

//This is where the crystals random numbers are added:
$('#topaz').on('click'function(){
	Math.floor((Math.random() *12) + 1);
	  }; 
$('#pink').on('click' function (){
	Math.floor((Math.random() *12) + 1);
	  }; 
$('#purple').on('click' function (){
	Math.floor((Math.random() *12) + 1);
	  }; 
$('#yellow').on('click' function (){
	Math.floor((Math.random() *12) + 1);
	  }; 
	


//fuction to be called when we reset:
var reset = function(){
	totalnum=0
	number=Math.floor((Math.random() * 120) + 19);

}
// this is where the total shows
var totalnum = function(){
document.querySelector('#totalnum').html= (buttons+number);

//This is the counter for wins/losses:
var wins = 0
var losses = 0


//If there's a win:
if 
	(totalnum === number){
wins++;
document.querySelector('#wins').html = wins;
//reset
reset();
}

else {
	//if there's a loss
losses++;
document.querySelector('#losses').html =losses;
reset();
}
}
//start game
crystalgame.startgame(){
	topaz=(Math.floor((Math.random()*12 + 1);
	yellow=(Math.floor((Math.random()*12 + 1);
	purple=(Math.floor((Math.random()*12 + 1);
	pink=(Math.floor((Math.random()*12 + 1);
var totalnum=0;
var number=(Math.floor((Math.random() * 120) + 19));
}

