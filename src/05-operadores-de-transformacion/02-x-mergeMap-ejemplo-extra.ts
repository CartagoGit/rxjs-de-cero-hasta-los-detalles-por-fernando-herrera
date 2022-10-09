import { fromEvent, map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";

//? Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const divExample = document.createElement("div");

divExample.append(textInput);
body.append(divExample);

//? Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

//! Ejemplo de mergeMap en el que se resolveria mejor el switchMap
//! No pararia de emitir peticiones por cada tecla en el input y el mergeMap haria todas las solicitudes
const url = "https://httpbin.org/delay/1?arg=";

input$
	.pipe(
		//? al no poner el debounce time va a hacer una peticion por cada tecla que se ponga en el input
		map((event) => (event.target as HTMLInputElement).value),
		mergeMap((texto) => {
			return ajax.getJSON<any>(url + texto);
		})
		// map<any, any[]>((response) => response.items)
	)
	.subscribe((sub: any[]) => {
		console.log(sub);
	});
