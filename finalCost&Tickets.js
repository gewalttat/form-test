let num = document.querySelector('ticketsInput');
let finalNum = document.getElementById('ticketsNum');
let summCost = document.getElementById('summCost');

num.oninput = function () {
    
    document.getElementById('ticketsNum').innerText = input.value;
    document.getElementById('summCost').innerText = 'Итоговая сумма билетов:' + (input.value * 700);
};
