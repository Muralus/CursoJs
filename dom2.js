

/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[3]);
console.log(document.querySelectorAll("#menu li"));*/

/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
document.documentElement.setAttribute("lang","es-MX")
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");


$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de objeto del documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte"
console.log($linkDOM.dataset.description);*/

/*const $linkDOM = document.querySelector(".link-dom")

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

//variables CSS - Custom properties CSS.*/

/*const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor,varYellowColor);


    $body.style.backgroundColor= varDarkColor;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color","#000000");
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

    $body.style.setProperty("background-color", varDarkColor);

    $html.style.setProperty("--yellow-color","#6868AC");
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    $body.style.setProperty("color",varYellowColor);*/



    /*const $card = document.querySelector(".card");

    console.log($card);
    console.log($card.className);
    console.log($card.classList);
    console.log($card.classList.contains("rotate-45"));

    $card.classList.add("rotate-45")
    console.log($card.className);
    console.log($card.classList);
    console.log($card.classList.contains("rotate-45"));

    $card.classList.remove("rotate-45")
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45")
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45")
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45")
    $card.classList.replace("rotate-45","rotate-135")
    $card.classList.add("opacity","sepia")
    $card.classList.remove("rotate-135")


    const $whatIsDOM = document.getElementById("que-es")

    let text = `
    <p>
    El modelo de Objetos del documento (<b><i>DOM - Document Object Model</i></b>)
    es una api para documentos HTML y XML.
    </p>
    <p>
    Esto provee una representacion estructural del doumentos, permitiendo modificar su contenido
    y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>El DOM no es parte especifica de Javascript, es una API para los navegadores</mark>
    </p>
    `;


    //$whatIsDOM.innerText = text;
    $whatIsDOM.textContent = text;
    $whatIsDOM.innerHTML = text;
    $whatIsDOM.outerHTML = text;*/



    /*const $cards = document.querySelector(".cards") 

    console.log($cards);
    console.log($cards.children);
    console.log($cards.children[2]);
    console.log($cards.parentElement);
    console.log($cards.firstElementChild);
    console.log($cards.lastElementChild);
    console.log($cards.previousElementSibling);
    console.log($cards.nextElementSibling);
    console.log($cards.children[3].closest("section"));*/


    const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");



    $img.setAttribute("src","https://placeimg.com/200/200/animals")
    $img.setAttribute("alt","Animals");
    $figure.classList.add("card")


    $figcaption.appendChild($figcaptionText)
    $figure.appendChild($img);
    $figure.appendChild($figcaption)
    $cards.appendChild($figure);

    $figure2.innerHTML = `
     <img src="https://placeimg.com/200/200/people" alt="people">
     <figcaption>People</figcaption>
    `;

    $figure2.classList.add("card");
    $cards.appendChild($figure2);

    const estaciones = ["Primavera","Verano","Otoño","Invierno"],
    $ul = document.createElement("ul");

    document.write("<h3>Estaciones del Año</h3>");
    document.body.appendChild($ul);

    estaciones.forEach((el) =>{
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    });

    const continentes = ["Africa","Europa","Asia","Sur America","Oceania"],
    $ul2 = document.createElement("ul");

    document.write("<h3>Continentes del Mundo</h3>");
    document.body.appendChild($ul2);
    //$ul2.innerHTML = "";
    continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))


    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Julio",
        "Junio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ],

    $ul3 = document.createElement("ul");
    $fragment = document.createDocumentFragment();

    meses.forEach(el =>{
        const $li = document.createElement("li");
        $li.textContent = el;
        $fragment.appendChild($li);
    });


    document.write("<h3>Meses del Año</h3>");
    $ul3.appendChild($fragment);
    document.body.appendChild($ul3);

    









