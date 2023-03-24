/* console.log(data);
let array= Array.from(data.events)

console.log(array); */

 let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let EventoApi;
let api
const Apiresponse = async () => {
    try {
        const response = await fetch(urlApi)
        EventoApi = await response.json()
        api = await EventoApi
        console.log(api);
        tarjeta(api.events)
        Cheackbook(api.events)
    }
    catch (error){
     console.log(error) 
    }
}

Apiresponse() 

// constantes capturadas

const ContenedorTarjetas = document.getElementById('card')
const input = document.querySelector('input')
console.log(input)
const ContenedorCheck = document.getElementById('category')




// eventos
input.addEventListener('input',superFiltro)

ContenedorCheck.addEventListener('change',superFiltro)

// llamar a funciones
/*  tarjeta(array)
Cheackbook(array)  */
// funciones

function superFiltro(){
  let arrayFiltrado1 = filtrarPorTexto(api.events, input.value)
  let arrayFiltrado2 = filtrarPorcategoria(arrayFiltrado1)
  tarjeta(arrayFiltrado2)
}

// esta para las tarjetas
function tarjeta (arrayDatos) {
  if(arrayDatos.length == 0){
    ContenedorTarjetas.innerHTML = "<h2> No hay coincidencias! </h2>"
    return
  }
  let template = ` `
  arrayDatos.forEach(element => {
    template += `
    </div>
    <div class="card bg-dark text-light" style="width: 22rem;">
  <img id="ima"  class="imagenes" src= ${element.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.description}.</p>
    <p class="card-text">Price $ ${element.price}.</p>
    <a href="./details.html?id=${element._id}" class="btn btn-primary">See more</a>
  </div>
</div>
        `
  });
  ContenedorTarjetas.innerHTML= template
}
// para el buscador el filtrado
function filtrarPorTexto(arrayDatos, texto){
  let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function Cheackbook (arrayDatos) {
 let checks =''
 let categoriasRepetidos = arrayDatos.map(elemento => elemento.category)
 let categoria = new Set (categoriasRepetidos) 
  categoria.forEach(element => {
    checks += `
    <label class="p-2">
    <input name="${element}" type="checkbox" value="${element}">
    ${element}
</label>
        `
  });
  ContenedorCheck.innerHTML= checks
}
// Lo copie por que no sabia en que habia fallado, no me daba
function filtrarPorcategoria(arrayInfo){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  console.log(arrayChecks);
  let checksChecked = arrayChecks.filter(check => check.checked)
  console.log(checksChecked);
  if(checksChecked.length == 0){
      return arrayInfo
  }
  let checkValues = checksChecked.map(check => check.value)
  console.log(checkValues);
  let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
  console.log(arrayFiltrado);
  return arrayFiltrado
}
  
