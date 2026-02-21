const list=['rock','paper','scissor'];

const playerDisplay=document.getElementById('playerDisplay');
const computerDisplay=document.getElementById('computerDisplay');
const result=document.getElementById('result');

function play(playerChoice){

    computerChoice=list[Math.floor(Math.random()*3)];
    let res="";

    if (computerChoice===playerChoice){
        res='Its a Tie!!';
    }
    else{
        switch(playerChoice){
            case ('rock'):
                res=(computerChoice==='paper') ? "You Loose!" : "You win!";
                break;
            case ('paper'):
                res=(computerChoice==='scissor') ? "You Loose!" : "You win!";
                break;
            case ('scissor'):
                res=(computerChoice==='rock') ? "You Loose!" : "You win!";
                break;
        }
    }
    playerDisplay.textContent=`Player : ${playerChoice}`;
    computerDisplay.textContent=`Computer : ${computerChoice}`;
    result.textContent=res;
    result.classList.remove("loose","win");

    switch(res){
        case "You Loose!":
            result.classList.add('loose');
            break;
        case "You win!":
            result.classList.add('win');
            break;
    }
}