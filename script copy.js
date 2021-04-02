const onas = document.querySelector('div.wrap');
const firstNavButton = document.querySelector('li>a');

const historiaDomu = document.querySelector('div.wrap:nth-child(2)');
const secondNavButton = document.querySelector('li:nth-of-type(2)>a');

const sala = document.querySelector('div.wrap:nth-child(3)');
const thirdNavButton = document.querySelector('li:nth-of-type(3)>a');
const thirdSecondNavButton = document.querySelector('nav>ul>li:nth-of-type(3)>a')

const smallerLogo = document.querySelector('div.smallerLogo');
const divTekst = document.querySelector('div.tekst');

const header = document.querySelector('header');

onas.classList.remove('opacityOne');
firstNavButton.addEventListener('click', function () {
    onas.classList.toggle('opacityOne');
    smallerLogo.classList.add('disapear');
    divTekst.classList.add('disapear');
    historiaDomu.classList.remove('opacityOne');
})



historiaDomu.classList.remove('opacityOne');
secondNavButton.addEventListener('click', function () {
    historiaDomu.classList.toggle('opacityOne');
    smallerLogo.classList.add('disapear');
    divTekst.classList.add('disapear');
    onas.classList.remove('opacityOne');

})

thirdNavButton.addEventListener('click', function () {
    header.classList.toggle('slideup');
    header.classList.remove('slidedown');
    onas.classList.remove('opacityOne');
    historiaDomu.classList.remove('opacityOne');
})

thirdSecondNavButton.addEventListener('click', function () {
    header.classList.toggle('slidedown');
    header.classList.remove('slideup');
    historiaDomu.classList.remove('opacityOne');
    onas.classList.remove('opacityOne');
})