let totalGeral = 0;

function limparCampo() {
    let limpar = document.getElementById('quantidade').value = '';
}

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeDeProdutos = document.getElementById('quantidade').value;
    let valorQtde = valorUnitario * quantidadeDeProdutos;
    let carrinho = document.getElementById('lista-produtos');
    if(quantidadeDeProdutos >= 100) { 
    alert('O limite de compra para cada produto é 100!!!');
    limparCampo();
    }
    else{
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${valorQtde}</span>
    </section>`;
    totalGeral = totalGeral + valorQtde;
    let guardarTotal = document.getElementById('valor-total');
    guardarTotal.textContent = `R$${totalGeral}`;
    limparCampo();
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}

