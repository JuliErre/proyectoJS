/*let saludo = document.getElementById("saludo");
console.log(saludo.innerHTML);


nombre.innerHTML = "mi nombre es julian";

let form = document.getElementById("formulario")
form.addEventListener("submit", validar);

function validar(e){
    e.preventDefault();

    let formulario = e.target;
    let edad = document.createElement("div");

    edad.innerHTML = '<p>Hola '+formulario.children[0].value+'</p>'+'<p> tu edad es '+formulario.children[1].value+ '</p>';
    document.body.appendChild(edad);

}

*/

class cuota {

    constructor(numero, banco, tarjeta, precio, interes) {
        this.numero = numero;
        this.banco = banco;
        this.tarjeta = tarjeta;
        this.precio = precio;
        this.interes = interes;
    }

    get intereses() {
        return this.calIntereses();

    }

    get precioFinal() {
        return this.precioFinalCuota();
    }

    calIntereses() {
        return this.precio * this.interes;

    }

    precioFinalCuota() {
        return (this.calIntereses() + this.precio) / this.numero;
    }
}

/*
cuotas.push(new cuota(1, "nacion", "mastercard", 1000, 0));
cuotas.push(new cuota(3, "bbva", "mastercard", 2000, 0.1));
cuotas.push(new cuota(6, "santander", "visa", 3000, 0.2));
cuotas.push(new cuota(12, "nacion", "mastercard", 4000, 0.3));
cuotas.push(new cuota(18, "nacion", "mastercard", 5000, 0.4));

*/

const cuotas = []


$("#form").submit(function validar(e){
    e.preventDefault();
    let formValues = new FormData(e.target);

    var intereses;

    if(formValues.get("cuotas") == 1){intereses = 0}
    else if(formValues.get("cuotas") == 3){intereses = 0.1}
    else if(formValues.get("cuotas") == 6){intereses = 0.2}
    else if(formValues.get("cuotas") == 12){intereses = 0.3}
    else{intereses = 0.4}
        
    cuotas.push(new cuota(formValues.get("cuotas"), formValues.get("banco"), formValues.get("tarjeta"),parseInt(formValues.get("precio")) , intereses));
    
    $("#form").hide();

    $("#datos").append (' <p> El banco es ' + cuotas[0].banco + '</p>' +
        '<p> Cantidad de cuotas: ' + cuotas[0].numero + '</p>' +
        '<p> La tarjeta es: ' + cuotas[0].tarjeta + '</p>' +
        '<p> El precio final de cada cuota es de $' + Math.round(cuotas[0].precioFinal*100)/100  + '</p>' +
        '<p> Los interes por son de $' + Math.round (cuotas[0].intereses*100)/100 + '</p> ');
    
    $("#datos").show();
});



