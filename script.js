// data types = primitive and non-primitive 
// let var const = 10; // primitive data type
// 

// console.log(a);
// var a = "hello";

// fun();

// function fun(){
//     console.log(a);
// }


// scope = global, block , functional scope

// let name = "raj";
// let msg = `hello my name is ${name}`;
// console.log(msg);

let username ="Shubh Gupta"


console.log(username.trim())
console.log(username.toUpperCase())
console.log(username.toLowerCase())
console.log(username.includes("Shubh"))
console.log(username.replace("Shubh","Raj"))
console.log(username.trim().toUpperCase().split(" "))
console.log(username.slice(0,5))
let password = "Shubh@123"

function checkPassword(password){
    if(password.length < 6){
        console.log("Password must be at least 6 characters long");
        return false;
    }
    if(!/[A-Z]/.test(password)){
        console.log("Password must contain at least one uppercase letter");
        return false;
    }
    if(!/[a-z]/.test(password)){
        console.log("Password must contain at least one lowercase letter");
        return false;
    }
    if(!/[0-9]/.test(password)){
        console.log("Password must contain at least one number");
        return false;
    }
    if(!/[!@#$%^&*()\-+]/.test(password)){
        console.log("Password must contain at least one special character");
        return false;
    }
    console.log("Password is valid");
    return true;

}

checkPassword(password)






function generateOTP() {
    let min = 1000;
    let max = 9999;

    let otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp;
}

generateOTP()