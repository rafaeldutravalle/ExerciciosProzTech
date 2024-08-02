// Criando o título
let titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo à Nossa Loja Virtual';
document.body.appendChild(titulo);

// Criando o contêiner do produto
let produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

// Criando o nome do produto
let produtoNome = document.createElement('h2');
produtoNome.textContent = 'Notebook Gamer';

// Criando a descrição do produto
let produtoDescricao = document.createElement('p');
produtoDescricao.textContent = 'Descrição: Um notebook poderoso para gamers exigentes.';

// Criando o preço do produto
let produtoPreco = document.createElement('p');
produtoPreco.textContent = 'Preço: R$ 4.500,00';

// Criando a imagem do produto
let produtoImagem = document.createElement('img');
produtoImagem.src = 'https://via.placeholder.com/150';
produtoImagem.alt = 'Notebook Gamer';

// Adicionando os elementos ao contêiner do produto
produtoContainer.appendChild(produtoNome);
produtoContainer.appendChild(produtoDescricao);
produtoContainer.appendChild(produtoPreco);
produtoContainer.appendChild(produtoImagem);

// Adicionando o contêiner do produto ao body
document.body.appendChild(produtoContainer);
