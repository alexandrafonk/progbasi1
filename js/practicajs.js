// ####### 4 FORMAS DE MOSTRAR CONTENIDO
// (1) Alert
// alert("HOLA ALERT");
// (2) La consola
// console.log("HOLA CONSOLE");
// (3) Librería Sweetalert
// Swal.fire("Hola desde Sweetalert 🎵");
// (4) En el DOM = Modelo de objetos del documento
document.write("Hola desde el dom");

// ####### TIPOS DE VARIABLES
var edad = 33; // alcance global
let num = 33; // alcance de bloque
const nombre = "Wilder Duarte"; // no cambia su valor
const pi = 3.14; // no cambia su valor
const pulgada = 2.54; // no cambia su valor

// ####### OPERADORES BÁSICOS 
// Aritméticos (+ - * / -%)
var num_uno = 5;
var num_dos = 10;
// console.log(num_dos + num_uno);
// console.log(num_dos - num_uno);
// console.log(num_dos * num_uno);
// console.log(num_dos / num_uno);
// console.log(num_dos % num_uno);
// console.log(num_uno++ (prim muestra después suma) / num_uno / ++num_uno prim suma después muestra)

// Comparación
// console.log("Igual >>> " + (num_dos==num_dos))
// console.log("Estricto Igual >>> " + (num_dos===num_dos))
// console.log("Diferente >>> " + (num_dos!=num_dos))
// console.log("Mayor >>> " + (num_dos>num_dos))
// console.log("Mayor Igual >>> " + (num_dos>=num_dos))
// console.log("Menor >>> " + (num_dos<num_dos))
// console.log("Menor Igual >>> " + (num_dos<=num_dos))

// ####### TIPOS DE DATOS
var clase = "Prog.  Básica" // String
var numero = 5 // Número entero
var decimal = 2.5 // Número decimal
var booleano = true // Boolean (false/true)
var objeto = {nombre: "Wilder", edad: 33, profesion: "Docente"};
var array = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1,"uno",20,"fiesta",2.5,"decimal"];

let estudiantes = [
    {nombre: "Wilder", edad: 33},
    {nombre: "Anyi", edad: 34},
    {nombre: "Celeste", edad: 4},
    {nombre: "Antonella", edad: 3},
    {nombre: "Sara", edad: 0}
];
let curso = {
    nombre: "Programación",
    temas: ["HTML", "CSS", "JS"]
};

// console.log(objeto);
// console.log(objeto.nombre);
// console.log(array);
// console.log(array[3]);
// console.log(estudiantes);
// console.log(estudiantes[1]);
// console.log(estudiantes[2].nombre);
// console.log(curso);
// console.log(curso.temas);
// console.log(curso.temas[1]);


