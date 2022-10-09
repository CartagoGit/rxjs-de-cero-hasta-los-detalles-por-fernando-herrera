//? El primer observable sigue emitiendo valores hasta que el segundo emita su primer valor.

import { fromEvent, interval, takeUntil } from "rxjs";
const divBtn = document.createElement("div");
const boton = document.createElement("button");
boton.innerHTML = "Detener timer";
divBtn.append(boton);
document.querySelector("body").append(divBtn);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, "click");


//? El intervalo seguira emitiendo valores hasta que pulsemos en el boton
counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (val) => {
		console.log("next: ", val);
	},
	complete: () => {
		console.log("complete");
	},
});
