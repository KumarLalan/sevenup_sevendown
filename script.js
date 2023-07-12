// let up = document.getElementById("up");
// up.addEventListener("click",sevenup());
// let down = document.getElementById("down");
// down.addEventListener("click",sevendown());
// let level = document.getElementById("level");
// level.addEventListener("click",seven());
let result = document.getElementsByClassName("result")[0];
let point = document.getElementsByClassName("point")[0];
let final = document.getElementsByClassName("final")[0];
let score= 100;
function sevenup(){
    if(score!=0){
    let a = Math.floor(Math.random()*6) +1;
    let b = Math.floor(Math.random()*6) +1; 
    imagechange1(a);
    imagechange2(b);
    if((a+b)>7){
        result.innerHTML =`
        &#128512<br>
        <h2> you won</h2>
               `
            if(score!=100){
                score +=5;
            }
        point.innerHTML = `
           Safety point : ${score}
        `
    }
    else{
        result.innerHTML =`
        &#128514<br>
        <h2> you lost</h2>`

        if(score!=0){
            score -=5;
        }
    point.innerHTML = `
       Safety point : ${score}
    `
    }
}
else{
 final.innerHTML="<h2> Game Over </h2>";
}
}
function sevendown(){
    if(score!=0){
    let a = Math.floor(Math.random()*6) +1;
    let b = Math.floor(Math.random()*6) +1; 
    imagechange1(a);
    imagechange2(b);
       if((a+b)<7){
        result.innerHTML =`
        &#128512<br>
        <h2> you won</h2>   
        `
        if(score!=100){
            score +=5;
        }
    point.innerHTML = `
       Safety point : ${score}
    `
    }
    else{
        result.innerHTML =`
        &#128514<br>
        <h2> you lost</h2>`
        if(score!=0){
            score -=5;
        }
    point.innerHTML = `
       Safety point : ${score}
    `
    }
}
else{
    final.innerHTML="<h2> Game Over </h2>";
   }
}
function seven(){
    if(score!=0){
    let a = Math.floor(Math.random()*6) +1;
    let b = Math.floor(Math.random()*6) +1; 
    imagechange1(a);
    imagechange2(b);
       if((a+b)==7){
        result.innerHTML =`
        &#128512<br>
        <h2> you won</h2>     
        `
        if(score!=100){
            score +=5;
        }
    point.innerHTML = `
       Safety point : ${score}
    `
    }
    else{
        result.innerHTML =`
        &#128514<br>
        <h2> you lost</h2>`
        if(score!=0){
            score -=5;
        }
    point.innerHTML = `
       Safety point : ${score}
    `
    }
}
else{
    final.innerHTML="<h2> Game Over </h2>";
   }
}

function imagechange1(a){

    if(a==1){
        document.getElementById("dice1").src = "one.svg";
       }
       else if(a==2){
        document.getElementById("dice1").src = "two.svg";
       }
       else if(a==3){
        document.getElementById("dice1").src = "three.svg";
       }
       else if(a==4){
        document.getElementById("dice1").src = "four.svg";
       }
       else if(a==5){
        document.getElementById("dice1").src = "five.svg";
       }
       else if(a==6){
        document.getElementById("dice1").src = "six.svg";
     
}
}
function imagechange2(b){
    if(b==1){
        document.getElementById("dice2").src = "one.svg";
       }
       else if(b==2){
        document.getElementById("dice2").src = "two.svg";
       }
       else if(b==3){
        document.getElementById("dice2").src = "three.svg";
       }
       else if(b==4){
        document.getElementById("dice2").src = "four.svg";
       }
       else if(b==5){
        document.getElementById("dice2").src = "five.svg";
       }
       else if(b==6){
        document.getElementById("dice2").src = "six.svg";
       }
}
       