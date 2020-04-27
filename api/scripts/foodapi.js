foodOutPutContainer = document.querySelector(".foodList");

fetch("http://localhost:8088/food")
  .then((foods) => foods.json())
  .then((parsedFoods) => {
    // console.table(parsedFoods);
    for (let i = 0; i < parsedFoods.length; i++) {
      const food = parsedFoods[i];
      foodComponent = `
      <div class="box"> 
      <h2 class="foodName">${food.name}</h2> 
      <section class="foodItem">
      <h3 class="foodEthnicity">${food.ethnicity}</h3>
      <h3 class="foodCategory">${food.category}</h3>
      </section> 
      </div>`;
      foodOutPutContainer.innerHTML += foodComponent;
    }
  });
