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
