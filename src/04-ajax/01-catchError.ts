import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

// const manejarErrores = (response: Response) => {
// 	if (!response || !response.ok) throw new Error(response.statusText);
// 	return response;
// };

const atrapaError = (error: AjaxError) => {
	console.warn("error en:");
	console.warn(error);
	return of([]);
};

// const fetchPromise = fetch(url);

ajax(url)
	.pipe(
		map((res) => res.response),
		//? no solo sirve para capturar errores en el html, sino para cualquier error en el observable
		catchError(atrapaError)
	)
	.subscribe({
		next: (users) => {
			console.log("usuarios: ", users);
		},
	});
