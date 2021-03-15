// //1primitive type
// let x=3;
// let y=4;
// y=x;
// x=7;
// console.log(y);

// //Reference Type

// function Car(speed,seats,fuel) {
//     this.speed=speed;
//     this.seats=seats;
//     this.fuel=fuel;
    
// }
// let tesla=new Car(250,5,`Electric`);
// let porche=tesla;
// tesla.speed=300;
// console.log(porche); 

// {
//     var x=10;
// }
// console.log(x);


function car() {
    return arguments;
}
console.log(car(`Honda`,`ree`,15549,`Text`));
