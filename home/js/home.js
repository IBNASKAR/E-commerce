// Fetch products from fake API
fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(products => {
    // Display products on page
    const productsDiv = document.querySelector('#products');
    displayProducts(products, productsDiv);

    // Listen for changes to category filter
    const categoryRadios = document.querySelectorAll('input[name=category]');
    categoryRadios.forEach(radio => {
      radio.addEventListener('change', event => {
        const selectedCategory = event.target.value;
        if (selectedCategory === 'all') {
          displayProducts(products, productsDiv);
        } else {
          const filteredProducts = products.filter(product => product.category === selectedCategory);
          displayProducts(filteredProducts, productsDiv);
        }
      });
    });
  });

// Display products on page
function displayProducts(products, productsDiv) {
  productsDiv.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.title}" width="120px" heigth="120px">
        <h4>${product.title}</h4>
        <p>Price: ${product.price}$</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productsDiv.appendChild(productDiv);
  });
}

// Add product to cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
function search(searchName){
    
  var url = "https://fakestoreapi.com/products";
  var xhr = new XMLHttpRequest();
  xhr.open("GET" , url);
  xhr.send("");
  xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
          var Data=xhr.responseText;
          var pardedData=JSON.parse(Data);
          var product ='';
          for(var i=0 ;i < pardedData.length ; i++){
              if(pardedData[i].title.toLowerCase().includes(searchName.toLowerCase())){
                  product +=`
                  <div class="product">
                  
                  <div>  <img src="${pardedData[i].image}" alt="Product 1" width="100px" heigth="100px"></div>
                  <div>  <h4>${pardedData[i].title}</h4></div>
                  <div>  <p>Price: ${pardedData[i].price}$</p></div>
                  <div>  <button onclick="addCart(${pardedData[i].id})" class="add-to-cart">Add to Cart</button></div>
                  </div>
                  
                  `

              }
          }
          document.getElementById("products").innerHTML = product;

      }
  }
}