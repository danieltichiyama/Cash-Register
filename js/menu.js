var menuModule = (function (){

var mainMenuArr = ["Ramen","Rice","Sides","Drinks","Desserts"];
var menuItems = [
    {name: "Gold Ramen",cat:"Ramen",price:9.50},
    {name: "Red Ramen",cat:"Ramen",price:10.50},
    {name: "Black Ramen",cat:"Ramen",price:10.50},
    {name: "Gold Tsukemen",cat:"Ramen",price:10.50},
    {name: "Red Tsukemen",cat:"Ramen",price:11.50},
    {name: "Black Tsukemen",cat:"Ramen",price:11.50},
    {name: "Sukiyaki Bowl",cat:"Rice",price:6.50},
    {name: "Salt Bowl",cat:"Rice",price:5.95},
    {name:"Gyoza",cat:"Sides",price:6.75},
    {name:"French fries",cat:"Sides",price:6.50},
    {name:"Asahi Super Dry",cat:"Drinks",price:4.50},
    {name:"Vanilla Ice Cream",cat:"Desserts",price:4.00},
];

var items = document.getElementById("items");
var mainMenu = document.getElementById("mainMenu");

for (i=0;i<mainMenuArr.length;i++){
    var mainMenuButton = document.createElement("button");
    mainMenuButton.className = "menu";
    mainMenuButton.innerHTML = mainMenuArr[i];

    mainMenuButton.addEventListener('click',makeSubMenu);

//add event listener to open submenu here
    mainMenu.appendChild (mainMenuButton);
};

function makeSubMenu (){
    var section = document.createElement("section");
    section.id = this.innerHTML;
    for (i=0;i<menuItems.length;i++){
        if (menuItems[i].cat!==this.innerHTML){
            console.log("not a match");
        }else{
            var button = document.createElement("button");
            button.className = "menu1";
            button.value = menuItems[i].price;
            button.innerHTML = menuItems[i].name;

            button.addEventListener("click",function (){
                var ticket = document.getElementById("ticket");
                var newLine = document.createElement("li");
                var minusButton = document.createElement ("button");
                var priceBox = document.createElement ("div");
                priceBox.innerHTML = this.value;
                minusButton.innerHTML = "x";
                newLine.innerHTML = this.innerHTML +" ";
                newLine.appendChild (priceBox);
                newLine.appendChild (minusButton);
                ticket.appendChild (newLine);
            })
            //add event listener to add button.value to the display.value here
            section.appendChild(button);
            console.log(button);
        }
    }
    items.appendChild (section);
    var menus = document.querySelectorAll(".menu");
    for (j=0;j<menus.length;j++){
        menus[j].addEventListener("click",function(){
            section.remove();
        })
    }
};

})();