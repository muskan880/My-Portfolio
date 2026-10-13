const elements = document.querySelectorAll('.fade-up, .fade-right');

window.addEventListener('scroll', () => {

  elements.forEach((element) => {

    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(position < screenPosition){
      element.classList.add('active');
    }

  });

});

// Initial Animation


window.onload = () => {

  document.querySelector('.hero-text').classList.add('active');


}