// html-tag connections
const billInputField=document.getElementById("bill");
const tipInputField=document.getElementById("tip");
const minusBtnCollection=document.querySelectorAll(".minus");
const plusBtnCollection=document.querySelectorAll(".plus");
const personInputField=document.getElementById("ppl");
const tipAmtLabelText = document.getElementById("tip-amt");
const totalAmtLabelText = document.getElementById("total-amt");




const resetAll = () =>{ // Reset both the input fields as well as the label texts
    resetInputFields();
    resetLabelTexts();
 
}
const resetInputFields = () =>{         // Reset all the input fields    
    billInputField.value = '';
    tipInputField.value = '';
    personInputField.value = '';
    
}
const resetLabelTexts = ()=>{           // Reset all the label texts
    tipAmtLabelText.innerText = "$0.0";
    totalAmtLabelText.innerText = "$0.0";
}


window.onload = function(){
   resetAll();

   
}

const display = ()=>{       // This Function is responsible for calculating and displaying the per person bill and tip
    const totalTip = Number(tipInputField.value);
    const totalPerson = Number(personInputField.value);
    const totalBill = Number(billInputField.value);
    if(totalTip > 100){
        alert("More than 100% Tip is not allowed");
        return;
    }
    if (totalBill < 1){
        alert("Total Bill cannot be less than $1");
        return
    }
    
    const tipPerPerson = (totalBill*(totalTip/100))/ totalPerson;
    const totalAmtPerPerson = ((totalBill*(totalTip/100)) + totalBill) / totalPerson ; 
    tipAmtLabelText.innerText = "$" + tipPerPerson.toFixed(2).toString();
    totalAmtLabelText.innerText  ="$" + totalAmtPerPerson.toFixed(2).toString();

}


// Adding eventListners to our Array of buttons
plusBtnCollection.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let element = e.target.previousElementSibling;
        element.value = (Number(element.value) + 1 ).toString(); 
        display();
    });
})
minusBtnCollection.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let element = e.target.nextElementSibling;
        element.value = (Number(element.value) - 1 ).toString();
        if(element.value <= 0){
            alert("Value cannot be less than 1");
            resetLabelTexts();
            return;
        }
        display();
    })
    
})

billInputField.addEventListener("input",()=>{
    if(Number(billInputField.value) <=0 && (Number(personInputField.value)  > 0 || Number(tipInputField.value) > 0) )
    resetAll();
    if(Number(billInputField.value) > 0 && Number(personInputField.value) > 0 && Number(tipInputField.value) > 0 )
    display();
   
})
personInputField.addEventListener("input",()=>{
        if(Number(personInputField.value) > 0)
        display();

        if(Number(personInputField.value) <= 0)
        resetLabelTexts();
})


