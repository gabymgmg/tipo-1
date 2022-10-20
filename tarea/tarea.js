//Precio de los tipos de cafes
const capuccino = 4
const latte = 3
function maquinaDeCafe(){
    //Funcion principal 
    const orden = tipoDeCafe()
    let precioCafe = 0
    if(orden[0]==1){
        precioCafe+=capuccino
    } else {
        precioCafe+=latte
    }
    const montoTotal = precioCafe*orden[1]
    const montoIngresado = solicitarDinero()
    //Verifica que el monto ingresado sea valido para la compra
    //Y retorna el resumen de compra
    if(montoIngresado<montoTotal){
        console.log('Su monto es insuficiente para la compra')
    } else {
        const vuelto = entregaDeVuelto(montoIngresado, montoTotal)
        prepararcafe(vuelto,orden)
    }
}

function tipoDeCafe(){
    //solcita al usuario el ingreso del tipo de cafe y cant vasos
    const tipoDeCafe = prompt('Seleccione el tipo de cafe: 1(capuccino,4$) o 2(latte,3$)')
    const cantVasos = prompt('Seleccione la cantidad de vasos:')
    return [tipoDeCafe,cantVasos]
}

function solicitarDinero(){
    const pago = prompt('Ingrese monto a pagar:')
    return pago
}

function entregaDeVuelto(pago,montoOrden){
    //Devuelve la resta entre el monto ingresado y la orden
    let vuelto = (pago-montoOrden)
    return vuelto 
}

function prepararcafe(vuelto,orden){
    //Devuelve un resumen de la compra con la cant de cafes adquiridos
    console.log('Gracias por su compra. Se esta preparando su pedido de:'+ orden[1]+'cafe(s)')
    console.log('Su vuelto es de:'+ vuelto)
}
//llamada de la funcion principal
maquinaDeCafe()