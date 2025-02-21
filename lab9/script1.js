let table=document.querySelector('table');
let arr=[55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65];
console.log(arr);
let f=document.createDocumentFragment();
let hot=0,pleasent=0,cold=0;
for(let i in arr){
    let category="";
    if(arr[i]>=85){hot++;category="HOT";}
    else if(arr[i]<85&&arr[i]>=60){pleasent++;category="PLEASENT";}
    else{cold++;category="COLD";}
    let newRow=document.createElement('tr');

    let td1=document.createElement('td');
    td1.innerText=parseInt(i)+1;
    let td2=document.createElement('td');
    td2.innerText=arr[i];
    let td3=document.createElement('td');
    td3.innerText=category;
    
    newRow.append(td1,td2,td3);
    f.append(newRow);
}

let newElement=document.createElement('div');
newElement.innerHTML='<p>No of HOT days: '+hot+'</p><p>No of PLEASENT days: '+pleasent+'</p><p>No of COLD days: '+cold+'</p>';
document.body.appendChild(newElement);

let headerRow=document.createElement('tr');
let th1=document.createElement('th');
th1.innerText="Day"
headerRow.appendChild(th1);

let th2=document.createElement('th');
th2.innerText="Temperature"
headerRow.appendChild(th2);

let th3=document.createElement('th');
th3.innerText="Category"
headerRow.appendChild(th3);

table.appendChild(headerRow);

table.appendChild(f);