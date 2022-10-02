import { interval, Observer, timer } from "rxjs";

const observer: Observer<number> = {
	next: (value: number) => {
		console.log(value);
	},
	error: () => {
		console.log("error");
	},
	complete: () => {
		console.log("complete");
	},
};

const inter1$ = interval(1000);
const timer1$ = timer(2000);
//? el timer2 seria como un interval que inicia en 2 segundos
const timer2$ = timer(2000, 1000);

//? Para iniciar el timer en 5 segundos, para iniciar el suscribe en X momento
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer3$ = timer(hoyEn5);

// //? Son async
console.log("inicio inter1");
inter1$.subscribe(observer);
console.log("fin inter1");

timer1$.subscribe(observer);

timer2$.subscribe(observer);

//?Se va a lanzar a los 5 segundos y se va a completar
timer3$.subscribe(observer);
