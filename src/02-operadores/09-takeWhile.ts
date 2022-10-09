import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

//? Pilla valores mientras la condicion se cumple, sino se completa el observable
click$
	.pipe(
		map(({ x, y }) => ({
			x,
			y,
		})),
		takeWhile(({ y }) => y < 150)
	)
	.subscribe({
		next: (val) => {
			console.log("next 1", val);
		},
		complete: () => {
			console.log("complete 1");
		},
	});

//? Inclusive hace que tambien se pase el ultimo valor antes de completarse
click$
	.pipe(
		map(({ x, y }) => ({
			x,
			y,
		})),
		//$ inclusive como segundo argumento -> true
		takeWhile(({ y }) => y < 150, true)
	)
	.subscribe({
		next: (val) => {
			console.log("next 2", val);
		},
		complete: () => {
			console.log("complete 2");
		},
	});
