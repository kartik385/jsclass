//Array Declaration
let teams=[`NZ`,`ENG`,`AUS`,`IND`];
console.log(`Size:${teams.length}`);
console.log(teams);
console.log(typeof teams);

//Indexing of Array
let team1=teams[0];
let team2=teams[1];
console.log(team1);

//Array Constructor
let teamC=new Array(`Eng`,`NZ`,`Aus`)
console.log(teamC);

//IS Array
console.log(Array.isArray(teamC));
console.log(this);

//Insert Values to Array
let teamD=[];
teamD[0]=`Pak`;
teamD[1]=`Ind`;
teamD[2]=`SL`;
console.log(teamD);

//Prototype Methods

    //Concat
let teamE=teamD.concat(teamC);
console.log(teamE);

let player1=`Jamie`;
let player2=[`Dan`];
let player3=player2.concat(player1);
console.log(player3);


    //Spread Operator
let teamF=[...teamE,...teamC];
console.log(teamF);

    //Split method
let user=`Anakin Skywalker`;
let nameArray=user.split("");
console.log(nameArray);

let wordArray=user.split(" ");
console.log(wordArray);

   //From MEthod
let fromArray=Array.from(user);
console.log(fromArray);

//Array looping


        //For of loop
let numbers=[20,30,40];
for(let number of numbers){
    console.log(number);
}

    //For of argumnets
let players=function(){
    for(let player of arguments){
        console.log(player);
    }
}
players(`JON JONES`,`Khabib`,`Connor`);

    //For Each
numbers.forEach((value,index,array)=>{
    console.log(array);
    console.log(`Index=${index}:Value=${value}`);
});

//Map method

numbers.map((value,index,array)=>console.log(value));

            //Map V/S For Each

        //Map returns

let y=numbers.forEach(value=>value*2);//Returns Void
console.log(y);//Undefined

let x=numbers.map(value=>value*5);//Returns a new Array
console.log(x);

        //Supports chaining    



//Push method
let movies=[`Avatar`,`Tenet`];
movies.push(`Interstellar`);
console.log(movies);
//Appends elements at last



//Unshift method
movies.unshift(`Terminator`);
console.log(movies);
//Appends elemnets at first

//Pop method
movies.pop();
console.log(movies);
//Delete last element

//Shit Method
movies.shift();
console.log(movies);
//Delete first element

//Splice Method

let jedis=[`Anakin`,`Obi-Wan`,`Luke`,`Rey`];
jedis.splice(0,0,`Quin-Gon`);
console.log(jedis);//Adds Element to the 0th position

//IndexOf
console.log(jedis.indexOf(`Anakin`));//Returns -1 if its not exists

//Last Index of
jedis.push('Luke');
console.log(jedis.lastIndexOf(`Luke`));

//Filter

let runs=[25,30,10,0,105,98,71,16,19];
let filteredRuns=runs.filter(x=>x>=25);
console.log(filteredRuns);

let users=[`Annie`,`Reiner`,`Reiner`,`Riener`,`Eren`,`Eren`];
let filteredUsers=users.filter((value,index,array)=>{
    (array.indexOf(value)===index)
});
console.log(filteredUsers);

//Sort Method
let values=[21,11,87,98,41,3,35,100];
console.log(values.sort());
let sortedValues=values.sort((a,b)=>{
    if(a>b)return 1;
    else if(a<b) return -1;
    else return 0;
});    
console.log(sortedValues);

//Reverse String
let myName=`Kartik`;
let myNameArray=myName.split("");
let reverseName=myNameArray.reverse().join("");
console.log(reverseName);

//Using Function
let reverseNameF=(str)=>{
    let reverseName=[...str].reverse().join("");
    return reverseName;
}
console.log(reverseNameF('Kartik'));

