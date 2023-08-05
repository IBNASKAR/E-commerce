// Load cart items from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fetch products from fake API
fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(products => {
    // Display cart items on page
    const cartItemsBody = document.querySelector('#cart-items');
    let totalPrice = 0;
    cart.forEach(itemId => {
      const item = products.find(product => product.id === itemId);
      if (item) {
        const itemRow = document.createElement('tr');
        itemRow.innerHTML = `
          <td> <img src="${item.image}" alt="${item.title}" width="30px" heigth="30px"></td>
          <td>${item.title}</td>
          <td>${item.category}</td>
          <td>${item.price}</td>
          <td><button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        cartItemsBody.appendChild(itemRow);
        totalPrice += item.price;
      }
    });
    
    // Display total price on page
    const totalPriceCell = document.querySelector('#total-price');
    totalPriceCell.textContent = totalPrice.toFixed(2);
  });

// Remove product from cart
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(id => id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product removed from cart!');
  location.reload();
}