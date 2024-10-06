import readline from "readline";


// let tipoUsario

// let fecha = 2024

// let total = 30.50
// let isRequired = false
// let isAdmin = true


const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calcularDescuento = (totalAPagar, tipoUsario) => {
    let resultado
    let descuento
    let subtotal

    if (tipoUsario == "premium") {
        descuento = 30
        subtotal = (totalAPagar * descuento) / 100

        resultado = totalAPagar - subtotal
        return resultado
    }
    else if (tipoUsario == "normal") {
        descuento = 10
        subtotal = (totalAPagar * descuento) / 100

        resultado = totalAPagar - subtotal
        return resultado
    }
    else if (tipoUsario == "comun") {
        descuento = 5
        subtotal = (totalAPagar * descuento) / 100

        resultado = totalAPagar - subtotal
        return resultado
    }
}

//Verifica que tipo de usuario realiza la compra
const verificarUsuario = (tipoUsario, totalAPagar) => {
    if (tipoUsario == "premiun") {
        descuento = 30

        let subtotal = (totalAPagar * descuento) / 100

        resultado = totalAPagar - subtotal

        console.log(`Su total a pagar es ${resultado} , Obtuvo un descuento por ser usuario premium`)
    } else if (tipoUsario == "normal") {
        console.log(`Su total a pagar es ${resultado} , Obtuvo un descuento por ser usuario normal`)
    } else if (tipoUsario == "comun") {
        console.log(`Su total a pagar es ${resultado} , Obtuvo un descuento por ser usuario comun`)
    } else {
        console.log("porfavos ingrese un usuario valido")
    }
}

const preguntarAlUsuario = () => {
    interfaz.question("IPorvafor ingrese su tipo de usuario : \nnormal, \npremiun, ", (tipoUsario) => {
        verificarUsuario(tipoUsario)
        const verificarUsuario = (tipoUsario) => {
            if (tipoUsario == "premiun") {
                console.log("descuento de 30% ")
            } else {
                console.log("Su total a pagar es: ")
            }
        }
    })
}

preguntarAlUsuario()