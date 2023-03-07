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
