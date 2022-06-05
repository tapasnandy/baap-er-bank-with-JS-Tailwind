function commonBankingCalculation(amountInput, currentField, isAdd) {
    const amountInputField = document.getElementById(amountInput);
    const currentFieldStatus = document.getElementById(currentField);
    const currentBalanceField = document.getElementById("current-balance-field");
    const withdrawInputField = document.getElementById("withdraw-amount-input");

    let totalBalanceAmount;
    console.log(amountInputField.value);
    if (amountInputField.value < 0 || withdrawInputField.value > currentBalanceField.innerText || amountInputField.value == "") {
        alert("Please input valid amount!!");
        amountInputField.value = "";
    }
    else {

        const totalAmount = parseInt(amountInputField.value) + parseInt(currentFieldStatus.innerText);

        if (isAdd == true) {
            totalBalanceAmount = parseInt(amountInputField.value) + parseInt(currentBalanceField.innerText);
        }
        else {
            totalBalanceAmount = parseInt(currentBalanceField.innerText) - parseInt(amountInputField.value);
        }
        amountInputField.value = "";
        currentFieldStatus.innerText = totalAmount;
        currentBalanceField.innerText = totalBalanceAmount;
    }

}

// click on deposit button 
document.getElementById("deposit-btn").addEventListener("click", function () {

    commonBankingCalculation('deposit-amount-input', 'current-deposit-field', true);


})

// click on withdraw button 
document.getElementById("withdraw-btn").addEventListener("click", function () {

    commonBankingCalculation('withdraw-amount-input', 'current-withdraw-field', false);

})