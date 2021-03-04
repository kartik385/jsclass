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
