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

    var isValid = (name != '' &&
                   //email == /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i
                   email != '' &&
                   subject != ''    &&
                   message != ''     
                   ? true : false ); 

    return isValid;

};

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
