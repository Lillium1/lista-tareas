var arr = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];

/* prueba 1
arr.forEach(function(valorActual){
	var title = valorActual.title; 
	var nuevaTarea = document.createElement("li");
	nuevaTarea.appendChild(title); 
	var nuevoli = getElementsByClassName("lista");
	nuevaTarea.appendChild(nuevoli);
}
*/

function imprimir(){
    var titulo = document.getElementById("lista");
    arr.forEach(function(valorActual){ 
      titulo.innerHTML += '<li>' + valorActual.title + '</li>';
    })    
}
imprimir();


/*
var arregloVacio = document.getElementById("arr_10");
var ruta = arr.length;
arregloVacio.innerHTML = arr[ruta].title;


(function () {

	var lista= document.getElementById("lista");
	var tareaInicial= document.getElementById("tareaInicial");
	var botonTarea = document.getElementById("boton-agregar");
	
	var sumarTareas = function (){
		var tarea = tareaInicial.value;
		var nuevaTarea = document.createElement("li");
		contenido = document.createTextNode(tarea);
		if(tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }

        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);
        tareaInput.value = "";
        
        for (var i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener("click",function(){
            this.parentNode.removeChild(this);
        });
    }
        
    };

*/


