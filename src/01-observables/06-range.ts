import { asyncScheduler, observeOn, of, range } from "rxjs";

const src1$ = of(1, 2, 3, 4, 5);
const src2$ = range(1, 10);
// const src3$ = range(1, 5, asyncScheduler); DEPRECATED
//? hacemos el range async
const src3$ = range(1, 5).pipe(observeOn(asyncScheduler));

/**
 * $Diferencias entre of y range
 * ?ambos son sincronos
 */
console.log("src1 inicio");
src1$.subscribe(console.log);
console.log("src1 fin");

console.log("src2 inicio");
src2$.subscribe(console.log);
console.log("src2 fin");

//! Al hacerlo asyncrono ya hace la subscripcion despues
console.log("src3 inicio");
src3$.subscribe(console.log);
console.log("src3 fin");
