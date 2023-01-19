$(".glacier-button").on("click", function () {
  $("dd").toggleClass("invisible");
});

$("dt").on("click", function () {
  $(this).toggleClass("highlight");
});

$(".other-button").on("click", function () {
  $("ul").each(function () {
    $(this).children().last().css("background-color", "yellow");
  });
});

$("h3").on("click", function () {
  $(this).next().children("li").css("font-weight", "bold");
});

$("li").on("click", function () {
  $(this).parent().children().first().css("color", "blue");
});

$("#left-button").on("click", function () {
  $("#painting-1").insertAfter($("#painting-2"));
});

$("#center-button").on("click", function () {
  let ranNum = Math.round(Math.random() * 10);
  if (ranNum <= 5) {
    $("#painting-2").insertBefore($("#painting-1"));
  } else {
    $("#painting-2").insertAfter($("#painting-3"));
  }
});

$("#right-button").on("click", function () {
  $("#painting-3").insertBefore($("#painting-2"));
});
