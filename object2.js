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