//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("contenedor").addEventListener("click", close_menu);
//Declaramos variables
var side_menu = document.getElementById("menu_side");
var body = document.getElementById("body");
//Evento para mostrar y ocultar menú
function open_close_menu() {
    if (body.className == "body_move") { //SI LA CALSE QUE LO OCULATA ESTA LA REMUEVE PARA QUE APAREZCA
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    } else { //SINO ESTA AGREGA LA CLASE PARA OCULTARLO
        side_menu.classList.add("menu__side_move");
        body.classList.add("body_move");
    }
}
//Evento para  ocultar menú
function close_menu() {
    //PARA AGREGAR LA CLASE DE CSS QUE OCULTA EL MENU CUANDO LA PANTALLA SEA MENOS DE 900PX
    if (body.className == "" && window.innerWidth < 900) {
        side_menu.classList.add("menu__side_move");
        body.classList.add("body_move");
    }
}
//Evento para  expander sub-menú en los botones
let listElements = document.querySelectorAll('.list__button--click');
listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
});
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 900) {

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function() {

    if (window.innerWidth > 900) {

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 900) {

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});