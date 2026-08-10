```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>

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
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

        .resultado-imc {
            font-size: 2.5rem;
            font-weight: bold;
            color: #f7971e;
            margin: 10px 0;
        }

        .classificacao {
            font-size: 1.2rem;
            font-weight: bold;
            padding: 10px;
            border-radius: 10px;
            margin-top: 10px;
        }

        .classificacao.normal {
            background: #d4edda;
            color: #28a745;
        }

        .classificacao.alerta {
            background: #fff3cd;
            color: #856404;
        }

        h1 {
            color: #1a1a2e;
        }
    </style>
</head>

<body>

    <div class="caixa">
        <h1>📊 Calculadora de IMC</h1>

        <div class="info">
            Peso:
            <span class="dado" id="pesoInfo"></span> kg
        </div>

        <div class="info">
            Altura:
            <span class="dado" id="alturaInfo"></span> m
        </div>

        <div class="resultado-imc" id="imcValor">--</div>

        <div class="classificacao" id="classificacao"></div>
    </div>

    <script>
        // Valores modificados conforme o desafio
        let peso = 70;
        let altura = 1.65;

        // Cálculo do IMC
        let imc = peso / (altura * altura);

        // Operador ternário
        let classificacao =
            imc >= 18.5 && imc <= 24.9
                ? "Normal"
                : "Fora do normal";

        // Exibe os dados na tela
        document.getElementById("pesoInfo").textContent = peso;
        document.getElementById("alturaInfo").textContent = altura;
        document.getElementById("imcValor").textContent = imc.toFixed(2);

        // Exibe a classificação
        let classDiv = document.getElementById("classificacao");

        classDiv.textContent = classificacao;

        if (classificacao === "Normal") {
            classDiv.className = "classificacao normal";
        } else {
            classDiv.className = "classificacao alerta";
        }
    </script>

</body>

</html>
```
