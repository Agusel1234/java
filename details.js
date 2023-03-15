const containerDetails = document.getElementById("container_cards")

const querySearch = window.location.search

const param = new URLSearchParams(querySearch).get("id")

const Tarjeta = data.find(numero => numero.id == param)

if(excursion){
    const peligros = excursion.peligros.join(" - ")
    
        containerDetails.innerHTML = `
    
        <article class="card-details">
            <img src="${Tarjeta.imgUrl}" alt="">
            <div class="info">
                <h3>${Tarjeta.nombre}</h3>
                <p><span class="bold">Descripcion:</span> ${Tarjeta.descripcion}</p>
                <p><span class="bold">Price:</span> ${Tarjeta.excursion}</p>
                <p><span class="bold">Peligros:</span> ${peligros}</p>
            </div>
        </article>`
}
    