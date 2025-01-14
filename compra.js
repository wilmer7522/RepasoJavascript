       // Obtener el ID desde localStorage
const productId = localStorage.getItem('productoId');


    // Hacer la solicitud a la API para obtener los detalles del producto
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            // Mostrar los detalles del producto en el HTML
            document.getElementById('producto-imagen').src = product.image;
            document.getElementById('producto-titulo').textContent = product.title;
            document.getElementById('producto-precio').textContent = `Precio: $${product.price}`;
            document.getElementById('producto-categoria').textContent = `Categoría: ${product.category}`;
            document.getElementById('producto-descripcion').textContent = product.description;
        })
        .catch(error => {
            console.error("Error al cargar el producto:", error);
            document.querySelector('.producto').innerHTML = "<p>Error al cargar los detalles del producto.</p>";
        });

       

