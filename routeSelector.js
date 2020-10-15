var route = document.getElementById("route");
var sel = document.getElementById('time');
var wayA = document.getElementsByClassName('wayA');
var wayB = document.getElementsByClassName('wayB');
var backtimeOptions = document.getElementsByClassName('backway');
var backtimeEl = document.getElementById('backtime');
var backtime = document.getElementsByClassName('backtimeclass');

route.selectedIndex = -1;
sel.selectedIndex = -1;

route.addEventListener('change', function () {
  if (this.value === 'из A в B') {
    document.getElementById("abc").value = "";
    document.getElementById("ticketsNum").innerText = "";
    document.getElementById("summCost").innerText = "";
    //проход по опшенам
    for (var i = 0; i < wayB.length; i++) wayB[i].style.display = 'none';
    for (var i = 0; i < wayA.length; i++) wayA[i].style.display = 'block';
    //скрывает третий селектор на случай если тыкнут сперва А-В-А а потом другое направление
    for (var i = 0; i < backtime.length; i++) backtime[i].style.display = 'none';
  } else if (this.value === 'из B в A') {
    document.getElementById("abc").value = "";
    document.getElementById("ticketsNum").innerText = "";
    document.getElementById("summCost").innerText = "";
    for (var i = 0; i < wayA.length; i++) wayA[i].style.display = 'none';
    for (var i = 0; i < wayB.length; i++) wayB[i].style.display = 'block';
    //скрывает третий селектор на случай если тыкнут сперва А-В-А а потом другое направление
    for (var i = 0; i < backtime.length; i++) backtime[i].style.display = 'none';
  }
});
//появление дополнительного селекта
route.addEventListener('change', function () {
  if (this.value === 'из A в B и обратно в А') {
    document.getElementById("abc").value = "";
    document.getElementById("ticketsNum").innerText = "";
    document.getElementById("summCost").innerText = "";
    //выводит селект из дефолтного display : none
    for (var i = 0; i < backtime.length; i++) backtime[i].style.display = 'block';
    //блочат направления В
    for (var i = 0; i < wayB.length; i++) wayB[i].style.display = 'none';
    for (var i = 0; i < wayA.length; i++) wayA[i].style.display = 'block';
  }
});

sel.addEventListener('change', function () {
  if (route.value === 'из A в B и обратно в А') {
    let timeString = sel.value.substr(0, 5);
    let timeValueHours = timeString.substr(0, 2);
    let timeValueMinutes = timeString.substr(3, 5);
    changeBacktimeDivOptionsVisibility(timeString);
  }
});

var changeBacktimeDivOptionsVisibility = function (startTime) {
  for (var i = 0; i < backtimeEl.options.length; i++) {
    if (startTime.substr(0, 2) < backtimeEl.options[i].value.substr(0, 2)) {
      // not used, delete document.body.append(backtimeEl.options.length);
      backtimeOptions[i].style.display = 'block';
      // backtimeEl.options[i].style.display = 'block';

      // not used, delete console.log(backtimeOptions[i].style.display);
    } else if (startTime.substr(0, 2) > backtimeEl.options[i].value.substr(0, 2)) {
      backtimeOptions[i].style.display = 'none';
    }

  }
}