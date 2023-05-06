function guardar_l() {
  let valor = document.querySelector("#select").value;
  console.log(valor);
  let url = `https://digimon-api.vercel.app/api/digimon/level/${valor}`;
  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        printCards(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function guardar_n() {
  let valor = document.querySelector("#input").value;
  let url = `https://digimon-api.vercel.app/api/digimon/name/${valor}`;
  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        printCards(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function printCards(array = []) {
  let arrayOfCards = "";

  array.forEach((item) => {
    arrayOfCards += `
      
      <div class="printed">
            <img class="img" src="${item.img}" alt="Digimon image">
            <span>Name: ${item.name}</span>
            <span>Level: ${item.level}</span>
        </div> 
  
  `;
  });

  document.querySelector("#printer").innerHTML = arrayOfCards;
}
