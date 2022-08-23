// init Isotope
var $grid = $(".grid").isotope({
  // options
});
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// filter items on button click
$(".project-area .button-group #btn1").trigger("click");

$(".project-area .grid .test-popup-link").magnificPopup({
  type: "image",
  gallery:{enabled:true}
  // other options
});




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector(".header_area");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);