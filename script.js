const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const navMenu = document.querySelector(`.main-nav`);

mobileNavBtn.addEventListener(`click`, function (e) {
  navMenu.classList.toggle(`nav-open`);
});
