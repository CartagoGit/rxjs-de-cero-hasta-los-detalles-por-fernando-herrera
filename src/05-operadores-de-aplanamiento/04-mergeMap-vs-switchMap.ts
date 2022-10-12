import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

//?Ejemplo para ver la diferencia entre switchamp y mergemap
const click$ = fromEvent<PointerEvent>(document, "click");
const interval$ = interval(1000);

click$
	.pipe(
		// mergeMap(() => interval$)
		switchMap(() => interval$)
	)
	.subscribe({
		next: (val) => {
			console.log(val);
		},
	});
