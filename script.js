function updateLabel(labelId, value) {
    document.getElementById(labelId).textContent = value;
}

function determinarTipoCamba() {
    const comida = parseInt(document.getElementById('comida').value);
    const bailar = parseInt(document.getElementById('bailar').value);
    const sombrero = parseInt(document.getElementById('sombrero').value);
    const churrasco = parseInt(document.getElementById('churrasco').value);
    const corazon = parseInt(document.getElementById('corazon').value);
    const fiesta = parseInt(document.getElementById('fiesta').value);
    
    const promedio = (comida + bailar + sombrero + churrasco + corazon + fiesta) / 6;

    let tipoCamba;

    if (promedio >= 8) {
        tipoCamba = "¡Eres un camba de pura cepa!";
    } else if (promedio >= 7) {
        tipoCamba = "Eres un camba auténtico, pero todavía puedes conocer más costumbres.";
    } else if (promedio >= 6) {
        tipoCamba = "Eres un camba, de los 80'.";
    } else if (promedio >= 5) {
        tipoCamba = "Eres un camba, de los 90'.";
    } else {
        tipoCamba = "¡Te falta un poco más de espíritu camba! Sigue explorando las costumbres.";
    }
    //BOM
    const nuevaVentana = window.open("", "ResultadoCamba", "width=600,height=400");

    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado Camba</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    text-align: center;
                    background-color: #4CAF50;
                }
                .resultado {
                    font-size: 1.5em;
                    color: #333;
                }
                    .parrafo{
                    color: white;
                    }
            </style>
        </head>
        <body>
            <div class="resultado">
                <p class="parrafo">${tipoCamba}</p>
            </div>
        </body>
        </html>
    `);

    nuevaVentana.document.close();
}
