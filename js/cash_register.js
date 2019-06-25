// console.log('test');
// var test = document.createElement ('div');
// test.innerHTML = 'Hello to you, too.';
// document.body.appendChild (test);

(function (){

var calc = calculatorModule();

var numberButtons = document.querySelectorAll (".number");
var functionButtons = document.querySelectorAll(".function");
var registerButtons = document.querySelectorAll(".register");
var display = document.querySelector("#display");
var str = "";

function putDisplay (){
    str = str.concat(this.value);
    display.value = numberWithCommas(str);
}

function numberWithCommas(x) {
    var parts = x.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function numberWithoutCommas(x){
    var parts = x.split(".");
    parts[0] = parts[0].replace(/,/g, "");
    return parts.join(".");

}

function addWipe (){
    for(i=0;i<numberButtons.length;i++){
        numberButtons[i].addEventListener('click', wipeDisplay);
    }
}

function wipeDisplay (){
    display.value="";
    for (i=0;i<numberButtons.length;i++){
    numberButtons[i].removeEventListener('click',wipeDisplay);
    };
    str=this.value;
    display.value = numberWithCommas(str);
}

for (i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener('click', putDisplay);
}

for (i=0;i<functionButtons.length;i++){
    functionButtons[i].addEventListener('click', function (){
        calc.load(parseFloat(numberWithoutCommas(display.value)));
        calc.load(this.value);
        if (typeof calc.calculate()==="number"){
        display.value = calc.calculate();
        }
        addWipe();
    });
}

for (i = 0;i<registerButtons.length;i++){
    registerButtons[i].addEventListener('click',function(){
        if (this.value ==="deposit"){
            display.value = calc.deposit (parseFloat(numberWithoutCommas(display.value)));
        }else if(this.value ==="withdraw"){
            display.value = calc.withdraw (parseFloat(numberWithoutCommas(display.value)));
        }else if (this.value ==="balance"){
            display.value = calc.getRegister();
        }
        addWipe();
    })
}
document.querySelector("#clear").addEventListener('click',function(){
    display.value = "CLEARED";
    calc.clear();
    addWipe;
});

document.querySelector

})();