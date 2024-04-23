const burgerButtonOpen = document.querySelector('.header__button-burger')
const burgerMenu = document.querySelector('.header__links')
const burgerButtonClose = document.querySelector('.burger__close')
function openBurgerMenu(){
  burgerMenu.classList.add('header__links-open')
}
function closeBurgerMenu(){
  burgerMenu.classList.remove('header__links-open')
}

burgerButtonOpen.addEventListener('click', openBurgerMenu)
burgerButtonClose.addEventListener('click', closeBurgerMenu)