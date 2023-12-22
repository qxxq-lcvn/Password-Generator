
let passwordEl = document.querySelector("#password");

let length = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = '0123456789';
let symbol = '!@#$%^&*()_+=[]{}<>?/';

let mix = uppercase + lowercase + number + symbol;

function generate() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += mix[Math.floor(Math.random() * mix.length)];
    }

    passwordEl.value = password;
}

function copy() {
    passwordEl.select();
    document.execCommand("copy");
}