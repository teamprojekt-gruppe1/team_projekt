// Bekræfter, at scriptet er indlæst korrekt
console.log("produkt.js virker....");

let productId = new URLSearchParams(window.location.search).get("id");

console.log("produkt loader...", productId);

// Finder HTML-elementet, hvor produktinformationen skal vises
let recipeContainer = document.querySelector(".recipe_container");

// Kalder API’et for at hente data om det valgte produkt
fetch(`https://dummyjson.com/recipes/${productId}`)
  .then((response) => response.json()) // Konverterer data til JSON
  .then((data) => {
    recipeContainer.innerHTML = `
  
   <div class="recipe_container">
        <section>
          <!----------------------------------OVERSKRIFT-->
          <div class="product_headline">
            <h3> ${data.mealType}</h3>
            <h1>${data.name}</h1>
            <h3>preptime: ${data.prepTimeMinutes} minutes, cooktime: ${data.cookTimeMinutes} minutes, ${data.servings} servings</h3>
          </div>
        </section>

         <section>
         
          <img class="recipe_image" src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="Billede af opskriftens udfald" />
       
          <div class="grid_1-1">
            <div class="info_box">
              <h3>Difficult rate: ${data.difficulty}</h3>
            </div>
            <div class="info_box">
              <h3>${data.servings} Servings with ${data.caloriesPerServing} kcal per serving</h3>
            </div>
            <div class="info_box">
              <h3>Cuisine: ${data.cuisine}</h3>
            </div>
            <div class="info_box">
              <h3>  Costumer rating ${data.rating}, from ${data.reviewCount} reviews</h3>
            </div>
          </div>
        </section>

  <section>
  <div class="recipe_grid_1-1">
          <div class="ingrediens_recipe_ingredients">
            <h3>Ingredients:</h3>
            <ul class="ul-elementer">${data.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>

 <!---ingrediens refererer til ingredienslisten fra API'et. 
 .map() laver en ny liste med <li>-elementer.
.join('') fjerner kommaer mellem elementerne.
Vi sætter det hele ind i en <ul>, så det vises som en rigtig liste i HTML.
 --->
          </div>

          <div class="ingrediens_recipe">
            <h3>Instructions:</h3>
            <h4>
            ${data.instructions}
            </h4>
          </div>
        </section>
         </div>
    </div>
  `;
  });
