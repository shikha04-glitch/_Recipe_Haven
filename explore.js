// Initial recipes array with ingredients & instructions
const recipes = [
  {
    name: "Paneer Butter Masala",
    image: "https://th.bing.com/th/id/OSK.fdba53fc2c82454fe50a2fcbc76bd9c7?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&cb=ucfimgc1&dpr=1.3&pid=16.1",
    description: "A rich, creamy and flavorful North Indian curry made with paneer cubes simmered in spiced tomato gravy.",
    ingredients: [
      "200g paneer (cottage cheese), cubed",
      "2 medium tomatoes, pureed",
      "1 onion, finely chopped",
      "1 tbsp butter",
      "1 tsp ginger-garlic paste",
      "1/2 tsp garam masala",
      "1/2 tsp red chili powder",
      "1/4 cup cream",
      "Salt to taste"
    ],
    instructions: [
      "Heat butter in a pan and sauté onions till golden brown.",
      "Add ginger-garlic paste and cook for 1 minute.",
      "Add tomato puree and cook until oil separates.",
      "Mix in garam masala, red chili powder, and salt.",
      "Add cream and paneer cubes; simmer for 8–10 minutes.",
      "Serve hot with naan or jeera rice."
    ]
  },
  {
    name: "Chocolate Cake",
    image: "https://www.bing.com/th/id/OIP.i-PdNRke9f4VZIBjFskfdwHaHa?w=167&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2",
    description: "Soft, moist, and rich chocolate cake — perfect for celebrations or tea time treats.",
    ingredients: [
      "1 cup all-purpose flour",
      "1/2 cup cocoa powder",
      "3/4 cup sugar",
      "2 eggs",
      "1/2 cup butter, melted",
      "1/2 cup milk",
      "1 tsp baking powder",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 180°C and grease a cake tin.",
      "Mix all dry ingredients in a bowl.",
      "Add eggs, butter, milk, and vanilla extract.",
      "Whisk to a smooth batter and pour into the tin.",
      "Bake for 30–35 minutes or until a toothpick comes out clean.",
      "Cool completely and serve or frost as desired."
    ]
  },
  {
    name: "Pasta Alfredo",
    image: "https://th.bing.com/th/id/OSK.HEROYhEqpKUBNDVE39tM4AhBcoVJ4PckKwaf_PdJI64XjCU?w=472&h=280&c=13&rs=2&o=6&cb=ucfimgc1&dpr=1.3&pid=SANGAM",
    description: "Creamy, cheesy Italian pasta tossed in a rich Alfredo sauce made with butter and cream.",
    ingredients: [
      "200g pasta (penne or fettuccine)",
      "2 tbsp butter",
      "1/2 cup cream",
      "1/4 cup grated parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions and drain.",
      "In a pan, melt butter and sauté garlic for 1 minute.",
      "Add cream and simmer for 2–3 minutes.",
      "Stir in parmesan cheese, salt, and pepper.",
      "Add pasta to the sauce and toss until well coated.",
      "Serve hot, topped with extra cheese."
    ]
  },
  {
    name: "Masala Dosa",
    image: "https://th.bing.com/th/id/OIP.6Nx_C1m4YCujBiHe48YpHAHaE8?w=275&h=183&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "A crispy South Indian crepe stuffed with spiced potato filling, served with chutney and sambar.",
    ingredients: [
      "2 cups dosa batter",
      "2 boiled potatoes, mashed",
      "1 onion, chopped",
      "1 green chili, chopped",
      "1/2 tsp mustard seeds",
      "1/2 tsp turmeric",
      "Curry leaves, salt, and oil"
    ],
    instructions: [
      "Prepare the potato masala by sautéing onions, chili, and spices.",
      "Add mashed potatoes and mix well.",
      "Heat a tawa, spread dosa batter thinly.",
      "Add potato filling in center, fold and serve.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    name: "Mango Smoothie",
    image: "https://th.bing.com/th/id/OIP.rA1FLiOds7-39dhHadF7XAHaFj?w=208&h=156&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "A refreshing and creamy summer drink made with ripe mangoes and yogurt.",
    ingredients: [
      "1 ripe mango, peeled and chopped",
      "1/2 cup yogurt",
      "1/4 cup milk",
      "1 tsp honey or sugar",
      "Ice cubes"
    ],
    instructions: [
      "Add mango, yogurt, milk, and honey to a blender.",
      "Blend until smooth and creamy.",
      "Pour into glasses and top with ice cubes.",
      "Garnish with mint leaves and serve chilled."
    ]
  },
  {
    name: "Veg Biryani",
    image: "https://th.bing.com/th/id/OIP.LadujoU81UAUhQjy9gElUwHaHa?w=136&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "A fragrant rice dish layered with spiced vegetables, saffron, and herbs.",
    ingredients: [
      "1 cup basmati rice",
      "1 cup mixed vegetables",
      "1 onion, sliced",
      "1 tomato, chopped",
      "1/2 cup yogurt",
      "1 tbsp biryani masala",
      "Saffron and mint leaves"
    ],
    instructions: [
      "Cook rice till 80% done and keep aside.",
      "Sauté onions till golden and add vegetables.",
      "Mix in spices, tomato, and yogurt.",
      "Layer rice and vegetable masala in a pot.",
      "Steam for 10–15 minutes and serve with raita."
    ]
  },
  {
    name: "Maggie",
    image: "https://tse1.mm.bing.net/th/id/OIP.TIosLwQAuvP-bqRm3BKauAHaGg?cb=ucfimgc2&w=1200&h=1054&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Quick 2-minute noodles cooked with vegetables and signature Maggi masala.",
    ingredients: [
      "1 pack Maggi noodles",
      "1 cup water",
      "1/4 cup chopped vegetables (optional)",
      "1 tbsp oil",
      "Maggi tastemaker"
    ],
    instructions: [
      "Heat oil in a pan and sauté vegetables.",
      "Add water and bring to a boil.",
      "Add noodles and tastemaker.",
      "Cook until water is absorbed and serve hot."
    ]
  },
  {
    name: "Idli Sambar",
    image: "https://th.bing.com/th/id/OIP.RKq5Uul-gN3zc4hcKui12AHaE7?w=268&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "Soft steamed idlis served with spicy lentil-based vegetable stew called sambar.",
    ingredients: [
      "2 cups idli batter",
      "1/2 cup toor dal",
      "1 tomato, chopped",
      "1 onion, sliced",
      "Tamarind pulp",
      "Sambar powder and salt"
    ],
    instructions: [
      "Steam the idlis in an idli maker.",
      "Boil dal till soft and mash it.",
      "Cook onions and tomatoes in tamarind water with sambar powder.",
      "Add dal and simmer for 10 minutes.",
      "Serve hot idlis with sambar and coconut chutney."
    ]
  },
  {
    name: "Kadhai Mushroom",
    image: "https://vismaifood.com/storage/app/uploads/public/274/0cf/870/thumb__1200_0_0_0_auto.jpg",
    description: "A spicy and flavorful curry made with mushrooms, capsicum, and kadhai masala.",
    ingredients: [
      "200g mushrooms, sliced",
      "1 onion, chopped",
      "1 tomato, pureed",
      "1/2 green capsicum, chopped",
      "1 tsp kadhai masala",
      "1/2 tsp chili powder",
      "2 tbsp oil"
    ],
    instructions: [
      "Heat oil, sauté onions till golden.",
      "Add tomato puree and cook till oil separates.",
      "Add capsicum and mushrooms, stir-fry for 3–4 minutes.",
      "Mix in spices and cook till gravy thickens.",
      "Serve hot with roti or rice."
    ]
  },
  {
    name: "Burger",
    image: "https://sugarspunrun.com/wp-content/uploads/2020/06/Burger-buns-recipe-1-of-2.jpg",
    description: "Classic burger with crispy patty, fresh veggies, and creamy sauce.",
    ingredients: [
      "2 burger buns",
      "1 veg or chicken patty",
      "Lettuce leaves",
      "Tomato & onion slices",
      "Cheese slice",
      "Mayonnaise or ketchup"
    ],
    instructions: [
      "Toast buns lightly with butter.",
      "Cook patty until crisp and golden.",
      "Layer lettuce, patty, tomato, onion, and cheese.",
      "Add sauces and cover with top bun.",
      "Serve with fries and cold drink."
    ]
  },
  {
    name: "Tiramisu",
    image: "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17-1024x1536.jpg",
    description: "An Italian dessert made of coffee-soaked ladyfingers layered with mascarpone cream.",
    ingredients: [
      "12 ladyfinger biscuits",
      "1 cup brewed coffee",
      "1 cup mascarpone cheese",
      "1/2 cup whipped cream",
      "2 tbsp cocoa powder",
      "2 tbsp sugar"
    ],
    instructions: [
      "Dip ladyfingers in coffee and layer them in dish.",
      "Whip mascarpone, cream, and sugar until smooth.",
      "Spread cream over biscuits, repeat layers.",
      "Dust cocoa powder on top and chill for 4 hours.",
      "Serve cold."
    ]
  },
  {
    name: "Dal Makhani",
    image: "https://tse3.mm.bing.net/th/id/OIP.sF4b948SFHLbg4JSDLrzPgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A rich Punjabi lentil curry cooked slowly with butter and cream.",
    ingredients: [
      "1/2 cup black urad dal",
      "2 tbsp rajma (kidney beans)",
      "1 onion, chopped",
      "2 tomatoes, pureed",
      "1 tbsp butter",
      "1/4 cup cream",
      "Spices and salt"
    ],
    instructions: [
      "Soak dal and rajma overnight, pressure cook until soft.",
      "Sauté onion and tomato in butter till mushy.",
      "Add spices and cooked dal.",
      "Simmer for 30–40 minutes, add cream before serving.",
      "Serve hot with naan or rice."
    ]
  },
  {
    name: "Kadhai Paneer",
    image: "https://th.bing.com/th/id/OIP.uH220g0IipJa5zLdUm9QIgHaHa?w=161&h=150&c=6&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "A flavorful paneer dish cooked with capsicum and spicy kadhai masala.",
    ingredients: [
      "200g paneer cubes",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1/2 capsicum, diced",
      "1 tsp kadhai masala",
      "1/2 tsp chili powder",
      "Oil and salt"
    ],
    instructions: [
      "Heat oil and sauté onion and capsicum.",
      "Add tomatoes and cook until soft.",
      "Add spices and paneer cubes.",
      "Mix well and cook for 5–7 minutes.",
      "Serve with paratha or naan."
    ]
  },
  {
    name: "Pav Bhaji",
    image: "https://th.bing.com/th/id/OIP.XCy0L7f8LBWILfOSGTXpvgHaLO?w=155&h=150&c=6&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "Mumbai-style spicy mashed vegetable curry served with buttered pav.",
    ingredients: [
      "2 boiled potatoes",
      "1/2 cup mixed vegetables (peas, carrots, capsicum)",
      "1 onion, chopped",
      "1 tomato, chopped",
      "2 tsp pav bhaji masala",
      "Butter and lemon"
    ],
    instructions: [
      "Mash boiled veggies and set aside.",
      "Sauté onions and tomatoes in butter.",
      "Add pav bhaji masala and mashed veggies.",
      "Cook for 10 minutes till thick and flavorful.",
      "Serve hot with buttered pav and lemon wedge."
    ]
  },
  {
    name: "Momo",
    image: "https://th.bing.com/th/id/OIP.1BYnaayLy8GcsuHwYnSK6gHaE6?w=244&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    description: "Steamed dumplings stuffed with vegetables or meat, served with spicy chutney.",
    ingredients: [
      "1 cup refined flour",
      "1/2 cup grated cabbage",
      "1/4 cup chopped carrot",
      "1/4 cup chopped onion",
      "1 tsp soy sauce",
      "Salt & pepper"
    ],
    instructions: [
      "Knead dough using flour and water, rest for 10 minutes.",
      "Mix all veggies with soy sauce and spices.",
      "Roll dough into circles, fill stuffing and seal.",
      "Steam momos for 8–10 minutes.",
      "Serve hot with red chutney."
    ]
  }
];
const container = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");

// Add Recipe Modal
const addModal = document.getElementById("addRecipeModal");
const addCloseBtn = addModal.querySelector(".close");
const saveBtn = document.getElementById("saveRecipe");

document.getElementById("addRecipeBtn").addEventListener("click", () => {
  addModal.style.display = "flex";
});

addCloseBtn.addEventListener("click", () => {
  addModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === addModal) addModal.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  const name = document.getElementById("recipeName").value.trim();
  const image = document.getElementById("recipeImage").value.trim();
  const desc = document.getElementById("recipeDesc").value.trim();

  if (name && image && desc) {
    const newRecipe = {
      name,
      image,
      ingredients: desc.split(",").map(i => i.trim()), // simple ingredient split
      instructions: desc
    };
    recipes.push(newRecipe);
    showRecipes(recipes);
    addModal.style.display = "none";

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeImage").value = "";
    document.getElementById("recipeDesc").value = "";
  } else {
    alert("Please fill all fields!");
  }
});

// Recipe Details Modal
const recipeModal = document.getElementById("recipeModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");

// Function to show recipes cards
function showRecipes(data) {
  container.innerHTML = "";
  data.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <h3>${recipe.name}</h3>
      </div>
      <div class="recipe-actions">
        <button>❤ Like</button>
        <button>💾 Save</button>
        <button>🔗 Share</button>
      </div>
    `;

    // Card click → open recipe details modal
    card.querySelector("img, .recipe-info").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent interference with buttons
      openRecipeModal(recipe);
    });

    container.appendChild(card);
  });
}

function openRecipeModal(recipe) {
  modalTitle.textContent = recipe.name;
  modalImage.src = recipe.image;

  // Ingredients
  modalIngredients.innerHTML = "";
  if (recipe.ingredients && recipe.ingredients.length > 0) {
    recipe.ingredients.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalIngredients.appendChild(li);
    });
  } else {
    modalIngredients.innerHTML = "<li>No ingredients listed</li>";
  }

  // Instructions
  modalInstructions.textContent = recipe.instructions || "No instructions provided";

  // Auto expand modal to fit all content
  recipeModal.style.display = "flex";
  recipeModal.scrollTo(0, 0);
}
// Close recipe modal
modalClose.addEventListener("click", () => {
  recipeModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === recipeModal) recipeModal.style.display = "none";
});

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtered = recipes.filter(r => r.name.toLowerCase().includes(searchText));
  showRecipes(filtered);
});

// Initial render
showRecipes(recipes);

// ❤ Like & 💾 Save Button Functionality
document.addEventListener("click", (e) => {
  // Like button toggle (red)
  if (e.target.classList.contains("like-btn")) {
    e.target.classList.toggle("liked");
  }

  // Save button toggle (green text)
  if (e.target.classList.contains("save-btn")) {
    if (e.target.classList.toggle("saved")) {
      e.target.textContent = "💾 Saved";
    } else {
      e.target.textContent = "💾 Save";
    }
  }

  // Comment button → open comment box
  if (e.target.classList.contains("comment-btn")) {
    openCommentBox(e.target.closest(".modal-content"));
  }
});

// 💬 Comment box popup
function openCommentBox(parent) {
  // agar already box hai, to dobara na banao
  if (parent.querySelector(".comment-box")) return;

  const box = document.createElement("div");
  box.classList.add("comment-box");
  box.innerHTML = `
    <textarea placeholder="Write your comment..."></textarea>
    <button class="submit-comment">Post</button>
  `;

  parent.appendChild(box);

  const submitBtn = box.querySelector(".submit-comment");
  const textarea = box.querySelector("textarea");

  submitBtn.addEventListener("click", () => {
    const commentText = textarea.value.trim();
    if (commentText) {
      const comment = document.createElement("p");
      comment.textContent = "💬 " + commentText;
      comment.classList.add("user-comment");
      parent.insertBefore(comment, box);
      textarea.value = "";
    } else {
      alert("Please write something!");
    }
  });
}
