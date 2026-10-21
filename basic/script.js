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

// let username ="Shubh Gupta"


// console.log(username.trim())
// console.log(username.toUpperCase())
// console.log(username.toLowerCase())
// console.log(username.includes("Shubh"))
// console.log(username.replace("Shubh","Raj"))
// console.log(username.trim().toUpperCase().split(" "))
// console.log(username.slice(0,5))
// let password = "Shubh@123"

// function checkPassword(password){
//     if(password.length < 6){
//         console.log("Password must be at least 6 characters long");
//         return false;
//     }
//     if(!/[A-Z]/.test(password)){
//         console.log("Password must contain at least one uppercase letter");
//         return false;
//     }
//     if(!/[a-z]/.test(password)){
//         console.log("Password must contain at least one lowercase letter");
//         return false;
//     }
//     if(!/[0-9]/.test(password)){
//         console.log("Password must contain at least one number");
//         return false;
//     }
//     if(!/[!@#$%^&*()\-+]/.test(password)){
//         console.log("Password must contain at least one special character");
//         return false;
//     }
//     console.log("Password is valid");
//     return true;

// }

// checkPassword(password)




//DAY 2

// function generateOTP() {
//     let min = 1000;
//     let max = 9999;

//     let otp = Math.floor(Math.random() * (max - min + 1)) + min;
//     return otp;
// }

// generateOTP()


// let arr = ["apple","banana","cherry",10,20,30,true,false,null,undefined];

// console.log(arr)

// arr.push("grapes");

// console.log(arr)

// arr.unshift("mango");

// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(let i of arr){
//     console.log(i)
// }

// console.log(arr.slice(2,5))

// arr.pop();

// console.log(arr)
 
// function generatorHexcolor(){
//     let arr =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    
//     let hexColor = "#";
//     for(let i =0;i<6;i++){
//         let randomNum = Math.floor(Math.random()*16);
//         hexColor += arr[randomNum];
//     }
//     console.log(hexColor);
//     document.body.style.backgroundColor = hexColor;
// }

// generatorHexcolor();

// function generaterandompassword(){
//     let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,"!","#","$"];
//     let password = "";
//     for(let i = 0; i < 12; i++){
//         let randomIndex = Math.floor(Math.random() * arr.length);
//         password += arr[randomIndex];
//     }
//     console.log(password);
    
// }

// generaterandompassword();

// let a  = undefined;
// console.log(Boolean(a));

//Day 3

// let res = "hi"/ 10;
// console.log(res);
// console.log(typeof(res));

// let res2 = "Value is " + true;
// console.log(res2);
// console.log(typeof(res2));

// console.log(true + 3); // 4
// console.log(false + 3); // 3

// let strn1 = "123";
// let num1 = Number(strn1);
// console.log(num1);
// console.log(typeof(num1));

// let add = function(a,b)
// {
//     return a+b;
// }

// let a = add(10,3);
// console.log(a);

// function calculate(a,b,callback){
//     return callback(a,b);
// }

// let abc = (a,b)=> a*b

// let ans = calculate(10,20,add);
// let multi = calculate(20,10,abc);
// let mul = (a,b)=> a*b

// console.log(ans)
// console.log(multi)

// let arr = [1,2,3,4,5];

// let fun = (x)=>{
//     return x*2;
// }

// let result = arr.map(fun);
// console.log(result)


//Day -4
let student = {
    id:101,
    name:"raj",
    mark:50,
    address:{
        city:"mathura",
        pincode:588789
    },
    displayInfo: function(){
        console.log(`My name is ${this.name} and get marks ${this.mark}`)
    }
}

let query = "city"

console.log(student["address"][query])
console.log(student)

student.displayInfo()