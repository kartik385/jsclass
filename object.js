//object creation
let playerA={
    name:`Lebron James`,
    age:32,
    country:`USA`,
    team:`Los Angeles Lakers`,
    points:275
};
console.log(playerA);

//accessing value(not a good way!)
let name=playerA[`name`];
let age=playerA[`age`];
let country=playerA[`country`];
let team=playerA[`team`];
let points=playerA[`points`];
console.log(`Hi i am ${name},i am from ${country},i am ${age} years of old,i play for ${team},i scored ${points} in this season`);

//accessing value(nice way!)

let characterA={
    name:`Harry`,
    house:`Gryffindor`,
    position:`Seeker`
};

let charName=characterA.name;
let charHouse=characterA.house;
let charPosition=characterA.position;
console.log(`Hi i am ${charName},i am a ${charPosition} playing for my house ${charHouse}`);

