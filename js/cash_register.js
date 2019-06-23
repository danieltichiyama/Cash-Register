// console.log('test');
// var test = document.createElement ('div');
// test.innerHTML = 'Hello to you, too.';
// document.body.appendChild (test);

(function (){

var calc = calculatorModule();

var numberButtons = document.querySelectorAll (".number")

function putDisplay (func){
    var display = document.querySelector ("#display");
    display.value = numberWithCommas(func);
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function wipeDisplay (){
    display.value="";
    for (i=0;i<numberButtons.length;i++){
    numberButtons[i].removeEventListener('click',wipeDisplay);
    };
    display.value=this.value;
}

for (i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener('click', function(){
        let num = calc.load(this.value);
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

document.querySelector("#plus").addEventListener('click',function(){
    let num = calc.add(calc.recallMemory());
    putDisplay(num);
    for(i=0;i<numberButtons.length;i++){
        numberButtons[i].addEventListener('click', wipeDisplay);
    }
    
});

})();