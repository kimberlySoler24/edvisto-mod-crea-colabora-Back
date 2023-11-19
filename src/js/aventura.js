let title = document.getElementById ('titulo')
console.log(title)
let tituloLength = document.getElementById ('titulo-length')
title.addEventListener ('input', function (event) {
let inputLenght = title.value.length
tituloLength.innerText = `${inputLenght}/70`
}
)

let introductionHero = document.getElementById ('hero')
console.log(introductionHero)
let heroLength = document.getElementById ('hero-length')
introductionHero.addEventListener ('input', function (event) {
let inputLenght = introductionHero.value.length
heroLength.innerText = `${inputLenght}/2000`
}
)

let introductionFriend = document.getElementById ('friend')
console.log(introductionFriend)
let friendLength = document.getElementById ('friend-length')
introductionFriend.addEventListener ('input', function (event) {
let inputLenght = introductionFriend.value.length
friendLength.innerText = `${inputLenght}/2000`
}
)

let climaxLogros = document.getElementById ('logros')
console.log(climaxLogros)
let logrosLength = document.getElementById ('logros-length')
climaxLogros.addEventListener ('input', function (event) {
let inputLenght = climaxLogros.value.length
logrosLength.innerText = `${inputLenght}/2000`
}
)

let climaxNecesidad = document.getElementById ('necesidad')
console.log(climaxNecesidad)
let necesidadLength = document.getElementById ('necesidad-length')
climaxNecesidad.addEventListener ('input', function (event) {
let inputLenght = climaxNecesidad.value.length
necesidadLength.innerText = `${inputLenght}/2000`
}
)

let desafiosProblemas = document.getElementById ('problemas')
console.log(desafiosProblemas)
let problemasLength = document.getElementById ('problemas-length')
desafiosProblemas.addEventListener ('input', function (event) {
let inputLenght = desafiosProblemas.value.length
problemasLength.innerText = `${inputLenght}/2000`
}
)

let desafiosDetener = document.getElementById ('detener')
console.log(desafiosDetener)
let detenerLength = document.getElementById ('detener-length')
desafiosDetener.addEventListener ('input', function (event) {
let inputLenght = desafiosDetener.value.length
detenerLength.innerText = `${inputLenght}/2000`
}
)

let mensaje = document.getElementById ('aprendizaje')
console.log(mensaje)
let aprendizajeLength = document.getElementById ('aprendizaje-length')
mensaje.addEventListener ('input', function (event) {
let inputLenght = mensaje.value.length
aprendizajeLength.innerText = `${inputLenght}/2000`
}
)

let end = document.getElementById ('detenerfinal')
console.log(end)
let finalLength = document.getElementById ('final-length')
end.addEventListener ('input', function (event) {
let inputLenght = end.value.length
finalLength.innerText = `${inputLenght}/2000`
}
)

