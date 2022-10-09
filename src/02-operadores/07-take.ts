import { of, take, tap } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$
	.pipe(
		//$cancela el observable, como puede verse que completa antes de pasar al tercer valor
		tap((t) => {
			console.log("tap: ", t);
		}),
		take(2)
	)
	.subscribe({
		next: (value: number) => {
			console.log("next:", value);
		},
		complete: () => {
			console.log("complete");
		},
	});
