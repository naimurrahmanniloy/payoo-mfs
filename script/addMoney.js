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
    alert(`Money added successfully from ${bankAccount}`);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
  }

  // Update transaction history
  const history = document.getElementById("history-container");
  const newTransaction = document.createElement("div");
  newTransaction.innerHTML = `
    <div class="transection-card p-5 bg-base-100"> 
        <p><strong>Type:</strong> Add Money</p>
        <p>Money added successfully from ${bankAccount} on ${new Date()}</p>
    </div>`;
  history.appendChild(newTransaction);
});
