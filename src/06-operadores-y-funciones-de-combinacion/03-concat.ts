//? Concatena observables secuencialmente, y no empiezan hasta que no se completa el anterior
//! No es el operador, es la FUNCION

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

concat(
	interval$.pipe(take(3)),
	interval$.pipe(take(2)),
	[1, 2, 3, 4],
	of({
		hola: true,
		esValido: "si",
	})
).subscribe(console.log);
