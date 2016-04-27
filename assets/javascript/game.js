

//This is where the player's random number shows:
var number= Math.floor((Math.random() * 120) + 19);

//this is where the buttons generate a random number:
var buttons = function(){
	Math.floor((Math.random() * 12) + 1);
}

//This is where the crystals random numbers are added:

$("#topaz").on("click", function(){
	    		totalNumb+=number
			}); 
$("#purple").on("click", function(){
	    		totalNumb+=number
			}); 
$("#yellow").on("click", function(){
	    		totalNumb+=number
			}); 
$("#pink").on("click", function(){
	    		totalNumb+=number
			}); 


//fuction to be called when we reset:
var reset = function(){
	totalNumb=0
	number=Math.floor((Math.random() * 120) + 19);


}
// this is where the total shows
var totalNumb = function(){
document.querySelector('#totalnum').html= (buttons+number);

//This is the counter for wins/losses:
var wins = 0
var losses = 0


//If there's a win:
if{
	(totalnum === number){
wins++;
document.querySelector('#wins').html = wins;
//reset
reset();}
}
else{
	//if there's a loss
losses++;
document.querySelector('#losses').html =losses;
reset();
}

//start game
setupGame: function(){
	var number=Math.floor((Math.random() * 120) + 19);
}
