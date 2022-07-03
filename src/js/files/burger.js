const burger = document.querySelector('.burger');
if (burger) {
  const menu = document.querySelector('.navigation');
  const html = document.querySelector('html');
  burger.addEventListener("click", function (e) {
    burger.classList.toggle('menu--active');
    menu.classList.toggle('menu--active');
    html.classList.toggle('lock');
  });
}