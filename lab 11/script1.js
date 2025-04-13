/* 1st Part */
let wrapper=document.querySelector(".part1");
let table=document.createElement("table");
let num=0;
for(let i=0;i<3;i++){
    let row=table.insertRow();
    for(let j=0;j<3;j++){
        let cell=row.insertCell();
        cell.innerText=num++;
    }
}
table.border=2;
wrapper.append(table);

/* 2nd Part */
wrapper=document.querySelector(".part2");
let button=document.createElement("button");
button.innerText="Click Here";
button.style.background="red";
button.addEventListener("mouseover",function(event){
    event.target.style.background="green";
},true);
button.addEventListener("mouseout",function(event){
    event.target.style.background="red";
},true);
wrapper.append(button);

// 3rd Part
wrapper=document.querySelector(".part3");
let textbox=document.createElement("input");
textbox.setAttribute("type","textbox");
wrapper.append(textbox);
let message=document.createElement("p");
message.innerText="Hello! You changed the text.";
message.style.visibility="hidden";
wrapper.append(message);
textbox.addEventListener("change",function(event){
    message.style.visibility="visible";
},true);

// 4th part
wrapper=document.querySelector(".part4");
let input=document.createElement("input");
input.type=textbox;
wrapper.append(input);

button=document.createElement("button");
button.innerText="Add Item"
wrapper.append(button);

wrapper.append(document.createElement("br"));

let list=document.createElement("ul");
wrapper.append(list);
button.ondblclick=()=>{
    let item=document.createElement("li");
    item.innerText=input.value;
    list.append(item);
};

// 5th part
wrapper=document.querySelector(".part5");
let input1=document.createElement("input");
let input2=document.createElement("input");
input1.type=textbox;
input2.type=textbox;
input2.value=0;
wrapper.append(input1,input2);
let count=0;
document.addEventListener("keypress",function(event){
    count++;
    input2.value=count;
},true);

