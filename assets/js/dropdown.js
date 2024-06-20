
export function dp_menu_toggle() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu) {
    dropdownMenu.classList.toggle('open');
  }
}