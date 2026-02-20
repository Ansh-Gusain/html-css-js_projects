const min=50;
const max=100;
const random=Math.floor(Math.random()*(max-min+1))+min;

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`guess number between ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert('please enter valid number');
    }
    else if(guess<min || guess>max){
        window.alert('please enter valid number');
    }
    else{
        attempt++;
        if(guess<random){
            window.alert('Too Low!!!');
        }
        else if(guess>random){
            window.alert('Too High!!!');
        }
        else{
            window.alert(`You nailed it the number was ${random} and you took ${attempt} attempts `);
            running =false; 
        }
    }
}