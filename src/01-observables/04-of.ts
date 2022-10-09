import { of } from "rxjs";

// const obs$ = of<number[]>(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(1);
// const obs$ = of(...[1, 2, 3, 4, 5, 6]);
const obs2$ = of<number[]>(...[1, 2, 3, 4, 5, 6], 1);
obs2$.subscribe((next) => {
	console.log("obs2", next);
});

const obs$ = of<any>(
	[1, 2],
	{ a: 1, b: 2 },
	function () {},
	true,
	Promise.resolve(true)
);

//? Ejemplo de que es sincrono
console.log("Inicio del Obs");
obs$.subscribe({
	next: (sub) => {
		console.log("next", sub);
	},
	complete: () => {
		console.log("completada la secuencia");
	},
});
console.log("Fin del Obs");
