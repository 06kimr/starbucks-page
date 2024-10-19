const searchEl = document.querySelector(".search");
const SearchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  SearchInputEl.focus();
});

SearchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  SearchInputEl.setAttribute("placeholder", "통합검색");
});

SearchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  SearchInputEl.setAttribute("placeholder", "");
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
