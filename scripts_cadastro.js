const btnCadastrar  = document.getElementById("btn_cadastrar");
const containerCadastro = document.getElementById("cadastrar_contato");


function cadastrarContato (evento) {
    evento.preventDefault();
    
    containerCadastro.innerHTML = `
            <span>Seu contato foi cadastrado com sucesso.</span>
            `

}

btnCadastrar.addEventListener("click", (evento) => cadastrarContato(evento));
