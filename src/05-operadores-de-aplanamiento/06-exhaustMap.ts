
import { exhaustMap, fromEvent, interval, take, } from "rxjs";

//? exhaustMap ignora los observables secuenciales hasta que el anterior se haya completado. Solo mantiene una subcripcion activa antes de aceptar otra subcripcion


const interval$ = interval(500).pipe(take(3));

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
