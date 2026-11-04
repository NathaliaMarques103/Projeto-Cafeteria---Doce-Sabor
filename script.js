// 1. Função que formata e abre o WhatsApp com o pedido do cliente
function pedirProduto(nomeProduto, precoProduto) {
    const telefone = "5511999999999"; // Substitua pelo número real da cafeteria
    const mensagem = `Olá! Gostaria de pedir: *${nameFormatado(nomeProduto)}* (${precoProduto}). Pode confirmar por favor?`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abre o WhatsApp direto no celular ou computador
    const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

function nameFormatado(nome) {
    return nome;
}

// 2. Lógica de Filtro do Cardápio por Categoria
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const cardsProdutos = document.querySelectorAll('.produto-card');

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe ativo de todos os botões
        botoesFiltro.forEach(b => b.classList.remove('ativo'));
        // Adiciona no botão clicado
        botao.classList.add('ativo');

        const categoriaDesejada = botao.getAttribute('data-filtro');

        cardsProdutos.forEach(card => {
            const categoriaCard = card.getAttribute('data-categoria');

            if (categoriaDesejada === 'todos' || categoriaCard === categoriaDesejada) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});