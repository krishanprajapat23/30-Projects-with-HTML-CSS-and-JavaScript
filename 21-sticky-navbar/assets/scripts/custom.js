const nav = document.querySelector('.navbar');
const topofNav = nav.offsetTop;

function fixNav(){
  if(window.scrollY >= topofNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');

  }
}

window.addEventListener('scroll', fixNav)