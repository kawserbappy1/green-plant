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
    .then((data) => showLoadedcategory(data.categories));
};
// show loades category
const showLoadedcategory = (categories) => {
  // console.log(categories);
  getIdName("category-container").innerHTML = "";
  categories.forEach((category) => {
    console.log(category);
    getIdName("category-container").innerHTML += `
              <li
                class="btn flex place-items-center cursor-pointer text-base text-title-color bg-transparent ease-in-out duration-500 hover:bg-[#15803D] hover:text-white justify-center lg:w-full lg:justify-start" >
                ${category.category_name}
              </li>
    
    
    `;
  });
};
loadCategory();
