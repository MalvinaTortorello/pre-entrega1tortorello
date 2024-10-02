/*Bienvenido a la pagina*/
function bienvenidos(){
    console.log("Bienvenidos a la tienda online! a continuacion veras los productos disponibles!")
}
bienvenidos ();
let deseaIngresarCompra;
do{
    deseaIngresarCompra = prompt("Desea comprar un perfume? (si/no) ").toLowerCase();
    if (deseaIngresarCompra === "si") {

/*Modelos de perfumes */
const perfumeFloral = 6850;
const perfumeCitrico = 7500;
const perfumeMasculino = 10599;
const perfumeFemenino =10999;
let precio;
let codigoProducto = prompt("Ingrese el código del perfume que desea adquirir 1: Floral, 2: Cítrico, 3: Masculino, 4: Femenino: ");

if (codigoProducto === '1') {
    precio = perfumeFloral;
    console.log("El producto cuesta: $" + precio);
} else if (codigoProducto === '2') {
    precio = perfumeCitrico
    console.log("El producto cuesta: $" + precio);
} else if (codigoProducto === '3') {
    precio = perfumeFemenino
    console.log("El producto cuesta: $" + precio);
} else if (codigoProducto === '4') {
    precio = perfumeMasculino
    console.log("El producto cuesta: $" + precio);
} else {
    console.log("El producto no se encuentra disponible");
}

/*Metodo de Pago */
let pago = parseInt(prompt("Como vas a abonar tu producto?  1: Efectivo,  2: Tarjeta de Credito: "))
function efectivo(precio){
    let total = precio - ((precio*5)/100)
    console.log ("El precio final en efectivo es: $ " + total)
    return total
} 
function credito(precio){
    alert ("al abonar con credito se le agregara un 5% al total!")
    let total = precio + ((precio*5)/100)
    console.log ("El precio final con tarjeta de credito es: $ " + total)
        return total
}
if (pago === 1){
    efectivo(precio)
} else if ( pago === 2){
    credito (precio)
} else {
    console.log ("seleccione un metodo de pago valido")
}
} else if (deseaIngresarCompra === 'no'){
    console.log("Gracias por visitar nuestra página. ¡Hasta luego!");
}
} while (deseaIngresarCompra !== "no")