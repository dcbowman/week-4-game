

//This is where the player's random number shows:
var number= function(){
(Math.floor((Math.random() * 120) + 19));
}

//this is where the buttons generate a random number:
var buttons = function(){
	Math.floor((Math.random() * 12) + 1);
}

//This is where the crystals random numbers are added:

document.getElementById('#topaz').on('click' function(){
	    		totalnum+=number
			}); 
document.getElementById('#purple').on('click' function(){
	    		totalnum+=number
			});
document.getElementById('#yellow').on('click' function(){
	    		totalnum+=number
			}); 
document.getElementById('#pink').on('click' function(){
	    		totalnum+=number
			}); 


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

//start game
function startgame(){
	document.getElementById("number").html(Math.floor((Math.random() * 120) + 19));
}
}
