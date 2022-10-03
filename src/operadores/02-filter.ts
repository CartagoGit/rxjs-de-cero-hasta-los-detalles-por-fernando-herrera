import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

//$ Solo deja pasar el value que pasa la condicion, el que de false lo descarta
range(1, 10)
	.pipe(filter((val) => val % 2 === 1))
	.subscribe(console.log);

range(20, 10)
	.pipe(
		filter((val, i) => {
			console.log("index", i);
			return val % 2 === 1;
		})
	)
	.subscribe(console.log);

//$ Para filtrar observando objetos
interface Personaje {
	tipo: string;
	nombre: string;
}

const personajes: Personaje[] = [
	{
		tipo: "heroe",
		nombre: "Batman",
	},
	{
		tipo: "heroe",
		nombre: "Robin",
	},
	{
		tipo: "villano",
		nombre: "Joker",
	},
];

//? Filtrar heroes
from(personajes)
	.pipe(filter((personaje) => personaje.tipo === "heroe"))
	.subscribe({
		next: (heroe) => {
			console.log("heroes: ", heroe);
		},
	});
from(personajes)
	.pipe(filter((personaje) => personaje.tipo === "villano"))
	.subscribe({
		next: (villano) => {
			console.log("villanos: ", villano);
		},
	});

//$ Cadenas de operadores
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
	//* recibe un keyboardString y emite un string
	map((event) => event.code),
	//* Filtramos que solo acepte cuando pulsamos el Enter como ejemplo
	filter((code) => code === "Enter")
);
keyup$.subscribe({
	next: (val) => {
		console.log(val);
	},
});
