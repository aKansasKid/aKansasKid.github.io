var displayWords = new Array();

var numWords = 6254;
var wordList = new Array();
getWords(wordList);


var AkeyButton = document.querySelector('button.Akey');  

mainLoop(wordList);

function mainLoop(wordList){
   var keyPressed = document.querySelector('label.keyPressed');
       keyPressed.textContent = 'ABCD';
    
} /* End of function mainLoop */


AkeyButton.onclick = function() {
   var keyPressed = document.querySelector('label.keyPressed');
       keyPressed.textContent = 'A';
}

function getWords(wordList)
    {
wordList[1] = "aback".toUpperCase();
wordList[2] = "abaft".toUpperCase();
wordList[3] = "abase".toUpperCase();
wordList[4] = "abased".toUpperCase();
wordList[5] = "abash".toUpperCase();
wordList[6] = "abate".toUpperCase();
wordList[7] = "abated".toUpperCase();
wordList[8] = "abater".toUpperCase();
wordList[9] = "abbey".toUpperCase();
wordList[10] = "abbot".toUpperCase();
wordList[11] = "abduct".toUpperCase();
wordList[12] = "abhor".toUpperCase();
wordList[13] = "abide".toUpperCase();
wordList[14] = "abided".toUpperCase();
wordList[15] = "abject".toUpperCase();
wordList[16] = "abjure".toUpperCase();
wordList[17] = "ablate".toUpperCase();
wordList[18] = "ablaze".toUpperCase();
wordList[19] = "abler".toUpperCase();
    }
