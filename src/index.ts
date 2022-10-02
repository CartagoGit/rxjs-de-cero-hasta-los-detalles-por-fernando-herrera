import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

const ran$ = range(1, 5).pipe(
	map<number, string>((val) => (val * 10).toString())
);

ran$.subscribe({
	next: (sub) => {
		console.log(sub);
	},
});

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
//* Se podria pasar el pipe antes, si se hace despues hay que asignarlo de nuevo, o subscribirse al hacerlo (pero entonces no seria reutilizable)
const keyUpCode$ = keyUp$.pipe(map((event) => event.code));


keyUp$.subscribe({
	next: (code) => {
		console.log("map", code);
	},
});

keyUpCode$.subscribe({
	next: (code) => {
		console.log("map", code);
	},
});
