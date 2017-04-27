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

var tareas = document.getElementById("lista");

function agregarArr(){
    arr.forEach(function(valorActual){ 
      tareas.innerHTML += '<li>' + valorActual.title + '</li>';
    })    
}
agregarArr();

function agregarTarea(){
    var tareaIngresada = document.getElementById("tareaIngresada").value;
    tareas.innerHTML += '<li>' + tareaIngresada + '</li>';
}

agregarTarea();


/*

    var nuevaTarea = document.createElement("li");
    var contenido = document.createTextNode(tarea);

    //validad 
    if (tarea === "") {
      tareaIngresada.setAttribute("placeholder", "Agrega una tarea valida");
      tareaIngresada.className = "error";
      return false;
    }

*/






/* prueba 1
arr.forEach(function(valorActual){
  var title = valorActual.title; 
  var nuevaTarea = document.createElement("li");
  nuevaTarea.appendChild(title); 
  var nuevoli = getElementsByClassName("lista");
  nuevaTarea.appendChild(nuevoli);
}
*/





