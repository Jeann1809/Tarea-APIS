const apiKey = "O9l+4t7riatR3c3uKW2sRQ==6CwJECME98PsCqkE";

function guardar() {
  let category = document.querySelector("#select").value;
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        printQuote(data);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function printQuote(data) {
  let quote = `
<span>"${data[0].quote}" - ${data[0].author}</span>
`;
  document.querySelector("#printer").innerHTML = quote;
}
