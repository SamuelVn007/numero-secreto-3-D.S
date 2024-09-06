<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivinhe o número</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Acerte o número secreto</h1>

        <h3>O número secreto está entre <span
        id="menor-valor">0</span> e <span
        id="maior-valor">100</span></h3>

        <div id"chute" class="mensagem">
            <div>Você disse: </div>
            <span class"box">10</span>
            <div>O número secreto é maior </div>
        </div>
    </main>

    <script src="app/sortearNumero.js"></script>
    <script src = "app/reconhecimentoVoz.js"></script>
</body>
</html>
