//! SCAN ES LO MISMO QUE EL REDUCE PERO DEVOLVIENDO CADA VALOR INTERMEDIO

import { from, Observable } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

//? acc = acumulado, cur = actual
const totalAcumulador = (acc: number, cur: number) => acc + cur;

//?Con reducer
from(numeros)
	.pipe(reduce(totalAcumulador))
	.subscribe((val) => console.log("reduce: ", val));

//$ Con Scan
from(numeros)
	.pipe(scan(totalAcumulador))
	.subscribe((val) => console.log("scan: ", val));

//! ejemplo de como funciona REDUX
interface Usuario {
	id?: string;
	autenticado?: boolean;
	token?: string;
	edad?: number;
}
const user: Usuario[] = [
	{ id: "Fer", autenticado: false, token: null },
	{ id: "Fer", autenticado: true, token: "ABC" },
	{ id: "Fer", autenticado: true, token: "123" },
	{ id: "Fer", autenticado: false, token: null },
];

const state$: Observable<Usuario> = from(user).pipe(
	scan<Usuario, Usuario>(
		(acc, cur) => {
			return { ...acc, ...cur };
		},
		{ edad: 33 }
	)
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
