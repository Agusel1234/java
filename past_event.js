console.log(data);

let Past_events=[];
for (let i = 0; i< data.events.length; i++ ){
    if (data.currentDate>data.events[i].date)
    Past_events.push(data.events[i])
} 

console.log(Past_events);

function paintDOM(Past_events) {
    let template3 = ``;

    const tagToUpdate = document.getElementById("card");
    console.log("tagToUpdate", tagToUpdate);

    for (let i = 0; i < Past_events.length; i++) {
        template3 += `
    </div>
    <div class="card" style="width: 18rem;">
  <img src=${Past_events[i].image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Past_events[i].name}</h5>
    <p class="card-text">${Past_events[i].description}.</p>
    <a href="./img.html" class="btn btn-primary">See more</a>
  </div>
</div>
        `;
    }
    tagToUpdate.innerHTML = template3;
}
paintDOM(Past_events);