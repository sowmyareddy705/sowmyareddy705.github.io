function add(products, cart) {
  const cartItems = products
    .filter(product => cart[product.id]) 
    .map(product => {
      const quantity = cart[product.id];
      const total = product.price * quantity;
      console.log(
        `Name: ${product.name}, Price: ${product.price}, Quantity: ${quantity}, Total: ${total}`
      );
      return total; 
    });

  
  const orderTotal = cartItems.reduce((sum, itemTotal) => sum + itemTotal, 0);

  console.log(`Order Value: ${orderTotal}`);
}
const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {
  1: 4,
  3: 5,
};

add(products, cart);
