const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion"); //Constantes creadas para encerrar a los elementos del html

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
}); /*Adhiere o quita la clase "spread" a la hamburguesa del nav cada vez que se clickea*/

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
  }
}); /*Si el menú tiene la clase spread y el elemento al que le estamos dando click es diferente al menú y a la hamburguesa,
el nav se esconde si clickeamos cualquier parte de la página que no sea el nav*/
