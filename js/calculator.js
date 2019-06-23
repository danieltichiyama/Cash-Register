var calculatorModule = function() {
    var memory=0;
    var total=0;
    var register = 0;
    var arr = [];

    function getRegister (){
        return register;
    }

    function load(x){
      arr[arr.length] = x;
      memory = parseFloat(arr.join(""));
      console.log("load:arr",arr, "load:memory",memory)
      return parseFloat(arr.join(""));
    }

    function clear(){
        arr = [];
        total = 0;
        memory = 0;
        return arr;
    }

    function addDeci (){
        if (arr.indexOf(".")===-1){
            arr.push(".");
        }
        return arr.join("");
    }

    function equal(){
       return total;
    }

    function add(x) {
        console.log ("add:x", x);
        console.log("add:total", total);
        total += x;
        arr = [];
        console.log('add:memory ',memory,'add:total ',total,"add:arr ", arr)
        return total;
    }

    function subtract(x){
       this.validation(x);
       total -= x;
       return total;
    }

    function multiply(x){
       this.validation(x);
       total *= x;
       return total;
    }

    function divide(x){
       this.validation(x);
       total /= x;
       return total;
    }

    function recallMemory(){
        return memory;
    }

    function saveMemory(){
        if (typeof total !== "number"){
        return "ERR";
        }
        memory = total;
        return memory;
    }

    function clearMemory(){
        memory = 0;
        return memory;
    }

    function deposit(){
        register +=total;
        return register;
    }

    function withdrawal(){
        register-=total;
        return register;
    }

    function validation(){
        if (typeof x !=='number'){
            return 'Error';
        }
    }

 return {
     getRegister: getRegister,
     load: load,
     clear: clear,
     addDeci: addDeci,
     equal: equal,
     add: add,
     subtract: subtract,
     multiply: multiply,
     divide: divide,
     recallMemory: recallMemory,
     saveMemory: saveMemory,
     clearMemory: clearMemory,
     deposit:deposit,
     withdrawal:withdrawal,
     validation: validation
 };
};