let submitBtn = document.getElementById('submit');
let selectedDate = document.getElementById('date');
let finalNum = document.getElementById('ticketsNum');
let summCost = document.getElementById('summCost');
var route = document.getElementById("route");
var time = document.getElementById('time');
let name = document.getElementById('name');
let telNumber = document.getElementById('tel');
var backtimeEl = document.getElementById('backtime');

submitBtn.onclick = function () {
function check() {
    if (document.querySelectorAll('input').value != '')
    document.getElementById('submit').removeAttribute('disabled');
    else
    document.getElementById('submit').disabled = true;
}
    if (route.value === 'из A в B' || route.value === 'из B в A') {
    alert(name.value + ', Вы успешно оформили покупку ' +
        finalNum.innerText + ' билетов в направлении ' + route.value +
        '. Ваша поездка состоится ' + selectedDate.value + ' в ' + time.value.slice(0, 5)
         + '. В случае изменения расписания, мы свяжемся с Вами по номеру ' + telNumber.value + 
        '. Желаем приятного путешествия! :)');
    } else if (route.value === 'из A в B и обратно в А') {
        alert(name.value + ', Вы успешно оформили покупку ' +
        finalNum.innerText + ' билетов в направлении ' + route.value +
        '. Ваша поездка состоится ' + selectedDate.value + ' в ' + time.value.slice(0, 5)
         + '. Время обратного билета: ' + backtimeEl.value.slice(0,5) + '. В случае изменения расписания, мы свяжемся с Вами по номеру ' + telNumber.value + 
        '. Желаем приятного путешествия! :)');
    }
}