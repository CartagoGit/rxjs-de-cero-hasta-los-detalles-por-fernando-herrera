import { Observable, Observer, Subscription } from "rxjs";

//? Crear un observer
const observer: Observer<any> = {
	next: (value: any) => console.log("[next]:", value),
	error: (err) => console.warn(" [error]:", err),
	complete: () => console.info("[complete]"),
};

const intervalos$: Observable<number> = new Observable((subs) => {
	let contador = 0;
	const interval = setInterval(() => {
		//! El set interval no termina al hacer el unsubscribe
		console.log("setInterval", contador);
		subs.next(contador++);

	}, 1000);

	//* Esto es llamado al terminar el subscribe, haciendo que el set interval en este caso se detenga al llamar al metodo clearInterval en el return
	//$ La funcion del return se ejucataria al usar unsubscribe
	return () => {
		clearInterval(interval);
		console.log("intervalo destruido");
	};
});

const subcription: Subscription = intervalos$.subscribe((num) =>
	console.log(1, num)
);
const subcription2: Subscription = intervalos$.subscribe((num) =>
	console.log(2, num)
);
const subcription3: Subscription = intervalos$.subscribe((num) =>
	console.log(3, num)
);

setTimeout(() => {
	subcription.unsubscribe();
	subcription2.unsubscribe();
	subcription3.unsubscribe();

	//* Comienza la subcripcion desde 0
	// intervalos$.subscribe(console.log);

	console.log("Completado timeout");
}, 3000);
