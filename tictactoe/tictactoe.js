var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

var xClicked;
var yClicked;
var event = document.getElementById("gameCanvas");
event.addEventListener("click", getClickedCoordinates, false);


var newGameButton = document.querySelector('button.NewGame');
var setLevelButton = document.querySelector('button.setLevel');

var maxX = c.width;
var maxY = c.height;
var maxX3 = maxX/3;
var maxX23 = 2*maxX/3;
var maxY3 = maxY/3;
var maxY23 = 2*maxY/3;
var offset = 0.375 * maxX3;

//Define centers of the 9 grid squares
   var centers = new Array(10);
      for(i=0; i<10; i++) {
         centers[i] = new Array(4);
      }
        //Squares are numbered:
        // 1  2  3
        // 4  5  6
        // 7  8  9
        centers[1][1] = maxX / 6;       centers[1][2] = maxY / 6;
        centers[2][1] = maxX / 2;       centers[2][2] = maxY / 6;
        centers[3][1] = (5 * maxX) / 6; centers[3][2] = maxY / 6;
        centers[4][1] = maxX / 6;       centers[4][2] = maxY / 2;
        centers[5][1] = maxX / 2;       centers[5][2] = maxY / 2;
        centers[6][1] = (5 * maxX) / 6; centers[6][2] = maxY / 2;
        centers[7][1] = maxX / 6;       centers[7][2] = (5 * maxY) / 6;
        centers[8][1] = maxX / 2;       centers[8][2] = (5 * maxY) / 6;
        centers[9][1] = (5 * maxX) / 6; centers[9][2] = (5 * maxY) / 6;

//Initialize board array to hold "x" or "o" for each square
   var board = new Array(10);

var gameLevel = 1;
var humanTurn;
var humanMove;
var cpuMove ;
var turn;
var gameOver;
var move;
//??    String text;

startNewGame();

function startNewGame() {

   //Set board back to blanks
   for(i=0; i<10; i++) { board[i] = ' ';}

   humanTurn = true;
   humanMove = 0;
   cpuMove = 0;
   turn = 1;
   gameOver = false;
   move = 0;

   //erase board graphics
    ctx.clearRect(0, 0, c.width, c.height);   

   //draw blank grid
   drawGrid()
}

function drawGrid() {

   ctx.beginPath();
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 5;

   ctx.moveTo(c.width/3,0); ctx.lineTo(c.width/3, c.height);
   ctx.moveTo( (2*c.width)/3,0); ctx.lineTo( (2*c.width)/3, c.height);
   ctx.moveTo(0, c.height/3); ctx.lineTo(c.width, c.height/3);
   ctx.moveTo(0, (2*c.height)/3); ctx.lineTo(c.width, (2*c.height)/3);
   ctx.stroke();
}

function drawX( x, y ) {

   ctx.beginPath();
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 10;

   ctx.moveTo( x - offset, y - offset ); ctx.lineTo (x + offset, y + offset );
   ctx.moveTo( x - offset, y + offset ); ctx.lineTo( x + offset, y - offset );
   ctx.stroke();
}

function drawO( x, y) {

   ctx.beginPath();
   ctx.strokeStyle = 'blue';
   ctx.lineWidth = 10;
   ctx.arc( x, y, offset, 0, Math.PI * 2, true);
   ctx.stroke();
}

function getClickedCoordinates ( event ) {
        var xTouch = event.clientX;
        var yTouch = event.clientY;

        gameOver = checkGameOver();

        if ((!gameOver ) && (turn <= 9) && humanTurn)
        {
            humanTurn = false;
            goodMove = false;

                if ((xTouch < maxX3+10) && (yTouch < maxY3+10)) {
                    humanMove = 1;
                } else if ((xTouch > maxX3+10) && (xTouch < maxX23+10) && (yTouch < maxY3+10)) {
                    humanMove = 2;
                } else if ((xTouch > maxX23+10) && (yTouch < maxY3+10)) {
                    humanMove = 3;
                } else if ((xTouch < maxX3+10) && (yTouch > maxY3+10) && (yTouch < maxY23+10)) {
                    humanMove = 4;
                } else if ((xTouch > maxX3+10) && (xTouch < maxX23+10) && (yTouch > maxY3+10) && (yTouch < maxY23+10)) {
                    humanMove = 5;
                } else if ((xTouch > maxX23+10) && (yTouch > maxY3+10) && (yTouch < maxY23+10)) {
                    humanMove = 6;
                } else if ((xTouch < maxX3+10) && (yTouch > maxY23+10) && (yTouch < maxY+10)) {
                    humanMove = 7;
                } else if ((xTouch > maxX3+10) && (xTouch < maxX23+10) && (yTouch > maxY23+10) && (yTouch < maxY+10)) {
                    humanMove = 8;
                } else if ((xTouch > maxX23+10) && (yTouch > maxY23+10) && (yTouch < maxY+10)) {
                    humanMove = 9;
                } else {
                    humanMove = 0;
                }
                if (humanMove > 0)
                {
                    if ((board[humanMove] != 'x') && (board[humanMove] != 'o'))
                    {
                        goodMove = true;
                        move = humanMove;
                        humanTurn = !humanTurn;
                    }
                }
            if (goodMove)
            {
                if (turn==1 || turn==3 || turn==5 || turn==7 || turn==9) {
                    drawX(centers[move][1], centers[move][2]);
                    board[move] = 'x';
                } 
/***************else {
                    drawO(centers[move][1], centers[move][2]);
                    board[move] = 'o';
                }
****************/
                turn = turn + 1;
console.log('turn: ', turn, 'humanMove: ', humanMove);
                gameOver = checkGameOver();
console.log('gameOver = ', gameOver);
                if (gameOver) {
                    drawGameOver(centers, board);
                }
                cpuMove = 0;
                if ( (!gameOver) && (turn <= 9) ) {
                    if (turn == 2) {
                        if (gameLevel == 2){
                            if (board[5] == ' ') cpuMove = 5;
                            else if (board[5] == 'x') {
                                //pick a random corner
                                corner = 1 + Math.floor(4 * Math.random());
                                switch (corner) {
                                    case 1:
                                        cpuMove = 1;
                                        break;
                                    case 2:
                                        cpuMove = 3;
                                        break;
                                    case 3:
                                        cpuMove = 7;
                                        break;
                                    case 4:
                                        cpuMove = 9;
                                        break;
                                }
                            }
                        }
                       else //random move
                        {
                            goodMove = false;
                            cpuMove = 1 + Math.floor(9 * Math.random());
console.log('Level 1 - cpuMove: ', cpuMove);
                            while (!goodMove) {
console.log('Checking move.', 'Board:', board[cpuMove]);
                                if ((board[cpuMove] != 'x') && (board[cpuMove] != 'o')) {
                                    move = cpuMove;
                                    goodMove = true;
                                } 
                                else {
                                       cpuMove = 1 + Math.floor(9 * Math.random());
console.log('Level 1 - next cpuMove to try: ', cpuMove);
                                }
                            }
                        }
                    }
                    else {
                        //if 2 'o' in a row, win

                        //Row checks
                        if ((  ( (board[1] == 'o') && (board[2] == 'o') ) )
                                && (board[3] == ' ')) {cpuMove = 3;}
                        else if ((((board[1] == 'o') && (board[3] == 'o')))
                                && (board[2] == ' ')) {cpuMove = 2;}
                        else if ((((board[2] == 'o') && (board[3] == 'o')))
                                && (board[1] == ' ')) {cpuMove = 1;}

                        else if ((((board[4] == 'o') && (board[5] == 'o')))
                                && (board[6] == ' ')) {cpuMove = 6;}
                        else if ((((board[4] == 'o') && (board[6] == 'o')))
                                && (board[5] == ' ')) {cpuMove = 5;}
                        else if ((((board[5] == 'o') && (board[6] == 'o')))
                                && (board[4] == ' ')) {cpuMove = 4;}

                        else if ((((board[7] == 'o') && (board[8] == 'o')))
                                && (board[9] == ' ')) {cpuMove = 9;}
                        else if ((((board[7] == 'o') && (board[9] == 'o')))
                                && (board[8] == ' ')) {cpuMove = 8;}
                        else if ((((board[8] == 'o') && (board[9] == 'o')))
                                && (board[7] == ' ')) {cpuMove = 7;}

                            //Column checks
                        else if ((((board[1] == 'o') && (board[4] == 'o')))
                                && (board[7] == ' ')) {cpuMove = 7;}
                        else if ((((board[1] == 'o') && (board[7] == 'o')))
                                && (board[4] == ' ')) {cpuMove = 4;}
                        else if ((((board[4] == 'o') && (board[7] == 'o')))
                                && (board[1] == ' ')) {cpuMove = 1;}

                        else if ((((board[2] == 'o') && (board[5] == 'o')))
                                && (board[8] == ' ')) {cpuMove = 8;}
                        else if ((((board[2] == 'o') && (board[8] == 'o')))
                                && (board[5] == ' ')) {cpuMove = 5;}
                        else if ((((board[5] == 'o') && (board[8] == 'o')))
                                && (board[2] == ' ')) {cpuMove = 2;}

                        else if ((((board[3] == 'o') && (board[6] == 'o')))
                                && (board[9] == ' ')) {cpuMove = 9;}
                        else if ((((board[3] == 'o') && (board[9] == 'o')))
                                && (board[6] == ' ')) {cpuMove = 6;}
                        else if ((((board[6] == 'o') && (board[9] == 'o')))
                                && (board[3] == ' ')) {cpuMove = 3;}

                            //Diagonal checks
                        else if ((((board[1] == 'o') && (board[5] == 'o')))
                                && (board[9] == ' ')) {cpuMove = 9;}
                        else if ((((board[1] == 'o') && (board[9] == 'o')))
                                && (board[5] == ' ')) {cpuMove = 5;}
                        else if ((((board[5] == 'o') && (board[9] == 'o')))
                                && (board[1] == ' ')) {cpuMove = 1;}

                        else if ((((board[3] == 'o') && (board[5] == 'o')))
                                && (board[7] == ' ')) {cpuMove = 7;}
                        else if ((((board[3] == 'o') && (board[7] == 'o')))
                                && (board[5] == ' ')) {cpuMove = 5;}
                        else if ((((board[5] == 'o') && (board[7] == 'o')))
                                && (board[3] == ' ')) {cpuMove = 3;}

                        //if 2 'x' in a row, block

                        //Row checks
                        if (cpuMove == 0) {
                            if ( ( ( (board[1] == 'x') && (board[2] == 'x') ) )
                                    && (board[3] == ' ')) {cpuMove = 3;}
                            else if ((((board[1] == 'x') && (board[3] == 'x')))
                                    && (board[2] == ' ')) {cpuMove = 2;}
                            else if ((((board[2] == 'x') && (board[3] == 'x')))
                                    && (board[1] == ' ')) {cpuMove = 1;}

                            else if ((((board[4] == 'x') && (board[5] == 'x')))
                                    && (board[6] == ' ')) {cpuMove = 6;}
                            else if ((((board[4] == 'x') && (board[6] == 'x')))
                                    && (board[5] == ' ')) {cpuMove = 5;}
                            else if ((((board[5] == 'x') && (board[6] == 'x')))
                                    && (board[4] == ' ')) {cpuMove = 4;}

                            else if ((((board[7] == 'x') && (board[8] == 'x')))
                                    && (board[9] == ' ')) {cpuMove = 9;}
                            else if ((((board[7] == 'x') && (board[9] == 'x')))
                                    && (board[8] == ' ')) {cpuMove = 8;}
                            else if ((((board[8] == 'x') && (board[9] == 'x')))
                                    && (board[7] == ' ')) {cpuMove = 7;}

                                //Column checks
                            else if ((((board[1] == 'x') && (board[4] == 'x')))
                                    && (board[7] == ' ')) {cpuMove = 7;}
                            else if ((((board[1] == 'x') && (board[7] == 'x')))
                                    && (board[4] == ' ')) {cpuMove = 4;}
                            else if ((((board[4] == 'x') && (board[7] == 'x')))
                                    && (board[1] == ' ')) {cpuMove = 1;}

                            else if ((((board[2] == 'x') && (board[5] == 'x')))
                                    && (board[8] == ' ')) {cpuMove = 8;}
                            else if ((((board[2] == 'x') && (board[8] == 'x')))
                                    && (board[5] == ' ')) {cpuMove = 5;}
                            else if ((((board[5] == 'x') && (board[8] == 'x')))
                                    && (board[2] == ' ')) {cpuMove = 2;}

                            else if ((((board[3] == 'x') && (board[6] == 'x')))
                                    && (board[9] == ' ')) {cpuMove = 9;}
                            else if ((((board[3] == 'x') && (board[9] == 'x')))
                                    && (board[6] == ' ')) {cpuMove = 6;}
                            else if ((((board[6] == 'x') && (board[9] == 'x')))
                                    && (board[3] == ' ')) {cpuMove = 3;}

                                //Diagonal checks
                            else if ((((board[1] == 'x') && (board[5] == 'x')))
                                    && (board[9] == ' ')) {cpuMove = 9;}
                            else if ((((board[1] == 'x') && (board[9] == 'x')))
                                    && (board[5] == ' ')) {cpuMove = 5;}
                            else if ((((board[5] == 'x') && (board[9] == 'x')))
                                    && (board[1] == ' ')) {cpuMove = 1;}

                            else if ((((board[3] == 'x') && (board[5] == 'x')))
                                    && (board[7] == ' ')) {cpuMove = 7;}
                            else if ((((board[3] == 'x') && (board[7] == 'x')))
                                    && (board[5] == ' ')) {cpuMove = 5;}
                            else if ((((board[5] == 'x') && (board[7] == 'x')))
                                    && (board[3] == ' ')) {cpuMove = 3;}
                        }
                    }
                    if (cpuMove == 0) //random move
                        {
                            goodMove = false;
                            cpuMove = 1 + Math.floor(9 * Math.random());
                            while (!goodMove) {
                                if ((board[cpuMove] != 'x') && (board[cpuMove] != 'o')) {
                                    move = cpuMove;
                                    goodMove = true;
                                } else cpuMove = 1 + Math.floor(9 * Math.random());
                            }
                        }

                }
                move = cpuMove;
                //Wait a little berfore showing CPU move
               
                            doCPUmove(cpuMove);
                        
            }
        }
   

  }

function doCPUmove(cpuMove) {
    drawO(centers[cpuMove][1], centers[cpuMove][2]);
    board[cpuMove] = 'o';
    turn = turn + 1;
console.log('turn: ', turn, 'cpuMove: ', cpuMove);
    gameOver = checkGameOver();
console.log('gameOver = ', gameOver);
    if (gameOver) drawGameOver();
    humanTurn = true;
}

function checkGameOver() {
     over = false;
        // First row
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[2]) && (board[1] == board[3])) {
                over = true;
            }
        }
        // Second row
        if ((board[4] == 'x') || (board[4] == 'o')) {
            if ((board[4] == board[5]) && (board[4] == board[6])) {
                over = true;
            }
        }
        // Third row
        if ((board[7] == 'x') || (board[7] == 'o')) {
            if ((board[7] == board[8]) && (board[7] == board[9])) {
                over = true;
            }
        }
        // First column
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[4]) && (board[1] == board[7])) {
                over = true;
            }
        }
        // Second column
        if ((board[2] == 'x') || (board[2] == 'o')) {
            if ((board[2] == board[5]) && (board[2] == board[8])) {
                over = true;
            }
        }
        // Third column
        if ((board[3] == 'x') || (board[3] == 'o')) {
            if ((board[3] == board[6]) && (board[3] == board[9])) {
                over = true;
            }
        }
        // First diagonal
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[5]) && (board[1] == board[9])) {
                over = true;
            }
        }
        // Second diagonal
        if ((board[3] == 'x') || (board[3] == 'o')) {
            if ((board[3] == board[5]) && (board[3] == board[7])) {
                over = true;
            }
        }
        return over;
}

function drawGameOver() {

   ctx.beginPath();
   ctx.strokeStyle = 'green';
   ctx.lineWidth = 10;

   ctx.stroke();

        over = false;
        // First row
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[2]) && (board[1] == board[3])) {
                ctx.moveTo( 0+10, centers[1][2]+10 ); ctx.lineTo (maxX+10, centers[1][2]+10 );
            }
        }
        // Second row
        if ((board[4] == 'x') || (board[4] == 'o')) {
            if ((board[4] == board[5]) && (board[4] == board[6])) {
                ctx.moveTo( 0+10, centers[4][2]+10 ); ctx.lineTo (maxX+10, centers[4][2]+10 );
            }
        }
        // Third row
        if ((board[7] == 'x') || (board[7] == 'o')) {
            if ((board[7] == board[8]) && (board[7] == board[9])) {
                ctx.moveTo( 0+10, centers[7][2]+10 ); ctx.lineTo (maxX+10, centers[7][2]+10 );
            }
        }
        // First column
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[4]) && (board[1] == board[7])) {
                ctx.moveTo( centers[1][1]+10, 0+10 ); ctx.lineTo ( centers[1][1]+10, maxY+10 );
            }
        }
        // Second column
        if ((board[2] == 'x') || (board[2] == 'o')) {
            if ((board[2] == board[5]) && (board[2] == board[8])) {
                ctx.moveTo( centers[2][1]+10, 0+10 ); ctx.lineTo ( centers[2][1]+10, maxY+10 );
            }
        }
        // Third column
        if ((board[3] == 'x') || (board[3] == 'o')) {
            if ((board[3] == board[6]) && (board[3] == board[9])) {
                ctx.moveTo( centers[3][1]+10, 0+10 ); ctx.lineTo ( centers[3][1]+10, maxY+10 );
            }
        }
        // First diagonal
        if ((board[1] == 'x') || (board[1] == 'o')) {
            if ((board[1] == board[5]) && (board[1] == board[9])) {
                ctx.moveTo( 0+10, 0+10 ); ctx.lineTo ( maxX+10, maxY+10 );
            }
        }
        // Second diagonal
        if ((board[3] == 'x') || (board[3] == 'o')) {
            if ((board[3] == board[5]) && (board[3] == board[7])) {
                ctx.moveTo( maxX+10, 0+10 ); ctx.lineTo ( 0+10, maxY+10 );
            }
        }
   
   ctx.stroke();
}

newGameButton.onclick = function () {
    startNewGame();

}

setLevelButton.onclick = function () {
    if( gameLevel == 1) {
       gameLevel = 2;
       label = 'Go to Level 1';
    }
    else {
       gameLevel = 1;
       label = 'Go to Level 2';
    } 
    document.getElementById("setLevel").textContent = label;

    startNewGame();
}
