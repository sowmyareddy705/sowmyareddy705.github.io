const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 1000 },
  { card: "1234567891", pin: "2345", name: "Cathy", balance: 500 },
];

let currentUser = null;

function login() {
  const cardInput = document.getElementById("card").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const resultDiv = document.getElementById("result");

  if (!cardInput || !pinInput) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter both card number and PIN.";
    return;
  }

  const user = customers.find(c => c.card === cardInput && c.pin === pinInput);

  if (user) {
    currentUser = user;
    document.getElementById("login-area").classList.add("hidden");
    document.getElementById("transaction-area").classList.remove("hidden");
    document.getElementById("welcome-msg").textContent = `Welcome, ${user.name}`;
    updateBalance();
  } else {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Invalid card number or PIN.";
  }
}

function updateBalance() {
  document.getElementById("balance").textContent = currentUser.balance.toFixed(2);
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = document.getElementById("transaction-result");

  if (isNaN(amount) || amount <= 0) {
    result.style.color = "red";
    result.textContent = "Enter a valid amount.";
    return;
  }

  currentUser.balance += amount;
  updateBalance();
  result.style.color = "green";
  result.textContent = `Successfully deposited $${amount.toFixed(2)}.`;
  document.getElementById("amount").value = "";
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = document.getElementById("transaction-result");

  if (isNaN(amount) || amount <= 0) {
    result.style.color = "red";
    result.textContent = "Enter a valid amount.";
    return;
  }

  if (amount > currentUser.balance) {
    result.style.color = "red";
    result.textContent = "Insufficient funds.";
    return;
  }

  currentUser.balance -= amount;
  updateBalance();
  result.style.color = "green";
  result.textContent = `Successfully withdrew $${amount.toFixed(2)}.`;
  document.getElementById("amount").value = "";
}

function logout() {
  currentUser = null;
  document.getElementById("card").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("amount").value = "";
  document.getElementById("transaction-result").textContent = "";

  document.getElementById("transaction-area").classList.add("hidden");
  document.getElementById("login-area").classList.remove("hidden");
}
