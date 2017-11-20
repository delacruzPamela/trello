
window.addEventListener('load', function() {
  // clonando el div con el id FORM

  var input = document.getElementById('input');
  var button = document.getElementById('button');
  var cross = document.getElementById('cross');
  function clickInput(event) {
    // vaciando el input
    event.currentTarget.value = '';
    // cambiando el atributo class al div con el id FORM
    event.currentTarget.parentNode.parentNode.setAttribute('class', 'form-post-click');
    // cambiando el atributo class al INPUT TEXT
    event.currentTarget.setAttribute('class', 'input-pre-click input-post-click');
    // cambiando el atributo class al Boton
    event.currentTarget.parentNode.parentNode.children[1].setAttribute('class', 'button-post-click');
    // cambiando el atributo class a la Cruz con el id CROSS
    event.currentTarget.parentNode.parentNode.children[2].setAttribute('class', 'fa fa-times');
  };

  function clickButton(event) {
    // obteniendo el texto del IMPUT TEXT
    var texto = event.currentTarget.parentNode.children[0].children[0].value;
    // obteniendo todos los hijos de SECTION con el ID "main-menu" para averiguar el ID del ultimo
    var hijos = document.getElementById('main-menu').children;
    // se obtiene el ID del ultimo hijo
    var ultimoHijo = hijos[hijos.length - 1].getAttribute('id');
    // se obtiene el ID del actual hijo en el qeu se encuentra el boton
    var hijoActual = event.currentTarget.parentNode.parentNode.getAttribute('id');
    var task = document.createElement('div');
    task.setAttribute('class', 'paragraph');
    task.setAttribute('style', 'width:100%');
    task.setAttribute('id', 'task');
    task.innerHTML = texto;

    if (texto != '') {
      // insertando el "task" creado
      event.currentTarget.parentNode.parentNode.insertBefore(task, event.currentTarget.parentNode);
      // se valida si es el ultimo hijo, para poder crear una nueva columna
      if (hijoActual == ultimoHijo) {
        creandoForm(event);
      }
      // vaciando el INPUT TEXT
      event.currentTarget.parentNode.children[0].children[0].value = '';
      // reseteando estilos a pre-click
      event.currentTarget.parentNode.setAttribute('class', 'form-pre-click');
      event.currentTarget.setAttribute('class', 'pre-click');
      event.currentTarget.parentNode.children[2].setAttribute('class', 'pre-click');
      event.currentTarget.parentNode.children[0].children[0].setAttribute('class', 'input-pre-click');
    };    
  };

  function crossClick(event) {
    // reseteando estilos a pre-click
    event.currentTarget.parentNode.setAttribute('class', 'form-pre-click');
    event.currentTarget.setAttribute('class', 'pre-click');
    event.currentTarget.parentNode.children[1].setAttribute('class', 'pre-click');
    event.currentTarget.parentNode.children[0].children[0].setAttribute('class', 'input-pre-click');
  };
  function inputBlur(event) {
    // reseteando estilos a pre-click
    event.currentTarget.value = '';
    event.currentTarget.parentNode.parentNode.setAttribute('class', 'form-pre-click');
    event.currentTarget.setAttribute('class', 'input-pre-click');
    event.currentTarget.parentNode.parentNode.children[1].setAttribute('class', 'pre-click');
    event.currentTarget.parentNode.parentNode.children[2].setAttribute('class', 'input-pre-click');
  };
  function creandoForm(event) {
    // insertando el DIV clonado en el SECTION
    var form = document.getElementById('columnaS').cloneNode(true);
    form.setAttribute('style', 'display:inline-block;float:left;');
    form.setAttribute('id', Math.random().toString());
    event.currentTarget.parentNode.parentNode.parentNode.appendChild(form);
    // agregando los manejadores de eventos al DIV clonado, en ese caso estoy
    // manejando el evento click de IMPUT TEXT 
    form.children[0].children[0].children[0].addEventListener('click', clickInput);
    // agregando los manejadores de eventos al DIV clonado, en este caso estoy
    // manejando el evento click del BOTON
    form.children[0].children[1].addEventListener('click', clickButton);
    // agregando los manejadores de eventos al DIV clonado, en este caso estoy
    // manejando el evento click del CROSS
    form.children[0].children[2].addEventListener('click', crossClick);
  }
  // definimos el elemnto que va a escuchar el evento
  // definimos el contenedor de todos los elemntos
  var allContainer = document.getElementById('main');
  // ------------------------------------------EVENTO CLICK EN EL INPUT----------------------------------------------------------
  input.addEventListener('click', clickInput);
  // ------------------------------------------EVENTO CLICK AL AÑADIR TABLA-------------------------------------------------------
  button.addEventListener('click', clickButton);

  cross.addEventListener('click', crossClick);
});