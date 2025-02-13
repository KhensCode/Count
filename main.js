let count = 23.00;
let currencySymbol = '$';
const minusBtn = document.getElementById('minus');
const valueContent = document.getElementById('value');
const plusBtn = document.getElementById('plus');

minusBtn.addEventListener('click' , () => {
    if(count > 23 ) {
        count--;
    }

    valueContent.textContent = `${currencySymbol}${count.toFixed(2) }`;
});

plusBtn.addEventListener('click' , () => {
    if(count > 99) {
        count--;
    }
    count ++;
    valueContent.textContent = `${currencySymbol}${count.toFixed(2)}`;

})
