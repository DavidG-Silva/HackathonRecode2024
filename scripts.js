const cep = document.getElementById("cep");
const btnConsultar = document.getElementById("btn_consultar");
const containerConsultaCep = document.getElementById("consulta_cep");

function consultarLocalidade(evento) {
    evento.preventDefault();

    if (cep.value == "80000-100" | cep.value == '1') {
        containerConsultaCep.innerHTML = `
            <span>Você está em uma área de risco.<br>Procure um dos abrigos abaixo:</span>
            <img width= 200px src='./images/abrigos.png'>
            <a href="index.html">Nova consulta</a>
            `
        
    } else if (cep.value == "80000-200" | cep.value == '2') {
        containerConsultaCep.innerHTML = `
        <span>Você não está em uma área de risco imediato.<br> Esteja antento aos abrigos abaixo:</span>
        <img width= 200px src='./images/abrigos.png'>
        <a href="index.html">Nova consulta</a>
        `
        
    } else if (cep.value == "80000-300" | cep.value == '3') {
        containerConsultaCep.innerHTML = `
            <span>Você não está em uma área de risco.</span>
            <a href="index.html">Nova consulta</a>
            `
    } else {
        containerConsultaCep.innerHTML = `
            <span>Não encontramos sua localidade.</span>
            <a href="index.html">Nova consulta</a>
            `
    }
}

btnConsultar.addEventListener("click", (evento) => consultarLocalidade(evento));
