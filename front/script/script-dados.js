let dados ="";

fetch(`http://localhost:5000/api/v1/news/1/3`)
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    dados = data.result.Data;
    console.log(dados);
  }).catch(function (err) {
    console.log('Fetch Error :-S', err);
  });