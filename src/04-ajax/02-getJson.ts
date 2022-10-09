import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const obs$ = ajax.getJSON(url, {
	"Content-Type": "application/json",
	"mi-token": "ABC123",
});
obs$.subscribe({
	next: (data) => {
		console.log("data: ", data);
	},
	error: () => {},
});
