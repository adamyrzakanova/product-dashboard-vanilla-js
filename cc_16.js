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
  