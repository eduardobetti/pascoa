//variáveis das pegadas
const peAzul = document.getElementById('peAzul')
const peRosa = document.getElementById('peRosa')
const peAmarela = document.getElementById('peAmarela')

//variáveis dos coelhinhos
const azul = document.querySelector('.azul')
const rosa = document.querySelector('.rosa')
const amarelo = document.querySelector('.amarelo')

//função ao passar o mouse na pegada azul
function pegadaAzul() {
    peAzul.style.visibility = 'hidden'
    peRosa.style.visibility = 'visible'
    peAmarela.style.visibility = 'visible'
    azul.style.marginTop = '-55vh'
    azul.style.pointerEvents = 'all'
    rosa.style.marginTop = '-70vh'
    rosa.style.pointerEvents = 'none'
    amarelo.style.marginTop = '-70vh'
    amarelo.style.pointerEvents = 'none'
}
peAzul.addEventListener('mouseover', pegadaAzul);

//função ao passar o mouse na pegada rosa
function pegadaRosa() {
    peAzul.style.visibility = 'visible'
    peRosa.style.visibility = 'hidden'
    peAmarela.style.visibility = 'visible'
    azul.style.marginTop = '-70vh'
    azul.style.pointerEvents = 'none'
    rosa.style.marginTop = '-55vh'
    rosa.style.pointerEvents = 'all'
    amarelo.style.marginTop = '-70vh'
    amarelo.style.pointerEvents = 'none'
}
peRosa.addEventListener('mouseover', pegadaRosa);

//função ao passar o mouse na pegada amarela
function pegadaAmarela() {
    peAzul.style.visibility = 'visible'
    peRosa.style.visibility = 'visible'
    peAmarela.style.visibility = 'hidden'
    azul.style.marginTop = '-70vh'
    azul.style.pointerEvents = 'none'
    rosa.style.marginTop = '-70vh'
    rosa.style.pointerEvents = 'none'
    amarelo.style.marginTop = '-55vh'
    amarelo.style.pointerEvents = 'all'
}
peAmarela.addEventListener('mouseover', pegadaAmarela);