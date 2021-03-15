//object creation
let playerA={
    name:`Lebron James`,
    age:32,
    country:`USA`,
    team:`Los Angeles Lakers`,
    points:275
};
console.log(playerA);

//accessing value(not a good way!😔)
let name=playerA[`name`];
let age=playerA[`age`];
let country=playerA[`country`];
let team=playerA[`team`];
let points=playerA[`points`];
console.log(`Hi i am ${name},i am from ${country},i am ${age} years of old,i play for ${team},i scored ${points} in this season`);

//accessing value(nice way!😄)

let characterA={
    name:`Harry`,
    house:`Gryffindor`,
    position:`Seeker`
};

let charName=characterA.name;
let charHouse=characterA.house; 
let charPosition=characterA.position;
console.log(`Hi i am ${charName},i am a ${charPosition} playing for my house ${charHouse}`);

//filling the value(wierd way!😒)

let playerB={};
playerB.name=`Kobe Braynt`;
playerB.country=`USA`;
playerB.team=`Los Angeles Lakers`;
console.log(playerB);

//constructor way

let playerC=new Object();
playerC.name=`Michel Jordon`;
playerC.country=`USA`;
playerC.team=`Miami Heat`;
console.log(playerC);

//Constructor function way(nice way!😍)

function Player(name,country,team,points) {
    this.name=name;
    this.country=country;
    this.team=team;
    this.points=points; 
}
let playerD=new Player(`James Hordon`,`USA`,`Miami Heat`,174);
let playerE=new Player(`Victor Donovic`,`Croatia`,`Dallas Maverics`,134);
console.log(playerD);
console.log(playerE);

//assign method

let username={name:`Harry`};
let password={password:`Harry@123`};
let mergeObject1=Object.assign(username,password);
console.log(mergeObject1);

//object cannot store multiple keys

let singer1={name:`Rihanna`,song:`We found love`};
let song1={song:`Diamonds`};
let singer1U=Object.assign(singer1,song1);
console.log(singer1U);//Takes Diamonds as song property (its latest)

//looping over object
    //for in
for(let key in playerA){
    console.log(`${key}➡️ ${playerA[key]}`);
}

//Multiple objectd
let candidates=[
    {
        name:`Joe Biden`,
        country:`Usa`,
        ranking:1
    },
    {
        name:`Donald Trump`,
        country:`USA`,
        ranking:3
    },
    {
        name:`Kanye West`,
        country:`USA`,
        ranking:1
    }
]
let output=``;
for(let player of candidates){
    output+=`
    <section>
        <article>
            <div>
                <h1>${player.name}</h1>
                <div>
                <span>Country :${player.country}</span><span>Ranking:${player.ranking}</span>
                </div>
            </div>
        </article>
    </section>
    `
}
document.write(output);
