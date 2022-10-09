import { Observable, Observer, Subscription } from "rxjs";

const observer: Observer<any> = {
	next: (value: any) => console.log("[next]:", value),
	error: (err) => console.warn(" [error]:", err),
	complete: () => console.info("[complete]"),
};

const intervalos$: Observable<number> = new Observable((subs) => {
	let contador = 0;
	const interval = setInterval(() => {
		subs.next(contador++);
	}, 1000);

	//$ El complete no es lo mismo que el unsubscribe
	setTimeout(() => {
		subs.complete();
	}, 2500);

	//? y al completarse cierra el intervalo antes de que se llame el unsuscribe que en este ejemplo se ejecutara en el codigo de abajo a los 6 segundos y no a los 2.5 segs
	return () => {
		console.log("Intervalo destruido");
		clearInterval(interval);
	};
});

const subcription: Subscription = intervalos$.subscribe(observer);
const subcription2: Subscription = intervalos$.subscribe(observer);
const subcription3: Subscription = intervalos$.subscribe(observer);

setTimeout(() => {
	//$ Da igual cuantos hagamos porque le complete se hizo antes
	subcription.unsubscribe();
	subcription2.unsubscribe();
	subcription3.unsubscribe();
	subcription.unsubscribe();
	subcription2.unsubscribe();
	subcription3.unsubscribe();
	subcription.unsubscribe();
	subcription2.unsubscribe();
	subcription3.unsubscribe();
	console.log("Completado Timeout");
}, 6000);
