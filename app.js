const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-Of-Notes");
 
const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount() {
 hideMessage ();

    if(billAmount.value > 0) {
if (cashGiven.value >= billAmount.value ) {
 const amountToBeReturned = cashGiven.value - billAmount.value;
 calculateChange(amountToBeReturned);

} else {
    showMessage("the cash provide should atleast be equal to the bill amount");
} 

} else{
    showMessage = ("invalid Bill Amount");
}
});

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = math.trunc(
            amountToBeReturned / availableNotes[i]
        );
      amountToBeReturned =  amountToBeReturned % availableNotes[i];
     noOfNotes[i].innerText = noOfNotes;
    }
}
 function hideMessage(message) { 
 message.style.display = "none";
}

    function showMessage (msg){
    
    message.style.display= "block";
    message.innerText = msg;
}
