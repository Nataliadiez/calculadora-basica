const botonesnumericos = document.querySelectorAll(".numeros")
const botonesoperaciones = document.querySelectorAll(".operaciones")
const botonresetear = document.querySelector(".resetear")
const botonigual = document.querySelector(".igual")
let resultado = document.querySelector("#pantalla");
let operacionactual="";
let operacionanterior="";
let operacion = undefined;


botonesnumericos.forEach(boton => {
   boton.addEventListener("click",function(){
      agregarnumeros(boton.innerHTML);
      
   })
   
});

botonesoperaciones.forEach(boton => {
   
boton.addEventListener("click",function(){
   seleccionaroperador(boton.innerHTML);
   
})
});

botonigual.addEventListener("click",function(){
   calcularcuenta();
   actualizarpantalla();
})

botonresetear.addEventListener("click" ,function(){
   limpiarpantalla();
   actualizarpantalla();
});

let seleccionaroperador = op => {
      if(operacionanterior !== "") {
      calcularcuenta()
   }
   operacion = op;
   operacionanterior = operacionactual;
   operacionactual = "";

}

let calcularcuenta = () => {
   let calculo;
   const anterior = parseFloat(operacionanterior);
   const actual = parseFloat(operacionactual);
   
   switch(operacion) {
      case "+":
         calculo = anterior + actual;
         break;

      case "-":
         calculo = anterior - actual;
         break;
      
      case "x":
         calculo = anterior * actual;
         break;

      case "/":
         if (actual !== 0) {
            calculo = anterior / actual;
         } else {
            calculo = "No se puede dividir por 0"
         }
         
         break;

      case "√x":
         calculo = Math.sqrt(actual) || Math.sqrt(anterior);
         break;

      case "^":
         calculo = Math.pow(anterior,actual) || Math.pow(actual,anterior);
         break;

      case "1/x":
         if(anterior !== 0 & actual !== 0) {
            calculo = 1/anterior || 1/actual;
         } else {
            calculo = "No se puede dividir por 0"
         }
         
         break;

      case "ln":
         calculo = Math.log(actual) || Math.log(anterior);
         break;

      case "π":
         calculo = Math.PI;
         break;

      case "e^x":
         calculo = Math.exp(anterior) || Math.exp(actual);
         break;

      case "³√x":
         calculo = Math.cbrt(anterior) || Math.cbrt(actual);
         break;

      case "logx":
         calculo = Math.log10(anterior) || Math.log10(actual);
         break;

      
      default:
         return;
   }
   operacionactual = calculo;
   operacion = undefined;
   operacionanterior = "";
}


let agregarnumeros = num => {
operacionactual = operacionactual + num;
actualizarpantalla();
}

let limpiarpantalla = () => {
   operacionactual="";
   operacionanterior="";
   operacion=undefined;
}


let actualizarpantalla = () => {
   resultado.value= operacionactual;
}

limpiarpantalla();

