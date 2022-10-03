import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1, 5);

//? con tap da igual lo que retornemos, lo ignorara
numeros$
	.pipe(
		tap((x) => console.log("antes", x)),
		map((x) => x * 10),
		tap((x) => console.log("despues", x)),
		tap({
			next: (valor) => console.log("tercer tap", valor),
			//? el complete solo se va a ejecutar cuando el subcribe se termine
			complete: () => console.log("complete"),
		})
	)
	.subscribe({
		next: (val) => {
			console.log("subs", val);
		},
	});
