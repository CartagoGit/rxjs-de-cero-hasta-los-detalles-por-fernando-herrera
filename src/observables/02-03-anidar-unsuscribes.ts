import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
	next: (value: any) => console.log("[next]:", value),
	error: (err) => console.warn(" [error]:", err),
	complete: () => console.info("[complete]"),
};

const inter$: Observable<number> = new Observable((subs) => {
	let contador = 0;
	const interval = setInterval(() => {
		subs.next(contador++);
	}, 1000);

	setTimeout(() => {
		subs.complete();
	}, 2500);
	return () => {
		console.log("Intervalo destruido");
		clearInterval(interval);
	};
});

const subs1: Subscription = inter$.subscribe(observer);
const subs2: Subscription = inter$.subscribe(observer);
const subs3: Subscription = inter$.subscribe(observer);

//$ se pueden encadenar susbcripciones
//// subs1.add(subs2).add(subs3); DEPRECATED
//*de Forma secuencial
// subs1.add(subs2);
// subs2.add(subs3);
//* añadiendolo directamente a una subcripcion especifica
subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
	subs1.unsubscribe();
	// subcription2.unsubscribe();
	// subcription3.unsubscribe();

	console.log("Completado Timeout");
}, 6000);
