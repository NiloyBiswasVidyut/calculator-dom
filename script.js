let ione = document.getElementById('ione');
let itwo = document.getElementById('itwo');
let btn = document.getElementById('btn');
let command = document.getElementById('command')
let sum = document.getElementById('sum');

add.addEventListener('click', function (event) {
    command.textContent = "Addition: ";
    sum.textContent = Number(ione.value) + Number(itwo.value);
})
sub.addEventListener('click', function (event) {
    command.textContent = "Substraction: ";
    sum.textContent = Number(ione.value) - Number(itwo.value);
})
mul.addEventListener('click', function (event) {
    command.textContent = "Multiplication: ";
    sum.textContent = Number(ione.value) * Number(itwo.value);
})
divi.addEventListener('click', function (event) {
    command.textContent = "Division: ";
    sum.textContent = Number(ione.value) / Number(itwo.value);
})