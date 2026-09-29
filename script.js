let displayBox= document.querySelector("#display");
let clrBtn= document.querySelector("#clearBtn");
let equalBtn= document.querySelector("#equalBtn");

let input= document.querySelectorAll(".btn.operator, .btn.number");

input.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.dataset.value;

        if (btn.classList.contains("operator")) {

            if (
                displayBox.value.endsWith("+") ||
                displayBox.value.endsWith("-") ||
                displayBox.value.endsWith("*") ||
                displayBox.value.endsWith("/")
            ) {
                displayBox.value = displayBox.value.slice(0, -1);
            }
        }

        displayBox.value += value;
    });
});
equalBtn.addEventListener("click",() =>{
    
    result();
})

const result = ()=>{
    let currVal = displayBox.value;
  if (
    currVal.endsWith("+") ||
    currVal.endsWith("-") ||
    currVal.endsWith("*") ||
    currVal.endsWith("/") || currVal===""
) {
    return;
}

    let answer=eval(currVal);
    if(!Number.isFinite(answer)){
        answer="error"
    }
    displayBox.value=answer;
 
}

clrBtn.addEventListener("click",()=>{
    displayBox.value="";
})



