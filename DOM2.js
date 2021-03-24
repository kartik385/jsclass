//Eventszzz
        //Event listeners
// let button1=document.querySelector(`.btn`);
// button1.addEventListener(`click`,()=>{
//     console.log(`clicked`);
//     document.body.classList.toggle(`active`);
// })
let list=document.querySelectorAll(`ul li`);
list.forEach(x=>{
    x.addEventListener(`click`,(e)=>{
        e.preventDefault();
        console.log(e.target);
        let drops=e.target.parentNode.children[1];
        if(drops){
            drops.classList.toggle(`show`);
        }
    });
});