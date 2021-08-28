/* Abrir e fechar menu com os ícones: hamburguer e X */
const nav = document.querySelector('#header nav') //Selectiona o nav
const toggle = document.querySelectorAll('nav .toggle') //Seleciona todos os elementos com toggle

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show') //Quando clicar em qualquer link, ele remove a classe 'show'
    })
}

/* Criar sombra no header quando mover o scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}
    

// Testimonial Carousel

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, //Quantos slides serão visualizados
    pagination: {
        el: '.swiper-pagination' //Controlador de paginação
    },
    //mousewheel: true, //Mudar o elemento com scroll do mouse
    keyboard: true, //Mudar com as setas do teclado
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true
      }
    }
  });

  //ScrollReveal: Mostra os elementos quando der scroll na página
  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(`
  #home .image, #home .text
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, { interval: 100 })

// back to top button

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* activate menu section when placing on top of element */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
        
        header.classList.remove('scroll')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


