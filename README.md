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
  <div class="form-group">
    <select id="tipoBusca" [(ngModel)]="tipoBusca" name="tipoBusca">
      <option value="nfse">Número da NFS-e</option>
      <option value="credito">Número do Crédito</option>
    </select>
  </div>
  ```

   - ✅ **Campo de Busca Dinâmico**  
  ```html
  <div class="form-group">
    <input id="numeroBusca" 
           type="text" 
           [(ngModel)]="numeroBusca"
           name="numeroBusca"
           placeholder="Digite o número">
  </div>
  ```

   - ✅ **Sistema de Resultados**  
  ```html
  <div *ngIf="creditos.length > 0" class="resultados">
    <div *ngFor="let credito of creditos" class="credito-card">
      <div><strong>Nº Crédito:</strong> {{ credito.numeroCredito }}</div>
      <div><strong>Nº NFS-e:</strong> {{ credito.numeroNfse }}</div>
      <div><strong>Valor:</strong> {{ credito.valorIssqn | currency:'BRL' }}</div>
    </div>
  </div>
  ```

### 📊 Apresentação dos Dados
- **Cards de resultados** com:
  - Formatação de valores monetários
  - Exibição condicional de campos
  - Layout responsivo
- **Feedback visual**:
  - Loader durante carregamento
  - Mensagem para resultados vazios

### 📱 Responsividade
- Design mobile-first com:
  - Media queries para diferentes breakpoints
  - Grid layout flexível
  - Tamanhos relativos (rem/em)

## 🛠️ Tecnologias Utilizadas
| Tecnologia       | Finalidade                          | Versão |
|------------------|-------------------------------------|--------|
| Angular          | Framework frontend                  | 17     |
| RxJS             | Gerenciamento de estado             | 7.8    |
| HttpClient       | Comunicação com API                 | 17     |
| Docker           | Containerização                    | 20.10  |

## 🚀 Como Executar

### Pré-requisitos
- **Node.js 18.18+** (compatível com `@types/node` do projeto)
- **npm 9+** (vem com Node.js 18)
- **Angular CLI 17.1.2** (exata como no projeto)

### Instalação Local
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/credito-frontend.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

### 🐳 Execução com Docker
```bash
# Build da imagem
docker build -t credito-frontend .

# Execução do container
docker run -p 4200:80 credito-frontend
```

## 🔗 Integração com Backend
```typescript
// Exemplo de consumo da API
buscarCreditos() {
  if (this.tipoBusca === 'nfse') {
    this.creditoService.buscarPorNfse(this.numeroBusca)
      .subscribe(creditos => this.creditos = creditos);
  }
}
```

## 📌 Próximas Melhorias
- [ ] Implementar paginação de resultados
- [ ] Adicionar exportação para Excel/PDF



