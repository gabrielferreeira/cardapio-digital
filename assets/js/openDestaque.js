const boxDestaques = document.querySelectorAll('.boxDestaques');

boxDestaques.forEach((val) => {

    val.addEventListener('click', () => {
        boxDestaques.forEach((itens) => {

            if (itens !== val) {
                itens.classList.remove('active');
            }

        });
        val.classList.toggle('active');
    });

});