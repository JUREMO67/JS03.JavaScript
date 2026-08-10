```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador de Acesso</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f0f0f0;
            margin: 0;
        }

        .caixa {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
        }

        .info {
            font-size: 1.1rem;
            color: #2c3e50;
            margin: 8px 0;
        }

        .info .dado {
            color: #f7971e;
            font-weight: bold;
        }

        .resultado {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 15px;
            padding: 15px;
            border-radius: 10px;
        }

        .resultado.liberado {
            background: #d4edda;
            color: #28a745;
            border: 2px solid #28a745;
        }

        .resultado.bloqueado {
            background: #f8d7da;
            color: #dc3545;
            border: 2px solid #dc3545;
        }

        h1 {
            color: #1a1a2e;
        }
    </style>
</head>

<body>

    <div class="caixa">
        <h1>🚦 Validador de Acesso</h1>

        <div class="info">
            Idade: <span class="dado" id="idadeInfo"></span>
        </div>

        <div class="info">
            Possui Carteira: <span class="dado" id="carteiraInfo"></span>
        </div>

        <div class="info">
            Autorização Especial: <span class="dado" id="autorizacaoInfo"></span>
        </div>

        <div class="resultado" id="resultadoAcesso"></div>
    </div>

    <script>
        // Valores solicitados pelo desafio
        let idade = 17;
        let temCarteira = true;

        // Autorização especial para o desafio extra
        let autorizacaoEspecial = true;

        // Verifica se pode dirigir usando AND (&&)
        let podeDirigir = idade >= 18 && temCarteira;

        // Desafio extra: permite acesso se tiver autorização especial
        let acessoEspecial = podeDirigir || autorizacaoEspecial;

        // Exibe as informações
        document.getElementById("idadeInfo").textContent = idade;

        document.getElementById("carteiraInfo").textContent =
            temCarteira ? "Sim" : "Não";

        document.getElementById("autorizacaoInfo").textContent =
            autorizacaoEspecial ? "Sim" : "Não";

        // Exibe o resultado
        let resultadoDiv = document.getElementById("resultadoAcesso");

        if (acessoEspecial) {
            resultadoDiv.className = "resultado liberado";
            resultadoDiv.textContent =
                "✅ Acesso liberado! Possui autorização especial.";
        } else {
            resultadoDiv.className = "resultado bloqueado";
            resultadoDiv.textContent =
                "❌ Acesso negado! Não pode dirigir.";
        }
    </script>

</body>
</html>
```
