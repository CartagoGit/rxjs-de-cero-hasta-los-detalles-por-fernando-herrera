import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/xdelay/1";

const manejaError = (resp: AjaxError) => {
	console.warn("error", resp.message);
	return of({
		ok: false,
		usuarios: [],
	});
};

//? difernecia entre getJson(url) y ajax(url)
const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));
const obs2$ = ajax(url).pipe(catchError(manejaError));
obs$.subscribe({
	next: (data) => {
		console.log("getJSON: ", data);
	},
	error: () => {},
});
obs2$.subscribe({
	next: (data) => {
		console.log("ajax: ", data);
	},
	error: () => {},
});

//$ Otra forma de manejar Errores

const obs3$ = ajax.getJSON(url);
obs3$.pipe(catchError(manejaError)).subscribe({
	next: (data) => {
		console.log("data: ", data);
	},
	error: (err) => {
		console.warn("error en subs: ", err);
	},
	complete: () => {
		console.log("complete");
	},
});
