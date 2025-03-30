// Task 2: Fetch with .then()
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Using .then():");
        data.forEach((product) => {
          console.log(product.fields.name);
        });
      })
      .catch((error) => {
        handleError(error);
      });
  }
  
  // Task 3: Fetch with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }

  // Task 4: Display Products
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous content
    products.slice(0, 5).forEach((product) => {
      const { name, price, image } = product.fields;
      const imgUrl = image[0].url;
  
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML = `
        <img src="${imgUrl}" alt="${name}" />
        <h2>${name}</h2>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      container.appendChild(productDiv);
    });
  }

  // Task 5: Error handler
function handleError(error) {
    console.error("An error occurred:", error.message);
  }