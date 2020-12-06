window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 480;
  header.classList.toggle('scrolling-active', windowPosition);
})
