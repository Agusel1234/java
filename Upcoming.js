console.log(data);

let Upcoming=[];
for (let i = 0; i< data.events.length; i++ ){
    if (data.currentDate<data.events[i].date)
Upcoming.push(data.events[i])
} 

console.log(Upcoming);

function paintDOM(Upcoming) {
    let template2 = ``;

    const tagToUpdate = document.getElementById("card");
    console.log("tagToUpdate", tagToUpdate);

    for (let i = 0; i < Upcoming.length; i++) {
        template2 += `
    </div>
    <div class="card" style="width: 18rem;">
  <img src=${Upcoming[i].image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Upcoming[i].name}</h5>
    <p class="card-text">${Upcoming[i].description}.</p>
    <a href="./img.html" class="btn btn-primary">See more</a>
  </div>
</div>
        `;
    }
    tagToUpdate.innerHTML = template2;
}
paintDOM(Upcoming);

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
    <input name="${event}" type="checkbox" value="${event}">
    ${event}
</label>
 `
 Todaslascategorias.innerHTML = body;
}) 

