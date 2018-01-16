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

function setupButtons()
    {
        resetButtonColors();
        resetButtonTextColor();
    }

function resetButtonColors()
    {
        guess11.style.backgroundColor = 'gray';
        guess12.style.backgroundColor = 'gray';
        guess13.style.backgroundColor = 'gray';
        guess14.style.backgroundColor = 'gray';
        hint11.style.backgroundColor = 'gray';
        hint12.style.backgroundColor = 'gray';
        hint13.style.backgroundColor = 'gray';
        hint14.style.backgroundColor = 'gray';

        guess21.style.backgroundColor = 'white';
        guess22.style.backgroundColor = 'white';
        guess23.style.backgroundColor = 'white';
        guess24.style.backgroundColor = 'white';
        hint21.style.backgroundColor = 'white';
        hint22.style.backgroundColor = 'white';
        hint23.style.backgroundColor = 'white';
        hint24.style.backgroundColor = 'white';

        guess31.style.backgroundColor = 'white';
        guess32.style.backgroundColor = 'white';
        guess33.style.backgroundColor = 'white';
        guess34.style.backgroundColor = 'white';
        hint31.style.backgroundColor = 'white';
        hint32.style.backgroundColor = 'white';
        hint33.style.backgroundColor = 'white';
        hint34.style.backgroundColor = 'white';

        guess41.style.backgroundColor = 'white';
        guess42.style.backgroundColor = 'white';
        guess43.style.backgroundColor = 'white';
        guess44.style.backgroundColor = 'white';
        hint41.style.backgroundColor = 'white';
        hint42.style.backgroundColor = 'white';
        hint43.style.backgroundColor = 'white';
        hint44.style.backgroundColor = 'white';

        guess51.style.backgroundColor = 'white';
        guess52.style.backgroundColor = 'white';
        guess53.style.backgroundColor = 'white';
        guess54.style.backgroundColor = 'white';
        hint51.style.backgroundColor = 'white';
        hint52.style.backgroundColor = 'white';
        hint53.style.backgroundColor = 'white';
        hint54.style.backgroundColor = 'white';

        guess61.style.backgroundColor = 'white';
        guess62.style.backgroundColor = 'white';
        guess63.style.backgroundColor = 'white';
        guess64.style.backgroundColor = 'white';
        hint61.style.backgroundColor = 'white';
        hint62.style.backgroundColor = 'white';
        hint63.style.backgroundColor = 'white';
        hint64.style.backgroundColor = 'white';
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
