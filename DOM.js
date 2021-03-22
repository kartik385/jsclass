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

//Adding attributes(setAttribute)

div1.setAttribute("title","How do yu ")

//adding classes

div1.className="moris";      

//create element in dom

let keto=document.createElement(`article`);
keto.textContent="Shut the **** up!";
console.log(keto);

//append

div1.append(keto);//adds the element after the root element

//prepend

div1.prepend(keto)//adds before root element


let form=document.createElement(`form`);

//label elements
let userNameLabel=document.createElement(`label`);
let userPasswordLAbel=document.createElement(`password`);

//input elements

let userNameInput=document.createElement(`input`);
let userPasswordInput=document.createElement(`input`);

//adding attributes

userNameLabel.setAttribute(`for`,`username`);

userPasswordLAbel.setAttribute(`for`,`userpassword`);

userNameInput.setAttribute(`type`,`text`);

userNameInput.setAttribute(`id`,`username`);

userNameInput.setAttribute(`name`,`username`);

userNameInput.placeholder=`Enter your Damn name!`;

userPasswordInput.type=`password`;

userPasswordInput.id=`userpassword`;

userPasswordInput.name=`userpassword`;

userPasswordInput.placeholder=`Enter your password idiot!`;

let butt=document.createElement(`button`);
butt.innerText=`Submit`;

butt.name=`Submit`;

let divF1=document.createElement(`div`);

let divF2=document.createElement(`div`);



form.action=`#`;

form.method=`GET`;

form.appendChild(divF1);

form.appendChild(divF2);

divF1.appendChild(userNameLabel);

divF1.appendChild(userNameInput);

divF2.appendChild(userPasswordLAbel);

divF2.appendChild(userPasswordInput);

divF2.appendChild(butt);
document.body.appendChild(form);


let i=1;
for(let a of [...document.links]){
        a.className=`link${i}`;
        a.textContent=`Hi${i}`
        a.style.textDecoration=`none`;
        a.style.padding=`10px`;
        a.style.margin=`5x`;
        a.style.color=`red`;
        i++;
}