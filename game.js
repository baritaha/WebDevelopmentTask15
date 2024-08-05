$(document).ready(function(){
    /* ******************************************nav bar*************** */
    const head=document.querySelector('.head');
    $(window).scroll(function(){
        var scrol=$(window).scrollTop();
        if(scrol>50){
            head.classList.add('showbar');
        }
        else{
            head.classList.remove('showbar');
        }
    })
    const X_CLASS='x';
    const CIRCLE_CLASS='circle';
    const WINNING_COMPINATION=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const celElements=document.querySelectorAll('[data-cell]');
    const board=document.getElementById('board');
    const winningMessageTextElement=document.querySelector('[data-winning-messages-text]');
   const winningMessageElement=document.querySelector('.winning-message');
   const restartButton=document.getElementById('restartButton');
    let circleTurn;
    startGame();
    function startGame(){
        circleTurn=false;
        celElements.forEach(cell => {
            cell.classList.remove(CIRCLE_CLASS);
            cell.classList.remove(X_CLASS);
            cell.removeEventListener('click',handleClick);
            cell.addEventListener('click',handleClick,{ once: true });
        })
        SetBoardHoverClass();
        winningMessageElement.classList.remove('show');
    }
    function handleClick(e){
        const cell=e.target;
        const currentClass=circleTurn ? CIRCLE_CLASS: X_CLASS ;
       placeMark(cell,currentClass);
       if(checkWin(currentClass)){
      endGame(false);
        }
        else if(isDraw()){
           endGame(true)
        }
        else{
            swapTurn();
            SetBoardHoverClass();
        }      
    }
    function endGame(draw){
        if(draw){
            winningMessageTextElement.innerText=`Draw!`;
        }
        else{
            winningMessageTextElement.innerText=`${circleTurn ? "O's" : "X's"} Wins!`;
        }
       winningMessageElement.classList.add('show');
    }
    function isDraw(){
        return [...celElements].every(cell => {
            return cell.classList.contains(X_CLASS) 
            ||
             cell.classList.contains(CIRCLE_CLASS);
            })
            }
    function placeMark(cell,currentClass){
        cell.classList.add(currentClass);
    }
    function swapTurn(){
        circleTurn=!circleTurn;
    }
    function SetBoardHoverClass(){
        board.classList.remove(X_CLASS);
        board.classList.remove(CIRCLE_CLASS);
        if(circleTurn){
            board.classList.add(CIRCLE_CLASS);
        }
        else
        {
            board.classList.add(X_CLASS);
        }
    }

    function checkWin(currentClass){
        return WINNING_COMPINATION.some(compination => {
            return compination.every(index => {
                return celElements[index].classList.contains(currentClass);
            })
        })
    }
    restartButton.addEventListener('click', startGame);
    })