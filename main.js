console.log(data);


let Home=[];
for (let i = 0; i< data.events.length; i++ ){
    console.log(data.events[i])
} 
function paintDOM(data) {
    let template = ``;

    const tagToUpdate = document.getElementById("card");
    console.log("tagToUpdate", tagToUpdate);

    for (let i = 0; i < data.events.length; i++) {
        template += `
    </div>
    <div class="card" style="width: 18rem;">
  <img src=${data.events[i].image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.events[i].name}</h5>
    <p class="card-text">${data.events[i].description}.</p>
    <a href="./img.html" class="btn btn-primary">See more</a>
  </div>
</div>
        `;
    }
    tagToUpdate.innerHTML = template;
}
paintDOM(data);

 
 let Todaslascategorias=document.getElementById ("category");
console.log(Todaslascategorias)

const categorias = [];
  data.events.forEach(event => {
    categorias.push(event.category)
  ;
}) 
console.log(categorias)

let filtrado = categorias.filter((propiedad, indice) => {
  return categorias.indexOf(propiedad) === indice;
 })
 console.log(filtrado);

 let body =  ` `
 filtrado.forEach(event => {
  console.log(event);
 body +=  `
 <label class="p-2">
    <input name="fo" type="checkbox" value="D">
    ${event}
</label>
 `
 Todaslascategorias.innerHTML = body;
}) 


/*  function obtenerCategorias(array) {
  let categorias = [];
  array.forEach((event) => {
    if (!categorias.includes(event.categoria)) {
      categorias.push(event.categoria);
    }
    
  });
  function paintDOMcate(categorias) {
    let template2 = ``;

    const categ = document.getElementById("category");
    console.log("categ", categ); 
    for (let i = 0; i < categorias.length; i++) {
        template2 += `
  <label class="p-2">
  <input name="fo" type="checkbox" value="D">
  ${data.events[i].category}
</label>`
}
categ.innerHTML = template2;
}
paintDOMcate(categorias) */
