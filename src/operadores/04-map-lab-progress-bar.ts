import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

//$ Todo esto es solo para añadir al documento una gran cantidad de texto en un div para el ejercicio
const text = document.createElement("div");

//! PLEGAR TODO EL TEXTO PARA PODER VER CORRECTAMENTE EL EJERCICIO

text.innerHTML = `Elit magna dolor consequat qui deserunt esse eiusmod. Elit adipisicing commodo laboris enim aute. Laborum tempor duis eu nostrud commodo ex est culpa sunt. Nisi reprehenderit deserunt aute adipisicing in et deserunt id proident do cillum. Est esse sint ipsum ut do id deserunt.
<br/><br/>
Eu non ad incididunt eiusmod voluptate ea pariatur et cupidatat qui esse. Dolore pariatur anim cillum nostrud laboris aliquip proident aliquip exercitation. Aute velit nisi aute in incididunt sunt eu velit esse ea adipisicing. Sunt voluptate nisi et Lorem eu aliquip tempor dolor occaecat culpa minim anim.
<br/><br/>
Eiusmod id voluptate commodo proident. Ad ullamco elit minim duis id qui esse aliqua. Excepteur aliquip fugiat fugiat tempor in culpa aliqua exercitation cupidatat aute consectetur aute. Incididunt eiusmod sint consequat esse sit cupidatat. Non enim dolore laboris ea ad sint dolore sint cupidatat consequat sit dolor.
<br/><br/>
Commodo minim exercitation commodo ex est Lorem commodo magna sunt labore. Sit qui minim voluptate exercitation proident non velit et consequat. Do aliquip enim nulla nulla. Eiusmod sint non esse mollit do veniam exercitation non quis.
<br/><br/>
Dolor cillum do deserunt occaecat Lorem exercitation esse ex id mollit excepteur. Ullamco aute fugiat id ad aliquip. Occaecat dolor amet aute nisi nulla ea occaecat ut culpa. Cupidatat officia aliquip ullamco fugiat cupidatat consectetur sit nostrud et minim irure. Ex anim sunt duis irure pariatur magna consectetur tempor labore deserunt laborum. Pariatur qui irure quis dolore cupidatat labore esse id quis Lorem quis. Dolore ea ipsum irure exercitation id excepteur labore proident mollit excepteur ut velit cillum.
<br/><br/>
Exercitation irure quis dolore cupidatat sit proident magna sunt id veniam cupidatat. Labore mollit non pariatur laborum commodo nostrud non culpa sunt ex ut. Officia voluptate nostrud cillum est excepteur aute sunt ex. Dolor officia nostrud fugiat fugiat ea ut laboris ullamco sint sunt minim ea reprehenderit.
<br/><br/>
Cillum ea deserunt tempor aliquip aliqua et amet. Laborum incididunt officia aliqua excepteur sunt. Eiusmod cupidatat non do minim nulla pariatur id excepteur.
<br/><br/>
Eiusmod aliqua tempor do mollit reprehenderit aliqua officia non deserunt qui officia eu nostrud. Aliqua commodo eu consectetur ut voluptate sit dolore voluptate irure. Id minim pariatur do proident eiusmod pariatur. Occaecat consectetur amet sunt minim. Duis do adipisicing excepteur minim ex et proident in officia ad labore eiusmod amet non. Dolor mollit minim culpa irure dolor aute irure anim nulla exercitation aute. Lorem do qui est et duis est sunt id pariatur laborum.
<br/><br/>
Labore voluptate tempor veniam ea do tempor magna aliquip adipisicing. Consequat veniam qui velit ea ex duis aliquip aliqua. Est do ut proident aute culpa quis mollit magna aliqua consectetur. Elit nisi laborum eu nostrud culpa sint et duis. Consequat ea ex culpa aliquip dolore exercitation nisi fugiat labore pariatur labore aliquip exercitation. Irure nostrud sint excepteur id.
<br/><br/>
Cillum ad pariatur enim adipisicing pariatur adipisicing excepteur minim consectetur fugiat commodo in aliqua. Ex mollit eu culpa est mollit Lorem anim non. Laboris aliqua sit qui veniam dolore incididunt laboris aliqua veniam cupidatat. Pariatur do aliquip incididunt veniam aliquip anim consectetur cillum ullamco. Ea elit minim pariatur esse commodo adipisicing exercitation duis ad dolore pariatur sunt. Nulla id irure irure eu est qui id quis Lorem.
Elit magna dolor consequat qui deserunt esse eiusmod. Elit adipisicing commodo laboris enim aute. Laborum tempor duis eu nostrud commodo ex est culpa sunt. Nisi reprehenderit deserunt aute adipisicing in et deserunt id proident do cillum. Est esse sint ipsum ut do id deserunt.
<br/><br/>
Eu non ad incididunt eiusmod voluptate ea pariatur et cupidatat qui esse. Dolore pariatur anim cillum nostrud laboris aliquip proident aliquip exercitation. Aute velit nisi aute in incididunt sunt eu velit esse ea adipisicing. Sunt voluptate nisi et Lorem eu aliquip tempor dolor occaecat culpa minim anim.
<br/><br/>
Eiusmod id voluptate commodo proident. Ad ullamco elit minim duis id qui esse aliqua. Excepteur aliquip fugiat fugiat tempor in culpa aliqua exercitation cupidatat aute consectetur aute. Incididunt eiusmod sint consequat esse sit cupidatat. Non enim dolore laboris ea ad sint dolore sint cupidatat consequat sit dolor.
<br/><br/>
Commodo minim exercitation commodo ex est Lorem commodo magna sunt labore. Sit qui minim voluptate exercitation proident non velit et consequat. Do aliquip enim nulla nulla. Eiusmod sint non esse mollit do veniam exercitation non quis.
<br/><br/>
Dolor cillum do deserunt occaecat Lorem exercitation esse ex id mollit excepteur. Ullamco aute fugiat id ad aliquip. Occaecat dolor amet aute nisi nulla ea occaecat ut culpa. Cupidatat officia aliquip ullamco fugiat cupidatat consectetur sit nostrud et minim irure. Ex anim sunt duis irure pariatur magna consectetur tempor labore deserunt laborum. Pariatur qui irure quis dolore cupidatat labore esse id quis Lorem quis. Dolore ea ipsum irure exercitation id excepteur labore proident mollit excepteur ut velit cillum.
<br/><br/>
Exercitation irure quis dolore cupidatat sit proident magna sunt id veniam cupidatat. Labore mollit non pariatur laborum commodo nostrud non culpa sunt ex ut. Officia voluptate nostrud cillum est excepteur aute sunt ex. Dolor officia nostrud fugiat fugiat ea ut laboris ullamco sint sunt minim ea reprehenderit.
<br/><br/>
Cillum ea deserunt tempor aliquip aliqua et amet. Laborum incididunt officia aliqua excepteur sunt. Eiusmod cupidatat non do minim nulla pariatur id excepteur.
<br/><br/>
Eiusmod aliqua tempor do mollit reprehenderit aliqua officia non deserunt qui officia eu nostrud. Aliqua commodo eu consectetur ut voluptate sit dolore voluptate irure. Id minim pariatur do proident eiusmod pariatur. Occaecat consectetur amet sunt minim. Duis do adipisicing excepteur minim ex et proident in officia ad labore eiusmod amet non. Dolor mollit minim culpa irure dolor aute irure anim nulla exercitation aute. Lorem do qui est et duis est sunt id pariatur laborum.
<br/><br/>
Labore voluptate tempor veniam ea do tempor magna aliquip adipisicing. Consequat veniam qui velit ea ex duis aliquip aliqua. Est do ut proident aute culpa quis mollit magna aliqua consectetur. Elit nisi laborum eu nostrud culpa sint et duis. Consequat ea ex culpa aliquip dolore exercitation nisi fugiat labore pariatur labore aliquip exercitation. Irure nostrud sint excepteur id.
<br/><br/>
Cillum ad pariatur enim adipisicing pariatur adipisicing excepteur minim consectetur fugiat commodo in aliqua. Ex mollit eu culpa est mollit Lorem anim non. Laboris aliqua sit qui veniam dolore incididunt laboris aliqua veniam cupidatat. Pariatur do aliquip incididunt veniam aliquip anim consectetur cillum ullamco. Ea elit minim pariatur esse commodo adipisicing exercitation duis ad dolore pariatur sunt. Nulla id irure irure eu est qui id quis Lorem.
Elit magna dolor consequat qui deserunt esse eiusmod. Elit adipisicing commodo laboris enim aute. Laborum tempor duis eu nostrud commodo ex est culpa sunt. Nisi reprehenderit deserunt aute adipisicing in et deserunt id proident do cillum. Est esse sint ipsum ut do id deserunt.
<br/><br/>
Eu non ad incididunt eiusmod voluptate ea pariatur et cupidatat qui esse. Dolore pariatur anim cillum nostrud laboris aliquip proident aliquip exercitation. Aute velit nisi aute in incididunt sunt eu velit esse ea adipisicing. Sunt voluptate nisi et Lorem eu aliquip tempor dolor occaecat culpa minim anim.
<br/><br/>
Eiusmod id voluptate commodo proident. Ad ullamco elit minim duis id qui esse aliqua. Excepteur aliquip fugiat fugiat tempor in culpa aliqua exercitation cupidatat aute consectetur aute. Incididunt eiusmod sint consequat esse sit cupidatat. Non enim dolore laboris ea ad sint dolore sint cupidatat consequat sit dolor.
<br/><br/>
Commodo minim exercitation commodo ex est Lorem commodo magna sunt labore. Sit qui minim voluptate exercitation proident non velit et consequat. Do aliquip enim nulla nulla. Eiusmod sint non esse mollit do veniam exercitation non quis.
<br/><br/>
Dolor cillum do deserunt occaecat Lorem exercitation esse ex id mollit excepteur. Ullamco aute fugiat id ad aliquip. Occaecat dolor amet aute nisi nulla ea occaecat ut culpa. Cupidatat officia aliquip ullamco fugiat cupidatat consectetur sit nostrud et minim irure. Ex anim sunt duis irure pariatur magna consectetur tempor labore deserunt laborum. Pariatur qui irure quis dolore cupidatat labore esse id quis Lorem quis. Dolore ea ipsum irure exercitation id excepteur labore proident mollit excepteur ut velit cillum.
<br/><br/>
Exercitation irure quis dolore cupidatat sit proident magna sunt id veniam cupidatat. Labore mollit non pariatur laborum commodo nostrud non culpa sunt ex ut. Officia voluptate nostrud cillum est excepteur aute sunt ex. Dolor officia nostrud fugiat fugiat ea ut laboris ullamco sint sunt minim ea reprehenderit.
<br/><br/>
Cillum ea deserunt tempor aliquip aliqua et amet. Laborum incididunt officia aliqua excepteur sunt. Eiusmod cupidatat non do minim nulla pariatur id excepteur.
<br/><br/>
Eiusmod aliqua tempor do mollit reprehenderit aliqua officia non deserunt qui officia eu nostrud. Aliqua commodo eu consectetur ut voluptate sit dolore voluptate irure. Id minim pariatur do proident eiusmod pariatur. Occaecat consectetur amet sunt minim. Duis do adipisicing excepteur minim ex et proident in officia ad labore eiusmod amet non. Dolor mollit minim culpa irure dolor aute irure anim nulla exercitation aute. Lorem do qui est et duis est sunt id pariatur laborum.
<br/><br/>
Labore voluptate tempor veniam ea do tempor magna aliquip adipisicing. Consequat veniam qui velit ea ex duis aliquip aliqua. Est do ut proident aute culpa quis mollit magna aliqua consectetur. Elit nisi laborum eu nostrud culpa sint et duis. Consequat ea ex culpa aliquip dolore exercitation nisi fugiat labore pariatur labore aliquip exercitation. Irure nostrud sint excepteur id.
<br/><br/>
Cillum ad pariatur enim adipisicing pariatur adipisicing excepteur minim consectetur fugiat commodo in aliqua. Ex mollit eu culpa est mollit Lorem anim non. Laboris aliqua sit qui veniam dolore incididunt laboris aliqua veniam cupidatat. Pariatur do aliquip incididunt veniam aliquip anim consectetur cillum ullamco. Ea elit minim pariatur esse commodo adipisicing exercitation duis ad dolore pariatur sunt. Nulla id irure irure eu est qui id quis Lorem.
Elit magna dolor consequat qui deserunt esse eiusmod. Elit adipisicing commodo laboris enim aute. Laborum tempor duis eu nostrud commodo ex est culpa sunt. Nisi reprehenderit deserunt aute adipisicing in et deserunt id proident do cillum. Est esse sint ipsum ut do id deserunt.
<br/><br/>
Eu non ad incididunt eiusmod voluptate ea pariatur et cupidatat qui esse. Dolore pariatur anim cillum nostrud laboris aliquip proident aliquip exercitation. Aute velit nisi aute in incididunt sunt eu velit esse ea adipisicing. Sunt voluptate nisi et Lorem eu aliquip tempor dolor occaecat culpa minim anim.
<br/><br/>
Eiusmod id voluptate commodo proident. Ad ullamco elit minim duis id qui esse aliqua. Excepteur aliquip fugiat fugiat tempor in culpa aliqua exercitation cupidatat aute consectetur aute. Incididunt eiusmod sint consequat esse sit cupidatat. Non enim dolore laboris ea ad sint dolore sint cupidatat consequat sit dolor.
<br/><br/>
Commodo minim exercitation commodo ex est Lorem commodo magna sunt labore. Sit qui minim voluptate exercitation proident non velit et consequat. Do aliquip enim nulla nulla. Eiusmod sint non esse mollit do veniam exercitation non quis.
<br/><br/>
Dolor cillum do deserunt occaecat Lorem exercitation esse ex id mollit excepteur. Ullamco aute fugiat id ad aliquip. Occaecat dolor amet aute nisi nulla ea occaecat ut culpa. Cupidatat officia aliquip ullamco fugiat cupidatat consectetur sit nostrud et minim irure. Ex anim sunt duis irure pariatur magna consectetur tempor labore deserunt laborum. Pariatur qui irure quis dolore cupidatat labore esse id quis Lorem quis. Dolore ea ipsum irure exercitation id excepteur labore proident mollit excepteur ut velit cillum.
<br/><br/>
Exercitation irure quis dolore cupidatat sit proident magna sunt id veniam cupidatat. Labore mollit non pariatur laborum commodo nostrud non culpa sunt ex ut. Officia voluptate nostrud cillum est excepteur aute sunt ex. Dolor officia nostrud fugiat fugiat ea ut laboris ullamco sint sunt minim ea reprehenderit.
<br/><br/>
Cillum ea deserunt tempor aliquip aliqua et amet. Laborum incididunt officia aliqua excepteur sunt. Eiusmod cupidatat non do minim nulla pariatur id excepteur.
<br/><br/>
Eiusmod aliqua tempor do mollit reprehenderit aliqua officia non deserunt qui officia eu nostrud. Aliqua commodo eu consectetur ut voluptate sit dolore voluptate irure. Id minim pariatur do proident eiusmod pariatur. Occaecat consectetur amet sunt minim. Duis do adipisicing excepteur minim ex et proident in officia ad labore eiusmod amet non. Dolor mollit minim culpa irure dolor aute irure anim nulla exercitation aute. Lorem do qui est et duis est sunt id pariatur laborum.
<br/><br/>
Labore voluptate tempor veniam ea do tempor magna aliquip adipisicing. Consequat veniam qui velit ea ex duis aliquip aliqua. Est do ut proident aute culpa quis mollit magna aliqua consectetur. Elit nisi laborum eu nostrud culpa sint et duis. Consequat ea ex culpa aliquip dolore exercitation nisi fugiat labore pariatur labore aliquip exercitation. Irure nostrud sint excepteur id.
<br/><br/>
Cillum ad pariatur enim adipisicing pariatur adipisicing excepteur minim consectetur fugiat commodo in aliqua. Ex mollit eu culpa est mollit Lorem anim non. Laboris aliqua sit qui veniam dolore incididunt laboris aliqua veniam cupidatat. Pariatur do aliquip incididunt veniam aliquip anim consectetur cillum ullamco. Ea elit minim pariatur esse commodo adipisicing exercitation duis ad dolore pariatur sunt. Nulla id irure irure eu est qui id quis Lorem.
Elit magna dolor consequat qui deserunt esse eiusmod. Elit adipisicing commodo laboris enim aute. Laborum tempor duis eu nostrud commodo ex est culpa sunt. Nisi reprehenderit deserunt aute adipisicing in et deserunt id proident do cillum. Est esse sint ipsum ut do id deserunt.
<br/><br/>
Eu non ad incididunt eiusmod voluptate ea pariatur et cupidatat qui esse. Dolore pariatur anim cillum nostrud laboris aliquip proident aliquip exercitation. Aute velit nisi aute in incididunt sunt eu velit esse ea adipisicing. Sunt voluptate nisi et Lorem eu aliquip tempor dolor occaecat culpa minim anim.
<br/><br/>
Eiusmod id voluptate commodo proident. Ad ullamco elit minim duis id qui esse aliqua. Excepteur aliquip fugiat fugiat tempor in culpa aliqua exercitation cupidatat aute consectetur aute. Incididunt eiusmod sint consequat esse sit cupidatat. Non enim dolore laboris ea ad sint dolore sint cupidatat consequat sit dolor.
<br/><br/>
Commodo minim exercitation commodo ex est Lorem commodo magna sunt labore. Sit qui minim voluptate exercitation proident non velit et consequat. Do aliquip enim nulla nulla. Eiusmod sint non esse mollit do veniam exercitation non quis.
<br/><br/>
Dolor cillum do deserunt occaecat Lorem exercitation esse ex id mollit excepteur. Ullamco aute fugiat id ad aliquip. Occaecat dolor amet aute nisi nulla ea occaecat ut culpa. Cupidatat officia aliquip ullamco fugiat cupidatat consectetur sit nostrud et minim irure. Ex anim sunt duis irure pariatur magna consectetur tempor labore deserunt laborum. Pariatur qui irure quis dolore cupidatat labore esse id quis Lorem quis. Dolore ea ipsum irure exercitation id excepteur labore proident mollit excepteur ut velit cillum.
<br/><br/>
Exercitation irure quis dolore cupidatat sit proident magna sunt id veniam cupidatat. Labore mollit non pariatur laborum commodo nostrud non culpa sunt ex ut. Officia voluptate nostrud cillum est excepteur aute sunt ex. Dolor officia nostrud fugiat fugiat ea ut laboris ullamco sint sunt minim ea reprehenderit.
<br/><br/>
Cillum ea deserunt tempor aliquip aliqua et amet. Laborum incididunt officia aliqua excepteur sunt. Eiusmod cupidatat non do minim nulla pariatur id excepteur.
<br/><br/>
Eiusmod aliqua tempor do mollit reprehenderit aliqua officia non deserunt qui officia eu nostrud. Aliqua commodo eu consectetur ut voluptate sit dolore voluptate irure. Id minim pariatur do proident eiusmod pariatur. Occaecat consectetur amet sunt minim. Duis do adipisicing excepteur minim ex et proident in officia ad labore eiusmod amet non. Dolor mollit minim culpa irure dolor aute irure anim nulla exercitation aute. Lorem do qui est et duis est sunt id pariatur laborum.
<br/><br/>
Labore voluptate tempor veniam ea do tempor magna aliquip adipisicing. Consequat veniam qui velit ea ex duis aliquip aliqua. Est do ut proident aute culpa quis mollit magna aliqua consectetur. Elit nisi laborum eu nostrud culpa sint et duis. Consequat ea ex culpa aliquip dolore exercitation nisi fugiat labore pariatur labore aliquip exercitation. Irure nostrud sint excepteur id.
<br/><br/>
Cillum ad pariatur enim adipisicing pariatur adipisicing excepteur minim consectetur fugiat commodo in aliqua. Ex mollit eu culpa est mollit Lorem anim non. Laboris aliqua sit qui veniam dolore incididunt laboris aliqua veniam cupidatat. Pariatur do aliquip incididunt veniam aliquip anim consectetur cillum ullamco. Ea elit minim pariatur esse commodo adipisicing exercitation duis ad dolore pariatur sunt. Nulla id irure irure eu est qui id quis Lorem.
`;

const body = document.querySelector("body");
body.appendChild(text);

//$ Aqui realmente comienza el ejercicio (cargando el css del progress bar ya cargado en el proyecto)

const progresBar = document.createElement("div");
progresBar.setAttribute("class", "progress-bar");
body.appendChild(progresBar);

/**
 * ? El scrollHeight es el tamaño que tiene el scroll con todo el contenido de la pagina
 * ? el clientHeight es el tamaño que tiene la parte visible del navegador
 * ? el scrollTop es la posicion del scroll respecto a la parte superior
 *
 * * (scrollTop / (scrollHeight - clientHeight))*100 = %
 *
 */

//? Funcion para que haga el calculo del %
const calcularPorcentajeScroll = (event: Event) => {
	// console.log(event);
	const { scrollTop, scrollHeight, clientHeight } = (event.target as Document)
		.documentElement;
	// console.log({ scrollTop, scrollHeight, clientHeight });
	// console.log((scrollTop / (scrollHeight - clientHeight)) * 100, "%");
	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//* Streams del html
const scroll$ = fromEvent<Event>(document, "scroll");
// scroll$.subscribe(console.log);

const progres$ = scroll$.pipe(
	map((val) => calcularPorcentajeScroll(val)),
	tap(console.log)
);

progres$.subscribe((porcentaje) => {
	progresBar.style.width = porcentaje + "%";
});
