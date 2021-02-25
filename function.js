//Anonymous function with function expression
let sayName=function(){
    console.log(`My name is Harry`);
}
sayName();

//IIFE
(
    function(){
        console.log(`I am Inevitable`);
    }
)();
    //IIFE Application
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

//Block Scope
{let house="Gryffindor";console.log(house)};
{let house="RavenClaw";console.log(house)};
{let house=`Slytherin`;console.log(house)};
