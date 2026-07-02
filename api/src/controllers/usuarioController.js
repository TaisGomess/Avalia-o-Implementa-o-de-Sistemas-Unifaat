import pool from "../database/db.js";

export const listarUsuarios = async (req, res) => {
    try {
    const resultado = await pool.query("SELECT * FROM usuarios ORDER BY id");
    res.status(200).json(resultado.rows);
    } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar usuários." });
    }
};

export const criarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            erro: "Nome e email são obrigatórios."
        });
    }

    try {

        const resultado = await pool.query(
            "INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *",
            [nome, email]
        );

        res.status(201).json(resultado.rows[0]);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: erro.message
        });

    }
};

export const deletarUsuario = async (req, res) => {
    const { id } = req.params;

    try {
    await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
    res.status(200).json({ mensagem: "Usuário removido com sucesso." });
    } catch (erro) {
    res.status(500).json({ erro: "Erro ao remover usuário." });
    }
};