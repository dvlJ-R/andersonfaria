# Diagnostico tecnico do portfolio

## Data
2026-07-04

## Fonte principal
- [portfolio-strategy.md](portfolio-strategy.md)

## Objetivo deste diagnostico
Mapear o estado real do projeto atual e preparar a primeira sprint de evolucao do portfolio do Anderson Faria, sem migrar para Next.js/TypeScript agora e sem inventar experiencias profissionais.

---

## Resumo executivo

O projeto tem uma base funcional: a aplicacao compila com Vite, os componentes estao separados por secao e ja existe uma narrativa inicial sobre QA, automacao, processos e projetos. Isso e um bom ponto de partida.

O principal problema nao e tecnico de build. O principal problema e de estrategia aplicada ao codigo: o conteudo esta hardcoded em portugues, ainda nao segue a narrativa internacional definida em `docs/portfolio-strategy.md`, mistura metricas nao validadas com projetos reais, e nao tem uma camada central de conteudo para suportar EN/PT/NL.

Tambem existem pontos tecnicos importantes:

- `npm run build` passou;
- `npm run lint` falhou por um erro em `vite.config.js`;
- o site tem SEO quase inexistente;
- acessibilidade basica existe em alguns pontos, mas modais, botoes e animacoes precisam melhorar;
- ha risco de contraste fraco em secoes claras;
- `dist` nao estava no `.gitignore`, e foi adicionado como ajuste pequeno de higiene do repositorio.

Recomendacao principal: manter Vite + React + JavaScript por enquanto, criar uma camada `src/content/`, reescrever primeiro Hero/About/Skills/Projects com foco internacional, e so depois entrar em i18n completo, testes Playwright e polimento premium.

---

## Stack real do projeto

Identificado em `package.json`, `vite.config.js` e estrutura de arquivos:

- Vite `6.3.5`;
- React `19.1.0`;
- React DOM `19.1.0`;
- JavaScript com JSX;
- CSS por componente;
- Tailwind CSS 4 instalado via `@tailwindcss/vite`, mas a interface atual usa majoritariamente CSS manual;
- Radix UI/shadcn-like components presentes em `src/components/ui`;
- `lucide-react` instalado;
- `react-router-dom` instalado, mas a aplicacao atual e uma landing page unica sem rotas;
- ESLint 9 com flat config;
- alias `@` configurado para `src`.

Observacao sobre gerenciador de pacotes:

- existe `package-lock.json`, indicando uso de npm;
- `package.json` declara `packageManager` como pnpm;
- nao existe `pnpm-lock.yaml`;
- recomendacao: padronizar em npm agora ou migrar conscientemente para pnpm depois. Para a proxima sprint, usar npm e evitar mexer em dependencias sem necessidade.

---

## Estado dos scripts

### Build

Comando:

```txt
npm run build
```

Resultado: passou.

Resumo:

```txt
vite v6.3.5 building for production...
50 modules transformed
dist/index.html                  0.47 kB
dist/assets/index-*.css          39.04 kB
dist/assets/index-*.js           227.30 kB
built in 641ms
```

Diagnostico:

- a aplicacao compila;
- o bundle inicial esta aceitavel para o tamanho atual;
- ainda nao ha medicao de Lighthouse;
- `dist/` era gerado como untracked porque `.gitignore` nao ignorava build output.

### Lint

Comando:

```txt
npm run lint
```

Resultado: falhou.

Erro bloqueante:

```txt
vite.config.js
11:25  error  '__dirname' is not defined  no-undef
```

Avisos:

```txt
src/components/ui/badge.jsx
src/components/ui/button.jsx
src/components/ui/form.jsx
src/components/ui/navigation-menu.jsx
src/components/ui/sidebar.jsx
src/components/ui/toggle.jsx
```

Todos os avisos sao `react-refresh/only-export-components`, comuns em componentes UI gerados que exportam helpers alem de componentes.

Diagnostico:

- o erro real e o uso de `__dirname` em um projeto ESM;
- corrigir `vite.config.js` deve ser uma das primeiras tarefas tecnicas;
- os avisos de UI nao bloqueiam a aplicacao, mas devem ser tratados depois se quisermos lint totalmente limpo.

---

## Estrutura atual

Arquivos principais:

```txt
src/
  App.jsx
  App.css
  main.jsx
  index.css
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    About.jsx
    Technologies.jsx
    MarketInsights.jsx
    Projects.jsx
    Blog.jsx
    Contact.jsx
    Footer.jsx
    ui/
  hooks/
  lib/
```

`src/App.jsx` monta a pagina nesta ordem:

```txt
Navbar
Hero
Services
About
Technologies
MarketInsights
Projects
Blog
Contact
Footer
```

Diagnostico:

- a separacao por secoes ajuda;
- nao existe `src/content/`;
- nao existe `src/i18n/`;
- nao existe estrutura de rotas `/en`, `/pt`, `/nl`;
- nao existe pagina ou dados dedicados para case studies;
- nao existe suite de testes do portfolio;
- `index.css` esta vazio;
- `App.css` concentra tokens, globais, utilitarios, animacoes e botoes, mas ha duplicacoes em CSS de componentes.

---

## Pontos fortes

- O projeto compila em producao.
- A estrutura por componentes facilita refatoracao incremental.
- A identidade visual ja tem uma direcao reconhecivel: fundo escuro, verde, dourado e tom tecnico.
- `Navbar` ja observa secoes e destaca item ativo.
- `Projects` ja possui modal com detalhes, o que pode evoluir bem para case studies.
- `Contact` ja tem campos com labels associados.
- Existem media queries em praticamente todas as secoes.
- A documentacao estrategica ja esta em `docs/`.
- Ha dependencias prontas para icons, UI acessivel e rotas, caso sejam necessarias.

---

## Problemas encontrados

### Arquitetura

- Conteudo hardcoded dentro dos componentes.
- Nao ha camada central de conteudo para profile, skills, projetos, experiencia, labs e navegacao.
- Nao ha base de i18n.
- Componentes misturam responsabilidade visual, conteudo e dados.
- CSS global e CSS de componentes se sobrepoem, por exemplo `.section-title`, `.section-subtitle`, `.btn`, `.stat-number` e `.filter-btn`.
- `Hero.css` tem blocos duplicados de `.hero`, `.hero-background`, `.gradient-animation` e media queries.
- Ha muitos componentes UI instalados em `src/components/ui`, mas a landing page principal usa pouco ou quase nada deles.
- `react-router-dom` esta instalado, mas nao usado.
- `next-themes` esta instalado em um projeto que nao usa Next.js.

### Conteudo e posicionamento

- O idioma visual atual e portugues, mas a estrategia pede ingles como principal.
- Hero ainda nao comunica diretamente `QA Automation Engineer` para recrutadores internacionais.
- Faltam CTAs importantes: Download CV, LinkedIn e GitHub no Hero/Header.
- `Services` fala como prestacao de servico, mas a estrategia pede `Quality Approach / How I Work`.
- `Technologies` usa porcentagens como 95%, 90%, 88% e 85%; isso pode soar arbitrario e menos profissional.
- `MarketInsights` usa dados de mercado sem links verificaveis. Como estamos em 2026, estatisticas de 2021/2024 podem estar desatualizadas e devem ser removidas ou verificadas antes de publicar.
- `Blog` parece simulado: lista artigos e botoes, mas nao ha paginas reais.
- `Projects` ja tem uma estrutura parecida com case study, mas precisa ficar mais honesta e orientada a evidencias.
- Ha metricas fortes sem evidencia clara: `1248`, `32`, `99.5%`, `0.1%`, `24h`, `50+`, `90%`, `70%`.
- Algumas referencias a projetos e orgaos reais precisam de revisao de confidencialidade antes de ficarem publicas em ingles.
- O GitHub do footer esta com `href="#"`.
- O formulario de contato simula envio, mas nao envia mensagem real.

### SEO

- `index.html` tem `<title>anderson-portfolio</title>`.
- Nao ha meta description.
- Nao ha OpenGraph/Twitter card.
- Nao ha canonical.
- Nao ha metadados por idioma.
- `<html lang="en">` esta inconsistente com conteudo majoritariamente em portugues.
- Nao ha imagem de preview profissional.

### Acessibilidade

- Modal de projetos nao tem `role="dialog"`, `aria-modal`, foco inicial, foco preso ou fechamento por Escape.
- Botoes de filtro em `Projects` e `Blog` parecem interativos, mas nao filtram de fato.
- Botoes de filtro nao usam `aria-pressed`.
- Menu mobile tem `aria-expanded`, mas nao tem `aria-controls`.
- `aria-current="page"` em links de ancora pode ser trocado por `aria-current="location"` ou simplificado.
- Emojis usados como icones podem ser lidos por leitor de tela de forma ruidosa se nao forem decorativos com `aria-hidden`.
- Animacoes e smooth scroll nao respeitam `prefers-reduced-motion`.
- Faltam estilos claros de `focus-visible` para navegacao por teclado.
- Links `mailto:` e `tel:` em `Contact` usam `target="_blank"`, o que nao e necessario.
- Formularios tem labels, mas o envio simulado pode criar uma expectativa falsa.

### Design e responsividade

- A responsividade tem boa base, mas precisa de validacao visual real em mobile/tablet/desktop.
- Variaveis de texto foram pensadas para fundo escuro e sao reutilizadas em cards/secoes brancas. Exemplo: `--text-secondary: #c6c0a5` em fundo branco tende a contraste fraco.
- `--color-success` e usado em `Contact.css`, mas nao esta definido em `:root`.
- A paleta tem identidade, mas algumas secoes alternam claro/escuro com contraste e hierarquia inconsistentes.
- Cards usam raios muito variados (`12px`, `16px`, `20px`, `24px`, `28px`), criando menos consistencia visual.
- Ha muitos hover effects e animacoes; o portfolio deve parecer premium, mas recrutadores precisam de leitura rapida.
- O Hero usa paineis com metricas nao validadas; visualmente chama atencao, mas estrategicamente pode enfraquecer a confianca.
- Nao ha foto profissional, imagem real, OpenGraph ou visual forte conectado ao Anderson como pessoa/profissional.

### Performance

- Build atual e pequeno o suficiente para MVP.
- Import de Google Fonts dentro de CSS pode afetar carregamento e privacidade; ideal avaliar fonte local ou preconnect no futuro.
- Muitos pacotes instalados podem ser desnecessarios, embora nem todos entrem no bundle.
- Ainda nao ha Lighthouse.
- Nao ha testes automatizados do portfolio.

---

## Componentes que podem ser reaproveitados

### `Navbar`

Reaproveitar como base do futuro Header.

Evoluir para:

- navegacao em ingles;
- dados vindos de `src/content/navigation.js`;
- links para CV, LinkedIn e GitHub;
- language switcher EN/PT/NL;
- `aria-controls` no menu mobile.

### `Hero`

Reaproveitar layout e animacao inicial, mas trocar a narrativa.

Evoluir para:

- headline internacional;
- CTA `View Case Studies`;
- CTA `Download CV`;
- CTA `Contact Me`;
- badges de skills;
- remover ou substituir metricas nao validadas.

### `Services`

Transformar em `QualityApproach`.

Evoluir para o processo:

1. Understand product and risks;
2. Define test strategy;
3. Design scenarios;
4. Validate APIs and business rules;
5. Automate critical flows;
6. Integrate into CI/CD;
7. Document evidence and defects;
8. Improve continuously.

### `About`

Dividir conceitualmente em `About` e `ExperienceTimeline`.

Evoluir para:

- texto curto em ingles;
- experiencia real sem exagero;
- timeline com papel, dominio, responsabilidades e ferramentas;
- datas validadas.

### `Technologies`

Transformar em `CoreSkills`.

Evoluir para:

- categorias por area;
- niveis `Strong experience`, `Hands-on experience`, `Currently improving`;
- remover barras de porcentagem.

### `MarketInsights`

Reavaliar.

Opcoes:

- remover da home na primeira sprint;
- transformar parte em `LearningRoadmap`;
- manter apenas se houver fontes atualizadas e links confiaveis.

### `Projects`

Reaproveitar bastante.

Evoluir para:

- `CaseStudies`;
- dados vindos de `src/content/caseStudies.js`;
- status claro: `real-project`, `portfolio-project`, `learning-lab`;
- campos de contexto, desafio, papel, estrategia, ferramentas, entregas e impacto;
- disclaimers para projetos privados e labs.

### `Blog`

Nao deve ficar como blog falso.

Opcoes:

- remover da primeira versao;
- transformar em `Labs`;
- transformar em `LearningRoadmap`;
- reintroduzir como blog somente quando existirem artigos reais.

### `Contact`

Reaproveitar layout, mas ajustar para recrutadores internacionais.

Evoluir para:

- `International Availability`;
- LinkedIn, email e GitHub como CTAs principais;
- telefone/WhatsApp como secundario;
- remover envio simulado ou integrar uma ferramenta real;
- CTA para CV.

### `Footer`

Reaproveitar com ajustes.

Evoluir para:

- GitHub real;
- ingles como principal;
- links alinhados as novas secoes;
- skills e frase final mais objetivas.

---

## Riscos de refatoracao

- Alterar todas as secoes ao mesmo tempo pode quebrar navegacao por ancoras, estilos globais e responsividade.
- Criar i18n antes de separar conteudo aumentaria retrabalho.
- Migrar para Next.js ou TypeScript agora desviaria foco do problema real, que e posicionamento/conteudo/prova tecnica.
- Manter metricas nao verificadas pode prejudicar credibilidade internacional.
- Expor detalhes de projetos reais pode gerar risco de confidencialidade.
- Alterar CSS global sem mapa pode quebrar secoes que dependem das mesmas classes.
- Remover `MarketInsights`/`Blog` sem ajustar `Navbar` deixaria links mortos.

---

## Recomendacoes

1. Manter Vite + React + JavaScript nesta fase.
2. Corrigir o lint de `vite.config.js` antes das mudancas grandes.
3. Padronizar o uso de npm por enquanto, ja que existe `package-lock.json`.
4. Criar `src/content/` antes de reescrever as secoes.
5. Criar primeiro o conteudo em ingles.
6. Remover ou esconder metricas nao validadas.
7. Transformar `Projects` em case studies de verdade.
8. Substituir `Services` por `QualityApproach`.
9. Substituir `Technologies` por skills categorizadas e sem porcentagem.
10. Remover `Blog` da home ate existirem artigos reais ou transformar em Labs.
11. Reavaliar `MarketInsights` por causa de dados sem fonte e possivel desatualizacao.
12. Ajustar SEO basico no `index.html`.
13. Corrigir contraste em secoes claras.
14. Melhorar acessibilidade do modal, menu mobile, filtros e foco por teclado.
15. Adicionar Playwright depois que a estrutura inicial estiver estabilizada.

---

## Plano incremental da primeira sprint

### Objetivo da sprint

Transformar a primeira versao do portfolio em uma vitrine mais clara para recrutadores internacionais, sem migracao grande e sem reescrever o projeto inteiro.

### Etapa 1 - Higiene tecnica

- Corrigir `vite.config.js` para o lint passar.
- Decidir padrao de package manager documentado: npm por enquanto.
- Confirmar que `dist` fica ignorado no git.

### Etapa 2 - Conteudo central

Criar:

```txt
src/content/profile.js
src/content/navigation.js
src/content/skills.js
src/content/caseStudies.js
src/content/experience.js
src/content/labs.js
```

Inicialmente em ingles.

### Etapa 3 - Estrutura da home

Atualizar `src/App.jsx` para a ordem:

```txt
Navbar
Hero
ProfessionalSnapshot
About
CoreSkills
QualityApproach
CaseStudies
Labs
ExperienceTimeline
InternationalAvailability
Contact
Footer
```

Pode ser feito reaproveitando componentes atuais e renomeando depois.

### Etapa 4 - Copy principal

Atualizar:

- Hero;
- About;
- Contact;
- Footer;
- SEO basico em `index.html`.

### Etapa 5 - Prova tecnica

Atualizar:

- `Technologies` para `CoreSkills`;
- `Services` para `QualityApproach`;
- `Projects` para `CaseStudies`;
- remover porcentagens e metricas nao validadas.

### Etapa 6 - Validacao

Rodar:

```txt
npm run build
npm run lint
```

Depois validar manualmente:

- desktop;
- mobile;
- menu;
- links;
- modal;
- contraste.

---

## Arquivos provavelmente alterados na primeira sprint

Arquivos existentes:

```txt
.gitignore
index.html
src/App.jsx
src/App.css
src/components/Navbar.jsx
src/components/Navbar.css
src/components/Hero.jsx
src/components/Hero.css
src/components/Services.jsx
src/components/Services.css
src/components/About.jsx
src/components/About.css
src/components/Technologies.jsx
src/components/Technologies.css
src/components/Projects.jsx
src/components/Projects.css
src/components/Contact.jsx
src/components/Contact.css
src/components/Footer.jsx
src/components/Footer.css
vite.config.js
```

Arquivos novos provaveis:

```txt
src/content/profile.js
src/content/navigation.js
src/content/skills.js
src/content/caseStudies.js
src/content/experience.js
src/content/labs.js
src/components/ProfessionalSnapshot.jsx
src/components/ProfessionalSnapshot.css
src/components/QualityApproach.jsx
src/components/QualityApproach.css
src/components/CoreSkills.jsx
src/components/CoreSkills.css
src/components/CaseStudies.jsx
src/components/CaseStudies.css
src/components/Labs.jsx
src/components/Labs.css
src/components/InternationalAvailability.jsx
src/components/InternationalAvailability.css
```

Arquivos futuros, nao obrigatorios na primeira sprint:

```txt
src/i18n/en.js
src/i18n/pt.js
src/i18n/nl.js
playwright.config.js
tests/portfolio.spec.js
public/cv/anderson-faria-qa-automation-engineer-en.pdf
```

---

## Ordem sugerida de implementacao

1. Corrigir lint em `vite.config.js`.
2. Criar `src/content/` com conteudo em ingles.
3. Atualizar `Navbar` com navegacao alinhada a estrategia.
4. Atualizar `Hero` com posicionamento internacional e CTAs.
5. Criar `ProfessionalSnapshot`.
6. Atualizar `About` para texto curto e honesto.
7. Transformar `Services` em `QualityApproach`.
8. Transformar `Technologies` em `CoreSkills`.
9. Transformar `Projects` em `CaseStudies`.
10. Transformar ou remover `Blog`.
11. Transformar ou remover `MarketInsights`.
12. Atualizar `Contact` com disponibilidade internacional.
13. Corrigir SEO basico em `index.html`.
14. Rodar build/lint.
15. Validar responsividade e acessibilidade basica.

---

## Primeira implementacao pratica recomendada

A primeira mudanca pratica depois deste diagnostico deve ser:

```txt
Corrigir lint + criar src/content/ + atualizar Hero e About em ingles.
```

Motivo:

- resolve um erro tecnico bloqueante;
- cria a base para EN/PT/NL sem retrabalho;
- melhora imediatamente a primeira impressao para recrutadores;
- evita mexer em todas as secoes de uma vez.

Depois disso, a segunda mudanca deve ser:

```txt
Transformar Technologies em CoreSkills e Services em QualityApproach.
```

Essa dupla e a ponte entre "portfolio bonito" e "portfolio que mostra maturidade de QA".
