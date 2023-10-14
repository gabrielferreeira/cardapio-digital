const produtos = document.querySelector('.produtos');
const all = document.querySelector('.all');
const tradicional = document.querySelector('.classicos');
const gourmet = document.querySelector('.gourmet');
const drinks = document.querySelector('.drinks');
const cervejas = document.querySelector('.cervejas');
const bebidas = document.querySelector('.bebidas');
const sobremesas = document.querySelector('.sobremesas');
const resposta = document.querySelector('.resposta');


//ALTERAR ANO DINÂMICAMENTE
let data = new Date();
let ano = data.getFullYear();

document.getElementById("ano").innerText = ano;


//FORMATAÇÃO DE MOEDA
const formated = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
});


function itensAll(itens) {
    let newItem = ''

    itens.forEach(item => {
        newItem = newItem + `

                <div class="boxProdutos">
                    <img src="${item.src}" alt="${item.alt}">
                    <div class="conteudo">
                        <p class="nome">${item.nome}</p>
                        <p class="preco">${formated.format(item.preco)}</p>
                        <a href="#">Saiba mais</a>
                    </div>
                </div>

        `
    })

    produtos.innerHTML = newItem

}

function filterClass() {

    const trad = itens.filter(item => item.classico === true)

    itensAll(trad)
}

function filterGourmet() {

    const gulo = itens.filter(item => item.gourmet === true)

    itensAll(gulo)
}

function filterDrinks() {

    const drin = itens.filter(item => item.caipirinha === true)

    itensAll(drin)
}

function filterCervejas() {

    const cerv = itens.filter(item => item.cerveja === true)

    itensAll(cerv)
}

function filterBebidas() {

    const bebi = itens.filter(item => item.bebida === true)

    itensAll(bebi)
}

function filterSobremesas() {

    const sobre = itens.filter(item => item.sobremesa === true)

    itensAll(sobre)
}

all.addEventListener('click', () => itensAll(itens))
tradicional.addEventListener('click', filterClass)
gourmet.addEventListener('click', filterGourmet)
drinks.addEventListener('click', filterDrinks)
cervejas.addEventListener('click', filterCervejas)
bebidas.addEventListener('click', filterBebidas)
sobremesas.addEventListener('click', filterSobremesas)