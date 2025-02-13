let product_list_container = document.querySelector(".product_list_container");
const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader...", mycategory);

const productlist = document.querySelector(".list");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = mycategory;
// i fetchen under kun man sidst i linket tilføje ?limit=100 for at få vist fx. 100 eks.
fetch(`https://dummyjson.com/recipes?category=${mycategory}&limit=30`)
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
              <p class="rating">${recipe.rating}/ 5</p>
                </div>
                </div>
            </a>
          `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
