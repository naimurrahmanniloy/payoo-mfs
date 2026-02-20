document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-num");
  if (cashoutNumber.length != 11) {
    alert("Invalid Mobile Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Successful");
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
