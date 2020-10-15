let checkbox = document.getElementsByClassName('checkbox')
const button = document.querySelector('button')

checkbox.addEventListener('change', function () {
if (this.value = 'checked') {
button.disabled = false;
}
});