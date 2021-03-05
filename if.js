/*let year,message;
year=2016;
if((year%4===0)||(year%100===0)){
    message=`This is leap year`;
}
else{
    message=`not a leap year`;
}
console.log(message);
*/


/*let marks,message,alert;
marks=[60,58,49,78];
let sum=0;
alert=true;
for(let key of marks){
    if(key<=35)alert=false;
    sum+=key;
}
if((sum/400>=0.75)&&alert){
    message=`A`;
}
else if((sum/400>=0.6)&&alert){
    message=`B`
}
else if((sum/400<=0.6)&&alert){
    message=`C`
}
else{
    message=``;
}
console.log(message);
*/
let day=16;
switch (day) {
    case 07:
        console.log(`Rose Day`);
        break;
    case 08:
        console.log(`Propose Day`);
        break;
    case 09:
        console.log(`Chocolate Day`);
        break;
    case 10:
        console.log(`Teddy Day`);
        break;
    case 11:
        console.log(`Promise Day`);
        break;
    case 12:
        console.log(`Hug Day`);
        break;
    case 13:
        console.log(`Kiss Day`);
        break;
    case 14:
        console.log(`Love Day`);
        break
    default:
        console.log(`Enter a Valid Date`);
        break;
}
