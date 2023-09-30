// Your solution goes here 
let password = prompt("enter your password: ");

function isStrongPassword(password) {
    return (password.length >= 8 && !password.toLowerCase().includes("password") && Boolean(password.match(/[A-Z]/g))) ? true : false;
}

console.log(isStrongPassword(password));