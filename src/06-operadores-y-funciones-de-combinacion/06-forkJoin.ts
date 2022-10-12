import { delay, forkJoin, interval, of, take } from "rxjs";

//? Devuelve el ultimo valor de los observables una vez se hayan completado todos.
//* Los observables tienen que ser finitos o el forkJoin no emitiria ningun valor
//? retorna un observable

const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(2));
const letras$ = of("a", "b", "c").pipe(delay(3500));

//* Hay que pasarlos como un array en vez de como se pasa en la clase
forkJoin([numeros$, interval$, letras$]).subscribe((resp) => {
	console.log("numeros: ", resp[0]);
	console.log("intervalo: ", resp[1]);
	console.log("letras: ", resp[2]);
});

//? PAra mandarlos como un unico objeto
forkJoin({num: numeros$, inter: interval$, let: letras$}).subscribe((resp) => {
	console.log(resp);
    
});

