(function() {
    let lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        tareadsc = document.getElementById("dsc"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    let agregarTarea = function() {
        if (tareadsc.value == "") {
            alert("Debes introducir una descripción")
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }
        if (tareadsc.value == " ") {
            alert("Debes introducir una descripción")
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }
        if (tareaInput.value == "") {
            alert("Debes introducir un Nombre para la tarea")
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;

        }
        if (tareaInput.value == " ") {
            alert("Debes introducir un Nombre para la tarea")
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;

        }
        let tarea = "Nombre: " + tareaInput.value + " Descripción: " + tareadsc.value
        if (tarea === "Nombre: " + " Descripción: ") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            alert('Añadele un nombre a la tarea')
            return false;
        }
        nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        tareadsc.value = ""





        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);
        tareaInput.value = "";
        for (let i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });
        }
    };
    let comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
        tareadsc.setAttribute("placeholder", "Añade una descripción");
    };
    let eleminarTarea = function() {
        this.parentNode.removeChild(this);
    };
    btnNuevaTarea.addEventListener("click", agregarTarea);
    tareaInput.addEventListener("click", comprobarInput);
    for (let i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
    var x = document.getElementById("himno");
    x.autoplay = true;
    x.load();
}());