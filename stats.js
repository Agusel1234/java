let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let EventoApi;
let api
const Apiresponse = async () => {
    try {
        const response = await fetch(urlApi)
        EventoApi = await response.json()
        api = await EventoApi.events
        console.log(api)
          let Past_Events=[];
  for (let i = 0; i< (api.events).length; i++ ){
      if (api.currentDate>(api.events)[i].date)
      Past_Events.push(api.events[i]) 
    } 
    console.log();
   
    let Upcoming=[];
    for (let i = 0; i< api.events.length; i++ ){
        if (api.currentDate<api.events[i].date)
    Upcoming.push(api.events[i])}
    console.log(Upcoming);
    }
    catch (error){
     console.log(error) 
    }
} 
Apiresponse() 



  let Past_Events=[];
  for (let i = 0; i< (dataNUEVA.events).length; i++ ){
      if (dataNUEVA.currentDate>(dataNUEVA.events)[i].date)
      Past_Events.push(dataNUEVA.events[i]) 
    } 
    console.log();
   
    let Upcoming=[];
    for (let i = 0; i< dataNUEVA.events.length; i++ ){
        if (dataNUEVA.currentDate<dataNUEVA.events[i].date)
    Upcoming.push(dataNUEVA.events[i])}
    console.log(Upcoming);


  const MaximoPorcentajeEvento = document.querySelector(`table tr:nth-child(2) td:nth-child(1)`);
  const MinimoPorcentajeEvento = document.querySelector(`table tr:nth-child(2) td:nth-child(2)`);
  const Eventwithcapacity = document.querySelector(`table tr:nth-child(2) td:nth-child(3)`);

 
  const Audienciamaxima = Past_Events.reduce((maximo, event) => {
      const Porcentaje = event.assistance / event.capacity;
      if (Porcentaje > maximo.Porcentaje)
      {
          return { name: event.name, Porcentaje };
      }
      return maximo;
  }, { Porcentaje: 0 });

  MaximoPorcentajeEvento.textContent = `${Audienciamaxima.name} ${(Audienciamaxima.Porcentaje * 100)}%`;


  const Audenciaminima = Past_Events.reduce((minimo, event) => {
      const Porcentaje = event.assistance / event.capacity;
      if (Porcentaje < minimo.Porcentaje)
      {
          return { name: event.name, Porcentaje };
      }
      return minimo;
  }, { Porcentaje: 1 });

  MinimoPorcentajeEvento.textContent = `${Audenciaminima.name} ${(Audenciaminima.Porcentaje * 100 )}%`;



  const MaxCapacity = Past_Events.reduce((maxima, event) => {
      if (event.capacity > maxima.capacity){
          return { name: event.name, capacity: event.capacity };
      }
      return maxima;
  }, { capacity: 0 });
  Eventwithcapacity.textContent = `${MaxCapacity.name} ${MaxCapacity.capacity}`;




//Intente hacerlo de otra forma y no me salio me explicaron esta y me funciono pero no supe como hacerlo para que sea automatico 
// asique lo hice 1 por 1. Probe con el DOM pero no me salio

// reduce de upcoming
  const UpcomingEvents = Upcoming.reduce((result, event) => {

    const { category, estimate, capacity, price, ganacia = (estimate * price) } = event;
console.log(category);
    if (!result[category]) {

        result[category] = { estimate: 0, capacity: 0, ganacia: 0, };
        const ganacia = (result[category].estimate * result[category].price);
        console.log(result[category].estimate );
    }

    result[category].estimate += estimate;
    result[category].capacity += capacity;
    result[category].ganacia += ganacia;
    console.log(result)
    return result;

}, {});
console.log(UpcomingEvents);
const categories = Object.keys(UpcomingEvents);
console.log(categories);

// ACA


const Categoria = document.querySelector(`table tr:nth-child(5) td:nth-child(1)`);
const Recaudado = document.querySelector(`table tr:nth-child(5) td:nth-child(2)`);
const Porcentaje = document.querySelector(`table tr:nth-child(5) td:nth-child(3)`);

//1
const categorias = UpcomingEvents[categories[0]];
console.log(UpcomingEvents);
const ganacia = categorias.ganacia;
const attendancePercentage = (categorias.estimate / categorias.capacity * 100).toFixed(2);
console.log(attendancePercentage);
    Categoria.textContent = categories[0];
    Recaudado.textContent = `$${ganacia}`;
    Porcentaje.textContent = `${attendancePercentage}%`


//2
const Categoria1 = document.querySelector(`table tr:nth-child(6) td:nth-child(1)`);
const Recaudado1 = document.querySelector(`table tr:nth-child(6) td:nth-child(2)`);
const Porcentaje1 = document.querySelector(`table tr:nth-child(6) td:nth-child(3)`);

console.log(UpcomingEvents);
const categories1 = Object.keys(UpcomingEvents);
console.log(categories1);


const categorias1 = UpcomingEvents[categories1[1]];
console.log(categorias);
const ganacia1 = categorias1.ganacia;
console.log(ganacia1);
const attendancePercentage1 = (categorias1.estimate / categorias1.capacity * 100).toFixed(2);
console.log(attendancePercentage1);
    Categoria1.textContent = categories1[1];
    Recaudado1.textContent = `$${ganacia1}`;
    Porcentaje1.textContent = `${attendancePercentage1}%`


     //3
    const Categoria2 = document.querySelector(`table tr:nth-child(7) td:nth-child(1)`);
    const Recaudado2 = document.querySelector(`table tr:nth-child(7) td:nth-child(2)`);
    const Porcentaje2 = document.querySelector(`table tr:nth-child(7) td:nth-child(3)`);
    
    console.log(UpcomingEvents);
    const categories2 = Object.keys(UpcomingEvents);
    
    
    const categorias2 = UpcomingEvents[categories2[2]];
    console.log(categorias2);
    const ganacia2 = categorias2.ganacia;
    const attendancePercentage2 = (categorias2.estimate / categorias2.capacity * 100).toFixed(2);
        Categoria2.textContent = categories2[2];
        Recaudado2.textContent = `$${ganacia2}`;
        Porcentaje2.textContent = `${attendancePercentage2}%`

    //4
    const Categoria3 = document.querySelector(`table tr:nth-child(8) td:nth-child(1)`);
    const Recaudado3 = document.querySelector(`table tr:nth-child(8) td:nth-child(2)`);
    const Porcentaje3 = document.querySelector(`table tr:nth-child(8) td:nth-child(3)`);
    

    console.log(UpcomingEvents);
    const categories3 = Object.keys(UpcomingEvents);
    console.log(categories3);
    
    
    const categorias3 = UpcomingEvents[categories3[3]];
    console.log(categorias3);
    const ganacia3 = categorias3.ganacia;
    console.log(ganacia3);
    const attendancePercentage3 = (categorias1.estimate / categorias3.capacity * 100).toFixed(2);
    console.log(attendancePercentage1);
        Categoria3.textContent = categories3[3];
        Recaudado3.textContent = `$${ganacia3}`;
        Porcentaje3.textContent = `${attendancePercentage3}%`

          //5
    const Categoria4 = document.querySelector(`table tr:nth-child(9) td:nth-child(1)`);
    const Recaudado4 = document.querySelector(`table tr:nth-child(9) td:nth-child(2)`);
    const Porcentaje4 = document.querySelector(`table tr:nth-child(9) td:nth-child(3)`);

    console.log(UpcomingEvents);
    const categories4 = Object.keys(UpcomingEvents);
    
    
    const categorias4 = UpcomingEvents[categories4[4]];
    console.log(categorias4);
    const ganacia4 = categorias4.ganacia;
    console.log(ganacia4);
    const attendancePercentage4 = (categorias4.estimate / categorias4.capacity * 100).toFixed(2);
        Categoria4.textContent = categories4[4];
        Recaudado4.textContent = `$${ganacia4}`;
        Porcentaje4.textContent = `${attendancePercentage4}%`

        
          //6
    const Categoria5 = document.querySelector(`table tr:nth-child(10) td:nth-child(1)`);
    const Recaudado5 = document.querySelector(`table tr:nth-child(10) td:nth-child(2)`);
    const Porcentaje5 = document.querySelector(`table tr:nth-child(10) td:nth-child(3)`);

    console.log(UpcomingEvents);
    const categories5 = Object.keys(UpcomingEvents);
    
    
    const categorias5 = UpcomingEvents[categories5[5]];
    console.log(categorias5);
    const ganacia5 = categorias5.ganacia;
    console.log(ganacia5);
    const attendancePercentage5 = (categorias5.estimate / categorias5.capacity * 100).toFixed(2);
        Categoria5.textContent = categories5[5];
        Recaudado5.textContent = `$${ganacia5}`;
        Porcentaje5.textContent = `${attendancePercentage5}%`
        
    
    // reduce de Past_event
  const Past_Eventos = Past_Events.reduce((result, event) => {

    const { category, assistance, capacity, price, ganacia = (assistance * price) } = event;
console.log(category);
    if (!result[category]) {

        result[category] = { assistance: 0, capacity: 0, ganacia: 0, };
        const ganacia = (result[category].assistance * result[category].price);
        console.log(result[category].assistance );
    }

    result[category].assistance += assistance;
    result[category].capacity += capacity;
    result[category].ganacia += ganacia;
    console.log(result)
    return result;

}, {});
console.log(Past_Eventos);
const categoriespast = Object.keys(Past_Eventos);
console.log(categories);

// ACA

//1
const Categoriapast = document.querySelector(`table tr:nth-child(13) td:nth-child(1)`);
const Recaudadopast = document.querySelector(`table tr:nth-child(13) td:nth-child(2)`);
const Porcentajepast = document.querySelector(`table tr:nth-child(13) td:nth-child(3)`);


const categoriaspast = Past_Eventos[categoriespast[0]];
console.log(categoriaspast);
const ganaciapast = categoriaspast.ganacia;
const attendancePercentagepast = (categoriaspast.assistance / categoriaspast.capacity * 100).toFixed(2);
console.log(attendancePercentagepast);
    Categoriapast.textContent = categoriespast[0];
    Recaudadopast.textContent = `$${ganaciapast}`;
    Porcentajepast.textContent = `${attendancePercentagepast}%`


 //2
 const Categoriapast1 = document.querySelector(`table tr:nth-child(14) td:nth-child(1)`);
 const Recaudadopast1 = document.querySelector(`table tr:nth-child(14) td:nth-child(2)`);
 const Porcentajepast1 = document.querySelector(`table tr:nth-child(14) td:nth-child(3)`);
 
 console.log(Past_Eventos);
 const categoriespast1 = Object.keys(Past_Eventos);
 console.log(categories);

 const categoriaspast1 = Past_Eventos[categoriespast[1]];
 console.log(categoriaspast);
 const ganaciapast1 = categoriaspast1.ganacia;
 const attendancePercentagepast1 = (categoriaspast1.assistance / categoriaspast1.capacity * 100).toFixed(2);
 console.log(attendancePercentagepast1);
     Categoriapast1.textContent = categoriespast1[1];
     Recaudadopast1.textContent = `$${ganaciapast1}`;
     Porcentajepast1.textContent = `${attendancePercentagepast1}%`

   
     //3
 const Categoriapast2 = document.querySelector(`table tr:nth-child(15) td:nth-child(1)`);
 const Recaudadopast2 = document.querySelector(`table tr:nth-child(15) td:nth-child(2)`);
 const Porcentajepast2 = document.querySelector(`table tr:nth-child(15) td:nth-child(3)`);
 
 console.log(Past_Eventos);
 const categoriespast2 = Object.keys(Past_Eventos);
 console.log(categories);

 const categoriaspast2 = Past_Eventos[categoriespast[2]];
 console.log(categoriaspast);
 const ganaciapast2 = categoriaspast2.ganacia;
 const attendancePercentagepast2 = (categoriaspast2.assistance / categoriaspast2.capacity * 100).toFixed(2);
 console.log(attendancePercentagepast2);
     Categoriapast2.textContent = categoriespast2[2];
     Recaudadopast2.textContent = `$${ganaciapast2}`;
     Porcentajepast2.textContent = `${attendancePercentagepast2}%`


     //4
 const Categoriapast3 = document.querySelector(`table tr:nth-child(16) td:nth-child(1)`);
 const Recaudadopast3 = document.querySelector(`table tr:nth-child(16) td:nth-child(2)`);
 const Porcentajepast3 = document.querySelector(`table tr:nth-child(16) td:nth-child(3)`);
 
 console.log(Past_Eventos);
 const categoriespast3 = Object.keys(Past_Eventos);

 const categoriaspast3 = Past_Eventos[categoriespast[3]];
 const ganaciapast3 = categoriaspast3.ganacia;
 const attendancePercentagepast3 = (categoriaspast3.assistance / categoriaspast3.capacity * 100).toFixed(2);
 console.log(attendancePercentagepast3);
     Categoriapast3.textContent = categoriespast3[3];
     Recaudadopast3.textContent = `$${ganaciapast3}`;
     Porcentajepast3.textContent = `${attendancePercentagepast3}%`

     //5
     const Categoriapast4 = document.querySelector(`table tr:nth-child(17) td:nth-child(1)`);
     const Recaudadopast4 = document.querySelector(`table tr:nth-child(17) td:nth-child(2)`);
     const Porcentajepast4 = document.querySelector(`table tr:nth-child(17) td:nth-child(3)`);
     
     console.log(Past_Eventos);
     const categoriespast4 = Object.keys(Past_Eventos);
    
     const categoriaspast4 = Past_Eventos[categoriespast[4]];
     const ganaciapast4 = categoriaspast4.ganacia;
     const attendancePercentagepast4 = (categoriaspast4.assistance / categoriaspast4.capacity * 100).toFixed(2);
     console.log(attendancePercentagepast4);
         Categoriapast4.textContent = categoriespast4[4];
         Recaudadopast4.textContent = `$${ganaciapast4}`;
         Porcentajepast4.textContent = `${attendancePercentagepast4}%`

          //6
     const Categoriapast6 = document.querySelector(`table tr:nth-child(18) td:nth-child(1)`);
     const Recaudadopast6 = document.querySelector(`table tr:nth-child(18) td:nth-child(2)`);
     const Porcentajepast6 = document.querySelector(`table tr:nth-child(18) td:nth-child(3)`);
     
     console.log(Past_Eventos);
     const categoriespast6 = Object.keys(Past_Eventos);
    
     const categoriaspast6 = Past_Eventos[categoriespast[6]];
     const ganaciapast6 = categoriaspast6.ganacia;
     const attendancePercentagepast6 = (categoriaspast6.assistance / categoriaspast6.capacity * 100).toFixed(2);
     console.log(attendancePercentagepast6);
         Categoriapast6.textContent = categoriespast6[6];
         Recaudadopast6.textContent = `$${ganaciapast6}`;
         Porcentajepast6.textContent = `${attendancePercentagepast6}%`