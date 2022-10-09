import { fromEvent, interval, sample } from "rxjs";

//? Emite el ultimo valor del observable hasta que el otro observable emita un nuevo valor
const interval$ = interval(2000);

const click$ = fromEvent(document, "click");

//? La cantidad de valores que se han emitido hasta que hacemos click
interval$.pipe(sample(click$)).subscribe(console.log);
