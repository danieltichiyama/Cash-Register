var calculatorModule = function() {
    var memory=0;
    var total=0;
    var register =0;

    function getRegister (){
        return register;
    }

    function load(x){
      this.validation(x);
       total = x;
       console.log(total);
       return total;
    }

    function equal(){
       return total;
    }

    function add(x) {
       this.validation(x);
       total += x;
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
        if (typeof memory !=="number"){
            return 'ERR';
        }
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