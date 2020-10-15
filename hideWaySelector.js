Array.from(document.querySelector("#time").options).forEach(function(option_element) {
  //реплейс регуляркой на случай если добавятся еще символы
  //можно не париться и сделать .slice(0,5)
  let option_text = option_element.text.split('').join('').replace(/\(.+\)$/,'');
  option_element.text = option_text;
});

Array.from(document.querySelector("#backtime").options).forEach(function(option_element) {
  let option_text = option_element.text.split('').join('').replace(/\(.+\)$/,'');
  option_element.text = option_text;
});