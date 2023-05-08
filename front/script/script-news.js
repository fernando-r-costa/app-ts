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
        autor.classList.add("autor");
        dataPublicacao.classList.add("data-publicacao");
        tags.classList.add("tags");
        imagem.classList.add("imagem");
        texto.classList.add("texto");
        link.classList.add("link");

        chapeu.innerText = dados[i].chapeu;
        titulo.innerText = dados[i].titulo;
        autor.innerText = dados[i].autor;
        dataPublicacao.innerText = dados[0].dataPublicacao.slice(0, 10);
        tags.innerText = dados[i].tags;
        imagem.innerHTML = `<img src='${dados[i].imagem}'>`;
        texto.innerText = dados[i].texto;
        link.innerHTML = dados[i].link;

        noticia.appendChild(avalPos);
        noticia.appendChild(saldoAval);
        noticia.appendChild(avalNeg);
        noticia.appendChild(avatar);
        noticia.appendChild(nomeUsuario);
        noticia.appendChild(confirmaUsuario);
        noticia.appendChild(tempoPost);
        noticia.appendChild(apagar);
        noticia.appendChild(comandos);
        noticia.appendChild(texto);

        section.appendChild(noticia);

        for (var j = 0; j < dados.comments[i].replies.length; j++) {
            let comentario = document.createElement("div");
            let avalPos = document.createElement("div");
            let saldoAval = document.createElement("div");
            let avalNeg = document.createElement("div");
            let avatar = document.createElement("div");
            let nomeUsuario = document.createElement("div");
            let confirmaUsuario = document.createElement("div");
            let tempoPost = document.createElement("div");
            let apagar = document.createElement("div");
            let comandos = document.createElement("div");
            let texto = document.createElement("div");

            comentario.classList.add("resposta");
            avalPos.classList.add("aval-pos");
            avalPos.setAttribute("onclick", "score = nextSibling; alteraScore(+1)");
            saldoAval.classList.add("saldo-aval");
            avalNeg.classList.add("aval-neg");
            avalNeg.setAttribute("onclick", "score = previousSibling; alteraScore(-1)");
            avatar.classList.add("avatar");
            nomeUsuario.classList.add("nome-usuario");
            confirmaUsuario.classList.add("confirma-usuario");
            tempoPost.classList.add("tempo-post");
            apagar.classList.add("delete");
            apagar.setAttribute("onclick", "elementoPai = parentNode; apagar()")
            comandos.classList.add("comandos");
            comandos.setAttribute("onclick", "anexo = parentNode; mostraNovoComentario()");
            texto.classList.add("texto");

            avalPos.innerHTML = "<img src='./images/icon-plus.svg'>";
            saldoAval.innerText = dados.comments[i].replies[j].score;
            avalNeg.innerHTML = "<img src='./images/icon-minus.svg'>";
            avatar.innerHTML = `<img src="./images/avatars/image-${dados.comments[i].replies[j].user.username}.png">`;
            nomeUsuario.innerText = dados.comments[i].replies[j].user.username;
            if (dados.comments[i].replies[j].user.username == dados.currentUser.username) {
                confirmaUsuario.innerHTML = "<p>você</p>";
                apagar.innerHTML = "<p>Apagar</p>";
                comandos.innerHTML = "<img src='./images/icon-edit.svg'>Editar";
                comandos.setAttribute("onclick", "elementoVizinho = nextSibling; editarComentario()");
            } else {
                comandos.innerHTML = "<img src='./images/icon-reply.svg'>Resposta";
            }
            tempoPost.innerText = dados.comments[i].replies[j].createdAt;
            texto.innerText = dados.comments[i].replies[j].content;

            comentario.appendChild(avalPos);
            comentario.appendChild(saldoAval);
            comentario.appendChild(avalNeg);
            comentario.appendChild(avatar);
            comentario.appendChild(nomeUsuario);
            comentario.appendChild(confirmaUsuario);
            comentario.appendChild(tempoPost);
            comentario.appendChild(apagar);
            comentario.appendChild(comandos);
            comentario.appendChild(texto);

            section.appendChild(comentario);
        }
    }
}

