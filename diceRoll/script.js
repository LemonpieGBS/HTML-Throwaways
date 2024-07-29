const inputDice = document.getElementById('diceNumber');
const resultDice = document.getElementById('diceResult');
const resultTotal = document.getElementById('totalResult');
const diceImages = document.getElementById('diceImages');

const Min = 1;

function rollDice() {

    const diceNum = inputDice.value;
    if(diceNum < Min) return;

    let values = [];
    let images = [];
    let total = 0;

    for(let i = 0; i < diceNum; i++) {
        let rand = Math.floor(Math.random() * 6) + 1;
        values.push(rand);
        images.push(`<img src="images/dice/${rand}.svg" alt="DICE_${rand}_IMG">`);
        total+=rand;
    }

    resultDice.textContent = `Results: ${values.join(', ')}`;
    resultTotal.textContent = `Total: ${total} / ${diceNum * 6}`;
    diceImages.innerHTML = `${images.join(' ')}`;
}