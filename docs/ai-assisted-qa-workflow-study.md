# Estudo técnico: uso de IA assistiva na evolução de um portfólio profissional de QA

## Status
Estudo de caso técnico, não artigo acadêmico publicado.

## Data
2026-07-04

## Objetivo
Documentar, de forma segura e sem expor informações particulares, como Anderson Faria utiliza IA assistiva em um fluxo real de Quality Engineering, documentação técnica, análise de produto, refatoração incremental e validação de software.

Este material pode ser adaptado depois para uma seção pública do portfólio como:

```txt
AI-assisted QA Workflow Lab
```

---

## Resumo

Este estudo apresenta um fluxo prático de trabalho entre um profissional de QA e uma ferramenta de IA assistiva aplicada à evolução de um portfólio técnico internacional. O objetivo não foi usar IA para substituir julgamento humano, mas para acelerar análise, estruturação, documentação, revisão de riscos, melhoria de copy profissional, organização de conteúdo e validação incremental de código.

O trabalho foi conduzido com uma abordagem human-in-the-loop: o profissional definiu contexto, objetivos, restrições, critérios de honestidade profissional e decisões de posicionamento; a IA apoiou com análise, síntese, propostas de arquitetura, edição controlada de arquivos, execução de comandos, validação por build/lint e documentação rastreável.

O resultado parcial foi a transformação de um portfólio em React/Vite, originalmente com conteúdo hardcoded e majoritariamente em português, em uma base mais internacional, orientada a QA Automation, Quality Engineering, risco, API, CI/CD, automação e evolução honesta para AI-assisted Testing.

---

## Palavras-chave

- AI-assisted Testing;
- AI-assisted Quality Engineering;
- QA Automation;
- Human-in-the-loop;
- Prompt engineering;
- Risk-based testing;
- Technical documentation;
- Portfolio as product;
- Incremental refactoring;
- Software quality process.

---

## 1. Contexto

O projeto analisado é um portfólio profissional de QA construído com:

- Vite;
- React;
- JavaScript/JSX;
- CSS por componente;
- conteúdo inicialmente hardcoded;
- seções como Hero, About, Services, Technologies, Projects, Blog, Contact e Footer.

O objetivo estratégico foi reposicionar o portfólio como uma vitrine internacional para oportunidades em:

- QA Engineer;
- QA Automation Engineer;
- SDET em evolução;
- Quality Engineering;
- AI-assisted Testing como foco de crescimento;
- futuramente, QA aplicado a games e AI/ML QA, sem afirmar experiência que ainda não existe.

Desde o início, uma restrição importante foi definida: não usar IA para inflar experiência, inventar métricas, prometer senioridade artificial ou expor dados confidenciais.

---

## 2. Problema investigado

O problema não era apenas visual. O portfólio precisava evoluir em quatro dimensões:

1. Clareza profissional para recrutadores internacionais;
2. Estrutura técnica mais sustentável;
3. Narrativa honesta sobre QA, automação e evolução com IA;
4. Provas de maturidade em processo, documentação e validação.

Foram identificados problemas como:

- conteúdo em português quando o foco principal era internacional;
- ausência de uma camada central de conteúdo;
- SEO básico incompleto;
- métricas não validadas no Hero e em outras seções;
- tecnologias apresentadas com porcentagens arbitrárias;
- projetos ainda não estruturados como case studies;
- ausência de documentação técnica de decisões;
- necessidade de separar fatos reais, estudos, labs e aspirações futuras.

---

## 3. Metodologia de trabalho com IA

O fluxo adotado pode ser descrito como um ciclo de oito etapas.

### 3.1 Definição de intenção

Anderson definiu o objetivo de transformar o portfólio em uma vitrine internacional, com foco em QA Automation e Quality Engineering.

A IA foi usada para:

- organizar objetivos;
- comparar alternativas de posicionamento;
- identificar riscos de exagero;
- transformar ideias soltas em roadmap.

### 3.2 Curadoria de contexto

Foram fornecidos documentos externos com planos e respostas estratégicas. Esses materiais foram arquivados no projeto em:

```txt
docs/references/
```

Depois, foi criado um documento consolidado:

```txt
docs/portfolio-strategy.md
```

Essa etapa demonstrou uso de IA para transformar conversas e documentos brutos em uma base de decisão reutilizável.

### 3.3 Diagnóstico técnico

Antes de modificar o site, a IA analisou:

- stack real do projeto;
- estrutura de pastas;
- componentes existentes;
- scripts disponíveis;
- estado de build;
- estado de lint;
- riscos de arquitetura;
- SEO;
- acessibilidade;
- responsividade;
- problemas de conteúdo.

O diagnóstico foi documentado em:

```txt
docs/technical-diagnosis.md
```

Essa prática aproxima o uso de IA de um processo real de QA: observar o sistema, levantar evidências, identificar riscos e só então propor mudanças.

### 3.4 Planejamento incremental

O trabalho foi dividido em sprints pequenas:

- Sprint 1: base técnica, Hero, About, SEO e conteúdo centralizado;
- Sprint 2: Core Skills e Quality Approach;
- Sprint futura: Projects como Case Studies;
- Sprint futura: Labs de AI-assisted Testing;
- Sprint futura: QA do próprio portfólio com Playwright.

Esse uso da IA ajudou a evitar uma reescrita grande e arriscada.

### 3.5 Implementação assistida

As mudanças foram feitas com controle incremental:

- criação de `src/content/`;
- centralização de dados em arquivos como `profile.js`, `skills.js`, `navigation.js` e `experience.js`;
- atualização do Hero para inglês;
- atualização do About;
- transformação de Services em Quality Approach;
- transformação de Technologies em Core Skills;
- remoção de métricas e porcentagens não validadas;
- ajuste de SEO básico;
- correção do erro de lint no `vite.config.js`.

A IA atuou como par técnico para editar arquivos, mas com restrições explícitas:

- não migrar para Next.js;
- não migrar para TypeScript;
- não implementar i18n completo antes da base;
- não inventar experiência;
- não alterar seções fora do escopo de cada sprint.

### 3.6 Validação objetiva

Após as mudanças, foram executados:

```txt
npm run build
npm run lint
```

O build passou. O lint passou sem erros bloqueantes, restando apenas warnings conhecidos de componentes UI gerados.

Esse passo é importante porque demonstra que a IA não foi usada apenas para escrever texto, mas também para apoiar um ciclo técnico verificável.

### 3.7 Documentação contínua

Cada decisão importante foi registrada:

- estratégia;
- diagnóstico;
- fontes originais;
- próximos passos;
- riscos de overclaiming;
- mudanças feitas.

Essa documentação reduz dependência da memória da conversa e transforma o processo em ativo profissional.

### 3.8 Controle de privacidade e honestidade

O fluxo foi desenhado para evitar exposição de:

- dados internos;
- endpoints;
- informações confidenciais de projetos;
- detalhes pessoais desnecessários;
- métricas não comprovadas;
- afirmações profissionais exageradas.

Isso é essencial para um portfólio público.

---

## 4. Ações reais demonstradas

As ações abaixo são seguras para mencionar publicamente, porque descrevem práticas e métodos, não informações privadas.

### 4.1 Prompting orientado a objetivo

Anderson usou prompts longos e estruturados para definir:

- objetivo;
- escopo;
- restrições;
- critérios de aceite;
- arquivos de referência;
- o que não deveria ser feito.

Isso demonstra maturidade em prompt engineering aplicado a trabalho técnico, não apenas uso casual de IA.

### 4.2 Uso da IA como par de análise

A IA foi usada para:

- analisar documentos;
- sintetizar estratégia;
- identificar inconsistências;
- comparar plano ideal e stack real;
- transformar conteúdo de carreira em narrativa técnica;
- propor sprints pequenas.

### 4.3 Uso da IA como par de QA

O fluxo incluiu práticas próximas ao trabalho de QA:

- diagnóstico antes da ação;
- leitura de código antes da refatoração;
- identificação de riscos;
- separação entre fato, hipótese e aspiração;
- build/lint como validação;
- documentação de problemas e próximos passos.

### 4.4 Uso da IA como par de documentação

A IA foi usada para criar:

- estratégia consolidada;
- diagnóstico técnico;
- roadmap;
- critérios de aceite;
- conteúdo de portfólio;
- estudo técnico sobre o próprio processo.

### 4.5 Uso da IA como par de produto

As decisões foram orientadas por recrutadores e hiring managers:

- clareza acima de ornamentação;
- inglês como idioma principal;
- case studies em vez de cards genéricos;
- labs honestos para IA e games;
- posicionamento internacional.

---

## 5. Competências demonstradas

Este fluxo permite comunicar as seguintes competências:

### 5.1 AI-assisted QA workflow

Capacidade de usar IA para apoiar análise de qualidade, documentação, identificação de riscos e melhoria incremental de um produto digital.

### 5.2 Prompt engineering aplicado

Criação de prompts com contexto, restrições, critérios de aceite e objetivos técnicos claros.

### 5.3 Human-in-the-loop validation

Uso de IA com revisão humana, validação por comandos, controle de escopo e checagem de riscos.

### 5.4 Technical documentation

Transformação de conversas, planos e decisões em documentação rastreável.

### 5.5 Risk-based thinking

Preocupação constante com riscos de privacidade, exagero profissional, confidencialidade, manutenção e quebra técnica.

### 5.6 Incremental delivery

Divisão de um objetivo grande em sprints pequenas, testáveis e reversíveis.

---

## 6. Resultados obtidos até o momento

Resultados técnicos e de conteúdo:

- criação de documentação estratégica em `docs/`;
- criação de diagnóstico técnico;
- criação de uma camada central de conteúdo em `src/content/`;
- Hero reescrito em inglês para foco internacional;
- About reescrito de forma mais curta, técnica e honesta;
- seção de skills reorganizada por contexto e nível;
- seção de abordagem de qualidade estruturada como processo;
- remoção de métricas não validadas do Hero;
- remoção de porcentagens arbitrárias de skills;
- SEO básico melhorado;
- build funcionando;
- lint sem erros bloqueantes.

Resultados de aprendizado:

- uso mais consciente de IA como ferramenta de engenharia;
- melhor separação entre experiência real, estudo e direção futura;
- documentação mais forte do raciocínio de QA;
- base preparada para futuro AI-assisted Testing Lab.

---

## 7. Limitações

Este estudo tem limites importantes:

- não representa experiência profissional em produção com AI/ML;
- não envolve validação de modelos de machine learning;
- não mede produtividade com dados estatísticos formais;
- não substitui revisão humana;
- não deve ser apresentado como pesquisa acadêmica revisada por pares;
- não deve expor informações privadas da conversa ou de projetos reais.

A forma mais honesta de apresentar isso no portfólio é como:

```txt
AI-assisted QA Workflow Lab
```

ou:

```txt
Case study: using AI as a quality engineering copilot for portfolio modernization
```

---

## 8. Como transformar isso em conteúdo público

### Título recomendado em inglês

```txt
AI-assisted QA Workflow: using LLMs to support quality strategy, documentation and incremental delivery
```

### Descrição curta

```txt
A learning case study on how I use AI-assisted workflows to analyze a React/Vite portfolio, document technical decisions, structure QA positioning, reduce overclaiming risk and validate incremental changes through build and lint checks.
```

### Disclaimer público

```txt
This is a learning and workflow case study, not a claim of production AI/ML engineering experience.
```

### Skills que pode comunicar

- AI-assisted QA workflow;
- prompt-driven technical analysis;
- human-in-the-loop validation;
- technical documentation with AI support;
- risk-based quality thinking;
- incremental refactoring;
- build/lint validation;
- privacy-aware documentation.

### O que não comunicar

Evitar:

- AI Engineer;
- AI/ML QA specialist;
- production ML model validation;
- autonomous AI testing expert;
- qualquer promessa de expertise que ainda não esteja comprovada por projetos públicos.

---

## 9. Proposta de seção para o portfólio

```txt
AI-assisted QA Workflow Lab

I use AI-assisted workflows as a structured support layer for quality engineering activities: technical diagnosis, documentation, risk analysis, test strategy thinking, content organization and incremental implementation.

In this lab, I document how AI can support a QA professional without replacing critical thinking: the human defines goals, constraints, risks and acceptance criteria; the AI helps analyze, structure, implement and validate changes.

Focus areas:
- prompt-driven technical analysis;
- risk-based documentation;
- portfolio-as-product validation;
- build/lint feedback loops;
- content architecture for international positioning;
- safe and honest communication of skills.

Disclaimer:
This is a learning and workflow lab, not a claim of production AI/ML experience.
```

---

## 10. Conclusão

O uso de IA neste projeto agrega valor ao portfólio porque mostra um profissional de QA aplicando pensamento estruturado, controle de risco, documentação, validação técnica e melhoria incremental.

O diferencial não é dizer "uso IA". O diferencial é mostrar como a IA é usada com método:

- contexto claro;
- prompts bem definidos;
- restrições explícitas;
- validação por ferramentas;
- documentação;
- decisão humana;
- honestidade profissional.

Essa abordagem comunica maturidade para oportunidades internacionais em QA Automation e Quality Engineering, ao mesmo tempo em que abre uma trilha honesta para AI-assisted Testing.
