// let mypromise=new Promise((resolve,reject)=>{
//     let age =10;
//     if(age>18){
//         resolve("age is valid")
//     }else{
//         reject("age is invalid")
//     }
// });

// mypromise
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })





// console.log("start")

// function getUser(callback){
//     setTimeout(()=>{
//     console.log("user data...");
//     callback()
// },2000);
// }
// function getUserBankDetails(callback){
//     setTimeout(()=>{
//     console.log("user bank details");
//         callback()
// },1000)
// }
// function getUserInsurance(){
//     setTimeout(()=>{
// console.log("user Insurance");
// },3000)
// }
// getUser(()=>{
//     getUserBankDetails(()=>{
//         getUserInsurance()
//     })
// })

// console.log("end")


console.log("start")

function getUser(callba){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("user data...");
        },3000);
    })  
}
function getUserBankDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user bank details");
        },1000)
    })  
}
function getUserInsurance(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user Insurance");
            },2000)
    })  
    
}
getUser()
.then(()=>{
    return getUserBankDetails();
}).then(()=>{
    return getUserInsurance();
}).then(()=>{
    console.log("process...end")
}).catch((err)=>{
    console.log(err)
})

async function call() {
    await getUser();
    await getUserBankDetails();
    await getUserInsurance()
}
console.log("end")