
    
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

        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const next = document.querySelector('#next');

        const reset = document.querySelector('.reset');


        reset.addEventListener('click',()=>{
          
            localStorage.setItem( 'playerScore' , 0);
            localStorage.setItem( 'computerScore' , 0);
            computerScoreBoard.innerText = 0;
            playerScoreBoard.innerText = 0;
            playGame();
        } );

        const playGame = () => {
            fullGame.style.display = 'block';
            home_sec.style.display ='block';
            lost_sec.style.display = 'none'; 
            tie_sec.style.display = 'none';
            win_sec.style.display = 'none'; 
            hurray.style.display = 'none'

            let rulesOpenBtn = document.querySelector('.rules-button')
            let rulesCard = document.querySelectorAll('.rules-card')[0]
            let rulesCloseBtn = document.querySelectorAll('.cross')[0]
            
            rulesOpenBtn.addEventListener('click', ()=>{
                rulesCard.classList.remove('inactive')
            })
            
            // for closing the rules book, when i click 'X' button
            rulesCloseBtn.addEventListener('click', ()=>{
                rulesCard.classList.add('inactive')
            })

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
                        lose(player, computer);
            
                    }else{
                       win(player,computer);
                    }
                }
                else if(player == 'scissor'){
                    if(computer == 'rock'){
                        lose(player, computer);
                    }else{
                        win(player,computer);
                    }
                }
                else if(player == 'paper'){
                    if(computer == 'scissor'){
                        lose(player, computer);
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

        const lose = (p,c) =>{

            const lostBtn1 = document.querySelector(".lostBtn1");
            const lostBtn2 = document.querySelector(".lostBtn2");
            if (p === "paper") {
    
                lostBtn1.classList.remove('button-border-blue');
                lostBtn1.classList.remove('button-border-pink');
                lostBtn1.classList.add('button-border-yellow');
                document.querySelector('.lost-ins1 ').innerHTML = '<img src="paper.png" alt="">'
                
               
            }

            if (c === "paper") {
                lostBtn2.classList.remove('button-border-blue');
                lostBtn2.classList.remove('button-border-pink');
                lostBtn2.classList.add('button-border-yellow');
                document.querySelector('.lost-ins2').innerHTML = '<img src="paper.png" alt="">'
            }

            if (p === "rock") {
                lostBtn1.classList.remove('button-border-pink');
                lostBtn1.classList.remove('button-border-yellow');
                lostBtn1.classList.add('button-border-blue');
                document.querySelector('.lost-ins1').innerHTML = '<img src="rock.png" alt="">'
            }

            if (c === "rock") {
                lostBtn2.classList.remove('button-border-pink');
                lostBtn2.classList.remove('button-border-yellow');
                lostBtn2.classList.add('button-border-blue');
                document.querySelector('.lost-ins2').innerHTML = '<img src="rock.png" alt="">'
            }


            if (p === "scissor") {
                lostBtn1.classList.remove('button-border-blue');
                lostBtn1.classList.remove('button-border-yellow');
                lostBtn1.classList.add('button-border-pink');
                document.querySelector('.lost-ins1 ').innerHTML = '<img src="scissor.png" alt="">'

            }

            if (c === "scissor") {
                lostBtn2.classList.remove('button-border-yellow');
                lostBtn2.classList.remove('button-border-blue');
                lostBtn2.classList.add('button-border-pink');
                document.querySelector('.lost-ins2 ').innerHTML = '<img src="scissor.png" alt="">'
            }
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
                document.querySelector('.win-ins1 ').innerHTML = '<img src="paper.png" alt="">'
                
               
            }

            if (c === "paper") {
                winBtn2.classList.remove('button-border-blue');
                winBtn2.classList.remove('button-border-pink');
                winBtn2.classList.add('button-border-yellow');
                document.querySelector('.win-ins2').innerHTML = '<img src="paper.png" alt="">'
            }

            if (p === "rock") {
                winBtn1.classList.remove('button-border-pink');
                winBtn1.classList.remove('button-border-yellow');
                winBtn1.classList.add('button-border-blue');
                document.querySelector('.win-ins1').innerHTML = '<img src="rock.png" alt="">'
            }

            if (c === "rock") {
                winBtn2.classList.remove('button-border-pink');
                winBtn2.classList.remove('button-border-yellow');
                winBtn2.classList.add('button-border-blue');
                document.querySelector('.win-ins2').innerHTML = '<img src="rock.png" alt="">'
            }


            if (p === "scissor") {
                winBtn1.classList.remove('button-border-blue');
                winBtn1.classList.remove('button-border-yellow');
                winBtn1.classList.add('button-border-pink');
                document.querySelector('.win-ins1 ').innerHTML = '<img src="scissor.png" alt="">'

            }

            if (c === "scissor") {
                winBtn2.classList.remove('button-border-yellow');
                winBtn2.classList.remove('button-border-blue');
                winBtn2.classList.add('button-border-pink');
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
                    playGame();
                })
        }

        playGame();
}    
        
        game();