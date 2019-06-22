// console.log('test');
// var test = document.createElement ('div');
// test.innerHTML = 'Hello to you, too.';
// document.body.appendChild (test);

(function (){

var calc = calculatorModule();

var calculator = document.querySelector ("#calculator");

// console.log(calculator);

var numberButtons = document.querySelectorAll (".number")

console.log(numberButtons);

for (i=0;i<numberButtons.length;i++){
    console.log(i);
    console.log('numberButtons',numberButtons[i].value);
    numberButtons[i].addEventListener('click', function(){calc.load(parseInt(this.value))});
}
})();