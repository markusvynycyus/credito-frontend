# 💻 Frontend - Sistema de Consulta de Créditos/NFSe

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-20.10-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📋 Visão Geral
Frontend Angular para consulta de créditos fiscais e NFSe, desenvolvido como parte do desafio técnico. Consome a API RESTful do backend e atende aos seguintes requisitos:

## ✨ Funcionalidades Implementadas
### 🔍 Módulo de Consulta Avançada
- **Mecanismo de Busca inteligente** por:
   - ✅ **Seleção de Tipo de Consulta**  
  Interface intuitiva para escolher o critério de busca:
  ```html
     <select id="tipoBusca" [(ngModel)]="tipoBusca">
      <option value="nfse">Número da NFS-e</option>
      <option value="credito">Número do Crédito</option>
   </select>

  
  
  - ✅ Número do crédito
- **Validação** de campos de entrada
- **Feedback visual** durante a pesquisa

### 📊 Apresentação dos Dados
- **Tabela responsiva** com:
  - Paginação client-side
  - Ordenação por colunas
  - Estilo condicional (destaque para valores críticos)
- **Detalhamento** dos registros em modal

### 📱 Responsividade
- Layout adaptável para:
  - Desktop (≥992px)
  - Tablet (≥768px)
  - Mobile (<576px)
- Menu colapsável em mobile
- Tamanhos de fonte responsivos

## 🛠️ Tecnologias Utilizadas
| Tecnologia       | Finalidade                          | Versão |
|------------------|-------------------------------------|--------|
| Angular          | Framework frontend                  | 17     |
| Angular Material | Componentes UI                      | 17     |
| RxJS             | Gerenciamento de estado             | 7.8    |
| NGX-Pagination   | Paginação de resultados             | 6.0    |
| Docker           | Containerização                    | 20.10  |

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm 9+
- Angular CLI 17+

### Instalação Local
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/credito-frontend.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
