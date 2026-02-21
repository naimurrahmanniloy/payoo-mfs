document.getElementById("transfer-btn").addEventListener("click", function () {
  const transferNumber = getValueFromInput("transfer-num");
  if (transferNumber.length != 11) {
    alert("Invalid Mobile Number");
    return;
  }
  const transferAmount = getValueFromInput("transfer-amount");
  const balance = getBalance();
  const newBalance = balance - Number(transferAmount);
  if (newBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  const pin = getValueFromInput("transfer-pin");
  if (pin === "1234") {
    alert("Transfer Successful");
    setBalance(newBalance);
    return;
  } else {
    alert("Invalid PIN");
  }

  // Update transaction history
  const history = document.getElementById("history-container");
  const newTransaction = document.createElement("div");
  newTransaction.innerHTML = `  
    <div class="transection-card p-5 bg-base-100"> 
        <p><strong>Type:</strong> Transfer</p>
        <p>Money transferred to ${transferAmount} on ${new Date()}</p>
    </div>`;
  history.appendChild(newTransaction);
});
