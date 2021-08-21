/* Abrir e fechar menu com os ícones: hamburguer e X */
const nav = document.querySelector('#header nav') //Selectiona o nav
const toggle = document.querySelectorAll('nav .toggle') //Seleciona todos os elementos com toggle

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('#header ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show') //Quando clicar em qualquer link, ele remove a classe 'show'
    })
}

/* Criar sombra no header quando mover o scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    } else {
        //scroll menor que altura do header
        header.classList.remove('scroll')
    }
})