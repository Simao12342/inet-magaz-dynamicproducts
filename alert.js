fetch('https://raw.githubusercontent.com/Simao12342/API/main/Product.txt')
  .then(response => response.text())
  .then(data => {
    const products = JSON.parse(data);
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      const productImage = document.createElement('img');
      productImage.classList.add('product-image');
      productImage.src.add('${product.image}');
      const productTitle = document.createElement('h2');
      productTitle.classList.add('product-title');
      


      // productElement.innerHTML = `
      //   <div class="img-container">
      //   <img src="${product.image}" class="product-img"/></div>
      //   <h2>${product.name}</h2>
      //   <p>${product.description}</p>
      //   <p>Ціна: ${product.price} грн</p>
      // `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Помилка при завантаженні товарів:', error));