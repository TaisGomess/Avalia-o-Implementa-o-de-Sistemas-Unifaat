import express from "express";

import {
    listarUsuarios,
    criarUsuario,
    deletarUsuario
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.delete("/:id", deletarUsuario);

export default router;