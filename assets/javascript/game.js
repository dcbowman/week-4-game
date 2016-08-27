$(document).ready(function(){
var yourMatchingNumber = 0;
//This is where the player's random number shows:
var randomNum = randomNumGen();
//This is the counter for wins/losses:
var wins = 0;
var losses = 0;
var crystals;

function randomNumCrystals() {
	return{

//This is where the crystals random numbers are added:
'topaz' : {
	points: Math.floor((Math.random() *11) + 1,
		imgUrl: "assets/images/topazcrystal.jpg"
	  }; 
'pink' : {
	points: Math.floor((Math.random() *11) + 1,
		imgUrl: "assets/images/pinkcrystal.jpg"
	  }; 
'yellow' : {
	points: Math.floor((Math.random() *11) + 1,
		imgUrl: "assets/images/yellowcrystal.jpg"
	  }; 
'purple' : {
	points: Math.floor((Math.random() *11) + 1,
		imgUrl: "assets/images/purplecrystal.jpg"
	}

 }; 
	
}

function randomNumGen (){
	return Math.floor(Math.random() * 100) +18;
}
//fuction to be called when we reset:
//var reset = function(){
	//totalnum=0
	//number=Math.floor((Math.random() * 120) + 19);

}
// this is where the total shows
//var totalnum = function(){
//document.querySelector('#totalnum').html= (buttons+number);

function setGame(){
	yourMatchingNumber =0;
	crystals = randomNumCrystals();
	randomNum = randomNumGen();
	var randomNumDiv = $("<div id='random-number'>").text(randomNum);
	$("#random-area").html(randomNumDiv);
}


//If there's a win:

function updateDom(didUserWin){
	$('#winArea').empty();
if 
	(didUserWin === true){
		$('#winArea').append($('<p>').text('You Won!'));
		setGame();
		renderMatchingNumber()
//wins++;
//document.querySelector('#wins').html = wins;
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

ready()
