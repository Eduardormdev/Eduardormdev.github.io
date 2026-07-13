// ===== STATE =====
let currentLang = 'en';
let currentTheme = 'dark';
let currentFilter = 'all';
let sendStatus = 'idle';

const EMAIL_PROXY = 'https://portifolioemail.eduarido1432.workers.dev/';

// ===== TRANSLATIONS =====
const t = {
  pt: {
    nav: ['Sobre', 'Experiência', 'Habilidades', 'Projetos', 'Formação', 'Contato'],
    navCta: 'Contato',
    heroBadge: 'Aberto a oportunidades',
    heroGreeting: 'Olá, eu sou',
    heroRole: 'Desenvolvedor Front-End / Full-Stack',
    heroDesc: 'Construindo experiências web modernas com código limpo e ferramentas de IA. Mais de 3 anos criando plataformas de e-commerce, sites personalizados e sistemas inteligentes.',
    heroLocation: 'Franca, SP, Brasil — Mudando para Toronto, Canadá',
    heroBtn1: '✉ Fale comigo',
    heroBtn2: '↓ Baixar currículo',
    heroScroll: 'ROLE PARA EXPLORAR',
    aboutTitle: 'Sobre <span class="accent">Mim</span>',
    aboutRole: 'Desenvolvedor Front-End / Full-Stack',
    aboutP1: 'Sou desenvolvedor Front-End e Full-Stack com mais de 3 anos de experiência prática criando e personalizando sites e sistemas de venda para clientes de e-commerce e pequenos negócios. Meu stack principal inclui HTML, CSS, JavaScript, PHP e C# (MVC), com forte domínio de Bootstrap, Tailwind CSS e React.',
    aboutP2: 'O que me diferencia é a adoção antecipada de ferramentas de desenvolvimento com IA como Claude AI, Lovable e Ollama — integradas ao meu fluxo diário para construir sites e sistemas mais rápido sem sacrificar qualidade. Também tenho sólida experiência com CMS (WordPress, Elementor, WooCommerce) e gestão de marketplaces (Magalu, Mercado Livre, Shopify).',
    aboutP3: 'Estou me mudando para Toronto, Canadá em agosto de 2026, buscando ativamente oportunidades em desenvolvimento front-end ou full-stack. Sou apaixonado por código limpo, design centrado no usuário e aprendizado contínuo.',
    statYears: 'Anos de experiência',
    statProjects: 'Projetos entregues',
    statTech: 'Tecnologias',
    statLangs: 'Idiomas',
    learningTitle: 'Aprendendo agora',
    expTitle: 'Experiência <span class="accent">Profissional</span>',
    skillsTitle: 'Habilidades <span class="accent">Técnicas</span>',
    levelP: 'Proficiente',
    levelC: 'Confortável',
    levelF: 'Familiar',
    legendP: 'Proficiente — uso diário, alta confiança',
    legendC: 'Confortável — produtivo, conhecimento sólido',
    legendF: 'Familiar — base adquirida, evoluindo',
    cat1Title: 'Linguagens & Frameworks',
    cat2Title: 'CSS Frameworks',
    cat3Title: 'CMS & E-Commerce',
    cat4Title: 'Ferramentas & Outros',
    cat5Title: 'IA & Inteligência Artificial',
    cat6Title: 'Banco de Dados',
    projTitle: 'Projetos & <span class="accent">Repositórios</span>',
    projSubtitle: 'Alguns dos meus repositórios e projetos públicos no GitHub.',
    filterAll: 'Todos',
    recTitle: 'Recomendações',
    recSubtitle: 'Recomendação profissional de um parceiro e colaborador com quem trabalhei.',
    recName: 'Recomendação — Igor Pereira Alves',
    recRole: 'Igor Ia Tecex / Mundo Artificial',
    recQuote: 'Recomendo Eduardo Roberto sem reservas para posições de desenvolvimento front-end ou full-stack, e tenho total confiança tanto em sua capacidade técnica quanto em sua conduta profissional. Durante nossa colaboração, Eduardo demonstrou dedicação excepcional, entregando trabalho de alta qualidade com atenção aos detalhes e resolução proativa de problemas. Sua habilidade de integrar ferramentas de IA ao fluxo de desenvolvimento o diferencia como um desenvolvedor moderno e visionário.',
    recPersonName: 'Igor Pereira Alves',
    recPersonRole: 'CEO — Igor Ia Tecex Soluções em Tecnologia LTDA',
    recBtnPT: '↓ Português',
    recBtnEN: '↓ English',
    eduTitle: 'Formação',
    edu1Title: 'Bacharelado em Sistemas de Informação',
    edu1Inst: 'Anhanguera (anterior: Uni-FACEF)',
    edu1Desc: 'Estudos abrangentes em engenharia de software, bancos de dados, desenvolvimento web e arquitetura de sistemas.',
    edu1Progress: 'Progresso',
    edu1Date: '01/2021 — 12/2026 (previsão)',
    edu2Title: 'Curso Técnico de Hardware',
    edu2Inst: 'Remington — Franca, SP',
    edu2Desc: 'Montagem, reparo e manutenção de computadores, monitores, impressoras, celulares e periféricos.',
    edu2Date: '09/2019 — 12/2021',
    edu3Title: 'Ensino Médio',
    edu3Inst: 'João Marciano de Almeida — São Paulo',
    edu3Date: 'Concluído em 12/2020',
    contactTitle: 'Entre em <span class="accent">Contato</span>',
    contactSubtitle: 'Estou aberto a oportunidades em Toronto, Canadá. Se você tem uma pergunta, uma ideia de projeto ou só quer se conectar — fale comigo!',
    labelEmail: 'E-MAIL',
    labelWhatsapp: 'WHATSAPP',
    labelLocation: 'LOCALIZAÇÃO',
    location: 'Franca, SP, Brasil → Toronto, Canadá',
    shortcutsTitle: 'ATALHOS DE TECLADO',
    shortcutNav: 'Navegar entre seções',
    shortcutTop: 'Voltar ao topo',
    shortcutTheme: 'Alternar tema',
    shortcutLang: 'Alternar idioma',
    vcardBtn: '↓ Baixar vCard',
    formName: 'Seu nome',
    formEmail: 'Seu e-mail',
    formSubject: 'Assunto…',
    formSubjectOpts: ['', 'Oferta de emprego', 'Convite para entrevista', 'Projeto freelance', 'Parceria / Colaboração', 'Dúvida', 'Outro'],
    formMessage: 'Sua mensagem',
    sendIdle: '➤ Enviar mensagem',
    sendSending: '… Enviando',
    sendOk: '✓ Mensagem enviada!',
    sendErr: '✕ Erro — tente de novo',
    formNoteProxy: 'Sua mensagem vai direto para o e-mail de Eduardo.',
    formNoteFallback: 'Abre seu app de e-mail com a mensagem pronta.',
    footerCta: 'Vamos trabalhar juntos',
    footerCtaSub: 'Tem um projeto em mente? Adoraria ouvir sobre ele.',
    footerCtaBtn: '✉ Fale comigo',
    footerDesc: 'Desenvolvedor Front-End / Full-Stack construindo experiências web modernas com ferramentas de IA.',
    footerQuick: 'LINKS RÁPIDOS',
    footerConnect: 'CONECTE-SE',
    footerLinks: ['Experiência', 'Projetos', 'Contato'],
    copyright: '© 2026 Eduardo Roberto. Todos os direitos reservados.',
    resumeLabel: 'Currículo (PDF)',
    subjectDefault: 'Contato via portfólio',
    downloadZip: '↓ Baixar código-fonte (ZIP)'
  },
  en: {
    nav: ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'],
    navCta: 'Contact',
    heroBadge: 'Open to opportunities',
    heroGreeting: "Hi, I'm",
    heroRole: 'Front-End / Full-Stack Developer',
    heroDesc: 'Building modern web experiences with clean code and AI-powered tools. Over 3 years crafting e-commerce platforms, custom websites, and intelligent systems.',
    heroLocation: 'Franca, SP, Brazil — Moving to Toronto, Canada',
    heroBtn1: '✉ Get in touch',
    heroBtn2: '↓ Download resume',
    heroScroll: 'SCROLL TO EXPLORE',
    aboutTitle: 'About <span class="accent">Me</span>',
    aboutRole: 'Front-End / Full-Stack Developer',
    aboutP1: "I'm a Front-End and Full-Stack Developer with over 3 years of hands-on experience creating and customizing websites and sales systems for e-commerce clients and small businesses. My core stack includes HTML, CSS, JavaScript, PHP, and C# (MVC), with strong proficiency in Bootstrap, Tailwind CSS, and React.",
    aboutP2: 'What sets me apart is my early adoption of AI-powered development tools like Claude AI, Lovable, and Ollama — integrating them into my daily workflow to build sites and systems faster without sacrificing quality. I also bring solid experience with CMS platforms (WordPress, Elementor, WooCommerce) and marketplace management (Magalu, Mercado Livre, Shopify).',
    aboutP3: "I'm relocating to Toronto, Canada in August 2026, and I'm actively seeking opportunities in front-end or full-stack development. I'm passionate about clean code, user-centric design, and continuous learning.",
    statYears: 'Years of Experience',
    statProjects: 'Projects Delivered',
    statTech: 'Technologies',
    statLangs: 'Languages',
    learningTitle: 'Learning now',
    expTitle: 'Professional <span class="accent">Experience</span>',
    skillsTitle: 'Technical <span class="accent">Skills</span>',
    levelP: 'Proficient',
    levelC: 'Comfortable',
    levelF: 'Familiar',
    legendP: 'Proficient — daily use, high confidence',
    legendC: 'Comfortable — productive, solid knowledge',
    legendF: 'Familiar — foundation acquired, evolving',
    cat1Title: 'Languages & Frameworks',
    cat2Title: 'CSS Frameworks',
    cat3Title: 'CMS & E-Commerce',
    cat4Title: 'Tools & Others',
    cat5Title: 'AI & Artificial Intelligence',
    cat6Title: 'Databases',
    projTitle: 'Projects & <span class="accent">Repositories</span>',
    projSubtitle: 'Some of my public repositories and projects on GitHub.',
    filterAll: 'All',
    recTitle: 'Recommendations',
    recSubtitle: 'Professional recommendation from a partner and collaborator I worked with.',
    recName: 'Recommendation — Igor Pereira Alves',
    recRole: 'Igor Ia Tecex / Mundo Artificial',
    recQuote: 'I recommend Eduardo Roberto without reservation for front-end or full-stack development positions, and I have full confidence in both his technical ability and professional conduct. During our collaboration, Eduardo demonstrated exceptional dedication, delivering high-quality work with attention to detail and proactive problem-solving. His ability to integrate AI tools into the development workflow sets him apart as a modern and visionary developer.',
    recPersonName: 'Igor Pereira Alves',
    recPersonRole: 'CEO — Igor Ia Tecex Soluções em Tecnologia LTDA',
    recBtnPT: '↓ Português',
    recBtnEN: '↓ English',
    eduTitle: 'Education',
    edu1Title: 'Bachelor of Information Systems',
    edu1Inst: 'Anhanguera (formerly: Uni-FACEF)',
    edu1Desc: 'Comprehensive studies in software engineering, databases, web development, and systems architecture.',
    edu1Progress: 'Progress',
    edu1Date: '01/2021 — 12/2026 (expected)',
    edu2Title: 'Computer Hardware Technical Course',
    edu2Inst: 'Remington — Franca, SP',
    edu2Desc: 'Assembly, repair and maintenance of computers, monitors, printers, cell phones and peripherals.',
    edu2Date: '09/2019 — 12/2021',
    edu3Title: 'High School',
    edu3Inst: 'João Marciano de Almeida — São Paulo',
    edu3Date: 'Completed in 12/2020',
    contactTitle: 'Get in <span class="accent">Touch</span>',
    contactSubtitle: "I'm open to opportunities in Toronto, Canada. If you have a question, a project idea, or just want to connect — reach out!",
    labelEmail: 'E-MAIL',
    labelWhatsapp: 'WHATSAPP',
    labelLocation: 'LOCATION',
    location: 'Franca, SP, Brazil → Toronto, Canada',
    shortcutsTitle: 'KEYBOARD SHORTCUTS',
    shortcutNav: 'Navigate between sections',
    shortcutTop: 'Back to top',
    shortcutTheme: 'Toggle theme',
    shortcutLang: 'Toggle language',
    vcardBtn: '↓ Download vCard',
    formName: 'Your name',
    formEmail: 'Your email',
    formSubject: 'Subject…',
    formSubjectOpts: ['', 'Job offer', 'Interview invitation', 'Freelance project', 'Partnership / Collaboration', 'Question', 'Other'],
    formMessage: 'Your message',
    sendIdle: '➤ Send message',
    sendSending: '… Sending',
    sendOk: '✓ Message sent!',
    sendErr: '✕ Error — try again',
    formNoteProxy: "Your message goes straight to Eduardo's inbox.",
    formNoteFallback: 'Opens your email app with the message ready to send.',
    footerCta: "Let's work together",
    footerCtaSub: "Have a project in mind? I'd love to hear about it.",
    footerCtaBtn: '✉ Get in touch',
    footerDesc: 'Front-End / Full-Stack Developer building modern web experiences with AI tools.',
    footerQuick: 'QUICK LINKS',
    footerConnect: 'CONNECT',
    footerLinks: ['Experience', 'Projects', 'Contact'],
    copyright: '© 2026 Eduardo Roberto. All rights reserved.',
    resumeLabel: 'Resume (PDF)',
    subjectDefault: 'Contact via portfolio',
    downloadZip: '↓ Download source code (ZIP)'
  }
};

// ===== DATA =====
const jobsData = {
  pt: [
    { title: 'Empreendedor / Proprietário', company: 'Dragon Burguer — Franca, SP', badge: 'Negócio próprio', dates: '2025 — atual', desc: 'Fundou e gerencia uma lanchonete fast-food de hambúrgueres — cardápio, fornecedores, integração com iFood, atendimento, marketing e operação diária. Marca construída do zero, com crescimento consistente e boas avaliações no iFood.', tags: ['Empreendedorismo','iFood','Meta Ads','Gestão','Marketing'] },
    { title: 'Desenvolvedor Full-Stack', company: 'Igor Ia Tecex Soluções em Tecnologia LTDA', badge: 'Projeto autônomo', dates: '2026 — atual', desc: 'Criação e desenvolvimento do rpgtokensforgeai.com, plataforma com IA para gerar tokens, mapas e personagens de RPG para mesas virtuais como Roll20 e Foundry VTT. Uso de Lovable, Claude AI e ferramentas de design para acelerar o desenvolvimento.', tags: ['IA generativa','Lovable','Claude AI','Web'] },
    { title: 'Analista de E-commerce', company: 'Eletrônica Castro — Franca, SP', badge: 'CLT', dates: '2025', desc: 'Cadastro de produtos e gestão de estoque no sistema de vendas; gestão de contas e anúncios em marketplaces; atendimento ao cliente sobre pedidos e produtos.', tags: ['E-commerce','Magalu','Mercado Livre','Estoque','Atendimento'] },
    { title: 'Estagiário Desenvolvedor Front-End', company: 'Irroba — Plataforma de E-commerce', badge: 'Estágio', dates: '04/2023 — 09/2024', desc: 'Desenvolvimento web para clientes da plataforma, incluindo personalizações e novas funcionalidades front-end. Comunicação direta com clientes para levantamento de requisitos e orçamentos.', tags: ['PHP','jQuery','Bootstrap','Tailwind','JSON'] },
    { title: 'Desenvolvedor WordPress', company: 'Mundo Artificial, Waezor', badge: 'Freelance', dates: '2022 — 2024', desc: 'Sites construídos do zero com WordPress e Elementor para vários clientes. Estratégias de SEO com Google Analytics, Tag Manager e AdSense; configuração de WooCommerce para lojas virtuais.', tags: ['WordPress','Elementor','WooCommerce','SEO','Google Analytics'] },
    { title: 'Desenvolvedor Júnior Full-Stack', company: 'LCS-I', badge: 'Júnior', dates: '2021 — 2022', desc: 'Sistema de vendas em C# MVC e site institucional com HTML, CSS/Materialize e PHP. SQL Server para armazenamento e consultas de dados.', tags: ['C# MVC','SQL Server','PHP','Materialize'] }
  ],
  en: [
    { title: 'Entrepreneur / Owner', company: 'Dragon Burguer — Franca, SP', badge: 'Own Business', dates: '2025 — Present', desc: 'Founded and run a fast-food burger restaurant — menu development, suppliers, iFood integration, customer service, marketing, and daily operations. Built the brand from scratch, achieving consistent growth and positive reviews on iFood.', tags: ['Entrepreneurship','iFood','Meta Ads','Management','Marketing'] },
    { title: 'Full-Stack Developer', company: 'Igor Ia Tecex Soluções em Tecnologia LTDA', badge: 'Autonomous Project', dates: '2026 — Present', desc: 'Creating and developing rpgtokensforgeai.com, an AI-powered platform for generating RPG tokens, maps, and characters for virtual tabletops like Roll20 and Foundry VTT. Leveraging Lovable, Claude AI, and design tools to accelerate development.', tags: ['Generative AI','Lovable','Claude AI','Web'] },
    { title: 'E-commerce Analyst', company: 'Eletrônica Castro — Franca, SP', badge: 'Full-time', dates: '2025', desc: 'Managed product listings and inventory in the sales system; managed marketplace accounts and listings; handled customer service for orders and product inquiries.', tags: ['E-commerce','Magalu','Mercado Livre','Inventory Management','Customer Service'] },
    { title: 'Front-End Developer Intern', company: 'Irroba — E-Commerce Platform', badge: 'Internship', dates: '04/2023 — 09/2024', desc: 'Developed web solutions for platform clients, including customizations and new front-end features. Communicated directly with clients for requirements gathering and budgeting.', tags: ['PHP','jQuery','Bootstrap','Tailwind','JSON'] },
    { title: 'WordPress Developer', company: 'Mundo Artificial, Waezor', badge: 'Freelance', dates: '2022 — 2024', desc: 'Built websites from scratch using WordPress and Elementor for multiple clients. Implemented SEO strategies with Google Analytics, Tag Manager, and AdSense. Configured WooCommerce for online stores.', tags: ['WordPress','Elementor','WooCommerce','SEO','Google Analytics'] },
    { title: 'Intern → Junior Full-Stack Developer', company: 'LCS-I', badge: 'Junior', dates: '2021 — 2022', desc: 'Developed a C# MVC sales system and the company website (HTML, CSS/Materialize, PHP). Worked with SQL Server for data storage and queries.', tags: ['C# MVC','SQL Server','PHP','Materialize'] }
  ]
};

const reposData = {
  pt: [
    { name: 'jpa-rpg', url: 'https://github.com/Eduardormdev/jpa-rpg', desc: 'Projeto com tema de RPG construído com Java Persistence API', tags: ['Java','JPA','RPG'] },
    { name: 'projeto-receitas', url: 'https://github.com/Eduardormdev/projeto-receitas', desc: 'Aplicação web de gerenciamento de receitas', tags: ['Web App','Recipes'] },
    { name: 'university_JS_lesson', url: 'https://github.com/Eduardormdev/university_JS_lesson', desc: 'Lições e exercícios de JavaScript da faculdade', tags: ['JavaScript','Education'] },
    { name: 'Projeto-Mobile-Anhanguera', url: 'https://github.com/Eduardormdev/Projeto-Mobile-Anhanguera', desc: 'Projeto de desenvolvimento mobile da faculdade Anhanguera', tags: ['Mobile','University'] },
    { name: 'ProjetoFaculdade-Analise-e-Desenvolvimento-Sistemas', url: 'https://github.com/Eduardormdev/ProjetoFaculdade-Analise-e-Desenvolvimento-Sistemas', desc: 'Projeto acadêmico de Análise e Desenvolvimento de Sistemas', tags: ['Systems Analysis','University'] },
    { name: 'Email Validation Project', url: 'https://github.com/Eduardormdev/Projeto-de-Valida-o-De-E-mail-javascript-anhanguera', desc: 'Ferramenta de validação de e-mail em JavaScript — trabalho da faculdade', tags: ['JavaScript','Validation'] }
  ],
  en: [
    { name: 'jpa-rpg', url: 'https://github.com/Eduardormdev/jpa-rpg', desc: 'RPG-themed project built with Java Persistence API', tags: ['Java','JPA','RPG'] },
    { name: 'projeto-receitas', url: 'https://github.com/Eduardormdev/projeto-receitas', desc: 'Recipe management web application', tags: ['Web App','Recipes'] },
    { name: 'university_JS_lesson', url: 'https://github.com/Eduardormdev/university_JS_lesson', desc: 'JavaScript lessons and exercises from university coursework', tags: ['JavaScript','Education'] },
    { name: 'Projeto-Mobile-Anhanguera', url: 'https://github.com/Eduardormdev/Projeto-Mobile-Anhanguera', desc: 'Mobile development project from Anhanguera University', tags: ['Mobile','University'] },
    { name: 'ProjetoFaculdade-Analise-e-Desenvolvimento-Sistemas', url: 'https://github.com/Eduardormdev/ProjetoFaculdade-Analise-e-Desenvolvimento-Sistemas', desc: 'Systems Analysis and Development academic project', tags: ['Systems Analysis','University'] },
    { name: 'Email Validation Project', url: 'https://github.com/Eduardormdev/Projeto-de-Valida-o-De-E-mail-javascript-anhanguera', desc: 'Email validation tool built with JavaScript for university', tags: ['JavaScript','Validation'] }
  ]
};

const skillLevels = [
  { name: 'HTML / CSS', level: 'p' },
  { name: 'JavaScript', level: 'c' },
  { name: 'React', level: 'c' },
  { name: 'PHP', level: 'c' },
  { name: 'Tailwind CSS', level: 'p' },
  { name: 'WordPress / WooCommerce', level: 'c' },
  { name: 'SQL Server', level: 'f' },
  { name: 'AI Tools (Claude, Lovable, Ollama)', level: 'c' }
];

const categories = [
  { icon: '&lt;/&gt;', titleKey: 'cat1Title', tags: ['HTML','CSS','JavaScript','jQuery','JSON','PHP','C# (MVC)','React'] },
  { icon: '❖', titleKey: 'cat2Title', tags: ['Bootstrap','Materialize','Tailwind CSS'] },
  { icon: '▣', titleKey: 'cat3Title', tags: ['WordPress','Elementor','WooCommerce','Shopify','iFood','Magalu','Mercado Livre'] },
  { icon: '⚙', titleKey: 'cat4Title', tags: ['Git / GitHub','VS Code','Figma','Node.js','cPanel'] },
  { icon: '✦', titleKey: 'cat5Title', tags: ['Claude AI','Lovable','Ollama','ChatGPT'] },
  { icon: '🗄', titleKey: 'cat6Title', tags: ['SQL Server'] }
];

// ===== THEME =====
function getThemeVars(dark, accent) {
  if (dark) {
    return {
      '--bg': '#060a09', '--panel': '#0b100e', '--fg': '#e8f2ec',
      '--muted': '#8aa398', '--line': '#17251f', '--accent': accent,
      '--navbg': 'rgba(6,10,9,.85)', '--dot': 'rgba(52,211,153,.06)',
      '--chipbg': 'rgba(16,24,20,.4)'
    };
  }
  return {
    '--bg': '#f4f8f5', '--panel': '#ffffff', '--fg': '#15211b',
    '--muted': '#57695f', '--line': '#dbe6de', '--accent': '#0e9f6e',
    '--navbg': 'rgba(244,248,245,.88)', '--dot': 'rgba(14,159,110,.08)',
    '--chipbg': 'rgba(230,240,233,.6)'
  };
}

function applyTheme() {
  const dark = currentTheme === 'dark';
  const vars = getThemeVars(dark, '#34d399');
  const el = document.documentElement;
  Object.keys(vars).forEach(k => el.style.setProperty(k, vars[k]));
  document.body.style.background = vars['--bg'];
  document.getElementById('themeBtn').textContent = dark ? '☾' : '☀';
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('edu-portfolio-theme', currentTheme); } catch(e) {}
  applyTheme();
}

// ===== LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('edu-portfolio-lang', lang); } catch(e) {}
  document.getElementById('btnPT').classList.toggle('active', lang === 'pt');
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  renderAll();
}

// ===== RENDER HELPERS =====
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return document.querySelectorAll(sel); }

function setText(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderNav() {
  const l = t[currentLang];
  const links = qs('.nav-links');
  links.innerHTML = l.nav.map((text, i) => {
    const href = ['#about','#experience','#skills','#projects','#education','#contact'][i];
    if (i === l.nav.length - 1) return `<a href="${href}" class="nav-cta">${text}</a>`;
    return `<a href="${href}">${text}</a>`;
  }).join('');
}

function renderHero() {
  const l = t[currentLang];
  setText('heroBadge', `<span class="dot"></span>${l.heroBadge}`);
  setText('heroGreeting', l.heroGreeting);
  setText('heroRole', l.heroRole);
  setText('heroDesc', l.heroDesc);
  setText('heroLocation', `<span class="icon">◎</span> ${l.heroLocation}`);
  qs('#heroBtn1').textContent = l.heroBtn1;
  qs('#heroBtn2').textContent = l.heroBtn2;
  qs('#heroBtn2').href = currentLang === 'pt' ? 'assets/Eduardo_Roberto_Curriculo_PT.pdf' : 'assets/Eduardo_Roberto_Resume_EN.pdf';
  setText('heroScrollText', l.heroScroll);
}

function renderAbout() {
  const l = t[currentLang];
  qs('#aboutTitle').innerHTML = l.aboutTitle;
  qs('.about-card .role').textContent = l.aboutRole;
  qs('#aboutP1').textContent = l.aboutP1;
  qs('#aboutP2').textContent = l.aboutP2;
  qs('#aboutP3').textContent = l.aboutP3;
  qs('#statYearsLabel').textContent = l.statYears;
  qs('#statProjectsLabel').textContent = l.statProjects;
  qs('#statTechLabel').textContent = l.statTech;
  qs('#statLangsLabel').textContent = l.statLangs;
  qs('#learningTitle').innerHTML = `<span class="icon">▹</span>${l.learningTitle}`;
}

function renderExperience() {
  const l = t[currentLang];
  qs('#expTitle').innerHTML = l.expTitle;
  const jobs = jobsData[currentLang];
  const container = qs('.timeline');
  container.innerHTML = jobs.map(job => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="timeline-icon">▣</span>
          <h3>${job.title}</h3>
          <span class="timeline-dates">${job.dates}</span>
        </div>
        <div class="timeline-meta">
          <span class="timeline-company">${job.company}</span>
          <span class="timeline-badge">${job.badge}</span>
        </div>
        <p class="timeline-desc">${job.desc}</p>
        <div class="timeline-tags">
          ${job.tags.map(tag => `<span class="tag-accent">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderSkills() {
  const l = t[currentLang];
  qs('#skillsTitle').innerHTML = l.skillsTitle;
  const grid = qs('.skills-grid');
  grid.innerHTML = skillLevels.map(sk => {
    const levelKey = sk.level === 'p' ? 'levelP' : sk.level === 'c' ? 'levelC' : 'levelF';
    const pillClass = sk.level === 'p' ? 'pill-p' : sk.level === 'c' ? 'pill-c' : 'pill-f';
    return `<div class="skill-row"><span class="skill-name">${sk.name}</span><span class="pill ${pillClass}">${l[levelKey]}</span></div>`;
  }).join('');

  qs('.skill-legend').innerHTML = `
    <span><span style="color:#34d399">●</span> ${l.legendP}</span>
    <span><span style="color:#58a6ff">●</span> ${l.legendC}</span>
    <span><span style="color:var(--muted,#8aa398)">○</span> ${l.legendF}</span>
  `;

  const catsContainer = qs('.skill-categories');
  catsContainer.innerHTML = categories.map(cat => `
    <div class="category-card">
      <div class="category-title"><span class="category-icon">${cat.icon}</span>${l[cat.titleKey]}</div>
      <div class="category-tags">${cat.tags.map(tag => `<span class="category-tag">${tag}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderProjects() {
  const l = t[currentLang];
  qs('#projTitle').innerHTML = l.projTitle;
  qs('#projSubtitle').textContent = l.projSubtitle;

  const repos = reposData[currentLang];
  const counts = {};
  repos.forEach(r => r.tags.forEach(tag => { counts[tag] = (counts[tag] || 0) + 1; }));

  // Render filter chips
  const filterBar = qs('.filter-bar');
  filterBar.innerHTML = `<button class="filter-chip ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">${l.filterAll} (${repos.length})</button>` +
    Object.keys(counts).sort().map(tag => {
      const isActive = currentFilter === tag;
      return `<button class="filter-chip ${isActive ? 'active' : ''}" data-filter="${tag}">${tag} (${counts[tag]})</button>`;
    }).join('');

  // Add click handlers
  filterBar.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  // Render project cards
  const filtered = currentFilter === 'all' ? repos : repos.filter(r => r.tags.includes(currentFilter));
  const grid = qs('.projects-grid');
  grid.innerHTML = filtered.map(repo => `
    <a href="${repo.url}" target="_blank" rel="noopener" class="project-card">
      <h3>${repo.name}</h3>
      <span class="url">${repo.url}</span>
      <p class="desc">${repo.desc}</p>
      <div class="tags">
        ${repo.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

function renderRecommendation() {
  const l = t[currentLang];
  qs('#recTitle').textContent = l.recTitle;
  qs('#recSubtitle').textContent = l.recSubtitle;
  qs('#recName').textContent = l.recName;
  qs('#recRole').textContent = l.recRole;
  qs('#recQuote').textContent = l.recQuote;
  qs('#recPersonName').textContent = l.recPersonName;
  qs('#recPersonRole').textContent = l.recPersonRole;
  qs('#recBtnPT').textContent = l.recBtnPT;
  qs('#recBtnEN').textContent = l.recBtnEN;
}

function renderEducation() {
  const l = t[currentLang];
  qs('#eduTitle').textContent = l.eduTitle;
  qs('#edu1Title').textContent = l.edu1Title;
  qs('#edu1Inst').textContent = l.edu1Inst;
  qs('#edu1Desc').textContent = l.edu1Desc;
  qs('#edu1Progress').textContent = l.edu1Progress;
  qs('#edu1Date').textContent = l.edu1Date;
  qs('#edu2Title').textContent = l.edu2Title;
  qs('#edu2Inst').textContent = l.edu2Inst;
  qs('#edu2Desc').textContent = l.edu2Desc;
  qs('#edu2Date').textContent = l.edu2Date;
  qs('#edu3Title').textContent = l.edu3Title;
  qs('#edu3Inst').textContent = l.edu3Inst;
  qs('#edu3Date').textContent = l.edu3Date;
}

function renderContact() {
  const l = t[currentLang];
  qs('#contactTitle').innerHTML = l.contactTitle;
  qs('#contactSubtitle').textContent = l.contactSubtitle;
  qs('#labelEmail').textContent = l.labelEmail;
  qs('#labelWhatsapp').textContent = l.labelWhatsapp;
  qs('#labelLocation').textContent = l.labelLocation;
  qs('#locationText').textContent = l.location;
  qs('#shortcutsTitle').textContent = l.shortcutsTitle;
  qs('#shortcutNavText').textContent = l.shortcutNav;
  qs('#shortcutTopText').textContent = l.shortcutTop;
  qs('#shortcutThemeText').textContent = l.shortcutTheme;
  qs('#shortcutLangText').textContent = l.shortcutLang;
  qs('#vcardBtn').textContent = l.vcardBtn;

  // Update form placeholders
  qs('#formName').placeholder = l.formName;
  qs('#formEmail').placeholder = l.formEmail;
  qs('#formSubject').options[0].text = l.formSubject;
  const opts = l.formSubjectOpts;
  qs('#formSubject').innerHTML = opts.map(o => o ? `<option value="${o}">${o}</option>` : `<option value="">${l.formSubject}</option>`).join('');
  qs('#formMessage').placeholder = l.formMessage;

  // Form note
  qs('#formNote').textContent = EMAIL_PROXY ? l.formNoteProxy : l.formNoteFallback;

  // Update send button
  updateSendButton();

  // Update resume float button
  qs('#floatResume').textContent = '▤ ' + l.resumeLabel;
  qs('#floatResume').href = currentLang === 'pt' ? 'assets/Eduardo_Roberto_Curriculo_PT.pdf' : 'assets/Eduardo_Roberto_Resume_EN.pdf';
}

function renderFooter() {
  const l = t[currentLang];
  qs('#footerCtaTitle').textContent = l.footerCta;
  qs('#footerCtaSub').textContent = l.footerCtaSub;
  qs('#footerCtaBtn').textContent = l.footerCtaBtn;
  qs('#footerDesc').textContent = l.footerDesc;
  qs('#footerQuickTitle').textContent = l.footerQuick;
  qs('#footerConnectTitle').textContent = l.footerConnect;
  qs('#copyright').innerHTML = l.copyright;

  const footerLinkIds = ['footerLink1', 'footerLink2', 'footerLink3'];
  const footerHrefs = ['#experience', '#projects', '#contact'];
  l.footerLinks.forEach((text, i) => {
    qs(`#${footerLinkIds[i]}`).textContent = text;
    qs(`#${footerLinkIds[i]}`).href = footerHrefs[i];
  });
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderRecommendation();
  renderEducation();
  renderContact();
  renderFooter();

  // Update download ZIP button text
  const dlBtn = document.getElementById('downloadZipBtn');
  if (dlBtn) dlBtn.textContent = t[currentLang].downloadZip;
}

function updateSendButton() {
  const l = t[currentLang];
  let label = l.sendIdle;
  if (sendStatus === 'sending') label = l.sendSending;
  if (sendStatus === 'ok') label = l.sendOk;
  if (sendStatus === 'err') label = l.sendErr;
  qs('#sendBtn').textContent = label;
}

// ===== CONTACT FORM =====
function sendMessage() {
  const l = t[currentLang];
  const name = qs('#formName').value;
  const email = qs('#formEmail').value;
  const subject = qs('#formSubject').value || l.subjectDefault;
  const message = qs('#formMessage').value;

  if (sendStatus === 'sending') return;

  if (!EMAIL_PROXY) {
    const body = (currentLang === 'pt' ? 'Nome: ' : 'Name: ') + name + '\nEmail: ' + email + '\n\n' + message;
    window.location.href = 'mailto:eduardorm.dev@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    return;
  }

  sendStatus = 'sending';
  updateSendButton();

  fetch(EMAIL_PROXY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
  }).then(r => r.json()).then(res => {
    if (res.success) {
      qs('#formName').value = '';
      qs('#formEmail').value = '';
      qs('#formSubject').value = '';
      qs('#formMessage').value = '';
      sendStatus = 'ok';
    } else {
      sendStatus = 'err';
    }
    updateSendButton();
    setTimeout(() => { sendStatus = 'idle'; updateSendButton(); }, 4000);
  }).catch(() => {
    sendStatus = 'err';
    updateSendButton();
    setTimeout(() => { sendStatus = 'idle'; updateSendButton(); }, 4000);
  });
}

// ===== VCARD =====
function getVcardHref() {
  const vcard = 'BEGIN:VCARD\nVERSION:3.0\nFN:Eduardo Roberto\nTITLE:Front-End / Full-Stack Developer\nTEL;TYPE=CELL:+5516993503223\nEMAIL:eduardorm.dev@gmail.com\nURL:https://github.com/Eduardormdev\nEND:VCARD';
  return 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
}

// ===== KEYBOARD SHORTCUTS =====
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;
    const k = e.key.toLowerCase();
    if (k === 't') toggleTheme();
    if (k === 'l') setLang(currentLang === 'pt' ? 'en' : 'pt');
    if (k === 'h') window.scrollTo({ top: 0, behavior: 'smooth' });
    const ids = ['about','experience','skills','projects','education','contact'];
    const n = parseInt(k, 10);
    if (n >= 1 && n <= ids.length) {
      const el = document.getElementById(ids[n - 1]);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences
  try { currentLang = localStorage.getItem('edu-portfolio-lang') || 'en'; } catch(e) { currentLang = 'en'; }
  try { currentTheme = localStorage.getItem('edu-portfolio-theme') || 'dark'; } catch(e) { currentTheme = 'dark'; }

  // Set up buttons
  qs('#themeBtn').addEventListener('click', toggleTheme);
  qs('#btnPT').addEventListener('click', () => setLang('pt'));
  qs('#btnEN').addEventListener('click', () => setLang('en'));
  qs('#sendBtn').addEventListener('click', sendMessage);
  qs('#scrollTopBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  qs('#vcardBtn').href = getVcardHref();

  // Apply theme and render
  applyTheme();
  setLang(currentLang);
  initKeyboard();
});