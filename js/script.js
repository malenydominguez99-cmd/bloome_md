document.addEventListener("DOMContentLoaded", () => {
  
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.id == producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    alert("Producto agregado al carrito 🛒✨");
  }

  const botones = document.querySelectorAll(".add-to-cart");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {

      const producto = {
        id: boton.dataset.id,
        nombre: boton.dataset.nombre,
        precio: parseFloat(boton.dataset.precio),
        imagen: boton.dataset.imagen
      };

      agregarAlCarrito(producto);
    });
  });

});
