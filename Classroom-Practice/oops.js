//Encapsulated class

// class student{
//     #studentID=101;
//     #studentName="John";

//     getDisplay(){
//         console.log("Student ID:"+this.#studentID);
//     }
// }

class bank{
    #balance=5000;
    
    
    deposit(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance+=amount;
            console.log("Balance is :"+this.#balance);
        }
        
    }
    getBalance(){
        return this.#balance;
    }
}
