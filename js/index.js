console.log("Script loaded");

fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then(showRecipe);

function showRecipe(data) {
  console.log("mine data er:", data);

  const markup = data
    .map(
      (element) => `<a class="link" href="produktliste.html?recipe=${element.recipe}">
          <img class="index_cirkel" src="https://cdn.dummyjson.com/recipe-images/${recipe.id}webp" alt="Dinner" />
          Dinner ${element.recipe}
        </a>`
    )

    .join("");

  console.log("min markup er ", markup);
  document.querySelector(".category_list_container").innerHTML = markup;
}
