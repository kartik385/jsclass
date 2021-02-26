//Anonymous function with function expression
let sayName=function(){
    console.log(`My name is Harry`);
}
sayName();

//IIFE function
(
    function(){
        console.log(`I am Inevitable`);
    }
)();
    //IIFE function  Application
(
    function(){
        let house=`Gryfffindor`;
        console.log(house);
    }
)();
(
    function(){
        let house=`Slytherin`;
        console.log(house);
    }
)();
(
    function(){
        let house=`RavenClaw`;
        console.log(house);
        console.log(this);
    }
)();

//Block Scope(Alternative for IIFE application)
{let house="Gryffindor";console.log(house)};
{let house="RavenClaw";console.log(house)};
{let house=`Slytherin`;console.log(house)};

//Providing parameters(Function with parameters)

function addNumber(a,b) {
    return a+b;
    
}
addNumber(5,4);

function student(name,house,hp) {
    return{name,house,hp};
    
}
let stu1=student(`Ron`,`Gryffindor`,50);
let stu2=student(`Cedric`,`HufflePuff`,100);
console.log(stu1);
console.log(stu2);


//Argument object
function user() {
    return arguments;
    
}
console.log(user("Kartik",18,'manr'));

//Rest parametr
function colors(...args) {
    return args;
    
}
console.log(colors(`red`,`green`,`pink`));

function indInfo(name,house,...subjects){
    return{name,house,subjects};
}
let stu3=indInfo(`Draco`,`Slytherin`,`Quiddich`,`Transformation`,`DADA`,`Herbology`);
console.log(stu3);
