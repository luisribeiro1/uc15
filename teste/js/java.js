function adicionarAoCarrinho(nome, preco) {
    // Obter o carrinho armazenado no localStorage ou criar um array vazio se não houver
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Criar objeto do produto
    const produto = { nome, preco };

    // Adicionar produto ao carrinho
    carrinho.push(produto);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Caso esteja na página do carrinho, atualizar os itens exibidos
    if (window.location.href.includes('carrinho.html')) {
        atualizarCarrinho();
    }
}
function atualizarCarrinho() {
    const cartContainer = document.getElementById('cartItems');
    const totalSpan = document.getElementById('cartTotal');

    // Obter o carrinho armazenado no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Limpar carrinho
    cartContainer.innerHTML = '';

    // Se o carrinho estiver vazio
    if (carrinho.length === 0) {
        cartContainer.innerHTML = 'Carrinho vazio!';
        totalSpan.textContent = '0.00';
        return;
    }

    // Exibir cada item no carrinho
    let total = 0;
    carrinho.forEach((produto, index) => {
        // Criar div para o item do carrinho
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        // Adicionar conteúdo ao item
        cartItem.innerHTML = `
            <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        
        // Adicionar o item ao carrinho
        cartContainer.appendChild(cartItem);

        // Atualizar o total
        total += produto.preco;
    });

    // Atualizar o valor total na tela
    totalSpan.textContent = total.toFixed(2);
}
function removerDoCarrinho(index) {
    // Obter o carrinho armazenado no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Remover o produto da posição especificada
    carrinho.splice(index, 1);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualizar a exibição do carrinho
    atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        // Limpar o carrinho após finalização
        localStorage.removeItem('carrinho');
        atualizarCarrinho();
    }
}

// Se o usuário está na página do carrinho, atualizar o carrinho ao carregar a página
if (window.location.href.includes('carrinho.html')) {
    atualizarCarrinho();
}
