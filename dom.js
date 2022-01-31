

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

console.log(document.documentElement.lang);
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
console.log($linkDOM.dataset.description);

