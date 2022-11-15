const Images = document.querySelectorAll('.slide-in')




    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };





function checkSlide(e){
  Images.forEach(img => {
    //half way of img
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
    // console.log(slideInAt)
    //bottom of img
    const imgBottom = img.offsetTop + img.height;
    const isHalfShow = slideInAt > img.offsetTop;
    const isNotScrollPast = window.scrollY < imgBottom;
    if(isHalfShow && isNotScrollPast){
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }

  })
}








    window.addEventListener('scroll', debounce(checkSlide))