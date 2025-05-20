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
  result.textContent = `Deposited $${amount.toFixed(2)}.`;
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
  result.textContent = `Withdrew $${amount.toFixed(2)}.`;
  document.getElementById("amount").value = "";
}

function transfer() {
  const targetCard = document.getElementById("transfer-card").value.trim();
  const amount = parseFloat(document.getElementById("transfer-amount").value);
  const result = document.getElementById("transaction-result");

  if (!targetCard || isNaN(amount) || amount <= 0) {
    result.style.color = "red";
    result.textContent = "Enter valid card and amount.";
    return;
  }

  if (targetCard === currentUser.card) {
    result.style.color = "red";
    result.textContent = "Cannot transfer to your own account.";
    return;
  }

  const recipient = customers.find(c => c.card === targetCard);
  if (!recipient) {
    result.style.color = "red";
    result.textContent = "Recipient not found.";
    return;
  }

  if (currentUser.balance < amount) {
    result.style.color = "red";
    result.textContent = "Insufficient funds for transfer.";
    return;
  }


  currentUser.balance -= amount;
  recipient.balance += amount;

  updateBalance();
  result.style.color = "green";
  result.textContent = `Transferred $${amount.toFixed(2)} to ${recipient.name}.`;

  document.getElementById("transfer-card").value = "";
  document.getElementById("transfer-amount").value = "";
}

function logout() {
  currentUser = null;
  document.getElementById("card").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("amount").value = "";
  document.getElementById("transfer-card").value = "";
  document.getElementById("transfer-amount").value = "";
  document.getElementById("transaction-result").textContent = "";

  document.getElementById("transaction-area").classList.add("hidden");
  document.getElementById("login-area").classList.remove("hidden");
}
