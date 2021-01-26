const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const mealsEl = document.querySelector('#meals');
const resultHeading = document.querySelector('#result-heading');
const single_mealEl = document.querySelector('#single-meal');

// Search meal and fetch from api
const searchMeal = (e) => {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term
  const term = search.value;

  // Check for empty
  if(term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if(data.meals === null) {
          resultHeading.innerHTML = `There are no search results. Try again!`;
        } else {
          mealsEl.innerHTML = data.meals.map(meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="meal-info" data-meal-id="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `).join('')
        }
      });

      // clear search text
      search.value = "";
  } else {
    alert('please enter a search term');
  }
};

// Add meal to DOM
function addMealToDom(meal) {
  const ingredients = [];

  for(let i = 1; i <= 20; i++) {
    if(meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0];
    addMealToDom(meal)
  });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and headings
  mealsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0];
    addMealToDom(meal)
  });
}

function getClickedMealId(e) {
  const mealInfo = e.path.find(item => {
    if(item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });

  if(mealInfo) {
    const mealId = mealInfo.getAttribute('data-meal-id');
    getMealById(mealId);
  }
}

// Event Listeners
submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getRandomMeal);
mealsEl.addEventListener('click', getClickedMealId);
