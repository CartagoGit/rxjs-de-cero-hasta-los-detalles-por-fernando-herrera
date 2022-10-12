import { combineLatest, fromEvent, map } from "rxjs";

//? Nos permite mandar observables como argumentos y emitir los observables internos simultaneamente (como un arreglo)
//* Regresa un nuevo observable, que emitira valores hasta que todos los observables internos hayan emitido al menos un valor.
//? La subcripcion no se completa hasta que se completan todos los observables. Si alguno de los observables se completa, seguira recogiendo su ultimo valor.
//! No es un operador. Es una FUNCION

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<PointerEvent>(document, "click");

//* EJEMPLO 1
//$ Tienen que pasarse en un array, tal y como esta en la clase esta obsoleto
combineLatest([
	keyup$.pipe(map((ev) => ev.type)),
	click$.pipe(map((ev) => ev.type)),
]).subscribe(console.log);

//* EJEMPLO 2

//? Referencias
const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail";
input2.placeholder = "******";
input2.type = "password";

const div = document.createElement("div");
div.append(input1, input2);
document.querySelector("body").append(div);

//? Helper
const getInputStream = (elem: HTMLElement) =>
	fromEvent<KeyboardEvent>(elem, "keyup").pipe(
		map<KeyboardEvent, string>((ev) => ev.target["value"])
	);

combineLatest([getInputStream(input1), getInputStream(input2)]).subscribe(
	(val) => console.log("inputs: ", val)
);
