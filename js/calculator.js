var calculatorModule = function() {
    var memory=[];
    var total;
    var register = 0;

    function getRegister (){
        console.log("getRegister:register",register);
        return register;
    }

    function load(x){
      console.log(x);
      if (parseFloat(x) !== "number"){
          memory[memory.length] = x;
          console.log("load:memory",memory);
          return memory[memory.length-1];
      }
      memory[memory.length] = parseFloat(x);
      console.log("load:memory",memory);
      return memory[memory.length];
    };

    function clear(){
        total = 0;
        memory = [];
        return total;
    }

    function calculate (){
        let i = 0;
        // debugger;
        while(memory.length>2){
            if(typeof memory[i] ==="number"){
                memory[i]=memory[i];
            }else if(memory[i]==="+"){
                var res = add(memory[i-1],memory[i+1]); 
                memory.splice(0,3,res);
                total = res;
                console.log("calculate:memory",memory,"calculate:total",total)
            }else if(memory[i]==="-"){
                var res = subtract(memory[i-1],memory[i+1]); 
                memory.splice(0,3,res);
                total = res;
                console.log("calculate:memory",memory,"calculate:total",total)
            }else if(memory[i]==="x"){
                var res = multiply(memory[i-1],memory[i+1]); 
                memory.splice(0,3,res);
                total = res;
                console.log("calculate:memory",memory,"calculate:total",total)
            }else if(memory[i]==="/"){
                var res = divide(memory[i-1],memory[i+1]); 
                memory.splice(0,3,res);
                total = res;
                console.log("calculate:memory",memory,"calculate:total",total)
            };
            i++;
        }
        if (memory[memory.length-1]==="="){
            memory = [];
            console.log("memory after equals",memory);
        }
        return total;
    }

    function add(x,y) {
        sum = x+y;
        return sum;
    }

    function subtract(x,y){
        diff = x-y;
        return diff;
    }

    function multiply(x,y){
       prod = x*y;
       return prod;
    }

    function divide(x,y){
       quot = x/y;
       return quot;
    }

    function deposit(x){
        register +=x;
        console.log(x);
        console.log("deposit:register",register);
        return x;
    }

    function withdraw(x){
        register-=x;
        console.log(x);
        console.log("withdraw:register",register);
        return x;
    }

 return {
     getRegister: getRegister,
     load: load,
     clear: clear,
     calculate: calculate,
     add: add,
     subtract: subtract,
     multiply: multiply,
     divide: divide,
     deposit:deposit,
     withdraw:withdraw,
 };
};