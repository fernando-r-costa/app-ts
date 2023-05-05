let dadosRetorno = fetch(`http://localhost:5000/api/v1/news`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      dadosRetorno = data;
    }).catch(function (err) {
      console.log('Fetch Error :-S', err);
    });

