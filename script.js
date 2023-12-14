// Escuchar el clic en el botón para validar la edad
document.getElementById('validarEdadBtn').addEventListener('click', validarEdad);

// Escuchar el clic en el botón para validar la compra
document.getElementById('validarCompraBtn').addEventListener('click', validarCompra);

function validarEdad() {
  var edad = parseInt(document.getElementById('edadInput').value);

  if (edad >= 18 && edad <= 150) {
    mostrarMensaje("Bienvenido a nuestra tienda querido usuario.");

    var carritoDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];

    var opcionDeCompra = document.getElementById('opcionInput').value.toLowerCase();

    switch (opcionDeCompra) {
      case "libro":
        var titulo = prompt("Ingresa el título del libro:");
        var autor = prompt("Ingresa el autor del libro:");
        var nuevoLibro = { tipo: 'Libro', titulo: titulo, autor: autor };
        carritoDeCompras.push(nuevoLibro);
        break;
      case "auto":
        var marcaAuto = prompt("Ingresa la marca del auto:");
        var modelo = prompt("Ingresa el modelo del auto:");
        var nuevoAuto = { tipo: 'Auto', marcaAuto: marcaAuto, modelo: modelo };
        carritoDeCompras.push(nuevoAuto);
        break;
      case "mochila":
        var marcaMochila = prompt("Ingresa la marca de la mochila:");
        var capacidad = prompt("Ingresa la capacidad de la mochila (en kg):");
        var nuevaMochila = { tipo: 'Mochila', marcaMochila: marcaMochila, capacidad: capacidad };
        carritoDeCompras.push(nuevaMochila);
        break;
      default:
        mostrarMensaje("Opción no válida");
        break;
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
    mostrarMensaje("Producto agregado al carrito.");
  } else {
    mostrarMensaje("Lo sentimos mucho, a nuestro sistema solo ingresan mayores de edad, o seres humanos que realmente existan.");
  }
}

function validarCompra() {
  var opcionDeCompra = document.getElementById('opcionInput').value.toLowerCase();

  switch (opcionDeCompra) {
    case "libro":
      mostrarMensaje("Ingrese los detalles del libro:");
      break;
    case "auto":
      mostrarMensaje("Ingrese los detalles del auto:");
      break;
    case "mochila":
      mostrarMensaje("Ingrese los detalles de la mochila:");
      break;
    default:
      mostrarMensaje("Opción no válida");
      break;
  }
}

function mostrarMensaje(mensaje) {
  var mensajeDiv = document.createElement('div');
  mensajeDiv.textContent = mensaje;
  document.body.appendChild(mensajeDiv);
}