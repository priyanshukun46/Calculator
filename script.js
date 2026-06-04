const num = document.querySelectorAll(".num");
const optr = document.querySelectorAll(".optr");
const display = document.querySelector(".display")

let Num =[];

num.forEach(num => {
  num.addEventListener("click", (event) => {
    const value = event.target.textContent;
    display.textContent = value;
    Num.push(value);
    
    
  console.log(Num);
  })
});

let Exp=0;
let getExpn = optr.forEach(optr => {
  optr.addEventListener("click", (e) => {
    const exp = e.target.textContent;
    Exp = exp;
    
  console.log(Exp);
  })
});


display.textContent = num[0] + Exp + num[1];

