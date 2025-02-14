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
            <h3>${data.difficulty} ${data.mealType}</h3>
            <h1>${data.name}</h1>
            <h3>preptime: ${data.prepTimeMinutes}, cooktime: ${data.cookTimeMinutes}, servings: ${data.servings}</h3>
          </div>
        </section>
    </div>
  
  
  
  `;
  });
