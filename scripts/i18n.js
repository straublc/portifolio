// ============================================
// TRADUÇÕES — PT / EN / ES
// ============================================
const translations = {
  pt: {
    'nav.sobre':        'Sobre',
    'nav.trajetoria':   'Trajetória',
    'nav.habilidades':  'Habilidades',
    'nav.projetos':     'Projetos',
    'nav.contato':      'Contato',

    'hero.badge':    'QA Manual · Front-end Developer',
    'hero.subtitle': 'Garanto a qualidade do que é entregue ao usuário com testes manuais minuciosos, olhar crítico sobre cada fluxo e experiência real de desenvolvimento front-end.',
    'hero.cta1':     'Falar comigo',
    'hero.cta2':     'Ver projetos',

    'sobre.qa.title': 'QA Manual',
    'sobre.qa.text':  'Criação e execução de casos de teste, reporte detalhado de bugs, testes exploratórios, regressão e validação de fluxos críticos em ambientes web.',
    'sobre.qa.t1': 'Casos de teste',
    'sobre.qa.t2': 'Bug report',
    'sobre.qa.t3': 'Regressão',
    'sobre.qa.t4': 'Exploratório',
    'sobre.fe.title': 'Front-end',
    'sobre.fe.text':  'Desenvolvimento de interfaces responsivas com HTML, CSS, JavaScript e Vue.js, sempre com atenção à experiência do usuário e boas práticas de código.',
    'sobre.met.title': 'Metodologias',
    'sobre.met.text':  'Experiência com times ágeis em Scrum e Kanban. Gestão de tarefas, controle de cronograma e colaboração constante entre QA e desenvolvimento.',
    'sobre.met.t1': 'Gestão ágil',

    'traj.label':        'Minha história',
    'traj.title':        'Trajetória',
    'traj.seemore':      'Ver mais',
    'traj.marinha.name': 'Marinha do Brasil',

    'hab.label': 'O que eu uso',
    'hab.title': 'Habilidades',
    'lang.label': 'Idioma',

    'proj.label': 'O que construí',
    'proj.title': 'Projetos',

    'footer.role': 'QA Manual · Front-end Developer',
    'footer.copy': '© 2025 · Desenvolvido por Lucas Straub',

    'modal.close': 'Fechar',
    'skill.testcases':  'Casos de Teste',
    'skill.bugreport':  'Bug Report',
    'skill.testweb':    'Teste Web',
    'skill.testmobile': 'Teste Mobile',
    'skill.testios':    'Teste iOS',
    'skill.regression': 'Regressão',
    'skill.exploratory':'Exploratório',
    'skill.agile':      'Scrum / Kanban',
    'modal.marinha.body':     'Servi 3 anos à Marinha do Brasil no corpo de Fuzileiros Navais, tendo comigo o aprendizado de hierarquia e disciplina e costumes militares. Atuei a maior parte da minha trajetória na Seção de Pessoal do Batalhão, onde tive responsabilidade pelos demais soldados do setor.',
    'modal.coppead.p1':       'Em infraestrutura de redes: passagem de cabos, mapeamento de redes e suporte na instalação de roteadores.',
    'modal.coppead.p2':       'Em suporte: participação na gerência dos servidores AD (Active Directory), DNS e virtualização VMWare, formatação e manutenção de computadores, instalação e configuração de softwares.',
    'modal.interligados.body':'Responsável por realizar testes manuais em sistemas em desenvolvimento, identificando e registrando falhas com clareza e precisão. Apoio à equipe de front-end na correção de bugs e construção de interfaces. Participação em times ágeis (Scrum e Kanban) usando a ferramenta Taiga para acompanhar tarefas. Auxílio no controle de horas, cronogramas e atividades das equipes.',
    'modal.inevent.body':     'Atuando como QA Júnior na InEvent, plataforma global de gestão de eventos. Responsável pela execução de testes manuais, identificação e reporte de bugs, validação de fluxos e apoio à equipe de desenvolvimento na garantia da qualidade das entregas.',
  },

  en: {
    'nav.sobre':        'About',
    'nav.trajetoria':   'Journey',
    'nav.habilidades':  'Skills',
    'nav.projetos':     'Projects',
    'nav.contato':      'Contact',

    'hero.badge':    'Manual QA · Front-end Developer',
    'hero.subtitle': 'I ensure the quality of what reaches the user through thorough manual testing, a critical eye on every flow, and real front-end development experience.',
    'hero.cta1':     'Get in touch',
    'hero.cta2':     'See projects',

    'sobre.qa.title': 'Manual QA',
    'sobre.qa.text':  'Creating and executing test cases, detailed bug reporting, exploratory testing, regression and validation of critical flows in web environments.',
    'sobre.qa.t1': 'Test cases',
    'sobre.qa.t2': 'Bug report',
    'sobre.qa.t3': 'Regression',
    'sobre.qa.t4': 'Exploratory',
    'sobre.fe.title': 'Front-end',
    'sobre.fe.text':  'Building responsive interfaces with HTML, CSS, JavaScript and Vue.js, always focused on user experience and clean code best practices.',
    'sobre.met.title': 'Methodologies',
    'sobre.met.text':  'Experience with agile teams using Scrum and Kanban. Task management, schedule control and continuous collaboration between QA and development.',
    'sobre.met.t1': 'Agile management',

    'traj.label':        'My story',
    'traj.title':        'Journey',
    'traj.seemore':      'See more',
    'traj.marinha.name': 'Brazilian Navy',

    'hab.label': 'What I use',
    'hab.title': 'Skills',
    'lang.label': 'Language',

    'proj.label': 'What I built',
    'proj.title': 'Projects',

    'footer.role': 'Manual QA · Front-end Developer',
    'footer.copy': '© 2025 · Developed by Lucas Straub',

    'modal.close': 'Close',
    'skill.testcases':  'Test Cases',
    'skill.bugreport':  'Bug Report',
    'skill.testweb':    'Web Testing',
    'skill.testmobile': 'Mobile Testing',
    'skill.testios':    'iOS Testing',
    'skill.regression': 'Regression',
    'skill.exploratory':'Exploratory',
    'skill.agile':      'Scrum / Kanban',
    'modal.marinha.body':     'I served 3 years in the Brazilian Navy as a Marine, gaining valuable lessons in hierarchy, discipline and military customs. I spent most of my time in the Battalion\'s Personnel Section, where I was responsible for the other soldiers in the unit.',
    'modal.coppead.p1':       'In network infrastructure: cable routing, network mapping and support in router installation.',
    'modal.coppead.p2':       'In IT support: involvement in managing AD (Active Directory), DNS servers and VMWare virtualization, computer formatting and maintenance, software installation and configuration.',
    'modal.interligados.body':'Responsible for performing manual tests on systems under development, clearly identifying and logging bugs. Support to the front-end team in fixing bugs and building interfaces. Participation in agile teams (Scrum and Kanban) using Taiga to track tasks. Assistance with time tracking, schedules and team activities.',
    'modal.inevent.body':     'Working as a Junior QA at InEvent, a global event management platform. Responsible for executing manual tests, identifying and reporting bugs, validating flows and supporting the development team in ensuring quality deliveries.',
  },

  es: {
    'nav.sobre':        'Sobre mí',
    'nav.trajetoria':   'Trayectoria',
    'nav.habilidades':  'Habilidades',
    'nav.projetos':     'Proyectos',
    'nav.contato':      'Contacto',

    'hero.badge':    'QA Manual · Desarrollador Front-end',
    'hero.subtitle': 'Me aseguro de la calidad de lo que se entrega al usuario, con pruebas manuales minuciosas, visión crítica sobre cada flujo y experiencia real en desarrollo front-end.',
    'hero.cta1':     'Contáctame',
    'hero.cta2':     'Ver proyectos',

    'sobre.qa.title': 'QA Manual',
    'sobre.qa.text':  'Creación y ejecución de casos de prueba, reporte detallado de bugs, pruebas exploratorias, regresión y validación de flujos críticos en entornos web.',
    'sobre.qa.t1': 'Casos de prueba',
    'sobre.qa.t2': 'Bug report',
    'sobre.qa.t3': 'Regresión',
    'sobre.qa.t4': 'Exploratorio',
    'sobre.fe.title': 'Front-end',
    'sobre.fe.text':  'Desarrollo de interfaces responsivas con HTML, CSS, JavaScript y Vue.js, siempre con atención a la experiencia del usuario y buenas prácticas de código.',
    'sobre.met.title': 'Metodologías',
    'sobre.met.text':  'Experiencia con equipos ágiles en Scrum y Kanban. Gestión de tareas, control de cronogramas y colaboración constante entre QA y desarrollo.',
    'sobre.met.t1': 'Gestión ágil',

    'traj.label':        'Mi historia',
    'traj.title':        'Trayectoria',
    'traj.seemore':      'Ver más',
    'traj.marinha.name': 'Marina de Brasil',

    'hab.label': 'Lo que uso',
    'hab.title': 'Habilidades',
    'lang.label': 'Idioma',

    'proj.label': 'Lo que construí',
    'proj.title': 'Proyectos',

    'footer.role': 'QA Manual · Desarrollador Front-end',
    'footer.copy': '© 2025 · Desarrollado por Lucas Straub',

    'modal.close': 'Cerrar',
    'skill.testcases':  'Casos de Prueba',
    'skill.bugreport':  'Bug Report',
    'skill.testweb':    'Pruebas Web',
    'skill.testmobile': 'Pruebas Mobile',
    'skill.testios':    'Pruebas iOS',
    'skill.regression': 'Regresión',
    'skill.exploratory':'Exploratorio',
    'skill.agile':      'Scrum / Kanban',
    'modal.marinha.body':     'Serví 3 años en la Marina de Brasil en el cuerpo de Infantería de Marina, adquiriendo aprendizajes de jerarquía, disciplina y costumbres militares. Trabajé la mayor parte de mi tiempo en la Sección de Personal del Batallón, donde fui responsable de los demás soldados del sector.',
    'modal.coppead.p1':       'En infraestructura de redes: tendido de cables, mapeo de redes y soporte en la instalación de routers.',
    'modal.coppead.p2':       'En soporte: participación en la gestión de servidores AD (Active Directory), DNS y virtualización VMWare, formateo y mantenimiento de computadoras, instalación y configuración de software.',
    'modal.interligados.body':'Responsable de realizar pruebas manuales en sistemas en desarrollo, identificando y registrando fallas con claridad y precisión. Apoyo al equipo de front-end en la corrección de bugs y construcción de interfaces. Participación en equipos ágiles (Scrum y Kanban) usando la herramienta Taiga. Asistencia en el control de horas, cronogramas y actividades de los equipos.',
    'modal.inevent.body':     'Trabajando como QA Junior en InEvent, plataforma global de gestión de eventos. Responsable de la ejecución de pruebas manuales, identificación y reporte de bugs, validación de flujos y apoyo al equipo de desarrollo en la garantía de calidad de las entregas.',
  },
};

// ============================================
// MOTOR DE TRADUÇÃO
// ============================================
const langMeta = {
  pt: { flag: '🇧🇷', code: 'PT', htmlLang: 'pt-br' },
  en: { flag: '🇺🇸', code: 'EN', htmlLang: 'en'    },
  es: { flag: '🇪🇸', code: 'ES', htmlLang: 'es'    },
};

let currentLang = localStorage.getItem('lang') || 'pt';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    // Preserva filhos (ícones, badges) — só substitui texto se não houver elementos filhos
    if (el.children.length === 0) {
      el.textContent = t[key];
    } else {
      // Tem filhos: substitui só o primeiro text node
      for (const node of el.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = t[key];
          break;
        }
      }
    }
  });

  // Atualiza lang do html
  document.documentElement.lang = langMeta[lang].htmlLang;

  // Atualiza botão do seletor desktop
  const flagEl  = document.getElementById('langFlag');
  const codeEl  = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = langMeta[lang].flag;
  if (codeEl) codeEl.textContent = langMeta[lang].code;

  // Atualiza estado ativo nas opções desktop
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('lang-option--active', btn.dataset.lang === lang);
  });

  // Atualiza estado ativo nas opções mobile
  document.querySelectorAll('.lang-mobile-item').forEach(btn => {
    btn.classList.toggle('lang-opt-mobile--active', btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

// ============================================
// SELETOR DESKTOP — dropdown
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langChevron  = document.getElementById('langChevron');

  function toggleDropdown(open) {
    langDropdown?.classList.toggle('lang-dropdown--open', open);
    langChevron?.classList.toggle('lang-chevron--open', open);
    langBtn?.setAttribute('aria-expanded', String(open));
  }

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langDropdown?.classList.contains('lang-dropdown--open');
    toggleDropdown(!isOpen);
  });

  document.addEventListener('click', () => toggleDropdown(false));

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyTranslations(btn.dataset.lang);
      toggleDropdown(false);
    });
  });

  // Seletor mobile
  document.querySelectorAll('.lang-mobile-item').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });

  // Aplica idioma salvo ou padrão
  applyTranslations(currentLang);
});
