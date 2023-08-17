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

// search table
(function (document) {
  "use strict";

  var TableFilter = (function (myArray) {
    var search_input;

    function _onInputSearch(e) {
      search_input = e.target;
      var tables = document.getElementsByClassName(
        search_input.getAttribute("data-table")
      );
      myArray.forEach.call(tables, function (table) {
        myArray.forEach.call(table.tBodies, function (tbody) {
          myArray.forEach.call(tbody.rows, function (row) {
            var text_content = row.textContent.toLowerCase();
            var search_val = search_input.value.toLowerCase();
            row.style.display =
              text_content.indexOf(search_val) > -1 ? "" : "none";
          });
        });
      });
    }

    return {
      init: function () {
        var inputs = document.getElementsByClassName("search-input");
        myArray.forEach.call(inputs, function (input) {
          input.oninput = _onInputSearch;
        });
      },
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      TableFilter.init();
    }
  });
})(document);
