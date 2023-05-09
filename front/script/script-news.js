let section = document.querySelector("section");

function mostraNoticias(dados) {

    for (var i = 0; i < dados.length; i++) {
        let noticia = document.createElement("div");
        let chapeu = document.createElement("div");
        let titulo = document.createElement("div");
        let autor = document.createElement("div");
        let dataPublicacao = document.createElement("div");
        let tags = document.createElement("div");
        let imagem = document.createElement("div");
        let texto = document.createElement("div");
        let link = document.createElement("div");

        noticia.classList.add("noticia");
        chapeu.classList.add("chapeu");
        titulo.classList.add("titulo");
        imagem.classList.add("imagem");
        autor.classList.add("autor");
        dataPublicacao.classList.add("data-publicacao");
        tags.classList.add("tags");
        texto.classList.add("texto");
        link.classList.add("link");

        chapeu.innerText = dados[i].chapeu;
        titulo.innerText = dados[i].titulo;
        imagem.innerHTML = `<img src='${dados[i].imagem}'>`;
        autor.innerText = `Autor: ${dados[i].autor}`;
        dataPublicacao.innerText = `Data: ${dados[0].dataPublicacao.slice(0, 10)}`;
        tags.innerText = `Tags: ${dados[i].tags}`;
        texto.innerText = dados[i].texto;
        link.innerHTML = `<a href='${dados[i].link}'>Link para notícia completa</a>`;

        noticia.appendChild(chapeu);
        noticia.appendChild(titulo);
        noticia.appendChild(imagem);
        noticia.appendChild(autor);
        noticia.appendChild(dataPublicacao);
        noticia.appendChild(tags);
        noticia.appendChild(texto);
        noticia.appendChild(link);

        section.appendChild(noticia);

    }
}