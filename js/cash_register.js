// console.log('test');
// var test = document.createElement ('div');
// test.innerHTML = 'Hello to you, too.';
// document.body.appendChild (test);

(function (){

var calc = calculatorModule();

var calculator = document.querySelector ("#calculator");

// console.log(calculator);

var numberButtons = document.querySelectorAll (".number")

// console.log(numberButtons);

function putDisplay (func){
    var display = document.querySelector ("#display");
    display.value = func;
}

for (i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener('click', function(){
        let num = calc.load(parseInt(this.value));
        putDisplay(num);
    });
}

document.querySelector("#clear").addEventListener('click', function() {
    calc.clear();
    putDisplay(calc.clear());
});

document.querySelector("#balance").addEventListener('click',function(){
    calc.getRegister();
    putDisplay(calc.getRegister());
})

document.querySelector("#deci").addEventListener('click',function(){
    let num = calc.addDeci();
    putDisplay(num);
})

})();