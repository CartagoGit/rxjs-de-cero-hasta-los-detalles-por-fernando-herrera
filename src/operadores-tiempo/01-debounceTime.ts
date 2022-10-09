import { debounceTime, fromEvent, map, distinctUntilChanged } from "rxjs";
// import { pluck } from "rxjs/operators"; 

//?Despues de un tiempo emite el ultimo mensaje que se emitio en ese intervalo de tiempo

//* Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(debounceTime(3000)).subscribe(console.log);

//* Ejemplo 2
//$ Buena utilidad para cargar informacion de la base de datos unicamente cuando se termine de escribir en un input
const input = document.createElement("input");
const divInput = document.createElement("div");
divInput.append(input);
document.querySelector("body").appendChild(divInput);

const input$ = fromEvent<KeyboardEvent>(input, "keyup").pipe(
	//? hacemos que solo se emita una vez pasado un segundo que hayamos terminado de escribit en el input
	debounceTime(500),
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
