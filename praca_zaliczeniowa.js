// zadanie 1
function validate(mass, acceleration, force) {
    if (force == mass * acceleration) {
        return true;
    }
    return false;
}

// zadanie 2
function logIntoConsole() {
    console.log("Clicked");
}

var id = "button1";
var button1 = document.getElementById(id);
button1.addEventListener("click", logIntoConsole, false);

// zadanie 3
var tab = [1,2,3,4,5]

var newTab = tab.map(function (x) {
    return x + 1;
}).filter(function(x) {
    return x >= 3;
})

// zadanie 4
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log("Driving")
    }
}

car = new Car("1999", "BMW");
