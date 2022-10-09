import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
	next: (value: any) => console.log("[next]:", value),
	error: (err) => console.warn(" [error]:", err),
	complete: () => console.info("[complete]"),
};

const inter$ = new Observable<number>((subs) => {
	const intervalId = setInterval(() => subs.next(Math.random()), 1000);

	return () => {
		clearInterval(intervalId);
		console.log("Intervalo destruido");
	};
});

/**
 * $Propiedades especiales de los Subject
 * ?1- Casteo multiple
 * ?2- Tambien es un osberver
 * ?3- Next, error, complete
 */

const subject$ = new Subject<number>();

//! no nos estamos subcribiendo a este observable, sino al subject por lo que no se ejecutara el return
const subcription = inter$.subscribe(subject$);

// const subs1 = inter$.subscribe((rnd) => console.log("Subs1", rnd));
// const subs2 = inter$.subscribe((rnd) => console.log("Subs2", rnd));

//$ Al suscribirnos al subject, los valores del random van a ser los mismos
// const subs1 = subject$.subscribe((rnd) => console.log("Subs1", rnd));
// const subs2 = subject$.subscribe((rnd) => console.log("Subs2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
	//$ nos permite insertar flujo de datos al observable
	//?Cuando la data la crea el mismo observable se le conoce como "Cold Observable"
	//?Cuando la data se crea fuera "Hot Observable"
	subject$.next(9999999);
	subject$.complete();

	//! Y aqui si destruiriamos el intervalo
	subcription.unsubscribe();
}, 3500);
