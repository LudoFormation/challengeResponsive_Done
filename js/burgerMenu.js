const burger=document.querySelector('header nav #burger');
const navList=document.querySelector('header nav ul')

burger.addEventListener('click', () => {
    if (window.innerWidth < 700) {
        navList.classList.add('navMobile');
    }
});
navList.addEventListener('click', ()=> {
    if (window.innerWidth < 700) {
        navList.classList.remove('navMobile');
    }
});