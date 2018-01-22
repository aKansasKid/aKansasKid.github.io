var mysteryCode = new Array();
var currentGuess = new Array();
var gameLevel = 1;

var activeRow = 1;
var activeColor = 'E';
var gameOver = false;


var check = document.querySelector('button.check');
var newGame= document.querySelector('button.newGame');

var selectRed = document.querySelector('button.selectRed');
var selectBlue = document.querySelector('button.selectBlue');
var selectYellow = document.querySelector('button.selectYellow');
var selectGreen = document.querySelector('button.selectGreen');
var selectPurple = document.querySelector('button.selectPurple');
var selectOrange = document.querySelector('button.selectOrange');
var selectBlank = document.querySelector('button.selectBlank');

var break1 = document.querySelector('button.break1');
var break2 = document.querySelector('button.break2');
var break3 = document.querySelector('button.break3');
var break4 = document.querySelector('button.break4');
var break5 = document.querySelector('button.break5');
var break6 = document.querySelector('button.break6');

var guess11 = document.querySelector('button.guess11');
var guess12 = document.querySelector('button.guess12');
var guess13 = document.querySelector('button.guess13');
var guess14 = document.querySelector('button.guess14');
var hint11 = document.querySelector('button.hint11');
var hint12 = document.querySelector('button.hint12');
var hint13 = document.querySelector('button.hint13');
var hint14 = document.querySelector('button.hint14');

var guess21 = document.querySelector('button.guess21');
var guess22 = document.querySelector('button.guess22');
var guess23 = document.querySelector('button.guess23');
var guess24 = document.querySelector('button.guess24');
var hint21 = document.querySelector('button.hint21');
var hint22 = document.querySelector('button.hint22');
var hint23 = document.querySelector('button.hint23');
var hint24 = document.querySelector('button.hint24');

var guess31 = document.querySelector('button.guess31');
var guess32 = document.querySelector('button.guess32');
var guess33 = document.querySelector('button.guess33');
var guess34 = document.querySelector('button.guess34');
var hint31 = document.querySelector('button.hint31');
var hint32 = document.querySelector('button.hint32');
var hint33 = document.querySelector('button.hint33');
var hint34 = document.querySelector('button.hint34');

var guess41 = document.querySelector('button.guess41');
var guess42 = document.querySelector('button.guess42');
var guess43 = document.querySelector('button.guess43');
var guess44 = document.querySelector('button.guess44');
var hint41 = document.querySelector('button.hint41');
var hint42 = document.querySelector('button.hint42');
var hint43 = document.querySelector('button.hint43');
var hint44 = document.querySelector('button.hint44');

var guess51 = document.querySelector('button.guess51');
var guess52 = document.querySelector('button.guess52');
var guess53 = document.querySelector('button.guess53');
var guess54 = document.querySelector('button.guess54');
var hint51 = document.querySelector('button.hint51');
var hint52 = document.querySelector('button.hint52');
var hint53 = document.querySelector('button.hint53');
var hint54 = document.querySelector('button.hint54');

var guess61 = document.querySelector('button.guess61');
var guess62 = document.querySelector('button.guess62');
var guess63 = document.querySelector('button.guess63');
var guess64 = document.querySelector('button.guess64');
var hint61 = document.querySelector('button.hint61');
var hint62 = document.querySelector('button.hint62');
var hint63 = document.querySelector('button.hint63');
var hint64 = document.querySelector('button.hint64');

setupNewGame();

function setupNewGame()
    {
        activeRow = 1;
        activeColor = 'E';
        gameOver = false;

        var index; var i;
        for (i = 1; i <=4; i++)
        {
            currentGuess[i] = 'E';
           index = Math.floor(Math.random() * 7 + 1);
            switch (index)
            {
                case 1: mysteryCode[i] = 'R';
                    break;
                case 2: mysteryCode[i] = 'B';
                    break;
                case 3: mysteryCode[i] = 'Y';
                    break;
                case 4: mysteryCode[i] = 'G';
                    break;
                case 5: mysteryCode[i] = 'P';
                    break;
                case 6: mysteryCode[i] = 'O';
                    break;
                case 7: mysteryCode[i] = 'E'; //E is gray
                    break;
                default: break;
            }
        }
        setupButtons();
    }

newGame.onclick = function()
    {setupNewGame()}

function setupButtons()
    {
        resetButtonColors();
        resetButtonTextColor();
    }

function resetButtonColors()
    {
        break1.style.backgroundColor = 'yellow';
        break2.style.backgroundColor = 'white';
        break3style.backgroundColor = 'white';
        break4style.backgroundColor = 'white';
        break5style.backgroundColor = 'white';
        break6style.backgroundColor = 'white';

        //**** Reset button backgrounds *************/
        //*******************************************/
        guess11.style.backgroundColor = 'gray';
        guess12.style.backgroundColor = 'gray';
        guess13.style.backgroundColor = 'gray';
        guess14.style.backgroundColor = 'gray';
        hint11.style.backgroundColor = 'gray';
        hint12.style.backgroundColor = 'gray';
        hint13.style.backgroundColor = 'gray';
        hint14.style.backgroundColor = 'gray';

        guess21.style.backgroundColor = 'gray';
        guess22.style.backgroundColor = 'gray';
        guess23.style.backgroundColor = 'gray';
        guess24.style.backgroundColor = 'gray';
        hint21.style.backgroundColor = 'gray';
        hint22.style.backgroundColor = 'gray';
        hint23.style.backgroundColor = 'gray';
        hint24.style.backgroundColor = 'gray';

        guess31.style.backgroundColor = 'gray';
        guess32.style.backgroundColor = 'gray';
        guess33.style.backgroundColor = 'gray';
        guess34.style.backgroundColor = 'gray';
        hint31.style.backgroundColor = 'gray';
        hint32.style.backgroundColor = 'gray';
        hint33.style.backgroundColor = 'gray';
        hint34.style.backgroundColor = 'gray';

        guess41.style.backgroundColor = 'gray';
        guess42.style.backgroundColor = 'gray';
        guess43.style.backgroundColor = 'gray';
        guess44.style.backgroundColor = 'gray';
        hint41.style.backgroundColor = 'gray';
        hint42.style.backgroundColor = 'gray';
        hint43.style.backgroundColor = 'gray';
        hint44.style.backgroundColor = 'gray';

        guess51.style.backgroundColor = 'gray';
        guess52.style.backgroundColor = 'gray';
        guess53.style.backgroundColor = 'gray';
        guess54.style.backgroundColor = 'gray';
        hint51.style.backgroundColor = 'gray';
        hint52.style.backgroundColor = 'gray';
        hint53.style.backgroundColor = 'gray';
        hint54.style.backgroundColor = 'gray';

        guess61.style.backgroundColor = 'gray';
        guess62.style.backgroundColor = 'gray';
        guess63.style.backgroundColor = 'gray';
        guess64.style.backgroundColor = 'gray';
        hint61.style.backgroundColor = 'gray';
        hint62.style.backgroundColor = 'gray';
        hint63.style.backgroundColor = 'gray';
        hint64.style.backgroundColor = 'gray';

        //**** Reset button text ********************/
        //*******************************************/
        guess11.style.color = 'black';
        guess12.style.color = 'black';
        guess13.style.color = 'black';
        guess14.style.color = 'black';
        hint11.style.color = 'black';
        hint12.style.color = 'black';
        hint13.style.color = 'black';
        hint14.style.color = 'black';

        guess21.style.color = 'black';
        guess22.style.color = 'black';
        guess23.style.color = 'black';
        guess24.style.color = 'black';
        hint21.style.color = 'black';
        hint22.style.color = 'black';
        hint23.style.color = 'black';
        hint24.style.color = 'black';

        guess31.style.color = 'black';
        guess32.style.color = 'black';
        guess33.style.color = 'black';
        guess34.style.color = 'black';
        hint31.style.color = 'black';
        hint32.style.color = 'black';
        hint33.style.color = 'black';
        hint34.style.color = 'black';

        guess41.style.color = 'black';
        guess42.style.color = 'black';
        guess43.style.color = 'black';
        guess44.style.color = 'black';
        hint41.style.color = 'black';
        hint42.style.color = 'black';
        hint43.style.color = 'black';
        hint44.style.color = 'black';

        guess51.style.color = 'black';
        guess52.style.color = 'black';
        guess53.style.color = 'black';
        guess54.style.color = 'black';
        hint51.style.color = 'black';
        hint52.style.color = 'black';
        hint53.style.color = 'black';
        hint54.style.color = 'black';

        guess61.style.color = 'black';
        guess62.style.color = 'black';
        guess63.style.color = 'black';
        guess64.style.color = 'black';
        hint61.style.color = 'black';
        hint62.style.color = 'black';
        hint63.style.color = 'black';
        hint64.style.color = 'black';
    }

function resetButtonTextColor()
    {
        selectRed.style.color = 'black';
        selectBlue.style.color = 'black';
        selectYellow.style.color = 'black';
        selectGreen.style.color = 'black';
        selectPurple.style.color = 'black';
        selectOrange.style.color = 'black';
        selectBlank.style.color = 'black';
    }
//*******************************************************
//*******************************************************
//    Set Color Choice
//*******************************************************
//*******************************************************
selectRed.onclick = function()
    {
        resetButtonTextColor();
        selectRed.style.color = 'white';
        activeColor = 'R';
    }
selectBlue.onclick = function()
    {
        resetButtonTextColor();
        selectBlue.style.color = 'white';
        activeColor = 'B';
    }
selectYellow.onclick = function()
    {
        resetButtonTextColor();
        selectYellow.style.color = 'white';
        activeColor = 'Y';
    }
selectGreen.onclick = function()
    {
        resetButtonTextColor();
        selectGreen.style.color = 'white';
        activeColor = 'G';
    }
selectPurple.onclick = function()
    {
        resetButtonTextColor();
        selectPurple.style.color = 'white';
        activeColor = 'P';
    }
selectOrange.onclick = function()
    {
        resetButtonTextColor();
        selectOrange.style.color = 'white';
        activeColor = 'O';
    }
selectBlank.onclick = function()
    {
        resetButtonTextColor();
        selectBlank.style.color = 'white';
        activeColor = 'E';
    }


//*******************************************************
//*******************************************************
//    Clicks on Guess Buttons
//*******************************************************
//*******************************************************
guess11.onclick = function()
    {
        if (activeRow == 1)
            {
                switch (activeColor)
                    {
                        case 'R' : guess11.style.color = 'red'; guess11.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess11.style.color = 'blue'; guess11.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess11.style.color = 'green'; guess11.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess11.style.color = 'yellow'; guess11.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess11.style.color = 'purple'; guess11.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess11.style.color = 'orange'; guess11.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess11.style.color = 'gray'; guess11.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess12.onclick = function()
    {
        if (activeRow == 1)
            {
                switch (activeColor)
                    {
                        case 'R' : guess12.style.color = 'red'; guess12.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess12.style.color = 'blue'; guess12.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess12.style.color = 'green'; guess12.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess12.style.color = 'yellow'; guess12.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess12.style.color = 'purple'; guess12.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess12.style.color = 'orange'; guess12.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess12.style.color = 'gray'; guess12.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess13.onclick = function()
    {
        if (activeRow == 1)
            {
                switch (activeColor)
                    {
                        case 'R' : guess13.style.color = 'red'; guess13.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess13.style.color = 'blue'; guess13.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess13.style.color = 'green'; guess13.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess13.style.color = 'yellow'; guess13.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess13.style.color = 'purple'; guess13.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess13.style.color = 'orange'; guess13.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess13.style.color = 'gray'; guess13.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess14.onclick = function()
    {
        if (activeRow == 1)
            {
                switch (activeColor)
                    {
                        case 'R' : guess14.style.color = 'red'; guess14.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess14.style.color = 'blue'; guess14.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess14.style.color = 'green'; guess14.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess14.style.color = 'yellow'; guess14.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess14.style.color = 'purple'; guess14.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess14.style.color = 'orange'; guess14.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess14.style.color = 'gray'; guess14.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
guess21.onclick = function()
    {
        if (activeRow == 2)
            {
                switch (activeColor)
                    {
                        case 'R' : guess21.style.color = 'red'; guess21.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess21.style.color = 'blue'; guess21.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess21.style.color = 'green'; guess21.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess21.style.color = 'yellow'; guess21.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess21.style.color = 'purple'; guess21.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess21.style.color = 'orange'; guess21.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess21.style.color = 'gray'; guess21.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess22.onclick = function()
    {
        if (activeRow == 2)
            {
                switch (activeColor)
                    {
                        case 'R' : guess22.style.color = 'red'; guess22.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess22.style.color = 'blue'; guess22.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess22.style.color = 'green'; guess22.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess22.style.color = 'yellow'; guess22.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess22.style.color = 'purple'; guess22.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess22.style.color = 'orange'; guess22.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess22.style.color = 'gray'; guess12.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess23.onclick = function()
    {
        if (activeRow == 2)
            {
                switch (activeColor)
                    {
                        case 'R' : guess23.style.color = 'red'; guess23.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess23.style.color = 'blue'; guess23.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess23.style.color = 'green'; guess23.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess23.style.color = 'yellow'; guess23.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess23.style.color = 'purple'; guess23.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess23.style.color = 'orange'; guess23.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess23.style.color = 'gray'; guess23.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess24.onclick = function()
    {
        if (activeRow == 2)
            {
                switch (activeColor)
                    {
                        case 'R' : guess24.style.color = 'red'; guess24.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess24.style.color = 'blue'; guess24.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess24.style.color = 'green'; guess24.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess24.style.color = 'yellow'; guess24.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess24.style.color = 'purple'; guess24.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess24.style.color = 'orange'; guess24.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess24.style.color = 'gray'; guess24.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
guess31.onclick = function()
    {
        if (activeRow == 3)
            {
                switch (activeColor)
                    {
                        case 'R' : guess31.style.color = 'red'; guess31.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess31.style.color = 'blue'; guess31.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess31.style.color = 'green'; guess31.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess31.style.color = 'yellow'; guess31.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess31.style.color = 'purple'; guess31.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess31.style.color = 'orange'; guess31.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess31.style.color = 'gray'; guess31.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess32.onclick = function()
    {
        if (activeRow == 3)
            {
                switch (activeColor)
                    {
                        case 'R' : guess32.style.color = 'red'; guess32.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess32.style.color = 'blue'; guess32.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess32.style.color = 'green'; guess32.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess32.style.color = 'yellow'; guess32.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess32.style.color = 'purple'; guess32.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess32.style.color = 'orange'; guess32.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess32.style.color = 'gray'; guess32.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess33.onclick = function()
    {
        if (activeRow == 3)
            {
                switch (activeColor)
                    {
                        case 'R' : guess33.style.color = 'red'; guess33.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess33.style.color = 'blue'; guess33.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess33.style.color = 'green'; guess33.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess33.style.color = 'yellow'; guess33.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess33.style.color = 'purple'; guess33.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess33.style.color = 'orange'; guess33.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess33.style.color = 'gray'; guess33.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess34.onclick = function()
    {
        if (activeRow == 3)
            {
                switch (activeColor)
                    {
                        case 'R' : guess34.style.color = 'red'; guess34.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess34.style.color = 'blue'; guess34.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess34.style.color = 'green'; guess34.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess34.style.color = 'yellow'; guess34.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess34.style.color = 'purple'; guess34.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess34.style.color = 'orange'; guess34.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess34.style.color = 'gray'; guess34.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
guess41.onclick = function()
    {
        if (activeRow == 4)
            {
                switch (activeColor)
                    {
                        case 'R' : guess41.style.color = 'red'; guess41.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess41.style.color = 'blue'; guess41.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess41.style.color = 'green'; guess41.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess41.style.color = 'yellow'; guess41.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess41.style.color = 'purple'; guess41.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess41.style.color = 'orange'; guess41.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess41.style.color = 'gray'; guess41.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess42.onclick = function()
    {
        if (activeRow == 4)
            {
                switch (activeColor)
                    {
                        case 'R' : guess42.style.color = 'red'; guess42.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess42.style.color = 'blue'; guess42.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess42.style.color = 'green'; guess42.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess42.style.color = 'yellow'; guess42.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess42.style.color = 'purple'; guess42.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess42.style.color = 'orange'; guess42.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess42.style.color = 'gray'; guess42.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess43.onclick = function()
    {
        if (activeRow == 4)
            {
                switch (activeColor)
                    {
                        case 'R' : guess43.style.color = 'red'; guess43.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess43.style.color = 'blue'; guess43.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess43.style.color = 'green'; guess43.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess43.style.color = 'yellow'; guess43.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess43.style.color = 'purple'; guess43.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess43.style.color = 'orange'; guess43.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess43.style.color = 'gray'; guess43.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess44.onclick = function()
    {
        if (activeRow == 4)
            {
                switch (activeColor)
                    {
                        case 'R' : guess44.style.color = 'red'; guess44.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess44.style.color = 'blue'; guess44.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess44.style.color = 'green'; guess44.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess44.style.color = 'yellow'; guess44.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess44.style.color = 'purple'; guess44.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess44.style.color = 'orange'; guess44.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess44.style.color = 'gray'; guess44.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
guess51.onclick = function()
    {
        if (activeRow == 5)
            {
                switch (activeColor)
                    {
                        case 'R' : guess51.style.color = 'red'; guess51.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess51.style.color = 'blue'; guess51.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess51.style.color = 'green'; guess51.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess51.style.color = 'yellow'; guess51.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess51.style.color = 'purple'; guess51.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess51.style.color = 'orange'; guess51.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess51.style.color = 'gray'; guess51.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess52.onclick = function()
    {
        if (activeRow == 5)
            {
                switch (activeColor)
                    {
                        case 'R' : guess52.style.color = 'red'; guess52.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess52.style.color = 'blue'; guess52.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess52.style.color = 'green'; guess52.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess52.style.color = 'yellow'; guess52.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess52.style.color = 'purple'; guess52.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess52.style.color = 'orange'; guess52.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess52.style.color = 'gray'; guess52.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess53.onclick = function()
    {
        if (activeRow == 5)
            {
                switch (activeColor)
                    {
                        case 'R' : guess53.style.color = 'red'; guess53.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess53.style.color = 'blue'; guess53.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess53.style.color = 'green'; guess53.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess53.style.color = 'yellow'; guess53.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess53.style.color = 'purple'; guess53.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess53.style.color = 'orange'; guess53.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess53.style.color = 'gray'; guess53.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess54.onclick = function()
    {
        if (activeRow == 5)
            {
                switch (activeColor)
                    {
                        case 'R' : guess54.style.color = 'red'; guess54.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess54.style.color = 'blue'; guess54.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess54.style.color = 'green'; guess54.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess54.style.color = 'yellow'; guess54.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess54.style.color = 'purple'; guess54.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess54.style.color = 'orange'; guess54.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess54.style.color = 'gray'; guess54.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
guess61.onclick = function()
    {
        if (activeRow == 6)
            {
                switch (activeColor)
                    {
                        case 'R' : guess61.style.color = 'red'; guess61.style.backgroundColor = 'red'; 
                            currentGuess[1] = 'R'; break;
                        case 'B' : guess61.style.color = 'blue'; guess61.style.backgroundColor = 'blue'; 
                            currentGuess[1] = 'B'; break;
                        case 'G' : guess61.style.color = 'green'; guess61.style.backgroundColor = 'green'; 
                            currentGuess[1] = 'G'; break;
                        case 'Y' : guess61.style.color = 'yellow'; guess61.style.backgroundColor = 'yellow'; 
                            currentGuess[1] = 'Y'; break;
                        case 'P' : guess61.style.color = 'purple'; guess61.style.backgroundColor = 'purple'; 
                            currentGuess[1] = 'P'; break;
                        case 'O' : guess61.style.color = 'orange'; guess61.style.backgroundColor = 'orange'; 
                            currentGuess[1] = 'O'; break;
                        case 'E' : guess61.style.color = 'gray'; guess61.style.backgroundColor = 'gray'; 
                            currentGuess[1] = 'E'; break;
                    }
            }
    }
guess62.onclick = function()
    {
        if (activeRow == 6)
            {
                switch (activeColor)
                    {
                        case 'R' : guess62.style.color = 'red'; guess62.style.backgroundColor = 'red'; 
                            currentGuess[2] = 'R'; break;
                        case 'B' : guess62.style.color = 'blue'; guess62.style.backgroundColor = 'blue'; 
                            currentGuess[2] = 'B'; break;
                        case 'G' : guess62.style.color = 'green'; guess62.style.backgroundColor = 'green'; 
                            currentGuess[2] = 'G'; break;
                        case 'Y' : guess62.style.color = 'yellow'; guess62.style.backgroundColor = 'yellow'; 
                            currentGuess[2] = 'Y'; break;
                        case 'P' : guess62.style.color = 'purple'; guess62.style.backgroundColor = 'purple'; 
                            currentGuess[2] = 'P'; break;
                        case 'O' : guess62.style.color = 'orange'; guess62.style.backgroundColor = 'orange'; 
                            currentGuess[2] = 'O'; break;
                        case 'E' : guess62.style.color = 'gray'; guess62.style.backgroundColor = 'gray'; 
                            currentGuess[2] = 'E'; break;
                    }
            }
    }
guess63.onclick = function()
    {
        if (activeRow == 6)
            {
                switch (activeColor)
                    {
                        case 'R' : guess63.style.color = 'red'; guess63.style.backgroundColor = 'red'; 
                            currentGuess[3] = 'R'; break;
                        case 'B' : guess63.style.color = 'blue'; guess63.style.backgroundColor = 'blue'; 
                            currentGuess[3] = 'B'; break;
                        case 'G' : guess63.style.color = 'green'; guess63.style.backgroundColor = 'green'; 
                            currentGuess[3] = 'G'; break;
                        case 'Y' : guess63.style.color = 'yellow'; guess63.style.backgroundColor = 'yellow'; 
                            currentGuess[3] = 'Y'; break;
                        case 'P' : guess63.style.color = 'purple'; guess63.style.backgroundColor = 'purple'; 
                            currentGuess[3] = 'P'; break;
                        case 'O' : guess63.style.color = 'orange'; guess63.style.backgroundColor = 'orange'; 
                            currentGuess[3] = 'O'; break;
                        case 'E' : guess63.style.color = 'gray'; guess63.style.backgroundColor = 'gray'; 
                            currentGuess[3] = 'E'; break;
                    }
            }
    }
guess64.onclick = function()
    {
        if (activeRow == 6)
            {
                switch (activeColor)
                    {
                        case 'R' : guess64.style.color = 'red'; guess64.style.backgroundColor = 'red'; 
                            currentGuess[4] = 'R'; break;
                        case 'B' : guess64.style.color = 'blue'; guess64.style.backgroundColor = 'blue'; 
                            currentGuess[4] = 'B'; break;
                        case 'G' : guess64.style.color = 'green'; guess64.style.backgroundColor = 'green'; 
                            currentGuess[4] = 'G'; break;
                        case 'Y' : guess64.style.color = 'yellow'; guess64.style.backgroundColor = 'yellow'; 
                            currentGuess[4] = 'Y'; break;
                        case 'P' : guess64.style.color = 'purple'; guess64.style.backgroundColor = 'purple'; 
                            currentGuess[4] = 'P'; break;
                        case 'O' : guess64.style.color = 'orange'; guess64.style.backgroundColor = 'orange'; 
                            currentGuess[4] = 'O'; break;
                        case 'E' : guess64.style.color = 'gray'; guess64.style.backgroundColor = 'gray'; 
                            currentGuess[4] = 'E'; break;
                    }
            }
    }
//*******************************************************
//*******************************************************
//    Check Current Row
//*******************************************************
//*******************************************************
check.onclick = function()
    {
        switch (activeRow)
            {
                case 1: checkRow1(); break;
                case 2: checkRow2(); break;
                case 3: checkRow3(); break;
                case 4: checkRow4(); break;
                case 5: checkRow5(); break;
                case 6: checkRow6(); break;
            }
    }
function checkRow1 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint11.style.color = 'black'; hint11.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint11.style.color = 'white'; hint11.style.backgroundColor = 'white'; hint11.style.border = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint12.style.color = 'black'; hint12.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint12.style.color = 'white'; hint12.style.backgroundColor = 'white'; hint12.style.border = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint13.style.color = 'black'; hint13.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint13.style.color = 'white'; hint13.style.backgroundColor = 'white'; hint13.style.border = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint14.style.color = 'black'; hint14.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint14.style.color = 'white'; hint14.style.backgroundColor = 'white'; hint14.style.border = 'white';
        }

        break1.style.backgroundColor = 'white';
        break2.style.backgroundColor = 'yellow';

        activeRow = 2;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
function checkRow2 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint21.style.color = 'black'; hint21.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint21.style.color = 'white'; hint21.style.backgroundColor = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint22.style.color = 'black'; hint22.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint22.style.color = 'white'; hint22.style.backgroundColor = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint23.style.color = 'black'; hint23.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint23.style.color = 'white'; hint23.style.backgroundColor = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint24.style.color = 'black'; hint24.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint24.style.color = 'white'; hint24.style.backgroundColor = 'white';
        }

        break2.style.backgroundColor = 'white';
        break3.style.backgroundColor = 'yellow';

        activeRow = 3;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
function checkRow3 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint31.style.color = 'black'; hint31.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint31.style.color = 'white'; hint31.style.backgroundColor = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint32.style.color = 'black'; hint32.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint32.style.color = 'white'; hint32.style.backgroundColor = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint33.style.color = 'black'; hint33.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint33.style.color = 'white'; hint33.style.backgroundColor = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint34.style.color = 'black'; hint34.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint34.style.color = 'white'; hint34.style.backgroundColor = 'white';
        }
        
        break3.style.backgroundColor = 'white';
        break4.style.backgroundColor = 'yellow';

        activeRow = 4;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
function checkRow4 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint41.style.color = 'black'; hint41.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint41.style.color = 'white'; hint41.style.backgroundColor = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint42.style.color = 'black'; hint42.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint42.style.color = 'white'; hint42.style.backgroundColor = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint43.style.color = 'black'; hint43.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint43.style.color = 'white'; hint43.style.backgroundColor = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint44.style.color = 'black'; hint44.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint44.style.color = 'white'; hint44.style.backgroundColor = 'white';
        }

        break4.style.backgroundColor = 'white';
        break5.style.backgroundColor = 'yellow';

        activeRow = 5;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
function checkRow5 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint51.style.color = 'black'; hint51.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint51.style.color = 'white'; hint51.style.backgroundColor = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint52.style.color = 'black'; hint52.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint52.style.color = 'white'; hint52.style.backgroundColor = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint53.style.color = 'black'; hint53.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint53.style.color = 'white'; hint53.style.backgroundColor = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint54.style.color = 'black'; hint54.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint54.style.color = 'white'; hint54.style.backgroundColor = 'white';
        }

        break5.style.backgroundColor = 'white';
        break6.style.backgroundColor = 'yellow';

        activeRow = 6;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
function checkRow6 ()
    {
        if (currentGuess[1] == mysteryCode[1])
        {
            hint61.style.color = 'black'; hint61.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[1] == mysteryCode[2]) || (currentGuess[1] == mysteryCode[3]) || (currentGuess[1] == mysteryCode[4]))
        {
            hint61.style.color = 'white'; hint61.style.backgroundColor = 'white';
        }
        if (currentGuess[2] == mysteryCode[2])
        {
            hint62.style.color = 'black'; hint62.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[2] == mysteryCode[1]) || (currentGuess[2] == mysteryCode[3]) || (currentGuess[2] == mysteryCode[4]))
        {
            hint62.style.color = 'white'; hint62.style.backgroundColor = 'white';
        }
        if (currentGuess[3] == mysteryCode[3])
        {
            hint63.style.color = 'black'; hint63.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[3] == mysteryCode[1]) || (currentGuess[3] == mysteryCode[2]) || (currentGuess[3] == mysteryCode[4]))
        {
            hint63.style.color = 'white'; hint63.style.backgroundColor = 'white';
        }
        if (currentGuess[4] == mysteryCode[4])
        {
            hint64.style.color = 'black'; hint64.style.backgroundColor = 'black';
        }
        else if ( (currentGuess[4] == mysteryCode[1]) || (currentGuess[4] == mysteryCode[2]) || (currentGuess[4] == mysteryCode[3]))
        {
            hint64.style.color = 'white'; hint64.style.backgroundColor = 'white';
        }

        break6.style.backgroundColor = 'white';

        activeRow = 0;
        if ( (currentGuess[1] == mysteryCode[1]) && (currentGuess[2] == mysteryCode[2]) && (currentGuess[3] == mysteryCode[3]) &&(currentGuess[4] == mysteryCode[4]))
        {
            gameOver = true;
            activeRow = 0;
        }
        else
        {
            currentGuess[1] = 'E';
            currentGuess[2] = 'E';
            currentGuess[3] = 'E';
            currentGuess[4] = 'E';
        }
    }
