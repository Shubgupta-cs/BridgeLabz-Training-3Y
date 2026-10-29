

console.log(document)

// let heading = document.getElementById("heading");

let heading = document.querySelector("#heading");

// heading.style.color ="red";
// heading.style.backgroundColor = "blue";

heading.textContent="query";
heading.innerHTML += "<h2>hello this is a new element</h2>";

let count = 0;

let fun = () => {
    heading.style.color = "red";
};

btn.addEventListener("click",() =>{
     count++;
     heading.textContent= count;
})
btn.addEventListener("click",fun);



btnDecE1.addEventListener("click",()=>{
     count--;
    heading.textContent = count;
})

btnDecE1.addEventListener("click",fun);

console.log("hello");
