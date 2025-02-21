function compute(){
    let e1=document.querySelector('#i1');
    let a=parseInt(e1.value);
    let e2=document.querySelector('#i2');
    let c=parseInt(e2.value);
    let total=(a*10)+(c*5);
    let e3=document.querySelector('.output-value');
    e3.textContent=total;
}