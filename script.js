const num = document.querySelectorAll(".num");
const optr = document.querySelectorAll(".optr");
const display = document.querySelector(".display")

let getFirstNum =num.forEach(num => {
  num.addEventListener("click", (event) => {
    const value = event.target.textContent;
    display.textContent = value;
    
    
  })
});
let Exp;
let getExpn = optr.forEach(optr => {
  optr.addEventListener("click", (e) => {
    const exp = e.target.textContent;
    Exp = exp;
    
  })
});

console.log(Exp);
let getLasttNum = num.forEach(num => {
  num.addEventListener("click", (event) => {
    const value = event.target.textContent;
    display.textContent = value;
    
    
  })
});

console.log(getFirstNum);
console.log(getLasttNum);
console.log(getExpn);
