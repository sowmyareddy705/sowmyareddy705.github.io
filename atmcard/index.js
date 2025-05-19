const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 1000 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 500 },
];

function login() {
  const cardInput = document.getElementById("card").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const resultDiv = document.getElementById("result");

  const user = customers.find(c => c.card === cardInput && c.pin === pinInput);

  if (user) {
    resultDiv.style.color = "green";
    resultDiv.textContent = `Welcome ${user.name}, your balance is $${user.balance}`;
  } else {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Invalid card number or PIN.";
  }
}
