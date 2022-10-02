import { asyncScheduler } from "rxjs";

//! NO ES UN OBSERVABLE
//! ES UNA SUBCRIPCION, pero nos puede servir para crear un setInterval o un setTimeout como una subcripcion para observarla

//? Podemos ejectar estas operaciones con el asynSchedule con mas control
// setInterval(() => {}, 3000);
// setTimeout(() => {}, 3000);

//$ Distintos tipos de pruebas
//*1
const saludar = () => console.log("Hola Mundo");
//*2
const saludar2 = (nombre: string) => console.log(`Hola ${nombre}`);
//*3
const saludar3 = (nombre: string, apellido: string) =>
	console.log(`Hola ${nombre} ${apellido}`);
//*4
const saludar4 = ({ nombre, apellido }) =>
	console.log(`Hola ${nombre} ${apellido}`);

//$ Distintos tipos de llamadas a cada prueba
//*1
asyncScheduler.schedule(saludar, 2000);
//*2
asyncScheduler.schedule(saludar2, 2000, "Mario");

//! no se podria enviar un estado con 2 argumentos a menos que lo mandemos como objeto o como callback
//*3
//// asyncScheduler.schedule(saludar3, 2000, "Mario");
asyncScheduler.schedule(() => saludar3("Mario", "Cabrero"), 2000);
//! otro ejemplo de lo mismo
//*4
asyncScheduler.schedule(saludar4, 2000, {
	nombre: "Olga",
	apellido: "García",
});

/**
 * $ Para crear un Set Interval con el asyncScheduler
 * ?setInterval(() => {}, 3000);
 * !no puede ser una funcion de flecha, tiene que ser una funcion normal
 * *El state solo puede ser un argumento (un string, un numero, un objeto, un array...)
 */

const subs = asyncScheduler.schedule(
	function (state) {
		console.log("state", state);

		this.schedule(state + 1, 1000);
	},
	2000,
	0
);

// setTimeout(() => {
// 	subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
