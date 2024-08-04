CREATE PROCEDURE sp_RelatorioVendasDiarias
    @DataVenda DATE
AS
BEGIN
    SELECT 
        p.nome_produto,
        SUM(v.quantidade) AS quantidade_vendida
    FROM 
        vendas v
    INNER JOIN produtos p ON v.produto_id = p.id_produto
    WHERE 
        v.data_venda = @DataVenda
    GROUP BY 
        p.nome_produto;
END

EXEC sp_RelatorioVendasDiarias '2024-04-15'

