
    
    // Complete logic of game inside this function
    const game = () => {
        const playerScoreBoard = document.querySelector('#pscore');
        const computerScoreBoard = document.querySelector('#cscore');

        let playerScore = localStorage.getItem('playerScore');
        playerScoreBoard.innerText = playerScore;
        

        let computerScore = localStorage.getItem('computerScore');
        computerScoreBoard.innerText = computerScore;
        

        let home_sec = document.querySelector('.home');
        let lost_sec = document.querySelector('.lost');
        let tie_sec = document.querySelector('.tie');
        let win_sec = document.querySelector('.win');
       
        home_sec.style.display ='block';
        lost_sec.style.display = 'none'; 
        tie_sec.style.display = 'none';
        win_sec.style.display = 'none'; 


        let fullGame = document.querySelector('.game');
        fullGame.style.display = 'block';

        let hurray = document.querySelector('.hurray');
        hurray.style.display = 'none'



  

        const replay_tie  = document.querySelector('#replayBtnFromTie');
        const replay_lost  = document.querySelector('#replayBtnFromLost');
        const replay_win = document.querySelector('#replayBtnFromWin');
        const replay_hurray  = document.querySelector('#replayBtnFromHurray');

        const rockIcon = document.querySelector('#rockIcon');
        const paperIcon = document.querySelector('#paperIcon');
        const scissorIcon = document.querySelector('#scissorIcon');

        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const next = document.querySelector('#next');
        

        const playGame = () => {
            fullGame.style.display = 'block';
            home_sec.style.display ='block';
            lost_sec.style.display = 'none'; 
            tie_sec.style.display = 'none';
            win_sec.style.display = 'none'; 
            hurray.style.display = 'none'

            // const rockBtn = document.querySelector('.rock');
            // const paperBtn = document.querySelector('.paper');
            // const scissorBtn = document.querySelector('.scissor');
            const playerOptions = [rockBtn,paperBtn,scissorBtn];
            const computerOptions = ['rock','paper','scissor']
            

            playerOptions.forEach(option => {
                option.addEventListener('click',function(){
        
                    const choiceNumber = Math.floor(Math.random()*3);
                    const computerChoice = computerOptions[choiceNumber];

                    check(this.innerText,computerChoice)

                })
            })
            
        }
        
        const check = (player,computer) => {
            player = player.toLowerCase();
            computer = computer.toLowerCase();


                if(player === computer){
                    tie(player);
                }
                else if(player == 'rock'){
                    if(computer == 'paper'){
                        lose();
            
                    }else{
                       win(player,computer);
                    }
                }
                else if(player == 'scissor'){
                    if(computer == 'rock'){
                       lose();
                    }else{
                        win(player,computer);
                    }
                }
                else if(player == 'paper'){
                    if(computer == 'scissor'){
                       lose();
                    }else{
                        win(player,computer);
                    }
                }
        
        }



        const tie = (p) =>{
            const tieBtn1 = document.querySelector(".tieBtn1");
            const tieBtn2 = document.querySelector(".tieBtn2");
            if (p === "paper") {
    
                tieBtn1.classList.remove('button-border-blue');
                tieBtn1.classList.remove('button-border-pink');
                tieBtn1.classList.add('button-border-yellow');
                
                tieBtn2.classList.remove('button-border-blue');
                tieBtn2.classList.remove('button-border-pink');
                tieBtn2.classList.add('button-border-yellow');

                document.querySelector('.ins1 ').innerHTML = '<img src="paper.png" alt="">'
                document.querySelector('.ins2 ').innerHTML = '<img src="paper.png" alt="">'
               
            }
            if (p === "rock") {
                tieBtn1.classList.remove('button-border-pink');
                tieBtn1.classList.remove('button-border-yellow');
                tieBtn1.classList.add('button-border-blue');
                
                tieBtn2.classList.remove('button-border-pink');
                tieBtn2.classList.remove('button-border-yellow');
                tieBtn2.classList.add('button-border-blue');

                document.querySelector('.ins1 ').innerHTML = '<img src="rock.png" alt="">'
                document.querySelector('.ins2 ').innerHTML = '<img src="rock.png" alt="">'
                
            }
            if (p === "scissor") {
                tieBtn1.classList.remove('button-border-blue');
                tieBtn1.classList.remove('button-border-yellow');
                tieBtn1.classList.add('button-border-pink');

                tieBtn2.classList.remove('button-border-yellow');
                tieBtn2.classList.remove('button-border-blue');
                tieBtn2.classList.add('button-border-pink');
                document.querySelector('.ins1 ').innerHTML = '<img src="scissor.png" alt="">'
                document.querySelector('.ins2 ').innerHTML = '<img src="scissor.png" alt="">'
            }

            computerScoreBoard.innerText = computerScore;
            playerScoreBoard.innerText = playerScore;
            tie_sec.style.display = 'block'; 
            home_sec.style.display = 'none'; 
            lost_sec.style.display = 'none'; 
            win_sec.style.display = 'none'; 
           

            replay_tie.addEventListener("click", ()=>{
                playGame();
            })



            
        }


        


        const lose = () =>{
            localStorage.computerScore = computerScore++;
            computerScoreBoard.innerText = computerScore;
            localStorage.setItem('computerScore', computerScore===null? 0: computerScore);
            lost_sec.style.display = 'block'; 
            home_sec.style.display = 'none'; 
            win_sec.style.display = 'none'; 
            tie_sec.style.display = 'none'; 

            replay_lost.addEventListener("click", ()=>{
    
                playGame();
            })
        }

        const win = (p,c) =>{

            const winBtn1 = document.querySelector(".winBtn1");
            const winBtn2 = document.querySelector(".winBtn2");
            if (p === "paper") {
    
                winBtn1.classList.remove('button-border-blue');
                winBtn1.classList.remove('button-border-pink');
                winBtn1.classList.add('button-border-yellow');
                
                winBtn2.classList.remove('button-border-blue');
                winBtn2.classList.remove('button-border-pink');
                winBtn2.classList.add('button-border-yellow');
                // winBtn2.classList.add(`button-border-${}`);
               
                document.querySelector('.win-ins1 ').innerHTML = '<img src="paper.png" alt="">'
                document.querySelector('.win-ins2 ').innerHTML = '<img src="paper.png" alt="">'
               
            }
            if (p === "rock") {
                winBtn1.classList.remove('button-border-pink');
                winBtn1.classList.remove('button-border-yellow');
                winBtn1.classList.add('button-border-blue');
                
                winBtn2.classList.remove('button-border-pink');
                winBtn2.classList.remove('button-border-yellow');
                winBtn2.classList.add('button-border-blue');

                document.querySelector('.win-ins1 ').innerHTML = '<img src="rock.png" alt="">'
                document.querySelector('.win-ins2 ').innerHTML = '<img src="rock.png" alt="">'
                
            }
            if (p === "scissor") {
                winBtn1.classList.remove('button-border-blue');
                winBtn1.classList.remove('button-border-yellow');
                winBtn1.classList.add('button-border-pink');

                winBtn2.classList.remove('button-border-yellow');
                winBtn2.classList.remove('button-border-blue');
                winBtn2.classList.add('button-border-pink');
                document.querySelector('.win-ins1 ').innerHTML = '<img src="scissor.png" alt="">'
                document.querySelector('.win-ins2 ').innerHTML = '<img src="scissor.png" alt="">'
            }
          
            localStorage.playerScore =playerScore++;
            localStorage.setItem( 'playerScore' , playerScore===null ? 0: playerScore );
            playerScoreBoard.innerText = playerScore;
            win_sec.style.display = 'block'; 
            home_sec.style.display = 'none'; 
            lost_sec.style.display = 'none'; 
            tie_sec.style.display = 'none';

            replay_win.addEventListener("click", ()=>{
                playGame();
            }) 
            next.addEventListener("click", ()=>{
                hurraySec();
            }) 
        }

        const hurraySec = () =>{
                hurray.style.display = 'block';
                fullGame.style.display = 'none';

                replay_hurray.addEventListener("click", ()=>{
                    console.log("Hello");
                    playGame();
                })
        }


      

      
        playGame();
}    
        
   
        game();