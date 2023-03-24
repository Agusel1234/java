/*  console.log(data);
let array= Array.from(data.events)
console.log(array); */

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let EventoApi;
let api
const Apiresponse = async () => {
    try {
        const response = await fetch(urlApi)
        EventoApi = await response.json()
        api = await EventoApi.events
        console.log(api);

        IDs(api)
    }
    catch (error){
     console.log(error) 
    }
}
Apiresponse()

const querystring = location.search

const param = new URLSearchParams(querystring)

const containerDetails = document.querySelector("#container_cards")
const id = param.get("id")
function IDs(lista) {
  const element = (lista).find(numero => numero._id == id)
        containerDetails.innerHTML = `
    
        <div id="img_diferente" class="card mb-3 align-content-center">
        <div class="row g-0 justify-content-center align-content-center bg-dark text-light">
          <div class="col-10 align-content-center justify-content-center">
            <img id="imag" src="${element.image}" class="img-fluid rounded-start " alt="foto">
          </div>
          <div class="col-10 ">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <p class="card-text">Capacity: ${element.capacity}</p>
              <p class="card-text">Assistance: ${element.assistance}</p>
              <p class="card-text"><small class="text">Place: ${element.place}</small></p>
              <p class="card-text"><small class="text">Price: ${element.price}</small></p>
              <p class="card-text"><small class="text">Date: ${element.date}</small></p>
            
              </div>
          </div>
        </div>
      </div>`

}




    