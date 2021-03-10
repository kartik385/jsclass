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
