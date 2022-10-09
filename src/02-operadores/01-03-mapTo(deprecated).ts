import { fromEvent } from "rxjs";
import { map, mapTo } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyUpCode$ = keyUp$.pipe(map((event) => event.code));

//! DEPRECATED:  mapTo ->	To be removed in v9. Use map instead: `map(() => value)`.
const keyUpCodeMapTo$ = keyUp$.pipe(mapTo("Hola"));

keyUp$.subscribe(console.log);

keyUpCode$.subscribe({
	next: (code) => {
		console.log("map", code);
	},
});

//$ Ejemplo
keyUpCodeMapTo$.subscribe({
	next: (code) => {
		console.log("mapTo", code);
	},
});
