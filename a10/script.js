let fruits = [
  { id: 1, name: "Apple", price: 250, img: "https://png.pngtree.com/png-clipart/20240814/original/pngtree-apple-png-image_15769505.png" },
  { id: 2, name: "Orange", price: 230, img: "https://www.dole.com/sites/default/files/media/2025-01/oranges.png" },
  { id: 3, name: "Mango", price: 280, img: "https://www.wockhardthospitals.com/wp-content/uploads/2020/05/shutterstock_206262862-1-768x514-1.webp" }
];

// Arrow function to render fruits
const renderFruits = () => {
  const container = document.getElementById("fruit-container");
  container.innerHTML = "";

  fruits.forEach(({ name, price, img }) => {
    const card = document.createElement("div");
    card.className = "fruit-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button class="add-btn">Add to Cart</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      console.log(`${name} added to cart.`);
    });

    container.appendChild(card);
  });
};


const addFruit = () => {
  const id = document.getElementById("fruit-id").value.trim();
  const name = document.getElementById("fruit-name").value.trim();
  const price = parseInt(document.getElementById("fruit-price").value.trim());
  const img = document.getElementById("fruit-image").value.trim();

  if (id && name && !isNaN(price) && img) {
    fruits.push({  name, price, img });
    renderFruits();

    document.getElementById("fruit-id").value = "";
    document.getElementById("fruit-name").value = "";
    document.getElementById("fruit-price").value = "";
    document.getElementById("fruit-image").value = "";
  } else {
    alert("Please enter all valid fruit details!");
  }
};

document.getElementById("add-fruit-btn").addEventListener("click", addFruit);


renderFruits();