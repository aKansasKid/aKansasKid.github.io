
            var imgBird = null;
            var imgTop = null;
            var imgBottom = null;
            var scoreBoard = null;
            var animate ;
            var scrWidth = Math.min(window.innerWidth, 400) ;
            var scrHeight = window.innerHeight;
            
            var gap = 130;
            var flapStrength = 3;
            var gravity = 0.1;
            var speed = 10;
            var num = 0;
            
            var score = 0;
            var highScore = 0;
            
            var birdDead = false; 
            var birdVelocity = 0;
            
            var collision = false;
                        
               var birdTop;
               var birdRight ;
               var birdLeft;
               var birdBottom;
               var birdWidth = 40;
               var birdHeight = 30;
               var pipeLeft;
               var pipeRight;
               var pipeTop;
               var pipeBottom;
               var pipeWidth = 98;
               var Pipeeight = 500;
            
            //initialize images
            function init(){               
               imgBottom = document.getElementById('bottom');
               imgBottom.style.position= 'absolute'; 
               
               imgTop = document.getElementById('top');
               imgTop.style.position= 'absolute'; 
               
               imgBird = document.getElementById('bird');
               imgBird.style.position= 'absolute'; 
               
               imgBackground = document.getElementById('background'); //400px x 708px
               imgBackground.style.position= 'absolute'; 
               imgBackground.style.left = '0px'; 
               imgBackground.style.top = '0px';
               imgBackground.style.height = window.innerHeight;
               
               scoreBoard = document.querySelector('label.scoreLabel');
               scoreBoard.textContent = 'Score: ' + score.toString();
               
               highScoreBoard = document.querySelector('label.highScoreLabel');
               highScoreBoard.textContent = 'High Score: ' + highScore.toString();
               
               resetPipes();
               resetBird();
            } 
            function randomRange(min, max) {
               return Math.random() * (max - min) + min;
            }
            
            function resetPipes(){
               imgBottom.style.left = scrWidth.toString() + 'px'; 
               //imgBottom.style.bottom = '700px';
               num = randomRange(0.2 * scrHeight, 0.7 * scrHeight);
               imgBottom.style.top = num.toString() + 'px';
               num = scrHeight - parseInt(imgBottom.style.top);
               imgBottom.style.height = num.toString() + 'px';
               imgBottom.style.width = '120px';
               
               imgTop.style.left = scrWidth.toString() + 'px'; 
               num = (scrHeight - parseInt(imgBottom.style.top) + gap);
               imgTop.style.bottom = num.toString() + 'px'; 
               imgTop.style.height = '100%';
               imgTop.style.width = '120px';
            }            
            function resetBird(){               
               imgBird.style.left = '75px'; 
               imgBird.style.top = '250px';
               birdDead = false; 
               birdVelocity = 0;
               
               //collision = false;               
               score = 0;
               scoreBoard.textContent = 'Score: ' + score.toString();
            }
            function update() {   
               birdTop = parseInt(imgBird.style.top);
               num = birdVelocity;
               birdVelocity = birdVelocity + gravity;
               num = birdTop + (num + birdVelocity) / 2;
               imgBird.style.top = num.toString() + 'px'; 
               birdTop = num;
               if ( (birdTop < 0) || (birdTop > scrHeight) ) {
                  birdDead = true;
                  resetBird();
                  resetPipes();
               } 
               birdLeft = parseInt(imgBird.style.left);
               birdRight = birdLeft + birdWidth;
               birdBottom = birdTop + birdHeight;
               pipeLeft = parseInt(imgBottom.style.left);
               pipeRight = pipeLeft + pipeWidth;
               pipeTop = parseInt(imgBottom.style.top);
               //pipeBottom = imgTop.style.bottom;
               if( (birdRight >= pipeLeft) && (birdLeft <= pipeRight) && (  (birdTop <= (pipeTop - gap)) || (birdTop >= pipeTop) ) )  {
                   birdDead = true;
                   collision = true;
                   //reset();
               }
               
               imgTop.style.left = parseInt(imgTop.style.left) + -2 + 'px';
               imgBottom.style.left = parseInt(imgBottom.style.left) + -2 + 'px';
               if( parseInt(imgTop.style.left) < (-1*pipeWidth) ) {
                  resetPipes();
                  if (birdDead == false) {
                     score = score + 1;
                     scoreBoard.textContent = 'Score: ' + score.toString();
               
                  }
                  if (score > highScore){
                      highScore = score;
                     highScoreBoard.textContent = 'High Score: ' + highScore.toString();
                  }
               }  
                     

               animate = setTimeout(update,speed);    // call moveLeft in 30msec
            }
            function flapBird() {
               if (birdDead == false) {
                  birdVelocity = -1 * flapStrength;
                  //update();
               }
            }
            function stop() {
               clearTimeout(animate);
               //imgObj.style.left = '0px'; 
            }
            
            window.onload = init;
