const numberInput = document.querySelectorAll(".num")
const totalBill = document.getElementById("bill")
const totalPeople = document.getElementById("num-of-people")
const selectTip = document.querySelector(".btn");
const reset = document.querySelector(".reset");
const outPutAmount = document.querySelectorAll(".amount")
const inputError = document.querySelector(".input-error");
const custom = document.getElementById("custom")

reset.addEventListener("click", submited);

let tipPercentage = null

numberInput.forEach((input) => {
    input.addEventListener("input", () => {
        let inputValue = input.value;
        let corrected = inputValue.replaceAll(/\D/g, '')
        input.value = corrected;
    })
})

function submited() {
    if (totalPeople.value == 0) {
        inputError.style.opacity = "1"
        return
    } else {
        inputError.style.opacity = "0"
    }
    if (custom.value) {
        let percentTip = parseInt(custom.value) / 100;
        tipPercentage = percentTip;
        console.log(tipPercentage);
        custom.value = ''
    }
    let perPersonAmount = parseInt(totalBill.value) / parseInt(totalPeople.value);
    let perPersonTip = perPersonAmount * tipPercentage;
    outPutAmount[0].textContent = `$${perPersonTip.toFixed(2)}`;
    outPutAmount[1].textContent = `$${(perPersonAmount + perPersonTip).toFixed(2)}`;

}
const tipButtons = document.querySelectorAll('[data-btn="tipButton"]');
console.log(tipButtons[1])

tipButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => selectedTip(tipButtons, index));
    // btn.classList.remove("active-btn")
});

// selectTip.addEventListener("click", selectedTip);

function selectedTip(allBtn, index) {
    var selectedBtn = allBtn[index];
    let percentTip = percentage(selectedBtn);
    tipPercentage = percentTip;
    selectedBtn.classList.add('active-btn');
    // console.log("class added")

    allBtn.forEach((b,i)=>{
        if(i != index || custom.value){
            b.classList.remove("active-btn")

            
        }
    })

}

function percentage(tip) {
    return parseInt(tip.innerText.slice(0, tip.innerText.length - 1)) / 100
}