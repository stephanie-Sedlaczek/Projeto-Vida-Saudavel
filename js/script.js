// Abre e fecha o menu em telas pequenas
function configurarMenu() {
    const botaoMenu = document.querySelector(".botao-menu");
    const linksNavegacao = document.querySelector(".links-navegacao");

    if (botaoMenu && linksNavegacao) {
        botaoMenu.addEventListener("click", function () {
            const menuAberto = linksNavegacao.classList.toggle("aberto");
            botaoMenu.setAttribute("aria-expanded", menuAberto);
        });
    }
}

// Atualiza o ano no rodapé
function atualizarAno() {
    const ano = document.querySelector("[data-year]");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
}

// Mostra o nome salvo na página inicial
function mostrarBoasVindas() {
    const mensagem = document.querySelector("[data-greeting]");

    if (mensagem) {
        const nomeSalvo = localStorage.getItem("nomeVisitante");

        if (nomeSalvo) {
            mensagem.textContent = "Olá, " + nomeSalvo + "!";
        } else {
            mensagem.textContent = "Bem-vindo ao projeto Vida Saudável.";
        }
    }
}

// Preenche a lista e o botão de dicas
function configurarDicas() {
    const listaDicas = document.querySelector("[data-lista-dicas]");
    const botaoDica = document.querySelector("[data-tip-button]");
    const textoDica = document.querySelector("[data-tip-text]");
    const dicas = [
        "Deixe água por perto para lembrar de beber durante o dia.",
        "Uma caminhada curta pode ser uma pausa agradável.",
        "Tente fazer uma atividade calma antes de dormir."
    ];

    if (listaDicas) {
        for (let i = 0; i < dicas.length; i++) {
            const item = document.createElement("li");
            item.textContent = dicas[i];
            listaDicas.appendChild(item);
        }
    }

    if (botaoDica && textoDica) {
        let indiceDica = Number(localStorage.getItem("indiceDica") || 0);

        botaoDica.addEventListener("click", function () {
            textoDica.textContent = dicas[indiceDica];
            indiceDica = indiceDica + 1;

            if (indiceDica === dicas.length) {
                indiceDica = 0;
            }

            localStorage.setItem("indiceDica", indiceDica);
        });
    }
}

// Valida o formulário e salva o nome digitado
function configurarFormulario() {
    const formulario = document.querySelector("#formulario-contato");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nome = formulario.elements.nome.value.trim();
            const mensagem = document.querySelector("#mensagem-formulario");

            localStorage.setItem("nomeVisitante", nome);
            mensagem.textContent = "Obrigado, " + nome + ". Seu nome foi salvo.";
            formulario.reset();
        });
    }
}

// Inicia as funções depois que o HTML carregar
document.addEventListener("DOMContentLoaded", function () {
    configurarMenu();
    atualizarAno();
    mostrarBoasVindas();
    configurarDicas();
    configurarFormulario();
});


