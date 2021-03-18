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