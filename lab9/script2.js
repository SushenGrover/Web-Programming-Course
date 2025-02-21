function showBoardingPass(name,choice,seat){
    let bp=document.createElement('div');
    let p=[];
    for(let i=0;i<3;i++){
        p[i]=document.createElement('p');
    }
    p[0].innerText="Name: "+name;
    p[1].innerText="Seat No: "+seat;
    if(choice===1){
        p[2].innerText="Class: First Class";
    }
    else{
        p[2].innerText="Class: Economy";
    }
    let heading=document.createElement('h3');
    heading.innerText="BOARDING PASS";

    bp.append(heading,p[0],p[1],p[2]);

    bp.style.cssText="margin:10px;padding:0px 0px 0px 5px;border: 2px solid black;background-color: #DDF093;width:300px;"
    
    document.body.appendChild(bp);
}
function bookSeat(event){
    event.preventDefault();
    let seats=document.querySelectorAll(".seat");
    let inputElement=document.querySelector("#input-choice");
    let choice=parseInt(inputElement.value);

    let name=document.querySelector("#input-name").value;
    
    if(choice==1){
        let flag=0;
        for(let i=0;i<5;i++){
            if(seats[i].innerText==0){
                showBoardingPass(name,choice,parseInt(i)+1);
                seats[i].innerText='1';
                flag++;
                break;
            }
        }
        if(flag===0){
            let check=confirm("No Seats availabe in First Class. "+"Wanna go with Economy Class?");
            if(check){
                let flag=0;
                for(let i=5;i<10;i++){
                    if(seats[i].innerText==0){
                        showBoardingPass(name,2,parseInt(i)+1);
                        seats[i].innerText='1';
                        flag++;
                        break;
                    }
                }
                if(flag==0){
                    alert("No Seats are available in Economy Class.");
                }
            }
        }
    }
    else if(choice==2){
        let flag=0;
        for(let i=5;i<10;i++){
            if(seats[i].innerText==0){
                showBoardingPass(name,choice,parseInt(i)+1);
                seats[i].innerText='1';
                flag++;
                break;
            }
        }
        if(flag==0){
            alert("No Seats are available in Economy Class.");
        }
    }
    else{
        alert("Invalid Choice!");
    }
}
document.querySelector('#submit-button').addEventListener('click',bookSeat);