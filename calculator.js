const menuItems = [
  { name: "Sweet Potato Fries Bowl",    calories: 223.5, serving: "81 g",     allergens: ["soy"],             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUfyb3U05mrSAIZrloYsBBeHVKygEHhewPQ&s" },
  { name: "Vegan Bowl",                 calories: 664,   serving: "319 g",    allergens: ["soy","nuts"],      image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg" },
  { name: "Crispy Gobi Nirvana",        calories: 236,   serving: "137 g",    allergens: ["gluten","soy"],     image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/gobi-manchurian-cauliflower-manchurian-500x375.jpg" },
  { name: "Vegetarian Tandoori Momos",   calories: 476,   serving: "238 g",    allergens: ["gluten","dairy"],   image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9h3nLVmjkwEwT8x9RHvFSUoCaKuQ0poJAixsgS22YLtkKSePMyNVgEg7tafLQCc4ZbVBN3ZpMR3RuqTUyeE72kYiFjVExDrLoadZtoKBh15VSJrm9kZZhgfdAeWL1W8IuQVC3eV40sI7vMx7sfnGu4dw56JK1wdD5wa-aGySwW06CJHLl3MfSoGX/s4000/2022-07-24-19-09-09-181.jpg" },
  { name: "Green Garden Fiesta",        calories: 123,   serving: "6 pcs",    allergens: ["gluten"],         image: "https://www.foodandwine.com/thmb/g7-2C0MNTRzsC0x2dGNrOSgfe5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Jackfruit-Carnitas-Tacos-FT-Recipe-0821-06c4c7afc2cc45d0830be17b1827d05b.jpg" },
  { name: "Pani Puri",                  calories: 152,   serving: "71 g",     allergens: ["gluten"],         image: "https://static01.nyt.com/images/2024/01/17/multimedia/ND-Pani-Puri-mflg/ND-Pani-Puri-mflg-videoSixteenByNineJumbo1600.jpg" },
  { name: "Vegetable Samosas",          calories: 783,   serving: "300 g",    allergens: ["gluten","dairy"],   image: "https://spicebreeze.com/wp-content/uploads/2022/02/Indian-Samosas-sq.jpg" },
  { name: "Paneer",                     calories: 365,   serving: "122 g",    allergens: ["dairy"],           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwgDjjeDBhjYECMNvwg2Zoq1JeSexFTAsfQ&s" },
  { name: "Vegetable Pakora",           calories: 250,   serving: "130 g",    allergens: ["gluten"],         image: "https://www.recipetineats.com/uploads/2021/05/Pakora_1.jpg" },
  { name: "Chaat",                      calories: 242,   serving: "129 g",    allergens: ["gluten"],         image: "https://www.yellowthyme.com/wp-content/uploads/2022/10/Chaat-Dip-8-500x375.jpg" },
  { name: "Bhindi Masala",              calories: 330,   serving: "142 g",    allergens: [],                 image: "https://ministryofcurry.com/wp-content/uploads/2020/12/Bhindi-Masala-4.jpg" },
  { name: "Aloo Gobi",                  calories: 111,   serving: "155 g",    allergens: [],                 image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg" },
  { name: "Golden Spice Wrap",          calories: 506,   serving: "1 wrap",   allergens: ["gluten"],         image: "https://theflavoursofkitchen.com/wp-content/uploads/2023/05/Veggies-wrap-3-scaled.jpg" },
  { name: "Vegetarian Biryani",         calories: 198,   serving: "169 g",    allergens: [],                 image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg" },
  { name: "Spicy Masala Pasta",         calories: 294,   serving: "220 g",    allergens: ["gluten"],         image: "https://holycowvegan.net/wp-content/uploads/2020/01/masala-pasta-indian-street-style-9.jpg" },
  { name: "Gulab Jamun",                calories: 596,   serving: "200 g",    allergens: ["dairy"],           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0M2DR9_GEQLX4NbR_n8xXqvwQfVzkhlLoyN5QcapOGtR3HPx8hIag3YIM7xDuMjmftSo7iNqAtzcFirXDts0ttIu3RgBE5OkDQi3gw0MuETdVw1QwV01hJrqcvfg9UAiKeIRmxKZYMGua-CFN-uhxznh4vdz60JcyDuUxe06HlYTcEGinaOlCsUcM08dgCVD1hkBxOrkAA8T7" },
  { name: "Kesar Pista Kulfi",          calories: 179,   serving: "77 g",     allergens: ["dairy","nuts"],    image: "https://www.archanaskitchen.com//images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2.jpg" },
  { name: "Jalebi",                     calories: 300,   serving: "110 g",    allergens: [],                 image: "https://lh4.googleusercontent.com/proxy/95HwV7p2BQ38eiMqGzupGlMKLkuSPBwQfVzkhlLoyN5QcapOGtR3HPx8hIag3YIM7xDuMjmftSo7iNqAtzcFirXDts0ttIu3RgBE5OkDQi3gw0MuETdVw1QwV01hJrqcvfg9UAiKeIRmxKZYMGua-CFN-uhxznh4vdz60JcyDuUxe06HlYTcEGinaOlCsUcM08dgCVD1hkBxOrkAA8T7" },
  { name: "Tres Leches",                calories: 326,   serving: "124 g",    allergens: ["dairy"],           image: "https://www.allrecipes.com/thmb/3zjqR0J3EYdaRwZ97AQAZoUSC5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7399-tres-leches-milk-cake-ddmfs-beauty-2x1-BG-25702-f42c94b10c914753aa4dcb413658b8bf.jpg" },
  { name: "Tiramisu",                   calories: 267,   serving: "100 g",    allergens: ["dairy","egg","gluten"], image: "https://i0.wp.com/www.thelittleblogofvegan.com/wp-content/uploads/2022/03/vegan-tiramisu-2-scaled.jpg?fit=1707%2C2560&ssl=1" }
];

function calculate() {
  const age      = +document.getElementById('age').value;
  const gender   = document.getElementById('gender').value;
  const weight   = +document.getElementById('weight').value;
  const height   = +document.getElementById('height').value;
  const activity = +document.getElementById('activity').value;
  const goal     = document.getElementById('goal').value;

  const allergies = Array.from(
    document.querySelectorAll('.allergy-list input:checked')
  ).map(cb => cb.value);

  // BMR
  let bmr = gender === 'male'
    ? 10*weight + 6.25*height - 5*age + 5
    : 10*weight + 6.25*height - 5*age - 161;

  // TDEE + goal
  let tdee = bmr * activity;
  if (goal === 'lose')  tdee -= 500;
  if (goal === 'gain')  tdee += 300;

  const perMeal = tdee / 3;

  // Filter by allergens
  const safe = menuItems.filter(item =>
    allergies.every(a => !item.allergens.includes(a))
  );

  // Recommend only dishes between 50% and 100% of perMeal
  const recs = safe.filter(item =>
    item.calories >= perMeal * 0.5 &&
    item.calories <= perMeal
  ).sort((a, b) =>
    Math.abs(b.calories - perMeal) - Math.abs(a.calories - perMeal)
  );

  // Render
  const out = document.getElementById('results');
  out.innerHTML = `
    <p>Your daily target: <strong>${Math.round(tdee)} kcal</strong></p>
    <p>Per meal (x3): <strong>${Math.round(perMeal)} kcal</strong></p>
  `;
  if (!recs.length) {
    out.innerHTML += `<p>No dishes fit your criteria—try adjusting your goal or allergies.</p>`;
    return;
  }
  out.innerHTML += recs.map(d => `
    <div class="result-card">
      <img src="${d.image}" alt="${d.name}">
      <div class="result-card__info">
        <h4 class="result-card__title">${d.name}</h4>
        <p class="result-card__cal">${Math.round(d.calories)} kcal</p>
        <p class="result-card__serving">${d.serving}</p>
      </div>
    </div>
  `).join('');
}
