console.log(data);
let array= Array.from(data.events)
console.log(array);

const querystring = location.search

const param = new URLSearchParams(querystring)
const id = param.get("id")

const element = array.find(numero => numero._id == id)

const containerDetails = document.querySelector("#container_cards")

        containerDetails.innerHTML = `
    
        <div id="img_diferente" class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="${element.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
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

    