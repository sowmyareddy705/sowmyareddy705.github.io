const fruits = ["Apple", "Orange", "Banana", "Berries", "Pineapple", "Grapes"];

function searchFruit() {
  const input = document.getElementById("fruit-input").value.trim().toLowerCase();
  const result = fruits.filter(fruit => fruit.toLowerCase() === input);

  const resultBox = document.getElementById("result-box");

  if (result.length > 0) {
    resultBox.textContent = "Result: " + result[0];
    resultBox.style.color = "black";
  } else {
    resultBox.textContent = "Result: Not Available";
    resultBox.style.color = "red";
  }
}
