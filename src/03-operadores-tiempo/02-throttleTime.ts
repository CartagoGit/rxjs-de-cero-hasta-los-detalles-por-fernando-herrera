//? Igual que el debounce time, pero a la inversa.
//? Una vez emitido un valor, espera un tiempo antes de poder volvera emitir cualquier valor

import {
	throttleTime,
	fromEvent,
	map,
	distinctUntilChanged,
	asyncScheduler,
} from "rxjs";
import { pluck } from "rxjs/operators";

//Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

//* Ejemplo 2
//$ Buena utilidad para cargar informacion de la base de datos unicamente cuando se termine de escribir en un input
const input = document.createElement("input");
const divInput = document.createElement("div");
divInput.append(input);
document.querySelector("body").appendChild(divInput);

const input$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
	//? hacemos que solo se emita el primer valor, y luego no emita hasta pasado el tiempo
	//$ Podemos enviarle un segundo y tercer parametro para que nos devuelva el primer y el ultimo valor
    //$ Con esto enviamos el primer valor y cuando pase el segundoi enviamos el ultimo
	throttleTime(1000, asyncScheduler,{
        //* El primer valor
        leading: true,
        //* El ultimo valor
        trailing: true,
    }),
	map((obs) => (obs.target as HTMLInputElement).value),
	//?Evitamos que se vuelva a emitir al poner la misma emision, haciendo la consulta mas eficiente
	distinctUntilChanged()
);

input$.subscribe(console.log);

//! DEPRECATED
//// const input2$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
//// 	pluck("target", "value")
//// );
//// input2$.subscribe(console.log);
