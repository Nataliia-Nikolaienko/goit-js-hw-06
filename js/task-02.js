const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector(`#ingredients`);

const listEl = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement(`li`);
  ingredientsItemEl.textContent = ingredient;
  ingredientsItemEl.classList.add(`item`);
  return ingredientsItemEl;
    
});
console.log(listEl);
ingredientsListEl.append(...listEl);

