//alert("hello world");

const num1 = 1;
const num2 = 2;
var num3 = 0;

//alert(`total: ${num1+num2}`)

function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    validateForm(name, email, subject, message) ? 
    alert(`Dear ${name}, your form has been sent. Thank you `) ||
    console.log("sent")
    :
    alert("invalid submit, please fill all fields correctly.") ||
    console.error("error");

    document.getElementById("btn-form-7").addEventListener("click", function(event){
        event.preventDefault()
      });
}

function validateForm(name, email, subject, message) {

    var emailRegex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i; 
    var isValid = (name != '' &&
                   emailRegex.test(email) &&
                   email != '' &&
                   subject != ''    &&
                   message != ''     
                   ? true : false ); 

    return isValid;

};

function countUp(){
    const colors = ["red", "blue", "green", "yellow", "orange", "lime", "aqua"];
    const i = Math.random() * 7 ;

    let element = document.getElementById("btn-count-number");
    num3++;
    element.innerHTML = num3;
    element.style.color = colors[parseInt(i)];
}

function onhover(){
    let element = document.getElementById("cnt-ttl");
    let element2 = document.getElementById("btn-count-number");
    let element3 = document.getElementById("contact-info-text");
    let element4 = document.getElementById("clickMe-msg");

    const color = "#0cb8b6e8";

    element.style.color = color;
    element2.style.color = color;
    element3.style.color = color;
    element4.style.color = color;
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
