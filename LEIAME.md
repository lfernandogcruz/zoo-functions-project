<!--
Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

## Boas vindas ao repositório do projeto de ES6 e Higher Order Functions!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #VQV 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Habilidades

Neste projeto, verificamos se você é capaz de:

- Produzir código legível, conciso e expressivo utilizando as novas funcionalidades do ES6;
- Utilizar as _Higher Order Functions_ para manipular e criar arrays;
- Escolher a _Higher Order Function_ mais adequada para a obtenção de um resultado esperado;
- Aprender a usar de forma conjunta as _Higher Order Functions_;
- Interpretar testes unitários e produzir soluções que atendam a eles.

---

## Sumário

- [Boas vindas ao repositório do projeto de ES6 e Higher Order Functions!](#boas-vindas-ao-repositório-do-projeto-de-es6-e-higher-order-functions)
- [Habilidades](#habilidades)
- [Sumário](#sumário)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Dica para o desenvolvimento](#dica-para-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (Opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [1. Implemente a função `getSpeciesByIds`](#1-implemente-a-função-getspeciesbyids)
  - [2. Implemente a função `getAnimalsOlderThan`](#2-implemente-a-função-getanimalsolderthan)
  - [3. Implemente a função `getEmployeeByName`](#3-implemente-a-função-getemployeebyname)
  - [4. Implemente a função `getRelatedEmployees`](#4-implemente-a-função-getrelatedemployees)
  - [5. Implemente a função `countAnimals`](#5-implemente-a-função-countanimals)
  - [6. Implemente a função `calculateEntry`](#6-implemente-a-função-calculateentry)
  - [7. Implemente a função `getAnimalMap`](#7-implemente-a-função-getanimalmap)
  - [8. Implemente a função `getSchedule`](#8-implemente-a-função-getschedule)
  - [9. Implemente a função `getOldestFromFirstSpecies`](#9-implemente-a-função-getoldestfromfirstspecies)
  - [10. Implemente a função `getEmployeesCoverage`](#10-implemente-a-função-getemployeescoverage)
- [Avisos Finais](#avisos-finais)
  - [Revisando um Pull Request](#revisando-um-pull-request)
  - [Avaliação do projeto](#avaliação-do-projeto)
  - [Ordem dos requisitos no avaliador automático](#ordem-dos-requisitos-no-avaliador-automático)

---

## Entregáveis

### O que deverá ser desenvolvido

Você implementará várias funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.

---

### Desenvolvimento

Este repositório contém um _template_ de uma aplicação **NodeJS** (observe a existência do arquivo _package.json_).

Após clonar o projeto e instalar as dependências, você não precisará realizar nenhuma configuração adicional.

Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.

Você deverá completar as funções de forma a satisfazer os requisitos listados na próxima seção. Na pasta raíz do projeto, temos as pastas `src`, `tests` e `data` . A pasta `src` é composta por arquivos referentes a cada uma das funções que você irá implementar, a pasta `data` contém o arquivo `zoo_data.js`, que armazena os dados que serão utilizados. Já a pasta `tests`, contém os testes unitários correspondentes a cada função, o nome do arquivo é o nome da função alvo acrescido do sufixo `.test.js`.

**Por exemplo:** o arquivo `src/getSpeciesByIds.js` conterá a implementação da função `getSpeciesByIds` e o arquivo `tests/getSpeciesByIds.test.js` conterá os testes unitários referentes a ela.

**Os arquivos que não estão indicados nos requisitos não devem ser alterados, ou sua avaliação poderá ser comprometida.**

---

### Data de entrega

- Projeto individual;
- Serão 2 dias de projeto;
- Data de entrega para avaliação final do projeto: `24/03/2022 14:00`

---

## Instruções para entregar seu projeto

### Antes de começar a desenvolver

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-020-a-project-zoo-functions.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-020-a-project-zoo-functions`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b luiza-zoo-functions-project`

4. Desenvolva a solução para os problemas nos arquivos dentro do diretório `src`. Você pode usar os arquivos do diretório `test` para verificar se a sua implementação está de acordo com o esperado;

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado os arquivos do diretório `src` em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin luiza-zoo-functions-project`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-020-a-project-zoo-functions/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-020-a-project-zoo-functions/pulls) e confira que o seu _Pull Request_ está criado.

---

### Durante o desenvolvimento

📌 **Pull Requests com issues no eslint não serão avaliadas, atente-se para resolvê-las antes de finalizar o desenvolvimento**

📌 **Os nomes dos arquivos não devem ser alterados.**

* Você pode adicionar outros arquivos, se julgar necessário. Qualquer dúvida, procure a Pessoa Instrutora que te acompanha.

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre, após um (ou alguns) `commits`, atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  6. `npm test` _(executa todos os testes presentes na aplicação)_
  7. `npm test path/to/file` _(executa apenas os testes presentes no arquivo path/to/file)_

### Dica para o desenvolvimento

Em sua vida de pessoa desenvolvedora, o pensamento algoritmico, processo de quebrar problemas complexos em pequenas partes para resolvê-los, ajudará a solucionar de maneira mais fácil os problemas complexos. Assim, uma boa forma de começar a desenvolver um projeto é lembrar que as funções são compostas por pequenos blocos de lógica que têm finalidade (função) específica. Ou seja, quebrar problemas grandes em menores tornará tudo mais simples de se entender e você sempre poderá reutilizar esses códigos em outras partes de sua aplicação.

### Depois de terminar o desenvolvimento (Opcional)

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

📌 **Lembre-se de garantir que todas as issues comentadas pelo eslint estão resolvidas**

---

## Requisitos do projeto

Você deverá implementar as funções que estão na pasta `src`. Para ver o retorno que a função deverá ter, leia o arquivo de testes referente a ela. Lembre-se de aplicar as novas funcionalidades do ES6 como arrow functions, template literals, spread operator, parâmetro rest, object destructuring, entre outras. Utilize também as _Higher Order Functions_.

**Dica**: uma importante soft-skill é saber como gerenciar seu tempo. Os exercícios não estão ordenados por ordem de complexidade e uns são mais desafiadores que os outros. Caso tenha dificuldade em algum deles, pule-o, resolva outro, e, quando se sentir confortável, volte ao exercício em questão. A ideia é não ficar preso a um problema por um longo período. Realizar outros exercícios pode te ajudar a enxergar e/ou aprender novas maneiras de se chegar ao resultado esperado.

Antes de começar, analise o arquivo `data/zoo_data.js`, para ver os dados que serão usados.

---

### 1. Implemente a função `getSpeciesByIds`

Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

**Observações técnicas**

- O parâmetro desta função pode ser alterado para atender ao requisito proposto.

**O que será avaliado**

- Caso receba nenhum parâmetro, necessário retornar um array vazio;
- Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
- Ao receber mais de um id, retorna um array com as espécies referentes aos ids.

---

### 2. Implemente a função `getAnimalsOlderThan`

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

**Observações técnicas**

- Deve retornar um valor booleano.

**O que será avaliado**

- Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
espécie possuem a idade mínima especificada.

---

### 3. Implemente a função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

**O que será avaliado**

- Sem parâmetros, retorna um objeto vazio
- Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
- Quando provido o último nome do funcionário, retorna o objeto do funcionário

---

### 4. Implemente a função `getRelatedEmployees`

Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções:

1 - `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

2 - `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas:
  * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.

Exemplo:

```javascript
throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

  **Observações técnicas**

  - Retorna um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por determinada pessoa com cargo de gerência.

  Exemplo de output:

  ```javascript
  [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
  ```

  - Dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

  **O que será avaliado**

  - Retorna `true` se o id passado for de um gerente;
  - Retorna `false` se o id passado não for de um gerente;
  - Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
  - Se o id passado **não** for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".

---

### 5. Implemente a função `countAnimals`

  Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

**Observações técnicas**

  - Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  - Com o argumento `{ specie: 'penguins' }`, retorna um número, a quantidade de pinguins no zoológico;
  - Com o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna um número, a quantidade de girafas do sexo feminino.

**O que será avaliado**

  - Sem parâmetros, retorna as espécies e sua quantidade;
  - Recebendo como parâmetro um objeto com a chave `specie`, retorna um número, a quantidade de animais daquela espécie;
  - Recebendo como parâmetro um objeto com a chave `specie` e `sex`, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado.

---

### 6. Implemente a função `calculateEntry`

Esta função irá receber um array de visitantes no seguinte formato:

```javascript
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```

Você deve isolar a parte da lógica na função `countEntrants` que se encontra no mesmo arquivo da função `calculateEntry`. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

* Pessoas com idade menor que 18 anos são classificadas como crianças (child);
* Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
* Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

O retorno da função deverá ser um objeto no seguinte formato: `{ child: 3, adult: 2, senior: 1 }`.

**Exemplo de uso da função `countEntrants`:**

```javascript
countEntrants(entrants);
```

**Saída:**

```json
{ "child": 3, "adult": 2, "senior": 1 }
```

Após terminar a implementação da função `countEntrants` você deverá utilizá-la para implementar a função `calculateEntry`. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

**Exemplo de uso da função `calculateEntry`:**

```javascript
calculateEntry(entrants);
```

**Saída:**

```javascript
187.94
```

**Observações técnicas**

- Ambas funções recebem como parâmetro um array contendo objetos que representam pessoas.

**O que será avaliado**

- Ao receber um array de visitantes, retorna um objeto com a contagem;
- Retorna 0 se nenhum argumento for passado;
- Retorna 0 se um objeto vazio for passado;
- Retorna o preço total a ser cobrado dado o array de pessoas.

---

### 7. Implemente a função `getAnimalMap`

A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

**Observações técnicas**

- Analise o teste unitário para entender os retornos que são esperados para esta função.

**O que será avaliado**

- Sem parâmetros, retorna animais categorizados por localização;
- Sem a opção `includeNames` especificada, retorna animais categorizados por localização;
- Com a opção `includeNames: true` especificada, retorna nomes de animais;
- Com a opção `sorted: true` especificada, retorna nomes de animais ordenados;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea;
- Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sorted: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;

---

### 8. Implemente a função `getSchedule`

A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

**Observações técnicas**

- Analise os testes unitários para entender os retornos que são esperados para esta função;
- Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.

**O que será avaliado**

- Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
- Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
- Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.

---

### 9. Implemente a função `getOldestFromFirstSpecies`

A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

**O que será avaliado**

- Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

---

### 10. Implemente a função `getEmployeesCoverage`

Esta função será responsável por associar informações de cobertura das pessoas funcionárias.

A cobertura deverá ser representada por um objeto com as seguintes propriedades:

```javascript
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
```

A função deve receber um objeto de opções que determinará seu comportamento, sendo:

* **name**: O nome ou sobrenome da pessoa a ser buscada
* **id**: O id da pessoa a ser buscada

**Exemplos de uso da função `getEmployeesCoverage`:**

```javascript
getEmployeesCoverage({ name: 'Sharonda' });
getEmployeesCoverage({ name: 'Spry' });
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });
```

**Saída:**

```json
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": [ "otters", "frogs" ],
  "locations": [ "SE", "SW" ]
}
```

Ao ser chamada sem argumentos, deverá retornar um array com a cobertura de todas as pessoas funcionárias:

**Exemplo:**

```javascript
getEmployeesCoverage();
```

**Saída:**

```javascript
[
  {
    "id": "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
    "fullName": "Nigel Nelson",
    "species": [ "lions", "tigers" ],
    "locations": [ "NE", "NW" ],
  },
  {
    "id": "0e7b460e-acf4-4e17-bcb3-ee472265db83",
    "fullName": "Burl Bethea",
    "species": [ "lions", "tigers", "bears", "penguins" ],
    "locations": [ "NE", "NW", "NW", "SE" ],
  },
  {
    "id": "fdb2543b-5662-46a7-badc-93d960fdc0a8",
    "fullName": "Ola Orloff",
    "species": [ "otters", "frogs", "snakes", "elephants" ],
    "locations": [ "SE", "SW", "SW", "NW" ],
  },
  //[...]
];
```

Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"Informações inválidas"**. Exemplo:

```javascript
throw new Error('Informações inválidas');
```

Você pode ler mais sobre a [função construtora **Error**, neste link.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

**Dica**: Crie funções que dividam a tarefa em partes menores, por exemplo, você poderia criar uma função `getSpecies` encarregada somente por buscar o nome das espécies que a pessoa é responsável.

**Observações técnicas**

- Ao receber o objeto de opções com a propriedade name, procura a pessoa funcionária correspondente;
- A opção name deverá aceitar nome e sobrenome para realizar a busca;
- Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias.

**O que será avaliado**

- Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente;
- A propriedade name do objeto de opções também funciona usando o segundo nome;
- Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente;
- Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
- Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.

---

## Avisos Finais

### Revisando um Pull Request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os projetos que chegaram para você.

---

### Avaliação do projeto

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [Formulário de avaliação de projeto](https://bit.ly/2OfLJPn)

---

### Ordem dos requisitos no avaliador automático

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

-->
