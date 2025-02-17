# Gerson Junior: Desafio 03 CompasUol

Este projeto tem como objetivo recriar uma página de loja de móveis. Seguindo os padrões de design fornecidos no Figma, utilizei tecnologia como: **HTML**, **CSS**, **TypeScript**, **React**, **Tailwind CSS**, **AWS**

## 🚀 Tecnologias Utilizadas

<div align="left">
</div>
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
    <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" height="40" alt="aws"  /> 
</div>

## 📝 Requisitos:

### Requisitos Técnicos
- Utilizar **HTML**, **CSS**, **Typescript**, **React** e **TailwindCSS**.
- Implementar **React Router** e proteger as rotas.
- Utilizar **JSON Server** para simulação de banco de dados hospedade na EC2 AWS e imagens em um bucket S3.

### Requisitos Funcionais
 **Simulação de Compra:**
   - Produtos com valores e imagem.
   - Opção para adição do produto ao carrinho
   -Página de check out
 **Responsividade:**
   - Garantir usabilidade em dispositivos móveis e desktop
 **Navbar:**
   - Links para Home, Shop, Contact com interações definidas.
**Rodapé:**
    - Links de redes sociais com redirecionamento.


### 🚦Rotas da Aplicação

|       Rota            |    Método    |                  Descrição                          | 
| --------------------- | ------------ | --------------------------------------------------  | 
| `http://3.144.121.154:5173/`                   |  Página de home 
| `http://3.144.121.154:5173/Shop`               |  Página de Shop onde possui os produtos disponiveis 
| `http://3.144.121.154:5173/Contact`            |  Página para contato com a loja 
| `http://3.144.121.154:5173/cart`               |  Página de carrinho para visualizacao antes da compra 
| `http://3.144.121.154:5173/checkout`           |  Página de check out para visualizacao de produtos comprados e valores 


## 📁 Estrutura do Projeto


<img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/Captura+de+tela+2025-02-14+164548.png"  />


## 📝 Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

## Como Executar o Projeto
1. Clone este repositório:

```bash
git clone [URL_DESSE_REPOSITORIO]
```

2. Navegue até a pasta do projeto:

```bash
cd [NOME_DA_PASTA]
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse o projeto no navegador:


```
http://localhost:5173
```

ou

Acesse diretamente URL:http://3.144.121.154:5173/

Api: http://3.144.121.154:3000/produtos

   





   
