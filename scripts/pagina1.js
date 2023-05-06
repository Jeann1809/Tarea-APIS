// The Cocktail DB
// Quotes API
// The MealDB API

function guardar() {
  let valor = document.querySelector("#input").value;
  conseguirApi(valor);
}
function conseguirApi(valor) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`;
  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        if (data.drinks == null) {
          alert(
            "El cóctel no existe o no se ha encontrado, por favor intente con otro cóctel"
          );
        } else construirCartas(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function construirCartas(data) {
  let array = data.drinks;
  console.log(array);
  let cartas = "";
  array.forEach((element) => {
    cartas += `
     <div class="container-n">
     <img src=${element.strDrinkThumb} class="img-c"  alt="">
     <div class="cont-txtn">
     <span class="txt-f">Name:</span><span class="txt-d"> ${element.strDrink} </span>
     <span class="txt-f">Category:</span><span class="txt-d"> ${element.strCategory}</span>
     <span class="txt-f">Glass:</span><span class="txt-d"> ${element.strGlass}</span>
     <span class="txt-f">Ingredients:</span>
     <span class="txt-d">-${element.strIngredient1}</span>
     <span class="txt-d">-${element.strIngredient2}</span>
     <span class="txt-d">-${element.strIngredient3}</span>
     </div>
 </div>


     `;
  });
  document.getElementById("cont").innerHTML = cartas;
}
