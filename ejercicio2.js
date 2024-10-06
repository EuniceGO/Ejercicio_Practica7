let container = document.querySelector(".container-app")


let button = document.createElement("button")

let mensaje = document.createElement("p")


button.textContent = "incrementar"

let incremento = 0

container.appendChild(button)


button.addEventListener("click", () => {
    incremento++
    mensaje.textContent = incremento
    container.appendChild(mensaje)
})