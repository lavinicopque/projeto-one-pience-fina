
const botoes = document.querySelectorAll(".botao");


const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
     botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
        
        console.log(personagens[indice]);
        console.log(indice);
        console.log(botaoSelecionado);
    
            });
        });



function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
