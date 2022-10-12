import { interval, map, takeWhile } from "rxjs";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
	const inicio = 7;
	const countdown$ = interval(700).pipe(
		// Usar los operadores necesarios
		// para realizar la cuenta regresiva
		map((num) => inicio - num),
        takeWhile((elem) => elem > 0, true)

		//? hecho por mi cambiando inicio como let
		// map(() => inicio--),
		// takeWhile((elem) => elem > 0, true)
	);

	// No tocar esta línea ==================
	countdown$.subscribe(console.log); // =
	// ======================================
})();
