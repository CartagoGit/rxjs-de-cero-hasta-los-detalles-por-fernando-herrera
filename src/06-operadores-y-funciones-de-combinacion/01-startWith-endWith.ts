import { endWith, of, startWith } from "rxjs";

//? startWith() Comienza con el/los argumento que pasemos
//? endWith() Termina con el/los argumento que pasemos

//* Recordando que of es sincrono
const numeros$ = of(1, 2, 3).pipe(
	startWith("a", "b", "c"),
	endWith("x", "y", "z")
);

numeros$.subscribe(console.log);
