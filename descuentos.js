var cupones = [
    {nombre: "primera", descuento:30},
    {nombre: "segunda", descuento:20},
    {nombre: "tercera", descuento:10}
];

function calcularDescuento(precio,descuento){
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = precio * (porcentajeDescuento/100);

    return precioConDescuento;

}

function calculadorPrecioFinal(){
    const inputPrice = document.getElementById("inputPrecio");
    const precio = parseInt(inputPrice.value);
    
    const inputDiscount = document.getElementById("inputDescuento");
    const descuento = parseInt(inputDiscount.value);

    const precioFinal = calcularDescuento(precio,descuento);
    
    const a = document.getElementById("finalPrice");
    a.innerText = "El precio del producto final es: " + precioFinal;
}


function validandoCupon(){
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = inputCupon.value;
    
    const validadCupon = function(cupon){
        return cupon.nombre === valueCupon;
    };
    
    const cuponUsuario = cupones.find(validadCupon);
    
    if(!cuponUsuario){
        alert("Cupon no valido");
    }else{
        const inputPrice = document.getElementById("inputPrecio");
        const precio = parseInt(inputPrice.value); 

        const descuento = cuponUsuario.descuento;

        const precioFinal = calcularDescuento(precio,descuento);
    
        const a = document.getElementById("finalPrice");
        a.innerText = "El precio del producto final es: " + precioFinal;
    }
    

}
