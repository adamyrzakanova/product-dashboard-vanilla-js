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