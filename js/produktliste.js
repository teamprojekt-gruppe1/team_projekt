let product_list_container = document.querySelector(".product_list_container");
const mymeal = new URLSearchParams(window.location.search).get("meal"); //URLSearchParams bruges til at hente værdien af meal fra URL'en (f.eks. meal=italian).
console.log("produktliste loader...", mymeal);

if (mymeal) {
  const h2Element = document.querySelector("h2"); //finder <h2> elementet og opdaterer det med den korrekte værdi.//
  h2Element.textContent = mymeal.charAt(0).toUpperCase() + mymeal.slice(1); // toUpperCase() er en metode, der bruges på en streng og returnerer en kopi af strengen, hvor alle bogstaver er gjort store.
}
const productlist = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h2");

// productlist.innerHTML = mycategory;
console.log(mymeal);
// i fetchen under kun man sidst i linket tilføje ?limit=100 for at få vist fx. 100 eks.

const url = `https://dummyjson.com/recipes/tag/${mymeal}?limit=30`;
console.log(url);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    showList(data.recipes); // Brug den relevante nøgle, f.eks. data.recipes
  });

function showList(recipes) {
  console.log(recipes);
  const markup = recipes
    .map(
      (recipe) =>
        `   <a href="produkt.html?id=${recipe.id}">
             <div class="product">
              <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" class="opskrift" alt="margherita" />
             <div class="border">
              <h3>${recipe.name}</h3>
              <p class="tid">Cooking time: ${recipe.cookTimeMinutes} minutes</p>
              <div class="boks">
                <p class="boks_indhold">Difficulty: ${recipe.difficulty}</p>
                <p class="boks_indhold">Cuisine: ${recipe.cuisine}</p>
              </div>
              <p class="rating">${recipe.rating}/ 5 ⭐</p>
                </div>
                </div>
            </a>
          `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
