$(document).ready(() =>{

  $("#explore_detail_btn").click(() =>{
    $(".more-detail-card").addClass("open");
    $(".hero-content .inner").addClass("hide");

    setTimeout(() => {
      $(".more-detail-card > .inner").css('overflow-y', 'auto');
    }, 1000);
  });

  $(".more-detail-card .close-btn").click(() =>{
    $(".more-detail-card > .inner").css('overflow-y', 'initial');
    $(".more-detail-card").removeClass("open");
    $(".hero-content .inner").removeClass("hide");
  });
      
  $(document).on('click', () => {
    if (!$(event.target).closest('.more-detail-card').length && !$(event.target).closest('#explore_detail_btn').length && $('.more-detail-card').is(':visible')) {
      $(".more-detail-card > .inner").css('overflow-y', 'initial');
      $(".more-detail-card").removeClass("open");
      $(".hero-content .inner").removeClass("hide");
    }
  });

  setTimeout(() => {
    $('.hero-content h1, .hero-content button').addClass('ease-in');
  }, 600);
});