document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select A Bank") {
    alert("Please select a bank account");
    return;
  }

  const accno = getValueFromInput("add-money-num");
  if (accno.length != 11) {
    alert("Please enter a valid account number");
    return;
  }
  const amount = getValueFromInput("add-money-amount");

  const newBalance = getBalance() + Number(amount);
  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert("Money added successfully from" + " " + bankAccount);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
  }
});
