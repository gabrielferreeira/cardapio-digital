const buscar = document.querySelector('.buscar');
const search = document.querySelector('.search');
const ul = document.getElementById('resultado');
const documento = document.documentElement;


//FUNÇÃO PARA FECHAR A DIV QUANDO CLICAR FORA DELA
documento.addEventListener('click', function (fechar) {
    if (fechar.target !== ul && !ul.contains(fechar.target)) {
        ul.style.display = "none";
    }
});


buscar.addEventListener('click', () => {

    if (search.classList.contains('open')) {
        search.classList.remove('open');
    } else {
        search.classList.add('open');
    }
});


itens.forEach((product) => {
    const li = document.createElement("li");

    li.innerHTML = `
    
            <a href="#">
                <img src="${product.src}" alt="${product.alt}">
                <p class="nome">${product.nome}</p>
            </a>
    `;

    ul.appendChild(li);
});


//FUNÇÃO PARA FAZER UMA FILTRAGEM DOS MEUS PRODUTOS
function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        txtValue,
        count = 0


    input = document.getElementById('input');
    ul = document.getElementById('resultado');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            count++
        } else {
            li[i].style.display = "none";
        }
    }

    if (count === 0) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}