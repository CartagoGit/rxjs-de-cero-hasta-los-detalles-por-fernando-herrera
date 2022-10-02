import { from, of } from "rxjs";

/**
 * * of = toma argumentos y genera una secuencia de esos valores
 *
 * ? from = crea un observable en base a un arreglo, un objeto, un iterable, una promesa, un observable, etc etc
 */

const observer = {
	next: (val: any) => {
		console.log("next:", val);
	},
	complete: () => {
		console.log("complete");
	},
};

//? ver la diferencia entre from y of
const source$ = from([1, 2, 3, 4, 5]);
const sourceOf$ = of(...[1, 2, 3, 4, 5]);

source$.subscribe(observer);
sourceOf$.subscribe(observer);

//? me devuelve cada elemento del string, como si fuera un arreglo
const source2$ = from("Fernando");
source2$.subscribe(observer);

//? con una promesa...para poder hacer una peticion fetch
const source3$ = from(fetch("https://api.github.com/users/klerith"));
// source3$.subscribe(observer);
source3$.subscribe(async (resp) => {
	console.log(resp.url);
	const dataResp = await resp.json();

	console.log(dataResp);
});


//? forma de crear un iterable con un generador
const miGenerador = function* () {
	//? con iterables o funciones generadoras
	let vl = 0;
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	while (vl < 10) {
		yield vl++;
	}
};

const miIterable = miGenerador();

//? estaria bien tambien
// for (const id of miIterable) {
// 	console.log(id);
// }

//? pero asi podriamos usar controladores de rxjs
from(miIterable).subscribe(observer);
