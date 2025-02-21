function findBMI(w,h){
    return (w)/(h**2);
}
function findCriteria(bmi,gender){
    if(gender=="female"){
        if(bmi<=17.5){return "Anorexia";}
        else if(bmi<=19.1&&bmi>=17.51){return "Underweight";}
        else if(bmi<=25.8&&bmi>=19.11){return "Ideal Range";}
        else if(bmi<=27.3&&bmi>=25.81){return "Marginally Overweight Range";}
        else if(bmi<=32.3&&bmi>=27.31){return "Overweight Range";}
        else if(bmi>32.3){return "Obese Range";}
    }
    else{
        if(bmi<=17.5){return "Anorexia";}
        else if(bmi<=20.7&&bmi>=17.51){return "Underweight";}
        else if(bmi<=26.4&&bmi>=20.71){return "Ideal Range";}
        else if(bmi<=27.8&&bmi>=26.41){return "Marginally Overweight Range";}
        else if(bmi<=31.1&&bmi>=27.81){return "Overweight Range";}
        else if(bmi>31.1){return "Obese Range";}
    }
}
function start(event){
    event.preventDefault();
    let gender=document.querySelector("#gender-input").value;
    let feet=parseInt(document.querySelector("#feet-input").value);
    let inch=parseInt(document.querySelector("#inches-input").value);
    let heightInFeet=feet+(inch/12);
    let heightInMeter=heightInFeet*0.304;
    let weightInPound=parseInt(document.querySelector("#weight-input").value);
    let weightInKg=weightInPound*0.454;
    let bmi=findBMI(weightInKg,heightInMeter);
    bmi=Math.round(bmi*100)/100;
    document.querySelector("#output-div").textContent=bmi;
    let range=findCriteria(bmi,gender);
    alert(range);
}
document.querySelector("#calculate-button").addEventListener('click',start);