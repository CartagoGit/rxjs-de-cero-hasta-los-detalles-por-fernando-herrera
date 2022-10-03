import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
//* Se podria pasar el pipe antes, si se hace despues hay que asignarlo de nuevo, o subscribirse al hacerlo (pero entonces no seria reutilizable)
const keyUpCode$ = keyUp$.pipe(map((event) => event.code));

//$ Caso del ejemplo de la clase con plucks
//! ª"@deprecated — Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar). Will be removed in v8."
const keyUpPluck$ = keyUp$.pipe(pluck("code"));

//? para coger la propiedad dentro de un objeto equivalente a map(x => x?.target?.baseURI)
const keyUpPluck2$ = keyUp$.pipe(pluck("target", "baseURI"));

keyUp$.subscribe(console.log);

keyUpCode$.subscribe({
	next: (code) => {
		console.log("map", code);
	},
});

//$ Caso del ejemplo de la clase
keyUpPluck$.subscribe({
	next: (code) => {
		console.log("pluck", code);
	},
});
keyUpPluck2$.subscribe({
	next: (code) => {
		console.log("pluck", code);
	},
});
