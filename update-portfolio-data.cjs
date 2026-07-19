const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'public', 'data');

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 4) + '\n');
}

const profilePath = path.join(root, 'profile.json');
const profile = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
profile.locales.en.roles = ['Frontend Developer', 'React.js Specialist', 'Next.js Engineer', 'Deployment-focused Engineer'];
profile.locales.es.roles = ['Desarrollador Frontend', 'Especialista en React.js', 'Ingeniero Next.js', 'Ingeniero enfocado en despliegues'];
profile.locales.fr.roles = ['Développeur Frontend', 'Spécialiste React.js', 'Ingénieur Next.js', 'Ingénieur orienté déploiement'];
profile.locales.ko.roles = ['프론트엔드 개발자', 'React.js 전문가', 'Next.js 엔지니어', '배포 중심 엔지니어'];
profile.locales.en.status_message_available_for_freelance = 'Available for frontend and full-stack opportunities.';
profile.locales.es.status_message_available_for_freelance = 'Disponible para oportunidades frontend y full-stack.';
profile.locales.fr.status_message_available_for_freelance = 'Disponible pour des opportunités frontend et full-stack.';
profile.locales.ko.status_message_available_for_freelance = '프론트엔드 및 풀스택 기회에 참여 가능합니다.';
writeJson(profilePath, profile);

const coverPath = path.join(root, 'sections', 'cover.json');
const cover = JSON.parse(fs.readFileSync(coverPath, 'utf8'));
cover.articles[1].items[0].locales.en.text = '<p>I am a Frontend Developer with 3+ years of experience building scalable, production-ready web applications with React.js, Next.js, Node.js, and modern UI/UX practices. My work focuses on creating responsive user interfaces, delivering high-performance experiences, and integrating APIs into enterprise-grade solutions.</p><p>I have hands-on experience working on production applications and deployments, with strong attention to clean architecture, reusable components, maintainability, and continuous improvement. I enjoy collaborating with teams, solving complex product challenges, and building interfaces that balance usability, speed, and reliability.</p>';
cover.articles[1].items[0].locales.es.text = '<p>Soy un desarrollador Frontend con más de 3 años de experiencia creando aplicaciones web escalables y listas para producción con React.js, Next.js, Node.js y prácticas modernas de UI/UX. Mi trabajo se centra en interfaces responsivas, experiencias de alto rendimiento e integración de APIs en soluciones de nivel empresarial.</p><p>Tengo experiencia práctica trabajando en aplicaciones y despliegues en producción, con especial atención a una arquitectura limpia, componentes reutilizables, mantenibilidad y mejora continua. Disfruto colaborar con equipos, resolver desafíos complejos de producto y construir interfaces que equilibran usabilidad, velocidad y confiabilidad.</p>';
cover.articles[1].items[0].locales.fr.text = '<p>Je suis développeur Frontend avec plus de 3 ans d\'expérience dans la création d\'applications web scalables et prêtes pour la production avec React.js, Next.js, Node.js et des pratiques modernes d\'UI/UX. Mon travail se concentre sur des interfaces responsives, des expériences hautement performantes et l\'intégration d\'API dans des solutions de niveau entreprise.</p><p>J\'ai une expérience pratique du travail sur des applications et des déploiements en production, avec une forte attention portée à une architecture propre, aux composants réutilisables, à la maintenabilité et à l\'amélioration continue. J\'aime collaborer avec des équipes, résoudre des problèmes complexes de produit et construire des interfaces qui équilibrent ergonomie, rapidité et fiabilité.</p>';
cover.articles[1].items[0].locales.ko.text = '<p>저는 React.js, Next.js, Node.js와 현대적인 UI/UX 관행을 활용해 확장 가능하고 프로덕션 준비가 완료된 웹 애플리케이션을 구축해 온 3년 이상의 경력을 가진 프론트엔드 개발자입니다. 제 작업은 반응형 사용자 인터페이스 구현, 고성능 경험 제공, 엔터프라이즈급 솔루션에 API를 통합하는 데 중점을 둡니다.</p><p>저는 프로덕션 애플리케이션과 배포 환경에서 직접 경험을 쌓았으며, 깔끔한 아키텍처, 재사용 가능한 컴포넌트, 유지보수성, 지속적인 개선에 많은 주의를 기울입니다. 팀과 협업하고 복잡한 제품 문제를 해결하며 사용성, 속도, 신뢰성을 균형 있게 갖춘 인터페이스를 만드는 것을 즐깁니다.</p>';
cover.articles[2].items = [
  { id: 1, label: 'GitHub Contributions', link: { href: 'https://github.com/abdulzakirkhan', tooltipString: 'see_on_github' }, img: '', faIcon: 'fa-brands fa-github', faIconColors: { bg: '', fill: '' }, locales: { en: { title: 'Open source collaboration', text: 'Active contributor focused on building maintainable, production-ready solutions and sharing practical engineering knowledge.' } } },
  { id: 2, label: 'Open Source', link: { href: 'https://github.com/abdulzakirkhan', tooltipString: 'see_on_github' }, img: '', faIcon: 'fa-solid fa-code-branch', faIconColors: { bg: '', fill: '' }, locales: { en: { title: 'Engineering mindset', text: 'Committed to clean code, documentation, and continuous improvement in every delivery.' } } },
  { id: 3, label: 'Featured Projects', link: { href: '', tooltipString: '' }, img: '', faIcon: 'fa-solid fa-rocket', faIconColors: { bg: '', fill: '' }, locales: { en: { title: 'Modern product delivery', text: 'Experience delivering scalable applications and cloud-native platforms with strong attention to performance and security.' } } }
];
cover.articles[3].items = [
  { id: 1, faIcon: 'fa-solid fa-cloud', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'Cloud Computing', text: 'Designing resilient systems and cloud-ready architectures.' } } },
  { id: 2, faIcon: 'fa-solid fa-dharmachakra', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'Kubernetes', text: 'Working with orchestration, deployments, and scalable platform design.' } } },
  { id: 3, faIcon: 'fa-solid fa-shield-halved', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'DevSecOps', text: 'Applying security early in the delivery lifecycle.' } } },
  { id: 4, faIcon: 'fa-solid fa-code-branch', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'Open Source', text: 'Contributing to meaningful engineering communities and reusable tools.' } } },
  { id: 5, faIcon: 'fa-solid fa-brain', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'AI', text: 'Exploring practical AI-assisted development and automation.' } } },
  { id: 6, faIcon: 'fa-solid fa-sitemap', faIconColors: { bg: '', fill: '' }, label: null, link: { href: null, tooltipString: null }, copyToClipboardButton: false, locales: { en: { title: 'System Design', text: 'Designing scalable, maintainable, and secure systems.' } } }
];
writeJson(coverPath, cover);

const skillsPath = path.join(root, 'sections', 'skills.json');
const skills = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));
skills.articles[0].items = [
  { id: 1, img: '', faIcon: 'fa-solid fa-palette', faIconColors: { bg: '', fill: '#2563EB' }, date: { year: null, month: null }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Modern UI/UX', text: 'Designing polished, accessible, and user-centered interfaces.' } } },
  { id: 2, img: '', faIcon: 'fa-solid fa-layer-group', faIconColors: { bg: '', fill: '#7C3AED' }, date: { year: null, month: null }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Scalable Frontend', text: 'Building modular applications that grow with product needs.' } } },
  { id: 3, img: '', faIcon: 'fa-solid fa-rocket', faIconColors: { bg: '', fill: '#0EA5E9' }, date: { year: null, month: null }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Production Delivery', text: 'Shipping reliable features with strong deployment awareness.' } } }
];
skills.articles[1].items = [
  { id: 1, img: '', faIcon: 'fa-brands fa-react', faIconColors: { bg: '', fill: '#61DAFB' }, date: { year: 2023, month: 3 }, percentage: 95, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'React.js', text: 'Building modern, component-driven user interfaces.', level: 'Advanced' } } },
  { id: 2, img: '', faIcon: 'fa-solid fa-code', faIconColors: { bg: '', fill: '#000000' }, date: { year: 2023, month: 6 }, percentage: 92, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'Next.js', text: 'Creating high-performance projects with routing and optimized delivery.', level: 'Advanced' } } },
  { id: 3, img: '', faIcon: 'fa-brands fa-js', faIconColors: { bg: '', fill: '#F7DF1E' }, date: { year: 2022, month: 5 }, percentage: 94, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'JavaScript', text: 'Building responsive client-side logic and interactive application flows.', level: 'Advanced' } } },
  { id: 4, img: '', faIcon: 'fa-solid fa-code', faIconColors: { bg: '', fill: '#3178C6' }, date: { year: 2023, month: 8 }, percentage: 90, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'TypeScript', text: 'Writing scalable and maintainable frontend codebases.', level: 'Advanced' } } },
  { id: 5, img: '', faIcon: 'fa-brands fa-html5', faIconColors: { bg: '', fill: '#E34F26' }, date: { year: 2022, month: 4 }, percentage: 90, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'HTML5', text: 'Building modern, semantic, and accessible web structures.', level: 'Advanced' } } },
  { id: 6, img: '', faIcon: 'fa-brands fa-css3-alt', faIconColors: { bg: '', fill: '#1572B6' }, date: { year: 2022, month: 4 }, percentage: 90, category: 'Frontend', experienceLevel: 'Advanced', locales: { en: { title: 'CSS3', text: 'Crafting polished styling and responsive layout systems.', level: 'Advanced' } } },
  { id: 7, img: '', faIcon: 'fa-solid fa-layer-group', faIconColors: { bg: '', fill: '#764ABC' }, date: { year: 2023, month: 7 }, percentage: 88, category: 'State Management', experienceLevel: 'Advanced', locales: { en: { title: 'Redux Toolkit', text: 'Managing predictable global state in modern applications.', level: 'Advanced' } } },
  { id: 8, img: '', faIcon: 'fa-solid fa-plug', faIconColors: { bg: '', fill: '#4F46E5' }, date: { year: 2023, month: 7 }, percentage: 86, category: 'State Management', experienceLevel: 'Advanced', locales: { en: { title: 'RTK Query', text: 'Simplifying API data fetching and caching patterns.', level: 'Advanced' } } },
  { id: 9, img: '', faIcon: 'fa-solid fa-cubes', faIconColors: { bg: '', fill: '#0F766E' }, date: { year: 2022, month: 10 }, percentage: 84, category: 'State Management', experienceLevel: 'Intermediate', locales: { en: { title: 'Context API', text: 'Implementing lightweight shared state for focused features.', level: 'Intermediate' } } },
  { id: 10, img: '', faIcon: 'fa-solid fa-wind', faIconColors: { bg: '', fill: '#06B6D4' }, date: { year: 2023, month: 9 }, percentage: 88, category: 'Styling', experienceLevel: 'Advanced', locales: { en: { title: 'Tailwind CSS', text: 'Creating modern, utility-first interface systems.', level: 'Advanced' } } },
  { id: 11, img: '', faIcon: 'fa-brands fa-bootstrap', faIconColors: { bg: '', fill: '#7952B3' }, date: { year: 2022, month: 8 }, percentage: 82, category: 'Styling', experienceLevel: 'Advanced', locales: { en: { title: 'Bootstrap', text: 'Accelerating responsive UI development with consistent components.', level: 'Advanced' } } },
  { id: 12, img: '', faIcon: 'fa-brands fa-sass', faIconColors: { bg: '', fill: '#CC6699' }, date: { year: 2022, month: 8 }, percentage: 82, category: 'Styling', experienceLevel: 'Advanced', locales: { en: { title: 'SCSS', text: 'Writing structured, maintainable styles for complex interfaces.', level: 'Advanced' } } },
  { id: 13, img: '', faIcon: 'fa-solid fa-cube', faIconColors: { bg: '', fill: '#8B5CF6' }, date: { year: 2022, month: 8 }, percentage: 80, category: 'Styling', experienceLevel: 'Intermediate', locales: { en: { title: 'CSS Modules', text: 'Scoping styles cleanly within component-based systems.', level: 'Intermediate' } } },
  { id: 14, img: '', faIcon: 'fa-brands fa-node-js', faIconColors: { bg: '', fill: '#339933' }, date: { year: 2024, month: 1 }, percentage: 90, category: 'Backend', experienceLevel: 'Advanced', locales: { en: { title: 'Node.js', text: 'Building APIs and lightweight backend services.', level: 'Advanced' } } },
  { id: 15, img: '', faIcon: 'fa-solid fa-server', faIconColors: { bg: '', fill: '#D3D3D3' }, date: { year: 2024, month: 2 }, percentage: 86, category: 'Backend', experienceLevel: 'Advanced', locales: { en: { title: 'Express.js', text: 'Developing robust REST services and middleware layers.', level: 'Advanced' } } },
  { id: 16, img: '', faIcon: 'fa-solid fa-plug', faIconColors: { bg: '', fill: '#4F46E5' }, date: { year: 2024, month: 2 }, percentage: 88, category: 'Backend', experienceLevel: 'Advanced', locales: { en: { title: 'REST APIs', text: 'Integrating reliable API layers with modern applications.', level: 'Advanced' } } },
  { id: 17, img: '', faIcon: 'fa-solid fa-key', faIconColors: { bg: '', fill: '#F59E0B' }, date: { year: 2024, month: 3 }, percentage: 82, category: 'Backend', experienceLevel: 'Intermediate', locales: { en: { title: 'JWT Authentication', text: 'Implementing secure authentication flows for web apps.', level: 'Intermediate' } } },
  { id: 18, img: '', faIcon: 'fa-solid fa-database', faIconColors: { bg: '', fill: '#4F46E5' }, date: { year: 2024, month: 4 }, percentage: 82, category: 'Backend', experienceLevel: 'Intermediate', locales: { en: { title: 'Supabase', text: 'Working with backend-as-a-service workflows and data models.', level: 'Intermediate' } } },
  { id: 19, img: '', faIcon: 'fa-solid fa-database', faIconColors: { bg: '', fill: '#47A248' }, date: { year: 2023, month: 2 }, percentage: 86, category: 'Databases', experienceLevel: 'Advanced', locales: { en: { title: 'MongoDB', text: 'Designing document-oriented data models for modern products.', level: 'Advanced' } } },
  { id: 20, img: '', faIcon: 'fa-solid fa-database', faIconColors: { bg: '', fill: '#336791' }, date: { year: 2023, month: 4 }, percentage: 82, category: 'Databases', experienceLevel: 'Intermediate', locales: { en: { title: 'MySQL', text: 'Working with relational data and structured application models.', level: 'Intermediate' } } },
  { id: 21, img: '', faIcon: 'fa-brands fa-git-alt', faIconColors: { bg: '', fill: '#F05032' }, date: { year: 2022, month: 2 }, percentage: 92, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'Git', text: 'Managing collaborative version control across development teams.', level: 'Advanced' } } },
  { id: 22, img: '', faIcon: 'fa-brands fa-github', faIconColors: { bg: '', fill: '#181717' }, date: { year: 2022, month: 2 }, percentage: 90, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'GitHub', text: 'Using modern git workflows, code review, and collaboration.', level: 'Advanced' } } },
  { id: 23, img: '', faIcon: 'fa-brands fa-gitlab', faIconColors: { bg: '', fill: '#FC6D26' }, date: { year: 2023, month: 5 }, percentage: 88, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'GitLab', text: 'Working with CI/CD pipelines and team delivery workflows.', level: 'Advanced' } } },
  { id: 24, img: '', faIcon: 'fa-brands fa-docker', faIconColors: { bg: '', fill: '#2496ED' }, date: { year: 2023, month: 6 }, percentage: 88, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'Docker', text: 'Containerizing applications for consistent deployment environments.', level: 'Advanced' } } },
  { id: 25, img: '', faIcon: 'fa-solid fa-dharmachakra', faIconColors: { bg: '', fill: '#326CE5' }, date: { year: 2024, month: 5 }, percentage: 84, category: 'Deployment & DevOps', experienceLevel: 'Intermediate', locales: { en: { title: 'Kubernetes', text: 'Supporting orchestration and scalable deployment practices.', level: 'Intermediate' } } },
  { id: 26, img: '', faIcon: 'fa-solid fa-code-branch', faIconColors: { bg: '', fill: '#0EA5E9' }, date: { year: 2023, month: 8 }, percentage: 86, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'CI/CD', text: 'Automating build, test, and release pipelines.', level: 'Advanced' } } },
  { id: 27, img: '', faIcon: 'fa-brands fa-linux', faIconColors: { bg: '', fill: '#FCC624' }, date: { year: 2022, month: 9 }, percentage: 86, category: 'Deployment & DevOps', experienceLevel: 'Advanced', locales: { en: { title: 'Linux', text: 'Comfortable working in Linux-based development and deployment environments.', level: 'Advanced' } } }
];
writeJson(skillsPath, skills);

const portfolioPath = path.join(root, 'sections', 'portfolio.json');
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));
portfolio.articles[0].items = [
  { id: 1, categoryId: 'category_web', img: '', faIcon: 'fa-solid fa-hospital', faIconColors: { bg: '#2563EB', fill: '#F8FAFC' }, preview: { links: [{ href: 'https://github.com/abdulzakirkhan', tooltipString: 'see_on_github', faIcon: 'fa-brands fa-github' }], screenshots: [], screenshotsAspectRatio: '16:9', youtubeVideo: '' }, locales: { en: { title: 'Internal Product Portal', text: 'Delivered a scalable internal product experience for cross-functional teams with reusable React components and production-ready workflows.', tags: ['React.js', 'Next.js', 'UX', 'Product Delivery'] } } },
  { id: 2, categoryId: 'category_web', img: '', faIcon: 'fa-solid fa-chart-line', faIconColors: { bg: '#0F766E', fill: '#F8FAFC' }, preview: { links: [{ href: 'https://github.com/abdulzakirkhan', tooltipString: 'see_on_github', faIcon: 'fa-brands fa-github' }], screenshots: [], screenshotsAspectRatio: '16:9', youtubeVideo: '' }, locales: { en: { title: 'Analytics Dashboard', text: 'Built a polished dashboard experience with efficient state management, API integration, and responsive UI patterns.', tags: ['React.js', 'Redux Toolkit', 'REST APIs', 'UI'] } } },
  { id: 3, categoryId: 'category_utilities', img: '', faIcon: 'fa-solid fa-microchip', faIconColors: { bg: '#7C3AED', fill: '#F8FAFC' }, preview: { links: [{ href: 'https://github.com/abdulzakirkhan', tooltipString: 'see_on_github', faIcon: 'fa-brands fa-github' }], screenshots: [], screenshotsAspectRatio: '16:9', youtubeVideo: '' }, locales: { en: { title: 'Deployment Automation Platform', text: 'Contributed to deployment workflows and automation pipelines supporting modern containerized releases.', tags: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Linux'] } } }
];
writeJson(portfolioPath, portfolio);

const experiencePath = path.join(root, 'sections', 'experience.json');
const experience = JSON.parse(fs.readFileSync(experiencePath, 'utf8'));
experience.articles[0].items = [
  { id: 1, img: '', faIcon: 'fa-solid fa-laptop-code', faIconColors: { bg: '#111827', fill: '#F9FAFB' }, dateStart: { year: 2023, month: 5 }, dateEnd: { year: 2023, month: 10 }, locales: { en: { title: 'Frontend Developer', province: 'Islamabad', country: 'Pakistan', institution: 'Repla Technologies', text: 'Built responsive frontend interfaces and reusable React components for client-facing products.', list: ['Created reusable UI components', 'Integrated REST APIs', 'Handled bug fixes and maintenance', 'Improved responsiveness and usability'], tags: ['React.js', 'Responsive UI', 'Git'] } } },
  { id: 2, img: '', faIcon: 'fa-solid fa-building', faIconColors: { bg: '#1D4ED8', fill: '#F9FAFB' }, dateStart: { year: 2023, month: 11 }, dateEnd: { year: 2025, month: 12 }, locales: { en: { title: 'Frontend Developer', province: 'Islamabad', country: 'Pakistan', institution: 'Egeeks Global', text: 'Worked on enterprise frontend applications with a focus on scalability, maintainability, and production readiness.', list: ['Built React.js and Next.js interfaces', 'Managed state with Redux Toolkit and RTK Query', 'Integrated APIs and improved UI performance', 'Supported production deployments and GitLab workflows'], tags: ['React.js', 'Next.js', 'Redux Toolkit', 'RTK Query'] } } },
  { id: 3, img: '', faIcon: 'fa-solid fa-server', faIconColors: { bg: '#0F766E', fill: '#F9FAFB' }, dateStart: { year: 2025, month: 2 }, dateEnd: { year: 2025, month: 12 }, locales: { en: { title: 'MERN Stack Developer', province: 'Islamabad', country: 'Pakistan', institution: 'Egeeks Global', text: 'Developed backend APIs and supported deployment workflows using Node.js, Express.js, Supabase, and modern CI/CD practices.', list: ['Built Node.js and Express.js APIs', 'Worked with Supabase and database integrations', 'Implemented authentication and API logic', 'Collaborated on deployment and CI/CD support'], tags: ['Node.js', 'Express.js', 'Supabase', 'CI/CD'] } } }
];
writeJson(experiencePath, experience);

const educationPath = path.join(root, 'sections', 'education.json');
const education = JSON.parse(fs.readFileSync(educationPath, 'utf8'));
education.articles[0].items = [
  { id: 1, img: '', faIcon: 'fa-solid fa-school', faIconColors: { bg: '#1F2937', fill: '#F9FAFB' }, dateStart: { year: 2016, month: 1 }, dateEnd: { year: 2018, month: 12 }, locales: { en: { title: 'FSc', province: 'Chamla', country: 'Pakistan', institution: 'Government Degree College Chamla', text: 'Completed intermediate-level education with a strong academic foundation in science and mathematics.', tags: ['Science', 'Mathematics'] } } },
  { id: 2, img: '', faIcon: 'fa-solid fa-graduation-cap', faIconColors: { bg: '#2563EB', fill: '#F9FAFB' }, dateStart: { year: 2019, month: 1 }, dateEnd: { year: 2023, month: 12 }, locales: { en: { title: 'Bachelor of Science in Computer Science', province: 'Buner', country: 'Pakistan', institution: 'University of Buner', text: 'Completed a bachelor’s degree focused on software engineering, programming, and modern computing principles.', tags: ['Computer Science', 'Programming'] } } }
];
writeJson(educationPath, education);

const achievementsPath = path.join(root, 'sections', 'achievements.json');
const achievements = JSON.parse(fs.readFileSync(achievementsPath, 'utf8'));
achievements.articles = [
  { id: 1, component: 'ArticleCards', locales: { en: { title: 'Technical Highlights' }, es: { title: 'Aspectos Técnicos' }, fr: { title: 'Points Techniques' }, ko: { title: '기술 하이라이트' } }, settings: { order_items_by: 'id', order_items_sort: 'desc' }, items: [
    { id: 1, img: '', faIcon: 'fa-solid fa-code', faIconColors: { bg: '#2563EB', fill: '#F9FAFB' }, date: { year: 2024, month: 6 }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Frontend Engineering', text: 'Delivered production-ready interfaces and reusable component systems.' } } },
    { id: 2, img: '', faIcon: 'fa-solid fa-cloud', faIconColors: { bg: '#0F766E', fill: '#F9FAFB' }, date: { year: 2024, month: 8 }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Deployment Experience', text: 'Worked with CI/CD, Docker, Kubernetes, and deployment automation.' } } },
    { id: 3, img: '', faIcon: 'fa-solid fa-shield-halved', faIconColors: { bg: '#7C3AED', fill: '#F9FAFB' }, date: { year: 2025, month: 1 }, link: { href: '', tooltipString: '' }, locales: { en: { title: 'Security Awareness', text: 'Developing solutions with secure architecture and modern engineering practices.' } } }
  ] },
  { id: 2, component: 'ArticleThread', locales: { en: { title: 'Professional Achievements' }, es: { title: 'Logros Profesionales' }, fr: { title: 'Réalisations Professionnelles' }, ko: { title: '전문적 성과' } }, settings: { max_rows_collapse_threshold: 4, order_items_by: 'date', order_items_sort: 'desc' }, items: [
    { id: 1, date: { year: 2023, month: 6 }, preview: { links: [], screenshots: [], screenshotsAspectRatio: '', youtubeVideo: '' }, locales: { en: { title: 'Enterprise UI Delivery', province: 'Islamabad', country: 'Pakistan', institution: 'Egeeks Global', text: 'Delivered responsive enterprise frontend solutions with polished user experiences and scalable architecture.', list: ['React and Next.js implementation', 'Reusable component systems', 'Production-ready UI delivery'] } } },
    { id: 2, date: { year: 2024, month: 9 }, preview: { links: [], screenshots: [], screenshotsAspectRatio: '', youtubeVideo: '' }, locales: { en: { title: 'Deployment Automation', province: 'Islamabad', country: 'Pakistan', institution: 'Egeeks Global', text: 'Contributed to deployment support and CI/CD workflows for production environments.', list: ['Dockerized services', 'Deployment support', 'Pipeline collaboration'] } } },
    { id: 3, date: { year: 2025, month: 3 }, preview: { links: [], screenshots: [], screenshotsAspectRatio: '', youtubeVideo: '' }, locales: { en: { title: 'Modern Full-Stack Delivery', province: 'Islamabad', country: 'Pakistan', institution: 'Egeeks Global', text: 'Expanded into backend delivery with Node.js, Express.js, and Supabase for complete product solutions.', list: ['API development', 'Authentication', 'Database integration'] } } }
  ] }
];
writeJson(achievementsPath, achievements);

const contactPath = path.join(root, 'sections', 'contact.json');
const contact = JSON.parse(fs.readFileSync(contactPath, 'utf8'));
contact.articles[1].items[0].label = '+92 3411718783';
contact.articles[1].items[0].link.href = 'tel:+923411718783';
contact.articles[1].items[1].label = 'abdulzakir632@gmail.com';
contact.articles[1].items[1].link.href = 'mailto:abdulzakir632@gmail.com';
contact.articles[1].items[2].label = 'abdulzakirkhan';
contact.articles[1].items[2].link.href = 'https://linkedin.com/in/abdul-zakir';
contact.articles[1].items[3].label = 'Abdul Zakir';
contact.articles[1].items[3].link.href = 'https://github.com/abdulzakirkhan';
contact.articles[1].items[4].faIcon = 'fa-brands fa-instagram';
contact.articles[1].items[4].label = '@abdulzakirkhan';
contact.articles[1].items[4].link.href = 'https://instagram.com/abdulzakirkhan';
contact.articles[1].items[5].faIcon = 'fa-brands fa-github';
contact.articles[1].items[5].label = '@abdulzakirkhan';
contact.articles[1].items[5].link.href = 'https://github.com/abdulzakirkhan';
writeJson(contactPath, contact);

console.log('Portfolio data updated successfully.');
