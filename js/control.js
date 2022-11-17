let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    //pega valor digitado no input
    let valorInput = input.value;

    // verificação se não for vazio, nulo e indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icon">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-name">
                ${valorInput}
            </div>
            <div class="item-button">
                <button class="delete">
                    <i onclick="deletar(${contador})" class="mdi mdi-delete"> DELETAR</i>
                </button>
            </div>
        </div>`;
        //adiciona novo item no main
        main.innerHTML += novoItem;
        //limpar campo input
        input.value = "";
        // foco no campo
        input.focus();
    } else {
        document.getElementById('erro').innerHTML = "Digite uma tarefa";
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        //enviar para baixo o card marcado
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//Ao clicar enter ele adicona na lista
input.addEventListener("keyup", function (event) {
    //se teclou enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});