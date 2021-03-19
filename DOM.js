//HTML collection

let allElements=document.all;

        //converting arraylike to an array

        //Loooping it
[...allElements].forEach(x=>console.log(x));

//To fininding anchor tags


console.log(document.links)//return all links as array

for(let link of document.links){
    link.style.textDecoration="none";
}

//selecting element


        //get element by id
let demo=document.getElementById(`demo`);
console.log(demo);


        //get element by class
let class1=document.getElementsByClassName(`one`);
for(let key of class1){
    console.log(key);                               
}

        //get element by tag name
let tag1=document.getElementsByTagName(`article`);
for(let key of tag1){
    console.log(key);
}

        //querySelector

let query1=document.querySelector("#demo");
console.log(query1);//returns first element


let queryAll=document.querySelectorAll(`article`);
console.log(queryAll);
queryAll.forEach(x=>console.log(x));//returns all elements with article element

    //perticular nested tag
let div1=document.querySelector(`#super .sub div`);
console.log(div1);

//change the content

        //text content(only text)
div1.textContent="Cant touch this!"

        //innerHtMl(can use tags)
div1.style.color="red";
div1.innerHTML="<h1>Cant touch this!</h1>"
div1.style.backgroundColor="green";
div1.style.transform=scale(4);

//Adding attributes(setAttribute)

div1.setAttribute("title","How do yu ")

//adding classes

div1.className="moris";      

