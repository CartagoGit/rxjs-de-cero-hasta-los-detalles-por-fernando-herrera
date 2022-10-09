import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
const headers = { "mi-token": "1234" };
const body = {};
//* GET
ajax.get(url, headers).subscribe((sub) => console.log("get: ", sub));
//* POST
ajax.post(url, body, headers).subscribe((sub) => console.log("post: ", sub));
//* PUT
ajax.put(url, body, headers).subscribe((sub) => console.log("put: ", sub));
//* DELETE
ajax.delete(url, headers).subscribe((sub) => console.log("delete: ", sub));

//? otra forma de hacer peticiones en con rx ajax
ajax({ url, method: "POST", headers, body }).subscribe((sub) =>
	console.log("forma alternativa: ", sub)
);
