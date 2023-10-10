// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


function getCategoriesFromServer() {
    fetch('/Category/GetCategoriesData')
        .then(response => response.json())
        .then(categories => {
            console.log('Categorias:', categories);
            // Faça o que desejar com os dados das categorias aqui...
        })
        .catch(error => {
            console.error('Erro ao obter categorias:', error);
        });
}

// Chamando a função para obter as categorias do servidor
getCategoriesFromServer();

    // Inclui os dados da classe Category no script inline
    var categoryData = @Html.Raw(categoryData);

    // Agora você pode acessar os dados da classe Category no JavaScript
    console.log('Dados da categoria:', categoryData);

