// 1st part
let h=0,m=0,s=0;
let residue=0,interval=0;
let startTime=new Date();
let timerStatus=false;
function updateTimer(){
    if(timerStatus){ 
        let now=new Date();
        interval=Math.abs(now-startTime);
        interval+=residue;
        s=Math.floor(interval/1000);
        m=Math.floor(s/60);
        s%=60;
        h=Math.floor(m/60);
        m%=60;
        document.querySelector(".second-div").textContent=s;
        document.querySelector(".minute-div").textContent=m;
        document.querySelector(".hour-div").textContent=h;
        // console.log(timerStatus);
    }
}
function startTimer(event){
    event.preventDefault();
    if(timerStatus){return;}
    startTime=new Date();
    timerStatus=true;
}
function stopTimer(event){
    event.preventDefault();
    residue=interval;
    timerStatus=false;
}
function resetTimer(event){
    event.preventDefault();
    timerStatus=false;
    residue=0;
    document.querySelector(".second-div").textContent=0;
    document.querySelector(".minute-div").textContent=0;
    document.querySelector(".hour-div").textContent=0;
}

document.querySelector(".start-button").addEventListener("click",startTimer);
document.querySelector(".stop-button").addEventListener("click",stopTimer);
document.querySelector(".reset-button").addEventListener("click",resetTimer);

let t=setInterval(updateTimer,1000);


// 2nd part
document.querySelector("#age-output").addEventListener("mouseover",function(event){
    let dob=new Date(document.querySelector("#dob-input").value);
    let now=new Date();
    let diff=now-dob;
    diff/=(1000*60*60*24*365);
    event.target.value=Math.floor(diff);
    console.log(dob);
},true);

//3rd Part
function updateCount(event){
    event.preventDefault();
    let output=document.querySelector("#count-output");
    count=event.target.value.length;
    output.value=count;
}
document.querySelector("#text-input").addEventListener("input",updateCount,true);
document.querySelector("#count-output").value=0;