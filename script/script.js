// ===== HOME PAGE: Rotating Quotes =====
document.addEventListener("DOMContentLoaded", function () {
  const rotatingText = document.getElementById("rotating-text");
  if (!rotatingText) return; // safety if run on other pages

  const quotes = [
    "Eat Better, Live Better, Feel Better",
    "Healthy Habits Build a Strong Future",
    "Good Nutrition is an Investment in Yourself",
    "A Balanced Diet is a Balanced Life",
    "Wellness Starts with What’s on Your Plate",
    "Small Steps, Big Health Wins"
  ];

  let current = -1;

  function changeQuote() {
    rotatingText.style.opacity = 0;
    setTimeout(function () {
      current = (current + 1) % quotes.length;
      rotatingText.textContent = quotes[current];
      rotatingText.style.opacity = 1;
    }, 1000);
  }

  changeQuote();
  setInterval(changeQuote, 5000);
});


// ===== HOME PAGE: Tip of the Day =====
document.addEventListener("DOMContentLoaded", function () {
  const tipElement = document.getElementById("DailyQuote");
  if (!tipElement) return;

  const tips = [
    "Recharge your week: add fresh berries to your breakfast for an antioxidant boost!",
    "Start strong: hydrate with lemon water for a refreshing energy lift.",
    "Eat more greens today for a healthier tomorrow — your body will thank you!",
    "Midweek balance: swap chips for a handful of crunchy nuts and seeds.",
    "Brighten your plate with colorful veggies — the rainbow fuels your immune system.",
    "Power up: choose whole grains over refined carbs for lasting energy.",
    "Relax and restore: enjoy a homemade smoothie packed with fruits and greens."
  ];

  const today = new Date().getDay();
  console.log("Today is: " + today);
  console.log("Tip shown: " + tips[today]);

  tipElement.textContent = tips[today];
});


// ===== Recipe Data =====
const recipes = {
  1: {
    name: "Berry Overnight Oats",
    image: "images/1berryovernightoats.jpg",
    ingredients: ["Rolled oats", "Yogurt", "Chia seeds", "Berries", "Honey"],
    steps: ["Mix oats, yogurt, chia.", 
      "Refrigerate overnight.", 
      "Top with berries and honey."
    ],
    nutrition: { calories: "350", protein: "12g", carbs: "55g", fat: "8g" }
  },

  2: {
  name: "Apple Cinnamon Oat Smoothie",
  image: "images/2applecinnamonoatsmoothie.jpg",
  ingredients: ["Oats", "Apple", "Greek yogurt", "Milk", "Honey", "Cinnamon", "Ice cubes"],
  steps: [
    "Soak oats in water.",
    "Add oats.",
    "Add apple.",
    "Add yogurt.",
    "Add milk.",
    "Add honey.",
    "Add cinnamon.",
    "Blend well.",
    "Add ice cubes.",
    "Pour into a glass and enjoy chilled."
  ],
  nutrition: { calories: "280 kcal", protein: "12 g", carbs: "45 g", fat: "6 g" }
},

3: {
  name: "Veggie Stir-Fry with Brown Rice",
  image: "images/3eggiestirfry.jpeg",
  ingredients: [
    "Brown rice",
    "Broccoli florets",
    "Red bell pepper",
    "Yellow bell pepper",
    "Carrot",
    "Zucchini",
    "Soy sauce",
    "Olive oil",
    "Ginger",
    "Garlic"
  ],
  steps: [
    "Cook brown rice.",
    "Heat oil in a wok.",
    "Add garlic.",
    "Add ginger.",
    "Add broccoli.",
    "Add peppers.",
    "Add carrot.",
    "Add zucchini.",
    "Stir-fry for 5 minutes.",
    "Add soy sauce and stir well.",
    "Serve warm over brown rice."
  ],
  nutrition: { calories: "390 kcal", protein: "12 g", carbs: "68 g", fat: "10 g" }
},

4: {
  name: "Avocado & Black Bean Wrap",
  image: "images/4avocadoblackbeanwrap.jpg",
  ingredients: [
    "Tortilla",
    "Avocado",
    "Black beans",
    "Sweet corn kernels",
    "Tomatoes",
    "Lettuce",
    "Greek yogurt",
    "Lime juice",
    "Salt & pepper"
  ],
  steps: [
    "Warm the tortilla slightly.",
    "Mash avocado and spread evenly over tortilla.",
    "Add black beans.",
    "Add corn.",
    "Add tomatoes.",
    "Add lettuce.",
    "Add a spoon of Greek yogurt.",
    "Add a squeeze of lime juice.",
    "Season with salt and pepper.",
    "Roll tightly into a wrap."
  ],
  nutrition: { calories: "350 kcal", protein: "11 g", carbs: "45 g", fat: "14 g" }
},

5: {
  name: "Grilled Salmon & Veggie Quinoa",
  image: "images/Recipe1img.jpg",
  ingredients: [
    "Salmon fillets",
    "Quinoa",
    "Broccoli florets",
    "Red bell pepper",
    "Zucchini",
    "Carrot",
    "Olive oil",
    "Garlic",
    "Lemon",
    "Salt & pepper"
  ],
  steps: [
    "Cook quinoa.",
    "Preheat oven to 200°C (400°F).",
    "Add broccoli.",
    "Add bell pepper.",
    "Add zucchini.",
    "Add carrot.",
    "Add olive oil.",
    "Add garlic.",
    "Add salt and pepper.",
    "Roast veggies for 20 minutes until tender.",
    "Season salmon with salt, pepper, and lemon juice.",
    "Grill or pan-sear salmon 3–4 minutes each side until cooked.",
    "Assemble: quinoa as base, veggies on the side, salmon on top.",
    "Garnish with lemon zest before serving."
  ],
  nutrition: { calories: "480 kcal", protein: "35 g", carbs: "38 g", fat: "20 g" }
},

6: {
  name: "Veggie Pesto Pasta",
  image: "images/6veggiepestopasta.jpg",
  ingredients: [
    "Pasta",
    "Tomatoes",
    "Zucchini",
    "Red bell pepper",
    "Olive oil",
    "Basil pesto",
    "Parmesan (optional)",
    "Salt & black pepper"
  ],
  steps: [
    "Cook pasta.",
    "Add tomatoes.",
    "Add zucchini.",
    "Add red pepper.",
    "Add olive oil.",
    "Add salt and pepper.",
    "Roast veggies at 200°C (400°F) for 20 minutes.",
    "Combine pasta with roasted veggies and stir in pesto.",
    "Sprinkle Parmesan if desired and serve warm."
  ],
  nutrition: { calories: "420 kcal", protein: "14 g", carbs: "60 g", fat: "14 g" }
},

7: {
  name: "Quinoa & Roasted Veggie Salad with Lemon Dressing",
  image: "images/7quinoaroastedveggiesalad.jpg",
  ingredients: [
    "Quinoa",
    "Red bell pepper",
    "Zucchini",
    "Carrot",
    "Red onion",
    "Olive oil",
    "Lemon juice",
    "Honey",
    "Mustard",
    "Salt and pepper"
  ],
  steps: [
    "Cook quinoa.",
    "Add peppers.",
    "Add zucchini.",
    "Add carrot.",
    "Add onion.",
    "Add olive oil.",
    "Add salt and pepper.",
    "Roast at 200°C (400°F) for 20–25 minutes.",
    "Whisk lemon juice, honey, mustard, and a pinch of salt for the dressing.",
    "Combine quinoa, roasted veggies, and dressing. Mix well and serve chilled or warm."
  ],
  nutrition: { calories: "370 kcal", protein: "11 g", carbs: "55 g", fat: "12 g" }
},

8: {
  name: "Spicy Beef & Veg",
  image: "images/8spicybeefveggiestirfry.jpg",
  ingredients: [
    "Beef",
    "Red bell pepper",
    "Broccoli florets",
    "Carrot",
    "Onion",
    "Garlic",
    "Ginger",
    "Soy sauce",
    "Olive oil",
    "Chili flakes",
    "Salt & pepper"
  ],
  steps: [
    "Slice beef into strips.",
    "Heat olive oil in a wok.",
    "Add garlic and ginger, sauté until fragrant.",
    "Add onion and bell pepper, stir-fry for 2–3 minutes.",
    "Add broccoli and carrot, cook for 5 minutes.",
    "Add soy sauce and stir well.",
    "Sprinkle chili flakes.",
    "Season with salt & pepper.",
    "Serve hot with rice or noodles."
  ],
  nutrition: { calories: "420 kcal", protein: "32 g", carbs: "20 g", fat: "22 g" }
},

9: {
  name: "Lemon Herb Chicken with Roasted Veggies",
  image: "images/9lemonherbchickenwithroastedveggies.jpg",
  ingredients: [
    "Chicken breasts",
    "Zucchini",
    "Red bell pepper",
    "Carrot",
    "Lemon",
    "Olive oil",
    "Oregano",
    "Salt & pepper"
  ],
  steps: [
    "Preheat oven to 200°C (400°F).",
    "Marinate chicken with lemon juice, oregano, salt, pepper, and olive oil.",
    "Chop zucchini, bell pepper, and carrot into bite-sized pieces.",
    "Toss veggies with olive oil, salt, and pepper.",
    "Place marinated chicken and veggies on a baking tray.",
    "Bake for 20–25 minutes, until chicken is fully cooked and veggies are tender.",
    "Serve hot with a squeeze of fresh lemon."
  ],
  nutrition: { calories: "390 kcal", protein: "37 g", carbs: "18 g", fat: "17 g" }
},

10: {
  name: "Stuffed Eggplant with Quinoa & Veggies",
  image: "images/10stuffedeggplantwithquinoaveggies.jpg",
  ingredients: [
    "Eggplants",
    "Quinoa",
    "Red bell pepper",
    "Onion",
    "Tomato",
    "Olive oil",
    "Oregano",
    "Salt & pepper"
  ],
  steps: [
    "Preheat oven to 190°C (375°F).",
    "Slice eggplants in half lengthwise and scoop out the flesh.",
    "Cook quinoa according to package instructions.",
    "Chop bell pepper, onion, and tomato; sauté with olive oil, oregano, salt, and pepper.",
    "Mix sautéed veggies with quinoa to make the stuffing.",
    "Fill eggplant shells with the quinoa-veggie mix.",
    "Bake for 25 minutes until eggplants are tender.",
    "Serve warm with a drizzle of olive oil."
  ],
  nutrition: { calories: "360 kcal", protein: "12 g", carbs: "52 g", fat: "14 g" }
},

11: {
  name: "Green Energy Smoothie",
  image: "images/11greenenergysmoothie.jpg",
  ingredients: [
    "Spinach leaves",
    "Banana",
    "Pineapple",
    "Greek yogurt",
    "Almond milk",
    "Honey",
    "Ice cubes (optional)"
  ],
  steps: [
    "Add spinach, banana, pineapple, and Greek yogurt into a blender.",
    "Pour in almond milk.",
    "Blend until smooth and creamy.",
    "Add honey to taste and blend briefly again.",
    "Add ice cubes if desired for extra chill.",
    "Pour into a glass and serve immediately."
  ],
  nutrition: { calories: "250 kcal", protein: "10 g", carbs: "42 g", fat: "5 g" }
},


  12: {
    name: "Baked Salmon with Garlic & Asparagus",
    image: "images/12bakedsalmonwithgarlicasparagus.jpg",
    ingredients: ["Salmon", "Asparagus", "Garlic", "Olive oil", "Lemon", "Salt & Pepper"],
    steps: [
      "Preheat oven 200°C (400°F)", 
      "Place salmon and asparagus in tray", 
      "Add olive oil", 
      "Add garlic", 
      "Add lemon juice", 
      "Add salt & pepper"
    ],
    nutrition: { calories: "410", protein: "34g", carbs: "8g", fat: "25g" }
  }
};


// ===== Modal logic =====
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;

  const closeBtn      = modal.querySelector('.close-btn');
  const titleEl       = modal.querySelector('#modal-title');
  const imageEl       = modal.querySelector('#modal-image');
  const ingredientsEl = modal.querySelector('#modal-ingredients');
  const stepsEl       = modal.querySelector('#modal-steps');
  const nutCalories   = modal.querySelector('#nut-calories');
  const nutProtein    = modal.querySelector('#nut-protein');
  const nutCarbs      = modal.querySelector('#nut-carbs');
  const nutFat        = modal.querySelector('#nut-fat');

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.recipe;
      const recipe = recipes[id];
      if (!recipe) return;

      titleEl.textContent = recipe.name;
      imageEl.src = recipe.image;
      imageEl.alt = recipe.name;
      ingredientsEl.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
      stepsEl.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');
      nutCalories.textContent = recipe.nutrition.calories;
      nutProtein.textContent  = recipe.nutrition.protein;
      nutCarbs.textContent    = recipe.nutrition.carbs;
      nutFat.textContent      = recipe.nutrition.fat;

      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
});


// ===== Feedback Form Validation =====
const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const message = document.getElementById("feedback-message");

    if (!name || !email || !feedback) {
      message.textContent = "⚠️ Please fill in all fields.";
      message.style.color = "red";
      return;
    }

    const storedFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
    storedFeedback.push({ name, email, feedback, date: new Date().toLocaleString() });
    localStorage.setItem("feedbacks", JSON.stringify(storedFeedback));

    message.textContent = "✅ Thank you for your feedback, " + name + "!";
    message.style.color = "green";
    this.reset();
  });
}


// ===== FAQ Accordion =====
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", function() {
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});


// ===== Mindfulness: Breathing =====
const breathingCircle = document.getElementById("breathing-circle");
if (breathingCircle) {
  function breatheCycle() {
    breathingCircle.textContent = "Inhale";
    breathingCircle.style.transform = "scale(1.5)";
    setTimeout(() => { breathingCircle.textContent = "Hold"; }, 4000);
    setTimeout(() => {
      breathingCircle.textContent = "Exhale";
      breathingCircle.style.transform = "scale(1)";
    }, 6000);
    setTimeout(() => { breathingCircle.textContent = "Hold"; }, 10000);
  }
  breatheCycle();
  setInterval(breatheCycle, 12000);
}


// ===== Mindfulness: Timer =====
const mindStartBtn = document.getElementById("start-timer");
const mindMinutesInput = document.getElementById("minutes");
const mindTimerDisplay = document.getElementById("timer-display");
const mindSessionCount = document.getElementById("session-count");

let mindTimer;
if (mindStartBtn) {
  mindStartBtn.addEventListener("click", () => {
    let mindTime = parseInt(mindMinutesInput.value, 10) * 60;
    if (isNaN(mindTime) || mindTime <= 0) {
      alert("Please enter a valid number of minutes.");
      return;
    }
    clearInterval(mindTimer);

    mindTimer = setInterval(() => {
      let mins = Math.floor(mindTime / 60);
      let secs = mindTime % 60;
      mindTimerDisplay.textContent = `${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
      mindTime--;

      if (mindTime < 0) {
        clearInterval(mindTimer);
        alert("Session Complete!");
        let count = localStorage.getItem("sessions") || 0;
        count++;
        localStorage.setItem("sessions", count);
        mindSessionCount.textContent = count;
      }
    }, 1000);
  });

  window.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("sessions") || 0;
    mindSessionCount.textContent = count;
  });
}


// ===== Mindfulness: Ambient Sounds =====
const soundBtns = document.querySelectorAll(".sound-btn");
if (soundBtns.length) {
  let audio = new Audio();
  soundBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let sound = btn.dataset.sound;
      if (sound === "off") {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.src = `sounds/${sound}.mp3`;
        audio.loop = true;
        audio.play();
      }
    });
  });
}


// ===== Calculator =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  if (!form) return;

  const ageEl      = document.getElementById('age');
  const genderEl   = document.getElementById('gender');
  const heightEl   = document.getElementById('height');
  const weightEl   = document.getElementById('weight');
  const activityEl = document.getElementById('activity');
  const errorEl    = document.getElementById('calc-error');

  const bmrEl       = document.getElementById('bmr');
  const tdeeEl      = document.getElementById('tdee');
  const carbGrEl    = document.getElementById('carb-grams');
  const proteinGrEl = document.getElementById('protein-grams');
  const fatGrEl     = document.getElementById('fat-grams');

  const carbBar    = document.getElementById('carb-bar');
  const proteinBar = document.getElementById('protein-bar');
  const fatBar     = document.getElementById('fat-bar');

  function resetResults() {
    bmrEl.textContent = '–';
    tdeeEl.textContent = '–';
    carbGrEl.textContent = '0 g';
    proteinGrEl.textContent = '0 g';
    fatGrEl.textContent = '0 g';
    carbBar.style.width = '0%';
    proteinBar.style.width = '0%';
    fatBar.style.width = '0%';
  }
  resetResults();

  function animateNumber(node, target, suffix=''){
    const start = 0, duration = 500, t0 = performance.now();
    function tick(t){
      const p = Math.min((t - t0)/duration, 1);
      const value = Math.round(start + p*(target - start));
      node.textContent = value.toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseInt(ageEl.value, 10);
    const gender = genderEl.value;
    const height = parseFloat(heightEl.value);
    const weight = parseFloat(weightEl.value);
    const factor = parseFloat(activityEl.value);

    if (!age || !height || !weight || !gender || !factor){
      errorEl.textContent = 'Please fill in all fields.';
      return;
    }
    errorEl.textContent = '';

    let bmr = 10*weight + 6.25*height - 5*age + (gender === 'male' ? 5 : -161);
    let tdee = bmr * factor;

    const carbsG = (tdee * 0.50) / 4;
    const proteinG = (tdee * 0.20) / 4;
    const fatG = (tdee * 0.30) / 9;

    animateNumber(bmrEl, Math.round(bmr), ' kcal');
    animateNumber(tdeeEl, Math.round(tdee), ' kcal');

    carbGrEl.textContent = Math.round(carbsG) + ' g';
    proteinGrEl.textContent = Math.round(proteinG) + ' g';
    fatGrEl.textContent = Math.round(fatG) + ' g';

    carbBar.style.width = (carbsG * 4 / tdee * 100) + "%";
    proteinBar.style.width = (proteinG * 4 / tdee * 100) + "%";
    fatBar.style.width = (fatG * 9 / tdee * 100) + "%";
  });
});


// ===== Workout Generator =====
const exercises = { /* your exercise DB unchanged */ };

const bodyPartSelect = document.getElementById("body-part");
const equipmentSelect = document.getElementById("equipment");
const generateBtn = document.getElementById("generate-btn");
const exerciseList = document.getElementById("exercise-list");

if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    const bodyPart = bodyPartSelect.value;
    const equipment = equipmentSelect.value;
    exerciseList.innerHTML = "";
    const chosen = exercises[bodyPart][equipment];
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      li.textContent = chosen[Math.floor(Math.random() * chosen.length)];
      exerciseList.appendChild(li);
    }
  });
}


// ===== Workout Timer =====
const workoutTimerDisplay = document.getElementById("timer-display");
const workoutStartBtn = document.getElementById("start-timer");
const workoutStopBtn = document.getElementById("stop-timer");

let workoutTimer;
let workoutTime = 30;

if (workoutStartBtn) {
  workoutStartBtn.addEventListener("click", () => {
    clearInterval(workoutTimer);
    workoutTime = 30;
    workoutTimer = setInterval(() => {
      let mins = Math.floor(workoutTime / 60);
      let secs = workoutTime % 60;
      workoutTimerDisplay.textContent =
        `${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
      workoutTime--;
      if (workoutTime < 0) {
        clearInterval(workoutTimer);
        alert("Time’s up! Move to next exercise!");
      }
    }, 1000);
  });
}

if (workoutStopBtn) {
  workoutStopBtn.addEventListener("click", () => clearInterval(workoutTimer));
}
