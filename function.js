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


//function hoisting

display();
function display() {
    console.log(`My King`)
    
}

//will not work
/*honour();
let honour=function(){
    console.log(`Majesty`);
}*/

//Default parameter

function teachers(name=`Lockhart`,course=`DADA`){
    return{name,course};
}
console.log(teachers());

//Arrow function
        //Normal function
let houseKeeper=function(){
    console.log(`I am Normal Hagrid`);
}
houseKeeper();
        //Arrow Function
let houseKeeperA=()=>{
    console.log(`I am Arrow Hagrid`);
}
houseKeeperA();
        //Single Line
let houseKeeperS=()=>console.log(`I am Single Hagrid`);
houseKeeperS();

let add=(a,b)=>a+b;
console.log(add(3,4));

      //Arrow function without parameters
let houseKeeperU=_=>console.log(`I am Under Hagrid`);
houseKeeperU();

      //Arrow function with one parameter
let gateKeeper=name=>name;
console.log(gateKeeper(`Hagrid`));

      //Arrow function with array
let subjects=(x,y)=>[x,y];
console.log(subjects(`DADA`,`Herbology`));

    //Arrow Function with objects
let prof=(x,y)=>({x,y});
console.log(prof(`Snape`,`Macgonnegell`));

/*
    Argument object is
     invalid
let dispaly=_=>arguments;
console.log(dispaly(`Harry`,`Ron`));
    (uncaught error:Not Defined)
*/

  //No this Binding

let userArrow={
    name:`NoobMaster`,
    lvl:7,
    game:`Fortnite`,
    getInfo:_=>console.log(`${this.name}:${this.ganme}:${this.lvl}`)
};
userArrow.getInfo();

//Call Back Function
function callName() {
    console.log(`My name is Ron`);
}
function print(callname){
    callName();
}
print(callName);

let Add=(a,b)=>a+b;
let Multiply=(a,b)=>a*b;
function
 calculation(a,b,callback){
    return callback(a,b);
}
console.log(calculation(2,1,Add));

//Function closure

let outerWall=`Inside Outer Wall`;

function middleBLock(){
    let middleWall=`Inside Middle Wall`;
    function innerWall(){
        let innerWall=`Inside Inner Wall`;
        console.log(outerWall);
        console.log(middleWall);
        console.log(innerWall);
    }
    innerWall(); 

}
middleBLock();


