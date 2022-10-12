import { concatMap, fromEvent, interval, take, } from "rxjs";

//? ConcatMap concatena observables, esperando secuancialmente a que se completen antes de continuar con el siguiente.

const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
