//?? Ejemplo de como funciona el reduce en js

import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const number = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
	return acumulador + valorActual;
};

//? el segundo valor es el valor inicial donde empieza el reduce
const total = number.reduce(totalReducer, 11);
console.log("total reducer: ", total);

//$ Comenzamos el ejercicio con Observables

interval(1000)
	.pipe(take(5), tap(console.log), reduce(totalReducer))
	.subscribe({
		next: (value) => {
			console.log("next:", value);
		},
		complete: () => console.log("complete"),
	});
