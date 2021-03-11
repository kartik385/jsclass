//Reduce method
let name=[`H`,`a`,`r`,`r`,`y`];
let result=name.reduce((a,c)=>a+c);
console.log(result);

let values=[12,15,74,78];
console.log(values.reduce((a,c)=>a+c));

let uname=['k',`i`,`t`,`r`,`a`,`k`];
// let result1=uname.reverse().reduce((a,c)=>a+c);
// console.log(result1);

//Reduce Right
console.log(uname.reduceRight((a,c)=>a+c));

//2-D array
let names=[[`Harry`,`Ron`,`Hermoine`],
            [`Draco`,`Crab`,`Goyle`],
            [`Cho`,`Finnick`],
            [`Cedric`]
];
names[0].forEach(x=>console.log(x));

//Example 2
let array=[
    [1,1],
    [2,2],
    [3,3],
    [4,4],
    [5,5]
];
let step1=[]
array.forEach(x=>step1.push(x.reduce((a,c)=>a+c)));
console.log(step1.reduce((a,c)=>a+c));

//flat method

let array1=[
    [1,2,3],
    [1,5,6],
    [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[2,1,3]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
];
let result2=array1.flat(Infinity);
let output=[...result2].reduce((a,c)=>a+c);
console.log(output);

//Find method

let nums=[10,21,15,20];
console.log(nums.find(x=>x>15));//Returns first value that obeys the condition

//FindIndex
console.log(nums.findIndex(x=>x>15));

//fill method

let actions=Array(50);
actions.fill(`fight 💢`);
console.log(actions);

//Entries method

let jobs=[`President`,`CEO`,`CTO`,`COO`];
for(let x of jobs.entries()){
    console.log(x);
}

//every method

let ages=[17,18,19,31,35,48];
let decide=ages.every(age=>age>=18);
let message=decide?` All are Eligable for voting`:`Not all are eligable`;
console.log(message);

//some method

let decide2=ages.some(age=>age>=18);
let alert=decide2?`Some are Eligable for voting`:`Not all are eligable`;
console.log(alert);

//includes method

let usernames=[`Draco`,`Harry`,`Ron`,`Hermoine`];
let message1=(usernames.includes(`Draco`))?`Draco is present`:`Draco is absent`;
let message2=(usernames.includes(`Neville`))?`Neville is present`:`Neville is absent`;
console.log(`${message1}; ${message2}`);

//slice method

let gryffindorsBoys=usernames.slice(1,3);
console.log(gryffindorsBoys);
let gryffindors=usernames.slice(1);
console.log(gryffindors);


