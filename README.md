# Memoteca - Alura

## Angular
Angular: É um framework para desenvolvimento de aplicações web do tipo SPA (Single Page Application).

Uma SPA (Single Page Application) é um tipo de aplicação web que carrega uma única página HTML inicial e, em seguida, atualiza dinamicamente o conteúdo dessa página sem a necessidade de recarregar a página inteira. Isso cria uma experiência de usuário mais rápida e fluida, pois apenas partes específicas da página são atualizadas, resultando em tempos de carregamento mais curtos e uma sensação de aplicação desktop.
## Criando o primeiro component
= ng g c nome do componente

## Event Binding
O event binding escuta um evento no template e faz a chamada de um método do componente possibilitando que realize uma lógica de programação em decorrência deste evento, portanto essa comunicação é unidirecional, sendo do template para o componente.

## Two-wai Data Binding
A sintaxe do o fluxo de dados bidirecional é uma junção das duas que vimos antes: colchetes [] e parênteses (), formando assim a famosa "banana na caixa".
Este binding combina o recurso do property binding e o event binding em uma única notação usando a diretiva 
`ngModel.[(ngModel)]=”nome-da-propriedade”`

## Diretivas
Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.
Ex: <app-listarPensamentos>.

Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.
Ex: NgIf, NgFor. NgSwitch.

Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.
Ex: NgClass, NgStyle.

## Serviços
Responsavél pela comunicação e ações entre front e back
"O Objetivo de um serviço é organizar e compartilhar regras de negócios, dados e métodos para diferentes componentes de uma aplicação por meio da injeção de dependência".
- ng g s components/pensamentos/pensamento.service

## Injeção de dependências
Uma forma de centralizar toda a ação de um serviço que teria um longo caminho a ser percorrido menos burocrático.
Imagine um pedido, você precisa, comprar, entrar em uma fila e esperar a entrega do seu pedido, imagina um mediador que possa fazer toda essa ação por debaixo dos panos, onde você simplesmente solicita o serviço e ele chega até você. Seria isso!!!
[Artigo sobre Injeção de dependências](https://www.alura.com.br/artigos/services-injecao-dependencia-angular-o-que-sao-como-funcionam?_gl=1*scusct*_ga*MjA5MjUwOTAwMi4xNjc1NjI1MDY1*_ga_1EPWSW3PCS*MTY5NDI2MjY0Ny42My4xLjE2OTQyNjUzNjUuMC4wLjA.*_fplc*ZXdqVmU0NiUyQjlIOEFBWHh2WE40RDAlMkZYcCUyRllSTlVJaDdRMUF4WTBMSFRlTWRuS1hjVml0b29BZlM1eEpaUjNHdHhFVkJBN0dMUElLREdnNXYlMkJvcUdkbSUyQkhEdGJqJTJGUUpnc1VuR0slMkJnVSUyRkRBQkVlVDQxJTJGck5iSW9IVk53R0ZRJTNEJTNE#:~:text=Sim%2C%20%C3%A9%20s%C3%B3%20isso%20mesmo,declarado%20como%20atributo%20dessa%20classe)

**No angular a injeção de dependências é um padrão de projeto, que visa solicitar dependências externas ao invés de crialas**

# Backend para teste
Foi criando um backend para testes, para criação e execução foram seguidos os seguintes passos:
- navegue para a pasta backend e rode o comando: `npm init -y`
- em seguida, rode o comando `npm i json-server`
- crie o arquivo db.json e configure o package.json com start
- Rode a aplicação com `npm start`

## sobre Requisições HTTP
- O HttpClient retorna Observable das chamadas de métodos HTTP, o que facilita na implementação de regras em caso de sucesso, erro e conclusão da requisição.
HttpClient é uma classe que possui envia requisições HTTP e permite interagir com os suas diferentes possibilidades de resultados.

- O GET precisa receber a URL como parâmetro para trazer os dados para a aplicação.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
