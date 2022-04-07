//Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4; 
}  
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo3 
// + "cm");

// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 

// console.log("El periemtro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}  
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Interaccion con HTML

//Calculos cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const periemtro = perimetroCuadrado(value);
    alert(periemtro)
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area)
}
//Calculos triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("base");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("base");
    const input2 = document.getElementById("altura"); 

    const base = input1.value;
    const altura = input2.value;

    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("base");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    if(lado1 != lado2){
        alert("No es un triangulo isoceles");
    }else{
        const a = (lado1^2);
        const b = (base^2/4);
        const c = a-b;
        const altura = Math.sqrt(c);
        alert(altura);
    }
}

//Calculos circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
