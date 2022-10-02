import { Observable, Observer } from "rxjs";

//? Crear un observer
const observer: Observer<any> = {
	next: (value: any) => console.log("siguiente [next]:", value),
	error: (err) => console.warn("error [object]:", err),
	complete: () => console.info("completado [obs]"),
};

//! const obs$ = Observable.create(); ->>> deprecated



const obs$ = new Observable<string>((subscriber) => {
	subscriber.next("Hola");
	subscriber.next("Hola2");

	//? FORZAR ERROR
	const a = undefined;
	a.nombre = "Hola";
	subscriber.next("Hola3");

	subscriber.complete();
	subscriber.next("Hola4");
});

//? FORMAS DE USAR LOS OBSERVABLES
//*1
// obs$.subscribe(console.log);
// obs$.subscribe((resp) => {
// 	console.log(resp);
// });

//*2
// obs$.subscribe({
// 	next: (resp) => console.log("next", resp),
// 	error: (error) => console.warn("Esto es el error", error),
// 	complete: () => console.log("complete"),
// });

//*3
obs$.subscribe(observer);

