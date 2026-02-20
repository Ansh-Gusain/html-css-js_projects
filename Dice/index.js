function rolldice(){

    const dice = Number(document.getElementById('dice').value);
    const dicevalues = document.getElementById('dicevalues');
    const diceimages = document.getElementById('diceimages');

    const values = [];
    const images = [];

    for(let i = 0; i < dice; i++){
        const random = Math.floor(Math.random() * 6) + 1;

        values.push(random);
        images.push(`<img src="images/Dice-${random}.png">`);
    }

    dicevalues.textContent = `dice : ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');
}

