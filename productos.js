let verRopa = document.querySelector(".ver");

fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(ropa => {
        ropa.forEach(element => {
            verRopa.innerHTML += `
            <div class="item">
                <div class="id">${element.id}</div>
                <img src="${element.image}" class="foto" alt="${element.title}">
                <div class="letras">
                    <div>${element.title}</div>
                    <div>$${element.price}</div>
                    <div>${element.category}</div>
                    <button onclick="guardarId(${element.id})" class="boton-comprar">Comprar</button>
                </div>
            </div>`;
        });
    });

// Función para guardar el ID y redirigir
function guardarId(id) {
    localStorage.setItem('productoId', id); // Guarda el ID
    window.location.href = 'compra.html';  // Redirige a la pagina de compra
}



