//#6 Define count object with 2 functions add and reset.
const count = {
    counter: 0,
    add: function(){
  	    this.counter++;
    },
    reset: function(){
  	    this.counter = 0;
    }
}
count.add();
count.add();
console.log(count.counter);
count.reset();
console.log(count.counter);

//#8 Add a make_adder function to increment by parameter
const countI = {
	counter: 0,
  add: function(){
  	this.counter++;
  },
  reset: function(){
  	this.counter = 0;
  },
  make_adder: function(inc){
  this.counter += inc;
  }
}
countI.make_adder(0);
console.log(countI.counter);
countI.make_adder(2);
console.log(countI.counter);
countI.reset();
console.log(countI.counter);


// #10 revealing module pattern to create employee object

var employee = (function() {
    let name = null;
    let age = null;
    let salary = null;
    const getAge = function (){
        return age;
    }
    const getSalary = function (){
        return salary;
    }
    const getName = function (){
        return name;
    }
    const setAge = function (newAge){
        age = newAge;
    }
    const setName = function (newName){
        name = newName;
    }
    const setSalary = function (newSalary){
        salary = newSalary;
    }
    const increaseSalary = function (percentage){
        salary = getSalary(); + percentage * getSalary();
    }
    const incrementAge = function (){
        age = getAge() + 1;
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    };
})();

// #11 Adding public address field and setAddress and getAddress methods to above employee object

var employeeI = (function() {
    let name = null;
    let age = null;
    let salary = null;
    let address = null;
    const getAge = function (){
        return age;
    }
    const getSalary = function (){
        return salary;
    }
    const getName = function (){
        return name;
    }
    const setAge = function (newAge){
        age = newAge;
    }
    const setName = function (newName){
        name = newName;
    }
    const setSalary = function (newSalary){
        salary = newSalary;
    }
    const increaseSalary = function (percentage){
        salary = getSalary(); + percentage * getSalary();
    }
    const incrementAge = function (){
        age = getAge() + 1;
    }
    const getAddress = function (){
        return address;
    }
    const setAddress = function (newAddress){
        address = newAddress;
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        getAddress: getAddress,
        setAddress: setAddress
    };
})();
employeeI.setAddress("fairfield");
console.log(employeeI.getAddress());
