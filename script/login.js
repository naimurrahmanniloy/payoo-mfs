document.getElementById("login-btn").addEventListener("click", function () {
  //get the mobile number
  const numberInput = document.getElementById("input-num");
  const contactNumber = numberInput.value;
  //get the pin
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;
  // match pin and phone
  if (contactNumber == "01234567890" && pin == "1234") {
    alert("Successfully Login");
    window.location.assign("./home.html");
  }
  // if true return alert and  hompage
  else {
    alert("Login Failed");
    return;
  }
});
