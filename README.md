# 🪨📄✂️🦎🖖 Jokenpô Estendido 

O objetivo foi construir uma aplicação Full-Stack do zero, separando a responsabilidade visual no frontend e as regras de negócio complexas no backend.

O jogo é uma versão expandida do clássico Pedra-Papel-Tesoura, incluindo Lagarto e Spock, totalizando 10 condições lógicas de vitória, processadas através de uma API REST.

## 📸 Demonstração Visual

**Interface do Jogo (Frontend):**
<img width="1366" height="728" alt="image" src="https://github.com/user-attachments/assets/801383c8-36b9-45e4-91a1-8761c4a10995" />


**API Respondendo (Backend):**
<img width="423" height="264" alt="image" src="https://github.com/user-attachments/assets/4d8039aa-e935-4cd8-b3b6-5eb6b99fa318" />


## 🚀 Tecnologias Utilizadas

### Frontend (Interface)
* **React** (com Vite)
* **Hooks:** Gerenciamento de estado e placar dinâmico com `useState`.
* **Integração:** Consumo da API via requisições assíncronas com `fetch` e `async/await`.
* **Estilização:** CSS3 puro com layout Flexbox, Dark Mode e animações de transição/hover.

### Backend (API REST)
* **Node.js**
* **Express:** Microframework para roteamento e endpoints.
* **CORS:** Configuração de permissões de acesso entre portas diferentes.
* **Lógica:** Algoritmo de sorteio aleatório e controle de fluxo condicional estruturado.

## ⚙️ Funcionalidades

- Interface responsiva e reativa (atualização instantânea sem recarregar a página).
- Placar dinâmico de pontuação (Usuário vs Computador).
- Feedback visual de vitória, derrota ou empate.
- Backend isolado processando as regras do jogo e devolvendo respostas serializadas em JSON.

## 💻 Como rodar o projeto localmente

Para rodar este projeto na sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado.

**1. Clone o repositório:**
```bash
git clone [https://github.com/seu-usuario/pedra-papel-tesoura-js.git](https://github.com/seu-usuario/pedra-papel-tesoura-js.git)
cd pedra-papel-tesoura-js

```
**2. Iniciando a API (Backend):**
Abra o terminal na pasta raiz do projeto e rode:
```bash
cd api-node
npm install
node server.js
```

**3. Iniciando a Interface (Frontend):**
Abra um novo terminal na pasta raiz e navegue até a pasta do React:
```bash
cd jogo-react
npm install
npm run dev
```

Acesse o link gerado no terminal (geralmente http://localhost:5173) para jogar!




