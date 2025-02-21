function sortAge(event){
    event.preventDefault;
    flag=0;
    let table=document.querySelector('#table1');
    let rows=document.querySelectorAll('.table-row');
    let arr=Array.from(rows);
    arr.sort((a,b)=>{
        let age1=parseInt(a.cells[2].textContent);
        let age2=parseInt(b.cells[2].textContent);
        return age1-age2;
    });
    arr.forEach(row=>table.appendChild(row));
}
function findPID(event){
    event.preventDefault;
    let pid=parseInt(document.querySelector("#pid-input").value);
    let table=document.querySelector('table');
    let rows=document.querySelectorAll('.table-row');
    let arr=Array.from(rows);
    let ans=-1;
    let i;
    for(i=0;i<arr.length;i++){
        if(arr[i].cells[0].textContent==pid){
            ans=i;
            break;
        }
    }
    if(ans==-1){
        let element=document.createElement('tr');
        element.innerHTML='<td colspan="3" style="width:450px;text-align:center;">No Patient Found</td>';
        document.querySelector("#pid-found-status-table").innerHTML=element.outerHTML;
    }
    else{
        document.querySelector("#pid-found-status-table").innerHTML=rows[i].outerHTML;
    }
}
document.querySelector(".sort-button").addEventListener('click',sortAge);
document.querySelector("#pid-submit").addEventListener('click',findPID);

const rangeInputs=document.querySelectorAll(".range-input");
const rangeValues=document.querySelectorAll(".range-value");
max=50;
min=20;
function updateRangeValue(index){
    let num=rangeInputs[index].value;
    rangeValues[index].innerHTML=num;
    if(index==0){min=parseInt(num);}
    else{max=parseInt(num);}
    let rows=document.querySelectorAll('.table-row');
    let arr=Array.from(rows);
    let table2=document.querySelector('#table2');
    min=parseInt(min);
    max=parseInt(max);
    table2.innerHTML="";
    for(let i=0;i<arr.length;i++){
        let num=parseInt(arr[i].cells[2].textContent);
        if(num<=max&&num>=min){
            let element=document.createElement('tr');
            element.innerHTML=rows[i].innerHTML;
            table2.append(element);
        }
    }
}
rangeInputs.forEach((i,index)=>{
    updateRangeValue(index);
    i.addEventListener('input',()=>updateRangeValue(index));
})