//using variables inside objects

      //traditional way

let singer1=`Bruno Mars`
let song1=`Just the way you are!`

let obj1={
    singer1:singer1,
    song1:song1
}

      //ES6 way

let obj2={
    singer1,
    song1
}

console.log(obj1);
console.log(obj2);

//using reserved key words as properties

let obj3={
    if:`if`,
    for:`for`
}
console.log(obj3);

//using hyphens in key

let obj4={
    "Content-type":`Application/json`
}
console.log(obj4);

//concating with spread operator


let singer2={name1:`Rihanna`,song1:`We found love`};
let singer3={name2:`Ollie Bars`,song2:`Happy`};
let singerC1={...singer2,...singer3};
console.log(singerC1);

//Objects are mutable with const

const obj5={
    name:`Harry`
}
obj5.name=`Riddle`;
console.log(obj5);

//Freez property

let singer4={
    name:`Justin Timberlake`,
    song:`Senorita`
}
Object.freeze(singer4);
singer4.name=`NSync`;
console.log(singer4);

//key and value static methods

let singer5={
    name:`Weekend`,
    song:`Starboy`,
    country:`USA`,
    year:2016
}
let singer5Keys=Object.keys(singer5);
let singer5Values=Object.values(singer5);
console.log(singer5Keys);
console.log(singer5Values);

//convert object to array

let singer5Array=Object.entries(singer5);
console.log(singer5Array);

//this keyword in object

let obj6={
    name:`Tom`,
    password:3214,
    userInfo:function(){
        console.log(this.name);
    }
}
obj6.userInfo();//for normal functions this refers current object;

let obj7={
    name:`Larry`,
    password:1234,
    userInfo:()=>{
        console.log(this);
    }
}
obj7.userInfo();//for arrow functions this refers window object

//call method


let singer6={
    name:`Ava Max`,
    song:`Sweet But Psycho`,
    getInfo:function(){
        console.log(`My name is ${this.name} & my song is ${this.song}` );
    }
}

let singer7={
    name:`Eminem`,
    song:`Godzilla`
}

let singer8={
    name:`Marshmellow`,
    song:`Happier`
}
singer6.getInfo();
singer6.getInfo.call(singer7);
singer6.getInfo.call(singer8);

//2nd way

function getInfoF() {
    return `I am ${this.name},my song is ${this.song}`;
    
}
console.log(getInfoF.call(singer6));
console.log(getInfoF.call(singer7));
console.log(getInfoF.call(singer8));

//apply

function getInfoC(billboardUS,billboardUK) {
    return `${this.song} composed by ${this.name} placed ${billboardUS} in US and ${billboardUK} in UK`;
    
}
console.log(getInfoC.call(singer6,4,5));
console.log(getInfoC.apply(singer7,[1,2]));//apply takes arguments as in form of array

function getInfoA(...args){
    return `${this.song} composed by ${this.name} placed in ${args}`;
}
console.log(getInfoA.apply(singer8,[7,8,9,10]));

//bind

let bound=getInfoA.bind(singer6);
console.log(bound);// bind creates new function

//call example 2

let numbers={num:10};
function calculate(num2,num3) {
    return this.num+num2+num3;
    
}

console.log(calculate.call(numbers,10,20));
console.log(calculate.apply(numbers,[10,20]))
let resultWithBind=calculate.bind(numbers,10,20);
console.log(resultWithBind);
console.log(resultWithBind());

