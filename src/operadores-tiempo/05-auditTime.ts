import { auditTime, fromEvent, map, tap } from "rxjs";

//? Va ad evolver el ultimo valor emitido una vez pase el tiempo
const click$ = fromEvent<PointerEvent>(document, "click");

click$
	.pipe(
		map(({ x, y }) => ({ x, y })),
		tap((val) => console.log("tap", val)),
		auditTime(2000)
	)
	.subscribe(console.log);
