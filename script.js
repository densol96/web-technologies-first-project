// MOBILE NAVIGATION
const mobileNavBtn = document.querySelector(`.btn-mobile-nav`);
const navMenu = document.querySelector(`.main-nav`);

mobileNavBtn.addEventListener(`click`, function (e) {
  navMenu.classList.toggle(`nav-open`);
});

// FAQ
const questionsAll = document.querySelectorAll('.question-item');

questionsAll.forEach((item) => {
  item.addEventListener('click', function (e) {
    const currentTab = e.target.closest('.question-item');
    if (!currentTab || e.target.classList.contains('question-answer')) return;
    questionsAll.forEach((q) => {
      if (q !== currentTab && q.classList.contains('active')) {
        q.classList.remove('active');
      }
    });
    currentTab.classList.toggle('active');
  });
});
