import { fromEvent, map, sampleTime } from "rxjs";

//? Emite el ultimo valor dentro de ese intervalo, si no hay valor no devuelve nada
const click$ = fromEvent<PointerEvent>(document, "click");

click$
	.pipe(
        //? Es conveniente usarlo antes para que la informacion se procese despues de pasar el sampleTime
		sampleTime(2000),
		map(({ x, y }) => ({ x, y })),
	)
	.subscribe(console.log);
