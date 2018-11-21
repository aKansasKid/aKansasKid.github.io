var displayWords = new Array();
var jumble = new Array();

var numWords = 93;
var wordList = new Array();
   getWords(wordList);

   var questionMarks = '??????';
   var hint1Count = 0;
   var hint2Count = 0;
   var hint3Count = 0;
   var hint4Count = 0;
   var hint5Count = 0;

var newWordsButton = document.querySelector('button.NewWords');

var show1Button = document.querySelector('button.show1');
var show2Button = document.querySelector('button.show2');
var show3Button = document.querySelector('button.show3');
var show4Button = document.querySelector('button.show4');
var show5Button = document.querySelector('button.show5');

var hint1Button = document.querySelector('button.hint1');    
var hint2Button = document.querySelector('button.hint2');
var hint3Button = document.querySelector('button.hint3');
var hint4Button = document.querySelector('button.hint4');
var hint5Button = document.querySelector('button.hint5');

mainLoop(wordList);

function mainLoop(wordList){
   hint1Count = 0;
   hint2Count = 0;
   hint3Count = 0;
   hint4Count = 0;
   hint5Count = 0;


   var hintWord = document.querySelector('label.word1');
       hintWord.textContent = 'word1';
   var hintWord = document.querySelector('label.word2');
       hintWord.textContent = 'word2';
   var hintWord = document.querySelector('label.word3');
       hintWord.textContent = 'word3';
   var hintWord = document.querySelector('label.word4');
       hintWord.textContent = 'word4';
   var hintWord = document.querySelector('label.word5');
       hintWord.textContent = 'word5';

   getDisplayWords(displayWords);

   displayJumble();

} /* End of function mainLoop */

newWordsButton.onclick = function() {
   mainLoop(wordList);
}

var show1Button = document.querySelector('button.show1');
show1Button.onclick = function() {
   var currentWord = document.querySelector('label.word1');
   currentWord.textContent = displayWords[1];
}
show2Button.onclick = function() {
   var currentWord = document.querySelector('label.word2');
   currentWord.textContent = displayWords[2];
}
show3Button.onclick = function() {
   var currentWord = document.querySelector('label.word3');
   currentWord.textContent = displayWords[3];
}
show4Button.onclick = function() {
   var currentWord = document.querySelector('label.word4');
   currentWord.textContent = displayWords[4];
}
show5Button.onclick = function() {
   var currentWord = document.querySelector('label.word5');
   currentWord.textContent = displayWords[5];
}

hint1Button.onclick = function() {
        hint1Count++;
        if (hint1Count <= displayWords[1].length) {
            var hintWord = document.querySelector('label.word1');
            hintWord.textContent = displayWords[1].substring(0, hint1Count) + questionMarks.substring(hint1Count, displayWords[1].length);
        }

}
hint2Button.onclick = function() {
        hint2Count++;
        if (hint2Count <= displayWords[2].length) {
            var hintWord = document.querySelector('label.word2');
            hintWord.textContent = displayWords[2].substring(0, hint2Count) + questionMarks.substring(hint2Count, displayWords[2].length);
        }

}
hint3Button.onclick = function() {
        hint3Count++;
        if (hint3Count <= displayWords[3].length) {
            var hintWord = document.querySelector('label.word3');
            hintWord.textContent = displayWords[3].substring(0, hint3Count) + questionMarks.substring(hint3Count, displayWords[3].length);
        }

}
hint4Button.onclick = function() {
        hint4Count++;
        if (hint4Count <= displayWords[4].length) {
            var hintWord = document.querySelector('label.word4');
            hintWord.textContent = displayWords[4].substring(0, hint4Count) + questionMarks.substring(hint4Count, displayWords[4].length);
        }

}
hint5Button.onclick = function() {
        hint5Count++;
        if (hint5Count <= displayWords[5].length) {
            var hintWord = document.querySelector('label.word5');
            hintWord.textContent = displayWords[5].substring(0, hint5Count) + questionMarks.substring(hint5Count, displayWords[5].length);
        }

}

function getDisplayWords(displayWords) {
        var index1=1; var index2=1; var index3=1; var index4=1; var index5=1;
        while ( (index1 == index2) ||
                (index1 == index3) ||
                (index1 == index4) ||
                (index1 == index5) ||
                (index2 == index3) ||
                (index2 == index4) ||
                (index2 == index5) ||
                (index3 == index4) ||
                (index3 == index5) ||
                (index4 == index5)
                )
        {
            index1 = Math.floor((Math.random() * numWords) + 1);
            index2 = Math.floor((Math.random() * numWords) + 1);
            index3 = Math.floor((Math.random() * numWords) + 1);
            index4 = Math.floor((Math.random() * numWords) + 1);
            index5 = Math.floor((Math.random() * numWords) + 1);
        }
        displayWords[1] = wordList[index1];
        displayWords[2] = wordList[index2];
        displayWords[3] = wordList[index3];
        displayWords[4] = wordList[index4];
        displayWords[5] = wordList[index5];

}
function displayJumble(){
        var len; var index;
        var goodJumble;
        var i; var j;
        for (i = 1; i<=5; i++)
        {
            goodJumble = false;
            while (!goodJumble) {
                var jumbleWord = '';
                var tempWord = displayWords[i];
                len = tempWord.length;
                for (j = len-1; j >= 0; j--) {
                    index = Math.floor(Math.random() * j );
                    jumbleWord = jumbleWord + tempWord.charAt(index);
                    /* Delete char at index in tempWord */
                    var ind = index;
                    var temp = tempWord;
                    tempWord = temp.substring(0, --ind + 1) + temp.substring(++ind + 1);
                }
                if( jumbleWord.substring(0,1) != displayWords[i].substring(0,1) ) {
                    goodJumble = true;
                    jumble[i] = jumbleWord;
                }
            }
        }
        /* Display jumbled words */
        var word1Jumble = document.querySelector('label.jumble1');
        word1Jumble.textContent = jumble[1];
        var word2Jumble = document.querySelector('label.jumble2');
        word2Jumble.textContent = jumble[2];
        var word3Jumble = document.querySelector('label.jumble3');
        word3Jumble.textContent = jumble[3];
        var word4Jumble = document.querySelector('label.jumble4');
        word4Jumble.textContent = jumble[4];
        var word5Jumble = document.querySelector('label.jumble5');
        word5Jumble.textContent = jumble[5];

}
function getWords(wordList)
    {
wordList[1] = "all".toUpperCase();
wordList[2] = "am".toUpperCase();
wordList[3] = "and".toUpperCase();
wordList[4] = "at".toUpperCase();
wordList[5] = "ball".toUpperCase();
wordList[6] = "be".toUpperCase();
wordList[7] = "bed".toUpperCase();
wordList[8] = "big".toUpperCase();
wordList[9] = "book".toUpperCase();
wordList[10] = "box".toUpperCase();
wordList[11] = "boy".toUpperCase();
wordList[12] = "but".toUpperCase();
wordList[13] = "came".toUpperCase();
wordList[14] = "can".toUpperCase();
wordList[15] = "car".toUpperCase();
wordList[16] = "cat".toUpperCase();
wordList[17] = "come".toUpperCase();
wordList[18] = "cow".toUpperCase();
wordList[19] = "dad".toUpperCase();
wordList[20] = "day".toUpperCase();
wordList[21] = "did".toUpperCase();
wordList[22] = "do".toUpperCase();
wordList[23] = "dog".toUpperCase();
wordList[24] = "fat".toUpperCase();
wordList[25] = "for".toUpperCase();
wordList[26] = "fun".toUpperCase();
wordList[27] = "get".toUpperCase();
wordList[28] = "go".toUpperCase();
wordList[29] = "good".toUpperCase();
wordList[30] = "got".toUpperCase();
wordList[31] = "had".toUpperCase();
wordList[32] = "hat".toUpperCase();
wordList[33] = "he".toUpperCase();
wordList[34] = "hen".toUpperCase();
wordList[35] = "here".toUpperCase();
wordList[36] = "him".toUpperCase();
wordList[37] = "his".toUpperCase();
wordList[38] = "home".toUpperCase();
wordList[39] = "hot".toUpperCase();
wordList[40] = "I".toUpperCase();
wordList[41] = "if".toUpperCase();
wordList[42] = "in".toUpperCase();
wordList[43] = "into".toUpperCase();
wordList[44] = "is".toUpperCase();
wordList[45] = "it".toUpperCase();
wordList[46] = "its".toUpperCase();
wordList[47] = "let".toUpperCase();
wordList[48] = "like".toUpperCase();
wordList[49] = "look".toUpperCase();
wordList[50] = "man".toUpperCase();
wordList[51] = "may".toUpperCase();
wordList[52] = "me".toUpperCase();
wordList[53] = "mom".toUpperCase();
wordList[54] = "my".toUpperCase();
wordList[55] = "no".toUpperCase();
wordList[56] = "not".toUpperCase();
wordList[57] = "of".toUpperCase();
wordList[58] = "oh".toUpperCase();
wordList[59] = "old".toUpperCase();
wordList[60] = "on".toUpperCase();
wordList[61] = "one".toUpperCase();
wordList[62] = "out".toUpperCase();
wordList[63] = "pan".toUpperCase();
wordList[64] = "pet".toUpperCase();
wordList[65] = "pig".toUpperCase();
wordList[66] = "play".toUpperCase();
wordList[67] = "ran".toUpperCase();
wordList[68] = "rat".toUpperCase();
wordList[69] = "red".toUpperCase();
wordList[70] = "ride".toUpperCase();
wordList[71] = "run".toUpperCase();
wordList[72] = "sat".toUpperCase();
wordList[73] = "see".toUpperCase();
wordList[74] = "she".toUpperCase();
wordList[75] = "sit".toUpperCase();
wordList[76] = "six".toUpperCase();
wordList[77] = "so".toUpperCase();
wordList[78] = "stop".toUpperCase();
wordList[79] = "sun".toUpperCase();
wordList[80] = "ten".toUpperCase();
wordList[81] = "the".toUpperCase();
wordList[82] = "this".toUpperCase();
wordList[83] = "to".toUpperCase();
wordList[84] = "top".toUpperCase();
wordList[85] = "toy".toUpperCase();
wordList[86] = "two".toUpperCase();
wordList[87] = "up".toUpperCase();
wordList[88] = "us".toUpperCase();
wordList[89] = "was".toUpperCase();
wordList[90] = "we".toUpperCase();
wordList[91] = "will".toUpperCase();
wordList[92] = "yes".toUpperCase();
wordList[93] = "you".toUpperCase();

    }


