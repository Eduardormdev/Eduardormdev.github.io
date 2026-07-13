# 🌐 Eduardo Roberto — Developer Portfolio

> **Live site:** [eduardormdev.github.io](https://eduardormdev.github.io)
>
> 🇧🇷 [Versão em Português abaixo](#-eduardo-roberto--portfólio-de-desenvolvedor-português)

Bilingual (🇧🇷 PT / 🇨🇦 EN) single-page portfolio of **Eduardo Roberto**, Front-End / Full-Stack Developer — built with AI-assisted development tools and deployed on GitHub Pages.

![Status](https://img.shields.io/badge/status-live-34d399)
![Languages](https://img.shields.io/badge/languages-PT%20%7C%20EN-34d399)
![License](https://img.shields.io/badge/license-MIT-8aa398)

---

## 📖 About this project

This portfolio was designed with one specific audience in mind: **tech recruiters in Canada**, since I'm relocating to Toronto in August 2026. Every decision follows from that:

- **English-first, fully bilingual** — the site defaults to English, but every section (including project descriptions, the recommendation letter and keyboard shortcut hints) has a complete Portuguese version. Not machine-translated snippets: two full content trees, switched instantly without a page reload.
- **Recruiter-oriented content** — a dedicated *"Why Hire Me in Toronto"* section answers the questions a recruiter would actually ask (When are you available? What's your visa/relocation status? Do you speak English?) before they need to ask them.
- **Proof over claims** — instead of listing skills with made-up percentage bars, skills are grouped by honest proficiency levels (*Proficient / Comfortable / Familiar*), and every featured project links to something real and verifiable: a live SaaS site, a published WordPress platform, an active iFood business page.
- **A working product, not a brochure** — the contact form actually delivers email to my inbox through a serverless backend. Theme and language preferences persist. Keyboard shortcuts work. Details matter.

## ✨ Features

- **🌗 Dark / Light theme** — toggle via button or `T` key, persisted between visits (`localStorage`)
- **🌎 Bilingual PT / EN** — full content switch via toggle or `L` key, persisted
- **📬 Working contact form** — sends email directly to my inbox via Cloudflare Worker + Resend API, with a subject dropdown (Job Offer, Interview Invitation, Freelance Project…)
- **💬 WhatsApp integration** — floating action button + contact links (I don't take calls 😄)
- **⌨️ Keyboard shortcuts** — `1–6` navigate sections, `H` back to top, `T` theme, `L` language
- **📄 Resume downloads** — PT and EN versions (PDF)
- **📇 vCard download** — save my contact with one click
- **🗂 GitHub repo showcase** — with tag filtering
- **📱 Fully responsive** — desktop, tablet and mobile

## 🧭 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | About Me | Bio, quick stats, currently-learning stack |
| 2 | Experience | Interactive timeline — from junior dev to entrepreneur |
| 3 | Skills | Proficiency levels + categorized tech stack |
| 4 | Why Hire Me in Toronto | Relocation info for Canadian recruiters |
| 5 | Interests | RPG, AI, movies, travel, coffee & games |
| 6 | Projects | RPG Tokens Forge AI · Mundo Artificial · Dragon Burguer |
| 7 | Recommendations | Professional recommendation letter (PT/EN) |
| 8 | Education | B.S. Information Systems + technical courses |
| 9 | Contact | Form with subject dropdown + direct channels |

## 🛠 Tech Stack

**Front-end**
- HTML5 + CSS (CSS variables for theming, no CSS framework)
- JavaScript (React-based component runtime)
- Google Fonts: Space Grotesk + JetBrains Mono

**Back-end (contact form)**
- [Cloudflare Workers](https://workers.cloudflare.com/) — serverless email proxy (free tier)
- [Resend](https://resend.com/) — transactional email API
- API key stored as a Worker **Secret** — never exposed in the repository

**Built with AI tools**
- Claude AI — development, design and content
- Part of my daily AI-accelerated workflow (Claude, Lovable, Ollama)

## 📬 How the contact form works

```
Visitor fills form ──▶ Cloudflare Worker (holds RESEND_KEY as secret)
                              │
                              ▼
                        Resend API ──▶ 📥 my inbox
```

The static site never sees the API key. The Worker validates the request, calls Resend server-side and returns `{ success: true }`.

## 💡 Challenges & Lessons Learned

### 1. Sending email from a static site — the right way
My first instinct was to put the email API key directly in the front-end code. **That doesn't work, and shouldn't**: browser-side code is public by definition, and email APIs like Resend block browser requests (CORS) precisely because an exposed key lets anyone send email on your behalf. The lesson: *there is no such thing as a "safe" secret in front-end code.* The solution was a **Cloudflare Worker** acting as a minimal backend — the key lives as a server-side secret, the site only talks to the Worker. Free, fast, and the pattern applies to any third-party API a static site needs.

### 2. Real internationalization is more than translating strings
Supporting two languages meant more than swapping labels: dates, section titles, project descriptions, form options and even the recommendation letter needed parallel versions with equivalent tone. Keeping both trees consistent while iterating on content was a real maintenance exercise — and taught me why i18n architecture matters from day one.

### 3. Theming with CSS variables
The dark/light theme is driven by a small set of CSS custom properties (`--bg`, `--panel`, `--fg`, `--muted`, `--line`, `--accent`). Changing the theme swaps one set of values, and every component follows. The lesson: **design tokens first** — retrofitting a theme onto hardcoded colors is painful; designing with variables from the start makes it trivial.

### 4. Writing for recruiters, not for developers
The hardest part wasn't code — it was content. Cutting jargon, quantifying experience honestly, and answering the recruiter's implicit questions (availability, relocation, language) taught me that a portfolio is a **communication product**: the engineering only matters if the message lands.

### 5. AI-assisted development as a real workflow
This project was built end-to-end with AI pair-programming (Claude AI). What I learned about using AI well: it accelerates dramatically, but *direction, review and decisions stay human*. Knowing what to ask, spotting wrong output, and insisting on security best practices (like the API key issue above) is where the developer earns their place.

## 🚀 Running locally

No build step needed — it's a static site:

```bash
git clone https://github.com/Eduardormdev/Eduardormdev.github.io.git
cd Eduardormdev.github.io
# open index.html in your browser, or serve it:
npx serve .
```

## 📂 Structure

```
├── index.html          # The entire site (self-contained)
├── assets/
│   ├── Eduardo_Roberto_Curriculo_PT.pdf
│   └── Eduardo_Roberto_Resume_EN.pdf
└── README.md
```

## 📫 Contact

- **Email:** eduardorm.dev@gmail.com
- **LinkedIn:** [Eduardo Roberto Mendes](https://www.linkedin.com/in/eduardo-roberto-mendes-194a232a3/)
- **GitHub:** [@Eduardormdev](https://github.com/Eduardormdev)
- **WhatsApp:** [+55 16 99350-3223](https://wa.me/5516993503223)

📍 Franca, SP, Brazil → **relocating to Toronto, Canada (Aug 2026)** — open to front-end / full-stack opportunities.

*© 2026 Eduardo Roberto. MIT License.*

---
---

# 🌐 Eduardo Roberto — Portfólio de Desenvolvedor (Português)

> **Site no ar:** [eduardormdev.github.io](https://eduardormdev.github.io)

Portfólio bilíngue (🇧🇷 PT / 🇨🇦 EN) de página única de **Eduardo Roberto**, Desenvolvedor Front-End / Full-Stack — construído com ferramentas de desenvolvimento assistido por IA e publicado no GitHub Pages.

## 📖 Sobre este projeto

Este portfólio foi desenhado para um público específico: **recrutadores de tecnologia no Canadá**, já que estou de mudança para Toronto em agosto de 2026. Todas as decisões partem disso:

- **Inglês primeiro, totalmente bilíngue** — o site abre em inglês, mas cada seção (incluindo descrições de projetos, a carta de recomendação e as dicas de atalhos) tem versão completa em português. Não são trechos traduzidos por máquina: são duas árvores de conteúdo completas, trocadas instantaneamente sem recarregar a página.
- **Conteúdo orientado a recrutadores** — a seção *"Por que me contratar em Toronto"* responde às perguntas que um recrutador realmente faria (Quando você está disponível? Como está sua mudança? Você fala inglês?) antes que ele precise perguntar.
- **Prova em vez de promessa** — em vez de listar habilidades com barras de porcentagem inventadas, as skills são agrupadas por níveis honestos de proficiência (*Proficiente / Confortável / Familiar*), e cada projeto em destaque aponta para algo real e verificável: um SaaS no ar, uma plataforma WordPress publicada, uma página ativa no iFood.
- **Um produto funcional, não um panfleto** — o formulário de contato entrega e-mail de verdade na minha caixa de entrada através de um backend serverless. Preferências de tema e idioma persistem. Atalhos de teclado funcionam. Detalhes importam.

## ✨ Funcionalidades

- **🌗 Tema escuro / claro** — alterna por botão ou tecla `T`, persistido entre visitas (`localStorage`)
- **🌎 Bilíngue PT / EN** — troca completa de conteúdo por botão ou tecla `L`, persistida
- **📬 Formulário de contato funcional** — envia e-mail direto para minha caixa de entrada via Cloudflare Worker + API da Resend, com dropdown de assunto (Oferta de emprego, Convite para entrevista, Projeto freelance…)
- **💬 Integração com WhatsApp** — botão flutuante + links de contato (não atendo ligações 😄)
- **⌨️ Atalhos de teclado** — `1–6` navega entre seções, `H` volta ao topo, `T` tema, `L` idioma
- **📄 Download de currículo** — versões PT e EN (PDF)
- **📇 Download de vCard** — salve meu contato com um clique
- **🗂 Vitrine de repositórios do GitHub** — com filtro por tags
- **📱 Totalmente responsivo** — desktop, tablet e celular

## 🛠 Stack

**Front-end**
- HTML5 + CSS (variáveis CSS para os temas, sem framework CSS)
- JavaScript (runtime de componentes baseado em React)
- Google Fonts: Space Grotesk + JetBrains Mono

**Back-end (formulário de contato)**
- [Cloudflare Workers](https://workers.cloudflare.com/) — proxy de e-mail serverless (plano gratuito)
- [Resend](https://resend.com/) — API de e-mail transacional
- Chave de API armazenada como **Secret** do Worker — nunca exposta no repositório

**Construído com ferramentas de IA**
- Claude AI — desenvolvimento, design e conteúdo
- Parte do meu fluxo diário acelerado por IA (Claude, Lovable, Ollama)

## 📬 Como funciona o formulário de contato

```
Visitante preenche ──▶ Cloudflare Worker (guarda a RESEND_KEY como secret)
                              │
                              ▼
                        API da Resend ──▶ 📥 minha caixa de entrada
```

O site estático nunca vê a chave da API. O Worker valida a requisição, chama a Resend no servidor e retorna `{ success: true }`.

## 💡 Dificuldades e Aprendizados

### 1. Enviar e-mail de um site estático — do jeito certo
Meu primeiro instinto foi colocar a chave da API de e-mail direto no front-end. **Isso não funciona, e não deveria**: código de navegador é público por definição, e APIs de e-mail como a Resend bloqueiam requisições de navegador (CORS) justamente porque uma chave exposta permite que qualquer pessoa envie e-mails em seu nome. A lição: *não existe segredo "seguro" em código front-end.* A solução foi um **Cloudflare Worker** atuando como backend mínimo — a chave vive como secret no servidor, e o site só conversa com o Worker. Gratuito, rápido, e o padrão serve para qualquer API de terceiros que um site estático precise usar.

### 2. Internacionalização de verdade é mais que traduzir strings
Suportar dois idiomas significou mais do que trocar rótulos: datas, títulos de seção, descrições de projetos, opções do formulário e até a carta de recomendação precisaram de versões paralelas com tom equivalente. Manter as duas árvores consistentes enquanto o conteúdo evoluía foi um exercício real de manutenção — e me ensinou por que a arquitetura de i18n importa desde o primeiro dia.

### 3. Temas com variáveis CSS
O tema escuro/claro é controlado por um conjunto pequeno de propriedades customizadas (`--bg`, `--panel`, `--fg`, `--muted`, `--line`, `--accent`). Trocar o tema troca um conjunto de valores, e todos os componentes acompanham. A lição: **design tokens primeiro** — encaixar um tema em cores hardcoded depois é doloroso; projetar com variáveis desde o início torna trivial.

### 4. Escrever para recrutadores, não para desenvolvedores
A parte mais difícil não foi código — foi conteúdo. Cortar jargão, quantificar a experiência com honestidade e responder às perguntas implícitas do recrutador (disponibilidade, mudança, idioma) me ensinou que um portfólio é um **produto de comunicação**: a engenharia só importa se a mensagem chega.

### 5. Desenvolvimento assistido por IA como fluxo real
Este projeto foi construído de ponta a ponta com pair-programming de IA (Claude AI). O que aprendi sobre usar IA bem: ela acelera dramaticamente, mas *direção, revisão e decisões continuam humanas*. Saber o que pedir, identificar saídas erradas e insistir em boas práticas de segurança (como o caso da chave de API acima) é onde o desenvolvedor mostra seu valor.

## 🚀 Rodando localmente

Sem etapa de build — é um site estático:

```bash
git clone https://github.com/Eduardormdev/Eduardormdev.github.io.git
cd Eduardormdev.github.io
# abra o index.html no navegador, ou sirva com:
npx serve .
```

## 📫 Contato

- **E-mail:** eduardorm.dev@gmail.com
- **LinkedIn:** [Eduardo Roberto Mendes](https://www.linkedin.com/in/eduardo-roberto-mendes-194a232a3/)
- **GitHub:** [@Eduardormdev](https://github.com/Eduardormdev)
- **WhatsApp:** [+55 16 99350-3223](https://wa.me/5516993503223)

📍 Franca, SP, Brasil → **mudando para Toronto, Canadá (ago/2026)** — aberto a oportunidades front-end / full-stack.

*© 2026 Eduardo Roberto. Licença MIT.*
