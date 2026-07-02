const API_URL = "http://localhost:3000/usuarios";

async function carregarUsuarios() {
    const resposta = await fetch(API_URL);
    const usuarios = await resposta.json();

    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach((usuario) => {
    const item = document.createElement("li");
    item.textContent = `${usuario.nome} - ${usuario.email}`;
    lista.appendChild(item);
    });
}

document.getElementById("formUsuario").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    await fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email })
    });

    document.getElementById("formUsuario").reset();
    carregarUsuarios();
});

carregarUsuarios();