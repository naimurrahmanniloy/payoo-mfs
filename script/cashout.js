document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumberInput = document.getElementById("cashout-num");
  const cashoutNumber = cashoutNumberInput.value;
  if (cashoutNumber !== "01234567890") {
    alert("Invalid Mobile Number");
    return;
  }

  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);

  const newBalance = Number(balance) - Number(cashoutAmount);
  console.log("new balance: ", newBalance);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  const cashoutPinInput = document.getElementById("cashout-pin");
  const pin = cashoutPinInput.value;
  if (pin === "1234") {
    alert("Cashout Successful");
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
