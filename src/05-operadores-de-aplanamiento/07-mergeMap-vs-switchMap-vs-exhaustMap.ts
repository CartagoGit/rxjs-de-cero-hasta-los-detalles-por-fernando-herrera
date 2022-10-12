import { catchError, fromEvent, map, mergeMap, of, tap, switchMap, exhaustMap } from 'rxjs';
import { ajax } from "rxjs/ajax";

//? Helper

const peticionHttpLogin = (userPass: { email: string; password: string }) =>
	ajax
		.post("https://reqres.in/api/login?delay=1", userPass)
		.pipe(map(({ response }) => response["token"]),catchError( err=> of('error')));
//? Creando un formulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitButton = document.createElement("button");

//? Configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
//* Datos sacados de la api de pruebas 'https://reqres.in/'
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "Password";
inputPass.placeholder = "Password";
//* Datos sacados de la api de pruebas 'https://reqres.in/'
inputPass.value = "cityslicka";

submitButton.innerHTML = "Ingresar";

//? Añadimos los componentes a la pagina
const div = document.createElement("div");
form.append(inputEmail, inputPass, submitButton);
div.append(form);
document.querySelector("body").append(div);

//? Streams

const submitForm$ = fromEvent<SubmitEvent>(form, "submit").pipe(
	//*Prevenir comportamiento por defecto al pulsar el boton o pulsar Enter
	tap((ev) => ev.preventDefault()),
	map((ev) => {
		return {
			email: ev.target[0].value,
			password: ev.target[1].value,
		};
	}),
    //$ Al clickar muchas veces seguidas
    //? mergeMap me realiza todas las peticiones
	// mergeMap(peticionHttpLogin)
    //? switchMap cancela las anteriores y solo realiza la ultima
    // switchMap(peticionHttpLogin)
    //? exhaustMap solo realiza la primera y el resto las ignota hasta que la primera se haya completado
    exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe({
	next: (token) => {
		console.log(token);
	},
});
