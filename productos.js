let verRopa = document.querySelector(".ver")

fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(ropa=>{
        ropa.forEach(element => {
            verRopa.innerHTML += 
            `<div class="ver" >
                ${element.id}
                <img src="${element.image}" class = "foto">
                <div class = "letras">
                ${element.title}
                ${element.price}
                ${element.category}
                ${element.count}
                </div>
            </div>`
            
        });

    })

