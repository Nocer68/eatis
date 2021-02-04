window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 480;
  header.classList.toggle('scrolling-active', windowPosition);
})

$(document).ready(function() {
  $('.nav-toggler').each(function(_, navToggler) {
    $(navToggler).on('click', function() {
      var target = $(navToggler).data('menu');
      $(target).toggleClass('hidden');
    });
  });
});
