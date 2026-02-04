<h1 align="center">
    File Reception Monitor
</h1>

## Descrição do projeto
Este projeto corresponde à aplicação front-end do sistema de monitoramento da recepção de arquivos enviados pelas adquirentes.
A interface foi desenvolvida em Angular 21 e consome a File Reception API, permitindo à equipe operacional visualizar, de forma clara, o status dos arquivos financeiros recepcionados.
A aplicação apresenta informações como:
- Arquivos recepcionados.
- Arquivos não recepcionados.
- Arquivos com erro.
- Gráficos baseados nos arquivos cadastrados nos últimos dias.<br/>
<h3 align="center">
    <a href="https://angular.dev/">🔗 Angular</a>
</h3>
<p align="center">🚀 Framework de desenvolvimento front-end.</p>
<br/>
<h4>
    <img src="https://img.shields.io/badge/build-aprovado-brightgreen" />
    <img src="https://img.shields.io/badge/versão-v1.0.0-blue" />
    <img src="https://img.shields.io/badge/último%20atualização-fevereiro%202026-lightblue" />
    <img src="https://img.shields.io/badge/linguagem-typescript-orange" />
    <img src="https://img.shields.io/badge/plataforma-angular-orange" />
    <img src="https://img.shields.io/badge/Inglês%20(US)-80%25-ff69b4" />
    <img src="https://img.shields.io/badge/Português%20(BR)-20%25-ff69b4" />
</h4>

---

## Status do projeto
#### ✅ Released
---

## Índice
<ul>
  <li><a href="#descrição-do-projeto">Descrição do projeto</a></li>
  <li><a href="#status-do-projeto">Status do projeto</a></li>
  <li><a href="#recursos">Recursos</a></li>
  <li><a href="#pré-requisitos">Pré-requisitos</a></li>
  <li><a href="#execução">Execução</a></li>
  <li><a href="#configurações">Configurações</a></li>
  <li><a href="#tecnologias">Tecnologias</a></li>
  <li><a href="#autora">Autora</a></li>
</ul> 

---

## Recursos
- [x] Consumo da API de monitoramento de arquivos.
- [x] Listagem de arquivos.
- [x] Geração de gráfico com base nos arquivos cadastrados.

---

## Pré-requisitos
Para executar a aplicação localmente, as seguintes ferramentas deverão estar instaladas na máquina:
- [Git](https://git-scm.com/install/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download) (versão compatível com Angular 21)
- [Angular CLI](https://angular.dev/installation)

---

## Execução
Primeiramente, clone o repositório abaixo:
```bash
$ git clone https://github.com/AndressaCarvalho/file-reception-monitor.git
```
### 1️⃣ Executando localmente
1. Instale as dependências do projeto:
```bash
npm install
```
2. Execute o comando:
```bash
ng serve
```

### 2️⃣ Executando via Docker
1. Certifique-se de ter [Docker](https://docs.docker.com/engine/install/) instalado e em execução.
2. Execute o comando:
```bash
docker-compose up --build -d
```
> ✅ Não é necessário instalar dependências manualmente.

**A aplicação deve ser executada no endereço [https://localhost:4200](http://localhost:4200/).**

---

## Configurações
O arquivo environment.ts (ou environment.docker.ts) contém configurações importantes da aplicação.
### lastDays
A propriedade lastDays define o número de dias, utilizados para gerar o gráfico da quantidade de arquivos cadastrados.
```ts
interface: {
  chart: {
    lastDays: 30
  }
}
```
> Nesse caso, o gráfico será gerado com base nos arquivos cadastrados nos últimos 30 dias.

---

## Tecnologias
As seguintes ferramentas foram utilizadas na construção do projeto:
- Git
- TypeScript
- Node.js
- Angular 21
- Angular CLI
- Docker

---

## Autora
<a href="https://github.com/AndressaCarvalho">
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/51313172?s=96&v=4" width="100px;" alt=""/>
  <br/>
  <sub><b>Andressa Carvalho</b></sub>
 </a> <a href="https://github.com/AndressaCarvalho" title="Rocketseat">🚀</a>
<br/><br/>
Feito com ❤️ por Andressa Carvalho 👋🏽 Entre em contato!
<br/><br/>

[![Linkedin Badge](https://img.shields.io/badge/-Andressa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressa-carvalho-araujo-289931199/)](https://www.linkedin.com/in/andressa-carvalho-araujo-289931199/) 
[![Gmail Badge](https://img.shields.io/badge/-andressac.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:andressac.dev@gmail.com)](mailto:andressac.dev@gmail.com)


