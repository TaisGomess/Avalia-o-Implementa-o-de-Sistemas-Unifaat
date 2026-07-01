import pool from "../database/db.js";

export const listarUsuarios = async (req, res) => {

    try {

        const resultado = await pool.query(
            "SELECT * FROM usuarios ORDER BY id"
        );

        res.status(200).json(resultado.rows);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: "Erro ao buscar usuários."
        });

    }

};