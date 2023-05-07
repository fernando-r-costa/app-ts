const teste = document.querySelector(".teste");

let dadosRetorno ="";

fetch(`http://localhost:5000/api/v1/news/1/3`)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    dadosRetorno = data.result.Data;
    console.log(dadosRetorno);
  }).catch(function (err) {
    console.log('Fetch Error :-S', err);
  });