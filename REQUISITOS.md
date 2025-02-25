# BeTalent Processo Seletivo: Teste Prático

## Requisitos Gerais

- Deve-se utilizar React.js ou Vanilla JS (JavaScript puro) para construir o projeto
- É permitido utilizar libs externas, mas recomenda-se que seja o mínimo possível
- A visualização deve ser responsiva

### Estrutura da Tabela

A tabela deve conter as seguintes colunas:

- Imagem (thumb do/a usuário/a)
- Nome
- Cargo
- Data de admissão
- Telefone

### Funcionalidades

- Deve ser possível realizar pesquisa na tabela por meio de um input
- O input de pesquisa deve permitir filtrar dados por:
  - Cargo
  - Nome
  - Telefone
- Datas e telefones devem ser formatadas no front-end e não na API

### Pré-requisitos

Tenha instaladas em sua máquina:

- Git
- Node.js
- Yarn (ou outro gerenciador de pacotes de sua preferência)

## Acesso aos dados da API simulada

Para ter acesso aos dados que alimentarão o projeto:

1. Instale o pacote json-server
2. Clone este repositório: `https://github.com/BeMobile/desafio-front-end`
3. Entre na pasta do projeto e execute:
   ```bash
   json-server --watch db.json
   ```
4. Inicie a estrutura e o desenvolvimento do projeto

> **Nota**: É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

**Alternativas para executar o json-server:**

```bash
npx json-server db.json
# ou
yarn json-server <path>/db.json
```

## Critérios de Avaliação

Em ordem de relevância:

1. Lógica de programação
2. Organização (do código e dos arquivos)
3. CSS do projeto
4. README (deve conter):
   - Sobre o projeto
   - Pré-requisitos
   - Instruções para rodar a aplicação

**Diferencial**: Uso de TypeScript

## Envio da Solução

- O projeto deve ser hospedado em um repositório no GitHub
- O link do repositório deverá ser fornecido através do formulário de Teste Técnico
- Não serão aceitos links de projetos enviados por outros meios

> Demais instruções e regras serão fornecidas nos formulários e nas comunicações do processo seletivo.
