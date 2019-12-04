(function () {
  const navMenu = document.querySelector('.main-nav');
  const navBtn = document.querySelector('.main-nav__toggle');

  navMenu.classList.remove('main-nav_nojs');

  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('main-nav_opened');
  })
})();
