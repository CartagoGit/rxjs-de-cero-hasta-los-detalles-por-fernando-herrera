import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

//* Ejemplo 1
const letras$ = of("a", "b", "c");
letras$
	.pipe(
		mergeMap((letra) =>
			interval(1000).pipe(
				map((i) => letra + i),
				take(3)
			)
		)
	)
	.subscribe({
		next: (val) => {
			console.log("next: ", val);
		},
		complete: () => {
			console.log("complete");
		},
	});

//* Ejemplo 2

const mousedown$ = fromEvent(document, "mousedown");
const mouseup$ = fromEvent(document, "mouseup");
const interval$ = interval();

mousedown$
	.pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
	.subscribe(console.log);
