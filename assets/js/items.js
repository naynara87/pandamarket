import {
  dp_menu_toggle
} from './dropdown.js';

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = dropdown.querySelector(".dropdown-toggle span");
const dropdownMenu = dropdown.querySelectorAll(".dropdown-item");

dropdown.addEventListener('click', function (event) {
  dp_menu_toggle();
});

dropdownMenu.forEach(item => {
  item.addEventListener('click', function (event) {
    const sort = this.getAttribute('data-sort');
    dropdownToggle.innerText = sort;
  });
});