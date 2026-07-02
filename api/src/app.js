import express from "express";
import cors from "cors";
import pool from "./database/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

console.log("Rotas de usuários carregadas");


app.get("/", (req, res) => {
    res.json({
        mensagem: "API da Avaliação UniFAAT funcionando!"
    });
});

app.get("/db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            status: "Banco conectado!",
            horario: result.rows[0].now,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            erro: "Falha na conexão com o banco."
        });

    }
});

app.post("/teste", (req, res) => {
    res.json({
        mensagem: "POST funcionando!"
    });
});

export default app;