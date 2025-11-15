console.log("Bienvenida a Bloom Store");


const botones = document.querySelectorAll('.btn-primary');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Producto agregado al carrito');
  });
});

