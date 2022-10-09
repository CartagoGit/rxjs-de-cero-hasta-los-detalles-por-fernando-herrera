import { fromEvent } from "rxjs";

/**
 * $Eventos del Dom
 * ?recibe un target, en este ejemplo el document, y el evento
 */
const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
	next: (val: any) => {
		console.log("next", val);
	},
};

src1$.subscribe(observer);
src1$.subscribe((ev) => {
	console.log(ev.x, ev.y);
});
src2$.subscribe((event) => {
	console.log(event.key);
});
