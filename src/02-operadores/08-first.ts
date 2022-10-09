import { first, fromEvent, map, tap } from "rxjs";

//$first corta el observable cuando la condicion se cumple. Si esta vacio se corta tras el primer valor.
const click$ = fromEvent<MouseEvent>(document, "click");

//?con first vacio
click$.pipe(first()).subscribe({
	next: (value) => {
		console.log("1 next:", value);
	},
	complete: () => {
		console.log("1 complete");
	},
});

//? Solo deja pasar el primer valor que pase la condicion del first, y lo completa
click$
	.pipe(
		tap(() => console.log("tap")),

		first<MouseEvent>((event) => event.clientX <= 500)
	)
	.subscribe({
		next: (value) => {
			console.log("2 next:", value);
		},
		complete: () => {
			console.log("2 complete");
		},
	});

//$ tip ajeno a la clase sacando los componentes del objeto que deseamos del primer click
click$
	.pipe(
		tap<MouseEvent>(console.log),
		map(({ clientY, clientX }) => ({
			clientY,
			clientX,
		})),
		first<{ clientY: number; clientX: number }>((event) => event.clientX <= 500)
	)
	.subscribe({
		next: (value) => {
			console.log("3 next:", value);
		},
		complete: () => {
			console.log("3 complete");
		},
	});
