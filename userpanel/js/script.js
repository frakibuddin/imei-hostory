let menu_btn = document.querySelector(".mobile-menu");
let sidebar = document.querySelector(".sidebar");

menu_btn.onclick = () => {
  sidebar.classList.toggle("active");
};

// popup
let popupShowBtn = document.querySelectorAll(".popup-show");
let popupBox = document.querySelector(".popup");
let popupCloseBnt = document.querySelector(".popup-header span");

popupShowBtn.forEach((element) => {
  element.onclick = () => {
    popupBox.classList.add("active");
  };
});

popupCloseBnt.onclick = () => {
  popupBox.classList.remove("active");
};
