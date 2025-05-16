const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 1, name: "Product 2", price: 56 },
  { id: 1, name: "Product 3", price: 40 },
];

products.map(product => {
  product.price += 5;
  console.log(product.name + ": " + product.price);
});
