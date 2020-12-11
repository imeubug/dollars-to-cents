const currencyInput = document.getElementById('money-input');

const pennyResult = document.getElementById('penny-result');
const nickelResult = document.getElementById('nickel-result');
const dimeResult = document.getElementById('dime-result');
const quarterResult = document.getElementById('quarter-result');

function convertDollarsToCents(val) {
    let cents = Number(val);
    if (Number.isSafeInteger(cents) || 
        (Number.isSafeInteger(cents) === false && cents)) {
        cents *= 100;
    } else {
        // default case
        cents = 100;
    }

    return cents;
}
currencyInput.addEventListener('input', (e) => {
    let cents = convertDollarsToCents(e.target.value);
    
    let quarter = Math.floor(cents/25);
    cents%=25;

    let dime = Math.floor(cents/10);
    cents%=10;

    let nickel = Math.floor(cents/5);
    cents%=5;

    let penny = Math.floor(cents);

    pennyResult.innerText = `1 x ${penny}`;
    nickelResult.innerText = `5 x ${nickel}`;
    dimeResult.innerText = `10 x ${dime}`;
    quarterResult.innerHTML = `25 x ${quarter}`;
})