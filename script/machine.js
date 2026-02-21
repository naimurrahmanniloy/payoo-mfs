//machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

//set Balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}
// toggle function
function showOnly(id) {
  const addMoney = document.getElementById("addMoney");
  const cashOut = document.getElementById("cashout");
  const history = document.getElementById("history");

  //now hidding all
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  history.classList.add("hidden");
  //now showing only the selected one
  const selectedElement = document.getElementById(id);
  selectedElement.classList.remove("hidden");
}
