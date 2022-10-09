import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";
const divBtn = document.createElement("div");
const boton = document.createElement("button");
boton.innerHTML = "Detener timer";
divBtn.append(boton);
document.querySelector("body").append(divBtn);

const counter$ = interval(1000);
//? Con skip saltamos la cantidad de observables antes de que ocurra
const clickBtn$ = fromEvent(boton, "click").pipe(
	tap(() => console.log("tap antes del skip")),
	skip(1), 
    //* Como podemos ver hasta que pase el skip, no continua
    tap(() => console.log("tap despues del skip")),
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
	next: (val) => {
		console.log("next: ", val);
	},
	complete: () => {
		console.log("complete");
	},
});
