
// // console.log(window.document);
// // console.log(window.navigator);
// // console.log(window.screen);
// // console.log(window.history);
// // console.log(window.location);

// //Get lattitude and longitude;

function getLocation() {
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition((x)=>{
            console.log(x.coords.latitude);
            document.write(
                `My current lattitude is <h1>${x.coords.latitude}</h1>
                My current longitude is <h1>${x.coords.longitude}</h1>`

            );
        });

    }
    else{
        document.write(`Failed to find your coordinates`);
        console.log(`Not supported`);
    }
    
 }
 getLocation();

// //online or not

// // console.log(window.navigator.online);

// //  if(window.navigator.online===true){
// //      document.write(`Hello`);

// //  }
// //  else{
// //      document.write(`Hell!`);
// //  }

// //video

// // window.navigator.getUserMedia=window.navigator.getUserMedia||window.navigator.webkitGetUserMedia;
// // if(window.navigator.getUserMedia){
// //     window.navigator.getUserMedia(
// //         {audio:true,video:{height:600,width:600}},
// //         stream=>{
// //             let video=document.querySelector("video");
// //             video.srcObject=stream;
// //             video.onloadedmetadata=()=>video.play();
// //         },
// //         err=>{
// //             console.log(`Error :${err.name}`)
// //         });
// // }
// // else{
// //     console.log(`Not supported!`);
// // }

// console.log(window.navigator.userAgent);

// console.log(window.navigator.appVersion);

// console.log(window.navigator.product);

// console.log(window.navigator.vendor);

// console.log(window.navigator.language);

// console.log(window.navigator.cookieEnabled);

// console.log(window.navigator.javaEnabled);

// console.log(window.navigator.serviceWorker);

// //screen

// console.log(window.screen);
// console.log(window.screen.width);

// if((window.screen.width<1024)){
//     console.log(`Low Resolution`)
// }
// else{
//     console.log(`Normal Resolution`)
// }

// document.getElementById("btn").addEventListener("click",e=>{
//     window.location.assign("https://www.spacex.com");
// });

