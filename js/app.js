//Selectores

const containerCards = document.querySelector(".container-cards");
const inputCard = document.querySelector(".card-body");
const bodyModal = document.querySelector(".modal-body");


//eventos

document.addEventListener("DOMContentLoaded", async () => {
  const URL = `https://api.spacexdata.com/v3/launches`;
  const response = await fetch(URL);
  const data = await response.json();
  printMission(data);
});

function printMission(missions) {
  missions.forEach((mission) => {
    containerCards.innerHTML += `

       <div class="card" style="width: 18rem">
       <img src="${mission.links.mission_patch}" class="card-img-top" alt="imagen" />
       <div class="card-body">
         <h5 class="card-title">${mission.mission_name}</h5>
         <p>Year: <span>${mission.launch_year}</span></p>
         <button
           type="button"
           class="btn btn-primary btnModal"
           data-bs-toggle="modal"
           data-bs-target="#exampleModal"
           data-id = "${mission.flight_number}"
         >
           See more about mission
         </button>
       </div>
     </div>
    
    `;
  });

  const botones = document.querySelectorAll(".btnModal");

  botones.forEach((boton) =>{
    boton.addEventListener("click", async () =>{
      const flightN = boton.getAttribute("data-id")

      const URL = `https://api.spacexdata.com/v3/launches/1`;
      const response = await fetch(URL);
      const data = await response.json();
    
    
      bodyModal.innerHTML = `
      <iframe width="465" height="315" src="https://www.youtube.com/embed/${data.links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `
      
    })
  })

}
