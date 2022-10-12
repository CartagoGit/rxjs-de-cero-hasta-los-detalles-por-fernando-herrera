import { fromEvent, merge, map } from "rxjs";

//? Recibe varios observables y los combina
//? No se completa el complete del subscribe hasta que no todos los observables se completen
//! No es un operador. Es una FUNCION

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<PointerEvent>(document, "click");

merge(
	keyup$.pipe(map((ev) => ev.type)),
	click$.pipe(map((ev) => ev.type))
).subscribe(console.log);
