// Load recipes from localStorage
function getRecipes() {
  return JSON.parse(localStorage.getItem("recipes")) || [];
}

// Save recipe to localStorage
function saveRecipe(recipe) {
  const recipes = getRecipes();
  recipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}
+
// On Add Recipe Page
if (document.getElementById("recipeForm")) {
  const form = document.getElementById("recipeForm");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const recipe = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      ingredients: document.getElementById("ingredients").value.split(","),
      instructions: document.getElementById("instructions").value
    };
    saveRecipe(recipe);
    alert("Recipe added successfully!");
    window.location.href = "index.html";
  });
}

// On Home Page
if (document.getElementById("recipes-container")) {
  const container = document.getElementById("recipes-container");
  const recipes = getRecipes();

  if (recipes.length === 0) {
    container.innerHTML = "<p>No recipes yet! Add your first recipe 💕</p>";
  } else {
    container.innerHTML = recipes.map(r => `
      <div class="recipe-card">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        <small><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</small>
        <p><strong>Instructions:</strong> ${r.instructions}</p>
      </div>
    `).join("");
  }
}
// ---------- Get User & Token ----------
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

// ---------- User Info Display ----------
const userInfoDiv = document.getElementById("userInfo");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (user) {
  // Show user name
  if (userInfoDiv) userInfoDiv.innerText = `Hello, ${user.name}`;
  
  // Hide Sign In / Sign Up buttons
  if (signinBtn) signinBtn.style.display = "none";
  if (signupBtn) signupBtn.style.display = "none";

  // Show Logout button
  if (logoutBtn) logoutBtn.style.display = "inline-block";
} else {
  // Not logged in
  if (userInfoDiv) userInfoDiv.innerText = "";
  if (signinBtn) signinBtn.style.display = "inline-block";
  if (signupBtn) signupBtn.style.display = "inline-block";
  if (logoutBtn) logoutBtn.style.display = "none";
}

// ---------- Logout ----------
if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "index.html";
  };
}

// ---------- Protected API Call Example ----------
if (token) {
  fetch("http://localhost:5000/api/protected-route", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => console.log("Protected API Data:", data))
  .catch(err => console.error(err));
} else {
  console.log("User not logged in, no token available.");
}

