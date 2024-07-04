$(document).ready(() => {
  $(".card").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(activeNextCard, 4000)
  });

  function activeNextCard() {
    var $activeCard = $(".card.active");
    var $nextSibling = $activeCard.next(".card");

    if ($nextSibling.length > 0) {
      $activeCard.removeClass("active");
      $nextSibling.addClass("active");
    } else {
      $(".card").removeClass("active").first().addClass("active");
    }
  }
  var autoChangeInterval = setInterval(activeNextCard, 4000);
})