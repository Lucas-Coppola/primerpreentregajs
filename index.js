"use strict";
//Calculador de valor total
let costoTotal = 0;

function calcularCostoTotal() {
    let cantidadDeProductos = Number(prompt("Ingrese la cantidad de productos:"));

    if (!isNaN(cantidadDeProductos) && cantidadDeProductos > 0) {
        for (let i = 1; i <= cantidadDeProductos; i++) {
            let precioProducto = Number(prompt(`Ingrese el precio del producto ${i}:`));
            if (!isNaN(precioProducto) && precioProducto > 0) {
                costoTotal += precioProducto;
            } else {
                alert("El precio ingresado es inválido. Inténtelo nuevamente.");
                i--;
            }
        }

        alert(`El costo total de los productos es: $${costoTotal}`);
    } else {
        alert("Esa cantidad no es válida, porfavor, ingrese un número válido.")
        calcularCostoTotal()
    }
}

//Calculador de valor de cuotas segun el precio total
function calcularCuotas() {
    let deseaCuotas = prompt("Quiere pagar en cuotas?");

    if (deseaCuotas != "no" && deseaCuotas != "") {
        alert("En cuantas cuotas desea realizar el pago?");
        let cuotas = prompt("3: Sin interes, 6: Sin interes, 12: 120% de interes");
        if (cuotas == "3") {
            let resultado = (costoTotal / cuotas);
            alert("el precio final es de $" + costoTotal + " en 3 cuotas sin interes de $" + resultado);
        }
        else if (cuotas == "6") {
            let resultado = (costoTotal / cuotas);
            alert("el precio final es de $" + costoTotal + " en 6 cuotas sin interes de $" + resultado);
        }
        else if (cuotas == "12") {
            let resultado = ((costoTotal * 1.20 + costoTotal) / cuotas);
            alert("el precio final es de $" + (costoTotal * 1.20 + costoTotal) + " en 12 cuotas de $"  + resultado);
        } else {
            alert("El pago solo puede realizarse en la cantidad de cuotas indicadas.");
            calcularCuotas();
        }
    } else {
        alert("El precio es de $" + costoTotal);
    }
}

calcularCostoTotal();
calcularCuotas();