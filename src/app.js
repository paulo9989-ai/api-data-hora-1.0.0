// Importa o framework Express.
const express = require("express");

// Cria a aplicação.
const app = express();

app.get("/", (request, response) => {
    const agora = new Date();

    // Formata a data e a hora utilizando o fuso horário de Recife.
    const dataHoraFormatada = agora.toLocaleString("pt-BR", {
        timeZone: "America/Recife",
        dateStyle: "full",
        timeStyle: "medium",
    });

    response.status(200).json({
        mensagem: "API de Data e Hora",
        dataHora: dataHoraFormatada,
        iso: agora.toISOString(),
        fusoHorario: "America/Recife",
    });
});

// Endpoint usado pelas probes de saúde do Kubernetes.
app.get("/health", (request, response) => {
    response.status(200).json({ status: "ok" });
});

module.exports = app;
