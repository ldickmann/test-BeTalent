# Teste Prático Front-end BeTalent - Desenvolvido por Lucas E. Dickmann

## Tabela de Colaboradores

Interface responsiva que exibe uma tabela de colaboradores com funcionalidade de pesquisa, desenvolvida com React.js.

## 🚀 Funcionalidades

- Visualização de colaboradores em formato de tabela
- Pesquisa por nome, cargo e telefone
- Formatação automática de data e telefone
- Interface totalmente responsiva
- Integração com API simulada (json-server)

## 🛠️ Tecnologias Utilizadas

- React.js
- CSS Modules
- json-server

## ⚙️ Pré-requisitos

- Node.js instalado
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. Instale as dependências

```bash
npm install
# ou
yarn
```

3. Inicie o json-server (API simulada)

```bash
npx json-server --watch db.json --port 3001
```

4. Inicie a aplicação

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em `http://localhost:3000`

## 📱 Layout Responsivo

- Desktop: Visualização completa da tabela
- Mobile: Adaptação para melhor visualização em dispositivos móveis

🔍 Estrutura do Projeto

```bash
src/
  ├── components/
  │   ├── EmployeesRow/
  │   ├── EmployeesTable/
  │   └── SearchInput/
  ├── styles/
  │   └── global.css
  ├── App.js
  ├── App.css
  └── index.js
```
