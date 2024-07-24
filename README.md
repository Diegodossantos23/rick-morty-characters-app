# RickMortyApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.1.

## Descrição do Projeto

Aplicação Angular que interage com a [Rick and Morty API](https://rickandmortyapi.com) para permitir aos usuários buscar, visualizar e gerenciar personagens da série "Rick and Morty". A aplicação inclui funcionalidades como busca de personagens, visualização de detalhes, e a habilidade de adicionar personagens aos favoritos.


## Requisitos e Diferenciais Atendidos

Os seguintes requisitos e diferenciais foram implementados:

### Requisitos

- Seguir o protótipo indicado.
- Buscar um personagem pelo nome.
- Exibir informações mínimas sobre os personagens caso existam.
- Registrar o personagem na lista de favoritos utilizando Subjects do RxJS.
- O contador no topo da página é atualizado dinamicamente em tempo real.
- Visualizar a lista de personagens favoritos.
- Remover o personagem da lista de favoritos.

### Diferenciais

- Busca por nome utilizando operadores do RxJS para maior eficiência.
- Utilização do pipe async no contador de favoritos no header.
- Fonte personalizada adicionada ao projeto.
- Otimização do uso de diretivas estruturais.
- Carregamento lazy dos módulos das páginas.
- Layout responsivo.
- Funcionalidades adicionais criativas incluídas além dos requisitos.

## Tecnologias Utilizadas

- **Angular 18+**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **SCSS**

## Instruções de Instalação e Execução

1. **Instalação das Dependências**: Execute `npm install` para instalar as dependências necessárias.
2. **Servidor de Desenvolvimento**: Execute `npm start` para iniciar o servidor de desenvolvimento em `http://localhost:4200/`.
3. **Build de Produção**: Execute `ng build` para gerar a build de produção.

## Demonstração ao Vivo

Acesse a versão ao vivo da aplicação em [RickMortyApp Live Demo](https://rick-morty-characters-eta.vercel.app/home).


