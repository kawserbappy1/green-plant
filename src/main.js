// ***************** MOBILE MENU ACTIVATION *****************
const closeBtn = document.getElementById("close-btn");
const mobileBtn = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");
mobileBtn.addEventListener("click", () => {
  menu.classList.toggle("left-[0]");
});
closeBtn.addEventListener("click", () => {
  menu.classList.toggle("left-[0]");
});
document.querySelectorAll(".nav-link ").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("left-[0]");
  });
});

// ***************** TREE RELATED JS CODE *****************

// RESUED FUNCTION TO CATCH ID NAME FROM UI
const getIdName = (id) => {
  return document.getElementById(id);
};

// Load category menu
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => showLoadedcategory(data.categories))
    .catch((err) => console.log(err));
};
// Load plants by category
const loadCategoriesplants = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlantsByCategory(data.plants))
    .catch((err) => console.log(err));
};
// load all plants
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => showloadAllPlants(data.plants))
    .catch((err) => console.log(err));
};
// show all plants
const showloadAllPlants = (plants) => {
  getIdName("plants-container").innerHTML = "";
  plants.forEach((plant) => {
    getIdName("plants-container").innerHTML += `
    
                <div class="p-4 bg-white rounded-lg m-1 xl:m-2 ">
                <img src="${plant.image}" alt="" class="rounded-lg w-[310px] h-[190px] object-cover" />
                <h3 class="text-xl text-title-color font-semibold py-2">${plant.name}</h3>
                <p class="text-base text-text-color opacity-80">
                  ${plant.description}
                </p>
                <div class="flex items-center justify-between py-4">
                  <button class="btn bg-[#DCFCE7] text-xs text-first-color capitalize rounded-full">${plant.category}</button>
                  <h3 class="text-lg font-semibold text-title-color">৳ <span>${plant.price}</span></h3>
                </div>
                <button class="btn w-full rounded-full bg-first-color text-white">Add to Cart</button>
              </div>
    
    `;
  });
};
// show plants by categories
const showPlantsByCategory = (plants) => {
  getIdName("plants-container").innerHTML = "";
  plants.forEach((plant) => {
    getIdName("plants-container").innerHTML += `
    
                <div class="p-4 bg-white rounded-lg m-1 xl:m-2 ">
                <img src="${plant.image}" alt="" class="rounded-lg w-[310px] h-[190px] object-cover" />
                <h3 class="text-xl text-title-color font-semibold py-2">${plant.name}</h3>
                <p class="text-base text-text-color opacity-80">
                  ${plant.description}
                </p>
                <div class="flex items-center justify-between py-4">
                  <button class="btn bg-[#DCFCE7] text-xs text-first-color capitalize rounded-full">${plant.category}</button>
                  <h3 class="text-lg font-semibold text-title-color">৳ <span>${plant.price}</span></h3>
                </div>
                <button class="btn w-full rounded-full bg-first-color text-white">Add to Cart</button>
              </div>
    `;
  });
};
// show loades category
const showLoadedcategory = (categories) => {
  // console.log(categories);
  getIdName("category-container").innerHTML = "";
  categories.forEach((category) => {
    getIdName("category-container").innerHTML += `
              <li  onclick = "loadCategoriesplants(${category.id})"
                class="btn flex place-items-center cursor-pointer text-base text-title-color bg-transparent ease-in-out duration-500 hover:bg-[#15803D] hover:text-white justify-center lg:w-full lg:justify-start" >
                ${category.category_name}
              </li>
    `;
  });

  // add active link funcationality
  getIdName("category-container").addEventListener("click", (e) => {
    const allLinks = document.querySelectorAll("#category-container li");
    allLinks.forEach((link) => {
      link.classList.remove("active");
    });
    if (e.target.tagName == "LI") {
      e.target.classList.add("active");
    }
  });
};
loadCategory();
loadAllPlants();
