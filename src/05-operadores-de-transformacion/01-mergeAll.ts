import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
	GithubUsersResponse,
	GithubUsersItemResponse,
} from "../interfaces/github-users.interface";

//? Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
const divExample = document.createElement("div");

divExample.append(textInput, orderList);
body.append(divExample);

//? Helpers
const mostrarUsuarios = (usuarios: GithubUsersItemResponse[]) => {
	orderList.innerHTML = "";
	for (const usuario of usuarios) {
		const usuarioLi = document.createElement("li");
		const usuarioImage = document.createElement("img");
		usuarioImage.src = usuario.avatar_url;
		const usuarioA = document.createElement("a");
		usuarioA.href = usuario.html_url;
		usuarioA.text = "ver página";
		usuarioA.target = "_blank";

		usuarioLi.append(usuarioImage, usuario.login + " ", usuarioA);

		usuarioLi.addEventListener("click", (e) => {
			// e.preventDefault();
			console.log("Has clickeado al usuario: ", usuario.login);
		});
		orderList.appendChild(usuarioLi);
	}
};

//? Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

//$ Problematica de usar anidamiento de subcribes
input$
	.pipe(
		debounceTime(500),
		map<KeyboardEvent, Observable<GithubUsersResponse>>((event) => {
			const texto = (event.target as HTMLInputElement).value;
			return ajax.getJSON<GithubUsersResponse>(
				`https://api.github.com/search/users?q=${texto}`
			);
		}),
		mergeAll<Observable<GithubUsersResponse>>(),
		map<GithubUsersResponse, GithubUsersItemResponse[]>(
			(response) => response.items
		)
	)
	.subscribe((sub: GithubUsersItemResponse[]) => {
		// console.log(sub);
		// console.log(sub[0].id);
		mostrarUsuarios(sub);
	});
