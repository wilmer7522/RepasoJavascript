let verRopa = document.querySelector(".ver");

let contador = 1;
const botonIncrementar = document.getElementById('sumar');
const botonDecrementar = document.getElementById('restar');
const valorContador = document.getElementById('valor-contador');




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
                    <div>${element.rating.count}</div>
                    <div class = "contador">
                    <button class="restar">-</button>
                    <input type="text" class = "cuenta">
                    <button class="sumar">+</button>
                    </div>
                    
                    
                    




                    <button onclick="guardarId(${element.id})" class="boton-comprar">Agregar al Carrito</button>
                </div>
            </div>`;
           
        });

        botonIncrementar.addEventListener('click', () => {
            contador++;
            valorContador.textContent = contador;
        });
        
        botonDecrementar.addEventListener('click', () => {
            if (contador > 0) {
                contador--;
                valorContador.textContent = contador;
            }
        });



    });

// Función para guardar el ID y redirigir
function guardarId(id) {
    localStorage.setItem('productoId', id); // Guarda el ID
    window.location.href = 'compra.html';  // Redirige a la pagina de compra
}



