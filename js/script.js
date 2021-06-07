// Define UI
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let postCode = document.querySelector("#post-code");

// Define Functions
let checkEmail = (e) => {
    let email = prompt("Enter your email address");
    let re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;

    if (re.test(email)) {
        alert("Correct Email");
    } else {
        alert("Incorrect Email");
    };

    e.preventDefault()
};

let checkPhone = (e) => {
    let phone = prompt("Enter your phone number");
    let re = /^(\+88)?01[0-9]{9}$/;

    if (re.test(phone)) {
        alert("Correct Phone Number");
    } else {
        alert("Incorrect Phone Number");
    };
    e.preventDefault()
};

let checkPostCode = (e) => {
    let postCode = prompt("Enter your post code");
    let re = /^[0-9]{4}$/;

    if (re.test(postCode)) {
        alert("Correct Post Code");
    } else {
        alert("Incorrect Post Code");
    };
    e.preventDefault()
};

// Define Event Listeners
email.addEventListener("click", checkEmail);
phone.addEventListener("click", checkPhone);
postCode.addEventListener("click", checkPostCode);

