// Captura os elementos
const titulo = document.getElementById('titulo');
const listaOrdenada = document.getElementById('lista-ordenada');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');

// Adiciona texto ao elemento h1 e ao link
titulo.innerText = 'Título do Projeto';
link.innerText = 'Visite o Proze Educação';

// Adiciona itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adiciona itens com links à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.exemplo1.com">Exemplo 1</a></li>
    <li><a href="https://www.exemplo2.com">Exemplo 2</a></li>
    <li><a href="https://www.exemplo3.com">Exemplo 3</a></li>
`;
