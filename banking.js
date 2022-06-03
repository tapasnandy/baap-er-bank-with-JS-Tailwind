// click on deposit button 
document.getElementById("deposit-btn").addEventListener("click", function () {


    const depositAmountInput = document.getElementById("deposit-amount-input");
    const currentDepositField = document.getElementById("current-deposit-field");
    const currentBalanceField = document.getElementById("current-balance-field");

    const totalDepositAmount = parseInt(depositAmountInput.value) + parseInt(currentDepositField.innerText);
    const totalBalanceAmount = parseInt(depositAmountInput.value) + parseInt(currentBalanceField.innerText);

    depositAmountInput.value = "";
    currentDepositField.innerText = totalDepositAmount;
    currentBalanceField.innerText = totalBalanceAmount;


})

// click on withdraw button 
document.getElementById("withdraw-btn").addEventListener("click", function () {


    const withdrawAmountInput = document.getElementById("withdraw-amount-input");
    const currentWithdrawField = document.getElementById("current-withdraw-field");
    const currentBalanceField = document.getElementById("current-balance-field");

    const totalWithdrawAmount = parseInt(withdrawAmountInput.value) + parseInt(currentWithdrawField.innerText);
    const totalBalanceAmount = parseInt(currentBalanceField.innerText) - parseInt(withdrawAmountInput.value);

    withdrawAmountInput.value = "";
    currentWithdrawField.innerText = totalWithdrawAmount;
    currentBalanceField.innerText = totalBalanceAmount;


})