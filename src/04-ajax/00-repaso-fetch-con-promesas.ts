
const url = "https://api.github.com/users?per_page=5";

const manejarErrores = (response: Response) => {
	if (!response || !response.ok) throw new Error(response.statusText);
	return response;
};

const fetchPromise = fetch(url);

fetchPromise
	.then(async (resp: Response) => {
		manejarErrores(resp);
		const data = await resp.json();

		console.log("resp: ", resp);
		console.log("data: ", data);
	})
	.catch((error) => console.warn(error));
