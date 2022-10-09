import { debounceTime, fromEvent, map } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";

//? Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
const divExample = document.createElement("div");

divExample.append(textInput, orderList);
body.append(divExample);

//? Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

//$ Problematica de usar anidamiento de subcribes
input$
	.pipe(
		debounceTime(500),
		map((event) => {
			const texto = (event.target as HTMLInputElement).value;
			return ajax.getJSON(`https://api.github.com/users/${texto}`);
		})
	)
	.subscribe((sub) => {
		console.log(sub);
		sub
			.pipe(
				map((sub) => {
					console.log(sub);
					return sub["url"];
				})
			)
			.subscribe((data) => {
				console.log(data);
			});
	});
