var board = new Array();
var cand = new Array();

    //color alternate blocks light gray
    for (i=1;i<=3;i++) {
        for(j=4;j<=6;j++) {
            var str = "grid"+i+j;
            var b = document.getElementById(str);
            b.style.backgroundColor = 'LightGray';
        }
    }
    for (i=4;i<=6;i++) {
        for(j=1;j<=3;j++) {
            var str = "grid"+i+j;
            var b = document.getElementById(str);
            b.style.backgroundColor = 'LightGray';
        }
    }
    for (i=4;i<=6;i++) {
        for(j=7;j<=9;j++) {
            var str = "grid"+i+j;
            var b = document.getElementById(str);
            b.style.backgroundColor = 'LightGray';
        }
    }
    for (i=7;i<=9;i++) {
        for(j=4;j<=6;j++) {
            var str = "grid"+i+j;
            var b = document.getElementById(str);
            b.style.backgroundColor = 'LightGray';
        }
    }
// color border around each 3x3 grid

//Top 3 **********************
document.getElementById("grid11").style.borderTop = '5px solid black';//
document.getElementById("grid11").style.borderLeft = '5px solid black';//
document.getElementById("grid12").style.borderTop = '5px solid black';//
document.getElementById("grid13").style.borderTop = '5px solid black';//
document.getElementById("grid13").style.borderRight = '5px solid black';
document.getElementById("grid21").style.borderLeft = '5px solid black';//
document.getElementById("grid23").style.borderRight = '5px solid black';
document.getElementById("grid31").style.borderBottom = '5px solid black';
document.getElementById("grid31").style.borderLeft = '5px solid black';//
document.getElementById("grid32").style.borderBottom = '5px solid black';
document.getElementById("grid33").style.borderBottom = '5px solid black';
document.getElementById("grid33").style.borderRight = '5px solid black';

document.getElementById("grid14").style.borderTop = '5px solid black';//
document.getElementById("grid14").style.borderLeft = '5px solid black';
document.getElementById("grid15").style.borderTop = '5px solid black';//
document.getElementById("grid16").style.borderTop = '5px solid black';//
document.getElementById("grid16").style.borderRight = '5px solid black';
document.getElementById("grid24").style.borderLeft = '5px solid black';
document.getElementById("grid26").style.borderRight = '5px solid black';
document.getElementById("grid34").style.borderBottom = '5px solid black';
document.getElementById("grid34").style.borderLeft = '5px solid black';
document.getElementById("grid35").style.borderBottom = '5px solid black';
document.getElementById("grid36").style.borderBottom = '5px solid black';
document.getElementById("grid36").style.borderRight = '5px solid black';

document.getElementById("grid17").style.borderTop = '5px solid black';//
document.getElementById("grid17").style.borderLeft = '5px solid black';
document.getElementById("grid18").style.borderTop = '5px solid black';//
document.getElementById("grid19").style.borderTop = '5px solid black';//
document.getElementById("grid19").style.borderRight = '5px solid black';//
document.getElementById("grid27").style.borderLeft = '5px solid black';
document.getElementById("grid29").style.borderRight = '5px solid black';//
document.getElementById("grid37").style.borderBottom = '5px solid black';
document.getElementById("grid37").style.borderLeft = '5px solid black';
document.getElementById("grid38").style.borderBottom = '5px solid black';
document.getElementById("grid39").style.borderBottom = '5px solid black';
document.getElementById("grid39").style.borderRight = '5px solid black';//

//Middle 3 *******************
document.getElementById("grid41").style.borderTop = '5px solid black';
document.getElementById("grid41").style.borderLeft = '5px solid black';
document.getElementById("grid42").style.borderTop = '5px solid black';//
document.getElementById("grid43").style.borderTop = '5px solid black';
document.getElementById("grid43").style.borderRight = '5px solid black';
document.getElementById("grid51").style.borderLeft = '5px solid black';//
document.getElementById("grid53").style.borderRight = '5px solid black';
document.getElementById("grid61").style.borderBottom = '5px solid black';
document.getElementById("grid61").style.borderLeft = '5px solid black';//
document.getElementById("grid62").style.borderBottom = '5px solid black';
document.getElementById("grid63").style.borderBottom = '5px solid black';
document.getElementById("grid63").style.borderRight = '5px solid black';

document.getElementById("grid44").style.borderTop = '5px solid black';
document.getElementById("grid44").style.borderLeft = '5px solid black';
document.getElementById("grid45").style.borderTop = '5px solid black';
document.getElementById("grid46").style.borderTop = '5px solid black';
document.getElementById("grid46").style.borderRight = '5px solid black';
document.getElementById("grid54").style.borderLeft = '5px solid black';
document.getElementById("grid56").style.borderRight = '5px solid black';
document.getElementById("grid64").style.borderBottom = '5px solid black';
document.getElementById("grid64").style.borderLeft = '5px solid black';
document.getElementById("grid65").style.borderBottom = '5px solid black';
document.getElementById("grid66").style.borderBottom = '5px solid black';
document.getElementById("grid66").style.borderRight = '5px solid black';

document.getElementById("grid47").style.borderTop = '5px solid black';
document.getElementById("grid47").style.borderLeft = '5px solid black';
document.getElementById("grid48").style.borderTop = '5px solid black';
document.getElementById("grid49").style.borderTop = '5px solid black';
document.getElementById("grid49").style.borderRight = '5px solid black';//
document.getElementById("grid57").style.borderLeft = '5px solid black';
document.getElementById("grid59").style.borderRight = '5px solid black';//
document.getElementById("grid67").style.borderBottom = '5px solid black';
document.getElementById("grid67").style.borderLeft = '5px solid black';
document.getElementById("grid68").style.borderBottom = '5px solid black';
document.getElementById("grid69").style.borderBottom = '5px solid black';
document.getElementById("grid69").style.borderRight = '5px solid black';//


//Bottom 3 ************
document.getElementById("grid71").style.borderTop = '5px solid black';
document.getElementById("grid71").style.borderLeft = '5px solid black';//
document.getElementById("grid72").style.borderTop = '5px solid black';
document.getElementById("grid73").style.borderTop = '5px solid black';
document.getElementById("grid73").style.borderRight = '5px solid black';
document.getElementById("grid81").style.borderLeft = '5px solid black';//
document.getElementById("grid83").style.borderRight = '5px solid black';
document.getElementById("grid91").style.borderBottom = '5px solid black';//
document.getElementById("grid91").style.borderLeft = '5px solid black';//
document.getElementById("grid92").style.borderBottom = '5px solid black';//
document.getElementById("grid93").style.borderBottom = '5px solid black';//
document.getElementById("grid93").style.borderRight = '5px solid black';

document.getElementById("grid74").style.borderTop = '5px solid black';
document.getElementById("grid74").style.borderLeft = '5px solid black';
document.getElementById("grid75").style.borderTop = '5px solid black';
document.getElementById("grid76").style.borderTop = '5px solid black';
document.getElementById("grid76").style.borderRight = '5px solid black';
document.getElementById("grid84").style.borderLeft = '5px solid black';
document.getElementById("grid86").style.borderRight = '5px solid black';
document.getElementById("grid94").style.borderBottom = '5px solid black';//
document.getElementById("grid94").style.borderLeft = '5px solid black';
document.getElementById("grid95").style.borderBottom = '5px solid black';//
document.getElementById("grid96").style.borderBottom = '5px solid black';//
document.getElementById("grid96").style.borderRight = '5px solid black';

document.getElementById("grid77").style.borderTop = '5px solid black';
document.getElementById("grid77").style.borderLeft = '5px solid black';
document.getElementById("grid78").style.borderTop = '5px solid black';
document.getElementById("grid79").style.borderTop = '5px solid black';
document.getElementById("grid79").style.borderRight = '5px solid black';//
document.getElementById("grid87").style.borderLeft = '5px solid black';
document.getElementById("grid89").style.borderRight = '5px solid black';//
document.getElementById("grid97").style.borderBottom = '5px solid black';//
document.getElementById("grid97").style.borderLeft = '5px solid black';
document.getElementById("grid98").style.borderBottom = '5px solid black';//
document.getElementById("grid99").style.borderBottom = '5px solid black';//
document.getElementById("grid99").style.borderRight = '5px solid black';//

//Initialize board to blanks
for (i=1;i<10;i++) {
    board[i] = new Array();
    cand[i] = new Array();
    for(j=1;j<10;j++) {
        board[i][j] = "";
        cand[i][j] = "";
    }
}

//Process Candidates when Candidates button is clicked
var candidatesButton = document.querySelector('button.Candidates');
candidatesButton.onclick = function() {

    //read current board
    for (i=1;i<10;i++) {
        for(j=1;j<10;j++) {
            var str = "grid"+i+j;
            var b = document.getElementById(str);
            board[i][j] = b.value;
            b.style.fontWeight = 'bold';
        }
    }

    //generate candidates for each cell
    for (i=1;i<10;i++) {
        for(j=1;j<10;j++) {
            if (board[i][j] == "") {
                for(num=1;num<10;num++) {
                    var cFlag = true;

                    //check column
                    for(ii=1;ii<10;ii++) {
                        if(board[ii][j]==num) {
                            cFlag = false;
                        }
                    }

                    //check row
                    for(jj=1;jj<10;jj++) {
                        if(board[i][jj]==num) cFlag = false;
                    }
                    
                    //check 3x3 cell
                    if( i<=3 && j<=3 ) {
                       for(ii=1;ii<4;ii++) {
                           for(jj=1;jj<4;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( i<=3 && (j>=4 && j<=6) ) {
                       for(ii=1;ii<4;ii++) {
                           for(jj=4;jj<7;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( i<=3 && (j>=7 && j<=9) ) {
                       for(ii=1;ii<4;ii++) {
                           for(jj=7;jj<10;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=4 && i<=6) && (j<=3) ) {
                       for(ii=4;ii<7;ii++) {
                           for(jj=1;jj<4;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=4 && i<=6) && (j>=4 && j<=6) ) {
                       for(ii=4;ii<7;ii++) {
                           for(jj=4;jj<7;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=4 && i<=6) && (j>=7 && j<=9) ) {
                       for(ii=4;ii<7;ii++) {
                           for(jj=7;jj<10;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=7 && i<=9) && (j<=3) ) {
                       for(ii=7;ii<10;ii++) {
                           for(jj=1;jj<4;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=7 && i<=9) && (j>=4 && j<=6) ) {
                       for(ii=7;ii<10;ii++) {
                           for(jj=4;jj<7;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    if( (i>=7 && i<=9) && (j>=7 && j<=9) ) {
                       for(ii=7;ii<10;ii++) {
                           for(jj=7;jj<10;jj++) {
                               if(board[ii][jj]==num) cFlag = false;
                           }
                       }
                    }
                    
                    //add num as candidate if not in column, row, or cell
                    if(cFlag) {
                        cand[i][j] = cand[i][j] + num;
                    } else  {
                          cand[i][j] = cand[i][j] + " ";
                    }
                    if ( (cand[i][j].length!=5) && (cand[i][j].length!=11) && (cand[i][j].length!=17) ) {
                          cand[i][j] = cand[i][j] + " ";
                    }
                    if ( (cand[i][j].length==5) || (cand[i][j].length==11) ) cand[i][j] = cand[i][j] + "\n";
                }                
                var str = "grid"+i+j;
                var b = document.getElementById(str);
                if(board[i][j] != "") {
                    b.value = board[i][j];
                } else {
                      b.value = cand[i][j];
                      b.style.fontWeight = 'normal';
                      b.style.fontSize = "18px";
                }
            }
        }
    }
    
}
