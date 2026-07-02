# Avaliação - Implementação de Sistemas - UniFAAT

## Aluna

**Nome:** Taís Gomes

**Disciplina:** Implementação de Sistemas

---

# Objetivo

Este projeto foi desenvolvido como parte da avaliação prática da disciplina de Implementação de Sistemas da UniFAAT.

O sistema consiste em uma aplicação Web composta por frontend, backend, banco de dados PostgreSQL, containerização com Docker e infraestrutura em nuvem utilizando AWS.

---

# Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- AWS EC2
- AWS Security Groups
- AWS CloudShell
- Git
- GitHub

---

# Estrutura do projeto

```
.
├── api/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── web/
│   ├── css/
│   ├── js/
│   ├── Dockerfile
│   └── index.html
│
├── evidencias/
├── infra/
├── docker-compose.yml
├── user-data.sh
└── README.md
```

---

# Arquitetura

```
Usuário
    │
    ▼
Frontend (HTML/CSS/JS)
    │
    ▼
API Node.js + Express
    │
    ▼
PostgreSQL
```

---

# Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- API REST
- Integração com PostgreSQL
- Testes via Insomnia
- Frontend consumindo a API

---

# Executando o projeto localmente

Entre na pasta da API:

```bash
cd api
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

---

# Docker

Para executar utilizando Docker Compose:

```bash
docker compose up --build
```

Serão criados os seguintes serviços:

- PostgreSQL
- API
- Frontend

---

# AWS

Durante a avaliação foram utilizados os seguintes serviços da AWS:

- Amazon EC2
- Security Groups
- CloudShell

Foi criada uma instância EC2 com:

- Amazon Linux 2023
- Security Group personalizado
- Porta 80 liberada
- Porta 3000 liberada
- SSH configurado
- Key Pair para acesso

Também foi criado um script **user-data.sh** para automatizar a instalação do Docker.

---

# Evidências

As evidências da implementação encontram-se na pasta:

```
evidencias/
```

Contendo:

- AWS STS
- Security Groups
- EC2 Running
- Configuração da Instância
- Docker Compose
- Aplicação funcionando

---

# Autor

Taís Gomes

Projeto desenvolvido para a disciplina de Implementação de Sistemas - UniFAAT.