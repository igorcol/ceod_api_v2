# 🎯 **CEOD API v2**  

🚀 **Uma API para a consulta de inscritos para eventos a nível estadual de um grupo filosófico e filantrópico de Jovens.** 🚀  

Com a evolução dos meus estudos em TypeScript, decidi refazer do zero a API do CEOD, que anteriormente havia sido desenvolvida em JavaScript com uma estrutura pouco intuitiva e difícil de manter.

A versão v1 tinha código desorganizado, baixa escalabilidade e não seguia boas práticas de desenvolvimento. Com isso em mente, reescrevi tudo utilizando TypeScript, aplicando boas práticas, modularizando a arquitetura e tornando a API mais robusta, segura e fácil de manter.

Agora, a CEOD API v2 é totalmente escalável, segue um código mais limpo e organizado, e está pronta para crescer junto com o evento! 🚀🔥

---

![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-red?style=flat-square)

---

## 🎯 **Sobre o Projeto**
A **CEOD API v2** é a nova versão da API utilizada para gerenciar o evento **CEOD**.  
Ela foi **totalmente reescrita** em **TypeScript**, trazendo uma estrutura **mais organizada, modular e escalável**.  

🔄 **Diferenças em relação à versão anterior (`CEOD API v1`)**:
- ❌ `v1` foi escrita em **JavaScript** e possuía uma estrutura desorganizada.
- ✅ `v2` usa **TypeScript**, seguindo **boas práticas** e padrões modernos.
- ✅ Código **mais seguro, limpo e de fácil manutenção**.
- ✅ **Conexão com MongoDB** para armazenar os dados de inscritos.
- ✅ Automação na conversão **XLSX → JSON → MongoDB**.

---

## 🚀 **Principais Tecnologias**
- **Node.js** + **TypeScript**
- **Express.js** – Framework para APIs REST
- **MongoDB** – Banco de dados NoSQL para armazenamento dos inscritos
- **Mongoose** – ODM para manipulação do banco
- **dotenv** – Gerenciamento de variáveis de ambiente
- **xlsx** – Conversão de planilhas Excel para JSON

---

## 📦 **Instalação**
1️⃣ **Clone este repositório**:
```bash
git clone https://github.com/seuusuario/ceod-api-v2.git
```
2️⃣ **Acesse o diretório do projeto**:
```bash
cd ceod-api-v2
```
3️⃣ **Instale as dependências**:
```bash
npm install
```
4️⃣ **Configure o `.env`** (com base no `.env.example`):
```ini
MONGO_URI=mongodb://seu-mongo-url
PORT=3000
```
5️⃣ **Execute a API**:
```bash
npm run dev
```
🎉 **Agora a API está rodando em** `http://localhost:3000`

---

## 🔗 **Rotas Disponíveis**
### 📌 **Saúde da API**
- `GET /health` → Verifica se a API está rodando corretamente.

### 👥 **Usuários**
- `GET /users` → Lista todos os inscritos do evento.
- `GET /users/:id` → Busca um inscrito pelo ID.
- `PUT /users/:id/presence` → Atualiza a presença do usuário.

### 📥 **Importação de Dados**
- `POST /import` → Converte o arquivo XLSX para JSON e insere no MongoDB.

---

## 🛠 **Scripts Úteis**
| Comando               | Descrição                                     |
|-----------------------|---------------------------------------------|
| `npm run dev`        | Inicia a API em modo de desenvolvimento      |
| `npm run build`      | Compila o código TypeScript                  |
| `npm run start`      | Inicia a API em produção                     |
| `npm run import`     | Converte XLSX → JSON → MongoDB automaticamente |

---

## 📜 **Licença**
🔖 Este projeto está sob a licença **MIT** – use e modifique à vontade!

---

🔥 **Gostou do projeto? Dê uma estrela!** ⭐  
📩 **Dúvidas ou sugestões? Abra uma issue!**  

🚀 **Vamos juntos fazer do CEOD um evento cada vez melhor!** 🚀  
