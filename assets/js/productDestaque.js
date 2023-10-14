inicializar = () => {
    const resposta = document.querySelector('.resposta');

    destaques.map((val) => {
        resposta.innerHTML += `
        
            <div class="img">
                <img src="assets/imagens/`+ val.src + `" alt="` + val.alt + `">
                <p class="nome">`+ val.nome + `</p>
            </div>
            <div class="preco">
                <p class="preco">`+ formated.format(val.preco) + `</p>
            </div>
        
        `;
    })
}

inicializar();