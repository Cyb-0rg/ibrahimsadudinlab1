//alert("hello world");

const num1 = 1;
const num2 = 2;
var num3 = 0;

//alert(`total: ${num1+num2}`)

function submitForm(){
    let element = document.getElementById("name");
    let name = element.value;
    alert(`dear ${name} your form has been sent. Thank you `);
    //alert(`dear XXXX your form has been sent. Thank you `);
}

function countUp(){
    
    let element = document.getElementById("btn-count-number");
    num3++;
    element.innerHTML = num3;
}

function onhover(){
    let element = document.getElementById("cnt-ttl");
    let element2 = document.getElementById("btn-count-number");
    let element3 = document.getElementById("contact-info-text");
    let element4 = document.getElementById("clickMe-msg");

    element.style.color = "green";
    element2.style.color = "green";
    element3.style.color = "green";
    element4.style.color = "green";


}

function onMouseLeave(){
    let element = document.getElementById("cnt-ttl");
    let element2 = document.getElementById("btn-count-number");
    let element3 = document.getElementById("contact-info-text");
    let element4 = document.getElementById("clickMe-msg");


    //element.style.color = "white";
    element2.style.color = "white";
    //element3.style.color = "white";
    element4.style.color = "white";


}


while (num2 < 10){
    console.log(num2);
    num2++;
}

