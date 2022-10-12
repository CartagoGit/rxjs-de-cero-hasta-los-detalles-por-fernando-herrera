import { forkJoin, of, catchError } from "rxjs";
import { ajax } from "rxjs/ajax";

//? Ejemplo practico de forkJoin
const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "CartagoGit";

//? va a realizar las 3 peticiones simultaneas y solo me va a devolver cuando las 3 esten realizadas
//! Si alguna de las peticiones falla, fallara tambien la subscripcion, pero las peticiones correctas peticiones se realizaran igualmente
//* para manejar este error usamos el cartchError en global:
forkJoin({
	url: of(GITHUB_API_URL),
	usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
	repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos23`),
	gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
	.pipe(catchError((err) => of(err.message)))
	.subscribe(console.log);

//$ Pero si queremos manejar el error individualmente le podemos pasar el pipe por cada peticion
forkJoin({
	url: of(GITHUB_API_URL),
	usuario: ajax
		.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`)
		.pipe(catchError((error) => of(error.message))),
	repos: ajax
		.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos23`)
		.pipe(catchError((error) => of(error.message))),
	gists: ajax
		.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
		.pipe(catchError((error) => of(error.message))),
})
	.pipe(catchError((err) => of(err.message)))
	.subscribe(console.log);
