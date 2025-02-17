console.log("Script loaded");

fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then(showRecipe);

function showRecipe(data) {
  console.log("mine data er:", data);

  const markup = data.recipes
    .map(
      (element) => `<a href="produktliste.html?recipe=${element.id}" class="link">
          <img class="index_cirkel" src="https://cdn.dummyjson.com/recipe-images/${element.id}.webp" alt="Dinner" />
         ${element.mealType}
        </a>`
    )

    .join("");

  console.log("min markup er ", markup);
  document.querySelector(".index_container").innerHTML = markup;
}
