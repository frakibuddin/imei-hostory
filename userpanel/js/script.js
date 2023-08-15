let menu_btn = document.querySelector(".mobile-menu");
let sidebar = document.querySelector(".sidebar");

menu_btn.onclick = () => {
  sidebar.classList.toggle("active");
};
