CREATE FUNCTION contar_clientes_por_dia (@data_cadastro DATE)
RETURNS INT
AS
BEGIN
    DECLARE @total_clientes INT;

    SELECT @total_clientes = COUNT(*)
    FROM clientes
    WHERE data_cadastro = @data_cadastro;

    RETURN @total_clientes;
END

SELECT dbo.contar_clientes_por_dia('2024-04-15') AS total_clientes;
