import { distinctUntilKeyChanged, from } from "rxjs";
//? Va comperar si ha cambiado una propiedad de la llave de un objeto

//$ Solo con objetos
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

//? Devolvera los objetos que tienen el nombre distinto
from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
console.log("--------------------------------------");


