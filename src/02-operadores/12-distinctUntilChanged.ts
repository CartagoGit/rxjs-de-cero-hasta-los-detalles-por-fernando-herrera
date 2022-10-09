import { distinctUntilChanged, from, of } from "rxjs";
//? Devuelve valores si son distintos y no hay otro intercalado, si vuelve a salir el mismo elemento posteriormente a que haya otro intermedio, si vuelve a emitirlo
//? Si el valor se reptite consecutivamente no lo devuelve, y sino si
const numeros$ = of(
	1,
	1,
	"1",
	1,
	3,
	3,
	2,
	2,
	4,
	4,
	5,
	3,
	5,
	6,
	2,
	10,
	7,
	10,
	8,
	"1",
	15,
	9
);

numeros$
	.pipe(
		//=== Usa el triple igual
		distinctUntilChanged()
	)
	.subscribe((numeros) => console.log(numeros));

//$ Un ejemplo con objetos
interface Personaje {
	nombre: string;
	atributo: string;
}

const perrete: Personaje = { nombre: "es un perrete", atributo: "mu perruno" };
const personajes: Personaje[] = [
	{ nombre: "megaman", atributo: "disparitos" },
	{ nombre: "wolverin", atributo: "garritas" },
	{ nombre: "cyclope", atributo: "rayos por el ojete" },
	{ nombre: "cyclope", atributo: "rayos por el ojete" }, //* No son los mismos objetos
	{ nombre: "cyclope", atributo: "rayos por el ojete" }, //* No son los mismos objetos
	{ nombre: "tormenta", atributo: "hace viento" },
	perrete,
	perrete, //* Estos si son el mismo objeto
	perrete, //* Estos si son el mismo objeto
	{ nombre: "cyclope", atributo: "rayos por el ojete" }, //* No son los mismos objetos
	{ nombre: "batman", atributo: "sin padres" },
	perrete, //* Estos si son el mismo objeto
	{ nombre: "robin", atributo: "con pluma" },
	{ nombre: "hulk", atributo: "brutote listi" },
	{ nombre: "olga", atributo: "la mas mejon del mundo" },
	{ nombre: "mario", atributo: "el enfadoso" },
	{ nombre: "dea", atributo: "la mama" },
	{ nombre: "jm", atributo: "el papa" },
];

//? Devolvera los objetos que son distintos
//$ Si el objeto no es la misma referencia, lo va a devolver
from(personajes).pipe(distinctUntilChanged()).subscribe(console.log);
console.log("--------------------------------------");
//$ Aqui compara el personaje y comprueba si el nombre es distinto
from(personajes)
	.pipe(distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre))
	.subscribe(console.log);
