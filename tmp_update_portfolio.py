import json
from pathlib import Path

root = Path('d:/my-portfolio/public/data')

profile_json = """
{
    "name": "Abdul Zakir",
    "profilePictureUrl": "images/pictures/profile-picture.jpg",
    "resumePdfUrl": "",
    "statusCircleVisible": true,
    "statusCircleVariant": "available",
    "statusCircleHoverMessage": "status_message_available_for_freelance",
    "locales": {
        "en": {
            "localized_name": "Abdul Zakir",
            "localized_name_stylized": " [[Abdul {{Zakir}}]]",
            "status_message_available_for_freelance": "Available for freelance and consulting opportunities.",
            "roles": [
                "Cloud Security Engineer",
                "Full Stack JavaScript Developer",
                "Platform Engineer",
                "Software Architect"
            ],
            "name_pronunciation_ipa": "/abdul zakir/",
            "name_pronunciation_audio_url": "audio/english-name-pronunciation.mp3"
        },
        "es": {
            "status_message_available_for_freelance": "Disponible para oportunidades de freelance y consultoría.",
            "roles": [
                "Ingeniero de Seguridad en la Nube",
                "Desarrollador Full Stack JavaScript",
                "Ingeniero de Plataforma",
                "Arquitecto de Software"
            ]
        },
        "fr": {
            "status_message_available_for_freelance": "Disponible pour des opportunités freelance et de conseil.",
            "roles": [
                "Ingénieur en Sécurité Cloud",
                "Développeur Full Stack JavaScript",
                "Ingénieur de Plateforme",
                "Architecte Logiciel"
            ]
        },
        "ko": {
            "localized_name": "압둘 자키르",
            "localized_name_stylized": " [[압둘 {{자키르}}]]",
            "status_message_available_for_freelance": "프리랜스 및 컨설팅 기회에 참여 가능합니다.",
            "roles": [
                "클라우드 보안 엔지니어",
                "풀 스택 자바스크립트 개발자",
                "플랫폼 엔지니어",
                "소프트웨어 아키텍트"
            ],
            "name_pronunciation_ipa": "/apdul jakiru/",
            "name_pronunciation_audio_url": "audio/korean-name-pronunciation.mp3"
        }
    }
}
"""

cover_json = """
{
    "title": {
        "locales": {
            "en": {
                "title_short": "Welcome",
                "title_short_nav": "About me",
                "title_long_prefix": "Hello",
                "title_long": "I'm Abdul Zakir"
            },
            "es": {
                "title_short": "Bienvenido",
                "title_short_nav": "Sobre mí",
                "title_long_prefix": "Hola",
                "title_long": "Soy Abdul Zakir"
            },
            "fr": {
                "title_short": "Bienvenue",
                "title_short_nav": "À propos",
                "title_long_prefix": "Bonjour",
                "title_long": "Je suis Abdul Zakir"
            },
            "ko": {
                "title_short": "환영합니다",
                "title_short_nav": "소개",
                "title_long_prefix": "안녕하세요",
                "title_long": "저는 압둘 자키르입니다"
            }
        }
    },
    "articles": [
        {
            "id": 1,
            "component": "ArticleInlineList",
            "locales": {},
            "settings": {
                "order_items_by": "id",
                "order_items_sort": "asc",
                "display_as_list_if_width_is_lower_than": 380
            },
            "items": [
                {
                    "id": 1,
                    "label": "Islamabad, Pakistan",
                    "link": {"href": "", "tooltipString": ""},
                    "faIcon": "fa-solid fa-location-dot"
                },
                {
                    "id": 2,
                    "label": "abdulzakir632@gmail.com",
                    "link": {"href": "mailto:abdulzakir632@gmail.com", "tooltipString": "email_me"},
                    "faIcon": "fa-regular fa-envelope"
                },
                {
                    "id": 3,
                    "label": "@abdulzakirkhan",
                    "link": {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github"},
                    "faIcon": "fa-brands fa-github"
                }
            ]
        },
        {
            "id": 2,
            "component": "ArticleText",
            "locales": {
                "en": {"title": "About me"},
                "es": {"title": "Sobre mí"},
                "fr": {"title": "À propos de moi"},
                "ko": {"title": "소개"}
            },
            "settings": {
                "order_items_by": "id",
                "order_items_sort": "asc"
            },
            "items": [
                {
                    "id": 1,
                    "img": "images/pictures/about-texts-image-1.png",
                    "faIcon": "fa-solid fa-code",
                    "faIconColors": {"bg": "", "fill": ""},
                    "locales": {
                        "en": {
                            "text": "<p>I am a Cloud Security Engineer and Full Stack JavaScript Developer with over 3 years of experience building reliable, secure, and scalable digital products. My work spans modern frontend applications with React and Next.js, robust backend services with Node.js and Express, and cloud-native delivery using Docker, Kubernetes, and CI/CD pipelines.</p><p>I focus on clean architecture, strong developer experience, and pragmatic security practices. I enjoy solving complex problems across the full product lifecycle, from interface design and API development to deployment, monitoring, and continuous improvement.</p><p>I am especially interested in building resilient systems, strengthening application security, and contributing to high-impact engineering teams.</p>"
                        },
                        "es": {
                            "text": "<p>Soy un Ingeniero de Seguridad en la Nube y Desarrollador Full Stack JavaScript con más de 3 años de experiencia construyendo productos digitales confiables, seguros y escalables. Mi trabajo abarca aplicaciones frontend modernas con React y Next.js, servicios backend sólidos con Node.js y Express, y despliegues nativos en la nube con Docker, Kubernetes y pipelines de CI/CD.</p><p>Me enfoco en una arquitectura limpia, una buena experiencia de desarrollo y prácticas de seguridad pragmáticas. Disfruto resolviendo problemas complejos a lo largo de todo el ciclo de vida del producto, desde el diseño de interfaces y el desarrollo de APIs hasta el despliegue y la mejora continua.</p>"
                        },
                        "fr": {
                            "text": "<p>Je suis ingénieur en sécurité cloud et développeur Full Stack JavaScript avec plus de 3 ans d'expérience dans la construction de produits numériques fiables, sécurisés et évolutifs. Mon travail couvre les applications frontend modernes avec React et Next.js, les services backend robustes avec Node.js et Express, ainsi que la livraison cloud-native avec Docker, Kubernetes et des pipelines CI/CD.</p><p>Je me concentre sur une architecture propre, une forte expérience développeur et des pratiques de sécurité pragmatiques. J'aime résoudre des problèmes complexes à travers tout le cycle de vie du produit, de la conception d'interface et du développement d'API au déploiement et à l'amélioration continue.</p>"
                        },
                        "ko": {
                            "text": "<p>저는 3년 이상의 경험을 가진 클라우드 보안 엔지니어이자 풀 스택 자바스크립트 개발자로, 신뢰할 수 있고 안전하며 확장 가능한 디지털 제품을 만들고 있습니다. 제 업무는 React와 Next.js로 구성된 현대적인 프론트엔드 애플리케이션, Node.js와 Express로 구축한 강력한 백엔드 서비스, Docker, Kubernetes, CI/CD 파이프라인을 활용한 클라우드 네이티브 배포까지 확장됩니다.</p><p>저는 깔끔한 아키텍처, 우수한 개발자 경험, 실용적인 보안 관행에 집중합니다. 인터페이스 설계, API 개발, 배포, 모니터링, 지속적인 개선에 이르기까지 제품 생명주기 전반에서 복잡한 문제를 해결하는 것을 즐깁니다.</p>"
                        }
                    }
                }
            ]
        },
        {
            "id": 3,
            "component": "ArticleTestimonials",
            "locales": {
                "en": {"title": "Professional Highlights"},
                "es": {"title": "Logros Profesionales"},
                "fr": {"title": "Réalisations Professionnelles"},
                "ko": {"title": "전문적 성과"}
            },
            "settings": {
                "order_items_by": "id",
                "order_items_sort": "asc"
            },
            "items": [
                {
                    "id": 1,
                    "label": "GitHub Contributions",
                    "link": {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github"},
                    "img": "",
                    "faIcon": "fa-brands fa-github",
                    "faIconColors": {"bg": "", "fill": ""},
                    "locales": {
                        "en": {
                            "title": "Open source collaboration",
                            "text": "Active contributor focused on building maintainable, production-ready solutions and sharing practical engineering knowledge."
                        }
                    }
                },
                {
                    "id": 2,
                    "label": "Open Source",
                    "link": {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github"},
                    "img": "",
                    "faIcon": "fa-solid fa-code-branch",
                    "faIconColors": {"bg": "", "fill": ""},
                    "locales": {
                        "en": {
                            "title": "Engineering mindset",
                            "text": "Committed to clean code, documentation, and continuous improvement in every delivery."
                        }
                    }
                },
                {
                    "id": 3,
                    "label": "Featured Projects",
                    "link": {"href": "", "tooltipString": ""},
                    "img": "",
                    "faIcon": "fa-solid fa-rocket",
                    "faIconColors": {"bg": "", "fill": ""},
                    "locales": {
                        "en": {
                            "title": "Modern product delivery",
                            "text": "Experience delivering scalable applications and cloud-native platforms with strong attention to performance and security."
                        }
                    }
                }
            ]
        },
        {
            "id": 4,
            "component": "ArticleInfoList",
            "settings": {
                "order_items_by": "id",
                "order_items_sort": "asc"
            },
            "locales": {
                "en": {"title": "Developer Interests"},
                "es": {"title": "Intereses de Desarrollo"},
                "fr": {"title": "Intérêts de Développement"},
                "ko": {"title": "개발 관심사"}
            },
            "items": [
                {
                    "id": 1,
                    "faIcon": "fa-solid fa-cloud",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "Cloud Computing", "text": "Designing resilient systems and cloud-ready architectures."}
                    }
                },
                {
                    "id": 2,
                    "faIcon": "fa-solid fa-dharmachakra",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "Kubernetes", "text": "Working with orchestration, deployments, and scalable platform design."}
                    }
                },
                {
                    "id": 3,
                    "faIcon": "fa-solid fa-shield-halved",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "DevSecOps", "text": "Applying security early in the delivery lifecycle."}
                    }
                },
                {
                    "id": 4,
                    "faIcon": "fa-solid fa-code-branch",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "Open Source", "text": "Contributing to meaningful engineering communities and reusable tools."}
                    }
                },
                {
                    "id": 5,
                    "faIcon": "fa-solid fa-brain",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "AI", "text": "Exploring practical AI-assisted development and automation."}
                    }
                },
                {
                    "id": 6,
                    "faIcon": "fa-solid fa-sitemap",
                    "faIconColors": {"bg": "", "fill": ""},
                    "label": null,
                    "link": {"href": null, "tooltipString": null},
                    "copyToClipboardButton": false,
                    "locales": {
                        "en": {"title": "System Design", "text": "Designing scalable, maintainable, and secure systems."}
                    }
                }
            ]
        }
    ]
}
"""

skills_json = """
{
    "title": {
        "locales": {
            "en": {
                "title_short": "Skills",
                "title_short_nav": "Skills",
                "title_long_prefix": "Core capabilities",
                "title_long": "My {{Skill Set}}"
            },
            "es": {
                "title_short": "Habilidades",
                "title_short_nav": "Habilidades",
                "title_long_prefix": "Capacidades clave",
                "title_long": "Mi {{Conjunto de Habilidades}}"
            },
            "fr": {
                "title_short": "Compétences",
                "title_short_nav": "Compétences",
                "title_long_prefix": "Compétences clés",
                "title_long": "Mon {{Portfolio de Compétences}}"
            },
            "ko": {
                "title_short": "기술 역량",
                "title_short_nav": "기술 역량",
                "title_long_prefix": "핵심 역량",
                "title_long": "내 {{기술 스택}}"
            }
        }
    },
    "articles": [
        {
            "id": 1,
            "component": "ArticleCards",
            "locales": {
                "en": {"title": "Core Focus Areas"}
            },
            "settings": {
                "order_items_by": "id",
                "order_items_sort": "asc"
            },
            "items": [
                {
                    "id": 1,
                    "img": "",
                    "faIcon": "fa-solid fa-shield-halved",
                    "faIconColors": {"bg": "", "fill": "#2563EB"},
                    "date": {"year": null, "month": null},
                    "link": {"href": "", "tooltipString": ""},
                    "locales": {
                        "en": {
                            "title": "Secure Engineering",
                            "text": "Building resilient systems with security, reliability, and maintainability in mind."
                        }
                    }
                },
                {
                    "id": 2,
                    "img": "",
                    "faIcon": "fa-solid fa-layer-group",
                    "faIconColors": {"bg": "", "fill": "#7C3AED"},
                    "date": {"year": null, "month": null},
                    "link": {"href": "", "tooltipString": ""},
                    "locales": {
                        "en": {
                            "title": "Modern Web Development",
                            "text": "Delivering performant user interfaces and scalable APIs with current best practices."
                        }
                    }
                },
                {
                    "id": 3,
                    "img": "",
                    "faIcon": "fa-solid fa-cloud",
                    "faIconColors": {"bg": "", "fill": "#0EA5E9"},
                    "date": {"year": null, "month": null},
                    "link": {"href": "", "tooltipString": ""},
                    "locales": {
                        "en": {
                            "title": "Cloud Native Delivery",
                            "text": "Deploying applications confidently through containerization and CI/CD workflows."
                        }
                    }
                }
            ]
        },
        {
            "id": 2,
            "component": "ArticleSkills",
            "locales": {
                "en": {"title": "Technical Stack"}
            },
            "settings": {
                "max_items_per_row": 3,
                "max_rows_collapse_threshold": 6,
                "order_items_by": "percentage",
                "order_items_sort": "desc",
                "round_icons": false
            },
            "items": [
                {
                    "id": 1,
                    "img": "",
                    "faIcon": "fa-brands fa-react",
                    "faIconColors": {"bg": "", "fill": "#61DAFB"},
                    "date": {"year": 2022, "month": 3},
                    "percentage": 95,
                    "category": "Frontend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "React.js",
                            "text": "Building modern, interactive user interfaces with a strong component-driven approach.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 2,
                    "img": "",
                    "faIcon": "fa-solid fa-bolt",
                    "faIconColors": {"bg": "", "fill": "#000000"},
                    "date": {"year": 2023, "month": 1},
                    "percentage": 92,
                    "category": "Frontend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Next.js",
                            "text": "Creating high-performance React applications with routing, SSR, and optimized delivery.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 3,
                    "img": "",
                    "faIcon": "fa-brands fa-js",
                    "faIconColors": {"bg": "", "fill": "#F7DF1E"},
                    "date": {"year": 2021, "month": 5},
                    "percentage": 94,
                    "category": "Frontend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "JavaScript",
                            "text": "Building responsive client-side logic and modern web interactions.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 4,
                    "img": "",
                    "faIcon": "fa-solid fa-code",
                    "faIconColors": {"bg": "", "fill": "#3178C6"},
                    "date": {"year": 2022, "month": 8},
                    "percentage": 90,
                    "category": "Frontend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "TypeScript",
                            "text": "Writing scalable, maintainable codebases with strong typing and architecture.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 5,
                    "img": "",
                    "faIcon": "fa-brands fa-node-js",
                    "faIconColors": {"bg": "", "fill": "#339933"},
                    "date": {"year": 2022, "month": 4},
                    "percentage": 92,
                    "category": "Backend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Node.js",
                            "text": "Building performant server-side applications and APIs with modern runtime practices.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 6,
                    "img": "",
                    "faIcon": "fa-solid fa-server",
                    "faIconColors": {"bg": "", "fill": "#D3D3D3"},
                    "date": {"year": 2022, "month": 6},
                    "percentage": 88,
                    "category": "Backend",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Express.js",
                            "text": "Creating modular web services and API layers with clean middleware patterns.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 7,
                    "img": "",
                    "faIcon": "fa-solid fa-database",
                    "faIconColors": {"bg": "", "fill": "#47A248"},
                    "date": {"year": 2023, "month": 2},
                    "percentage": 86,
                    "category": "Database",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "MongoDB",
                            "text": "Designing document-based data models for modern applications.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 8,
                    "img": "",
                    "faIcon": "fa-solid fa-database",
                    "faIconColors": {"bg": "", "fill": "#336791"},
                    "date": {"year": 2022, "month": 10},
                    "percentage": 84,
                    "category": "Database",
                    "experienceLevel": "Intermediate",
                    "locales": {
                        "en": {
                            "title": "PostgreSQL",
                            "text": "Working with relational data design and reliable query optimization.",
                            "level": "Intermediate"
                        }
                    }
                },
                {
                    "id": 9,
                    "img": "",
                    "faIcon": "fa-brands fa-docker",
                    "faIconColors": {"bg": "", "fill": "#2496ED"},
                    "date": {"year": 2023, "month": 5},
                    "percentage": 90,
                    "category": "DevOps",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Docker",
                            "text": "Containerizing services for consistent development and deployment environments.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 10,
                    "img": "",
                    "faIcon": "fa-solid fa-dharmachakra",
                    "faIconColors": {"bg": "", "fill": "#326CE5"},
                    "date": {"year": 2023, "month": 8},
                    "percentage": 85,
                    "category": "Cloud",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Kubernetes",
                            "text": "Deploying and managing distributed applications with container orchestration.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 11,
                    "img": "",
                    "faIcon": "fa-brands fa-git-alt",
                    "faIconColors": {"bg": "", "fill": "#F05032"},
                    "date": {"year": 2021, "month": 2},
                    "percentage": 93,
                    "category": "DevOps",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Git",
                            "text": "Managing version control and collaboration across distributed engineering teams.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 12,
                    "img": "",
                    "faIcon": "fa-brands fa-github",
                    "faIconColors": {"bg": "", "fill": "#181717"},
                    "date": {"year": 2021, "month": 2},
                    "percentage": 90,
                    "category": "DevOps",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "GitHub",
                            "text": "Collaborating through pull requests, code reviews, and modern workflow automation.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 13,
                    "img": "",
                    "faIcon": "fa-brands fa-linux",
                    "faIconColors": {"bg": "", "fill": "#FCC624"},
                    "date": {"year": 2021, "month": 9},
                    "percentage": 88,
                    "category": "DevOps",
                    "experienceLevel": "Advanced",
                    "locales": {
                        "en": {
                            "title": "Linux",
                            "text": "Working comfortably across Linux environments for development and deployment tasks.",
                            "level": "Advanced"
                        }
                    }
                },
                {
                    "id": 14,
                    "img": "",
                    "faIcon": "fa-solid fa-cloud",
                    "faIconColors": {"bg": "", "fill": "#FF9900"},
                    "date": {"year": 2024, "month": 1},
                    "percentage": 82,
                    "category": "Cloud",
                    "experienceLevel": "Intermediate",
                    "locales": {
                        "en": {
                            "title": "AWS",
                            "text": "Exploring cloud infrastructure, deployment patterns, and secure architecture practices.",
                            "level": "Intermediate"
                        }
                    }
                },
                {
                    "id": 15,
                    "img": "",
                    "faIcon": "fa-solid fa-shield-halved",
                    "faIconColors": {"bg": "", "fill": "#6C63FF"},
                    "date": {"year": 2024, "month": 4},
                    "percentage": 80,
                    "category": "Security",
                    "experienceLevel": "Intermediate",
                    "locales": {
                        "en": {
                            "title": "DevSecOps",
                            "text": "Applying secure development practices throughout the delivery lifecycle.",
                            "level": "Intermediate"
                        }
                    }
                }
            ]
        }
    ]
}
"""

portfolio_json = """
{
    "title": {
        "locales": {
            "en": {
                "title_short": "Portfolio",
                "title_short_nav": "Portfolio",
                "title_long_prefix": "Featured work",
                "title_long": "My {{Projects}}"
            },
            "es": {
                "title_short": "Portafolio",
                "title_short_nav": "Portafolio",
                "title_long_prefix": "Trabajo destacado",
                "title_long": "Mis {{Proyectos}}"
            },
            "fr": {
                "title_short": "Portfolio",
                "title_short_nav": "Portfolio",
                "title_long_prefix": "Projets phares",
                "title_long": "Mes {{Projets}}"
            },
            "ko": {
                "title_short": "포트폴리오",
                "title_short_nav": "포트폴리오",
                "title_long_prefix": "대표 작업",
                "title_long": "내 {{프로젝트}}"
            }
        }
    },
    "articles": [
        {
            "id": 1,
            "component": "ArticlePortfolio",
            "locales": {
                "en": {
                    "category_all": "All",
                    "category_apps": "Apps",
                    "category_web": "Web",
                    "category_utilities": "Platform"
                }
            },
            "settings": {
                "categorize_by": ["category_apps", "category_web", "category_utilities"],
                "order_items_by": "id",
                "order_items_sort": "asc"
            },
            "items": [
                {
                    "id": 1,
                    "categoryId": "category_web",
                    "img": "",
                    "faIcon": "fa-solid fa-hospital",
                    "faIconColors": {"bg": "#2563EB", "fill": "#F8FAFC"},
                    "preview": {
                        "links": [
                            {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github", "faIcon": "fa-brands fa-github"}
                        ],
                        "screenshots": [],
                        "screenshotsAspectRatio": "16:9",
                        "youtubeVideo": ""
                    },
                    "locales": {
                        "en": {
                            "title": "Enterprise Healthcare Platform",
                            "text": "A secure, scalable healthcare platform built with <b>React.js</b>, <b>Next.js</b>, <b>Redux Toolkit</b>, <b>RTK Query</b>, and <b>Node.js</b> for modern digital operations.",
                            "tags": ["React.js", "Next.js", "Node.js", "Security"]
                        }
                    }
                },
                {
                    "id": 2,
                    "categoryId": "category_web",
                    "img": "",
                    "faIcon": "fa-solid fa-chart-line",
                    "faIconColors": {"bg": "#0F766E", "fill": "#F8FAFC"},
                    "preview": {
                        "links": [
                            {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github", "faIcon": "fa-brands fa-github"}
                        ],
                        "screenshots": [],
                        "screenshotsAspectRatio": "16:9",
                        "youtubeVideo": ""
                    },
                    "locales": {
                        "en": {
                            "title": "Modern Analytics Dashboard",
                            "text": "A polished analytics experience built with <b>React</b>, <b>Tailwind CSS</b>, interactive charts, and <b>REST APIs</b> for data-rich workflows.",
                            "tags": ["React", "Tailwind CSS", "Charts", "REST APIs"]
                        }
                    }
                },
                {
                    "id": 3,
                    "categoryId": "category_utilities",
                    "img": "",
                    "faIcon": "fa-solid fa-microchip",
                    "faIconColors": {"bg": "#7C3AED", "fill": "#F8FAFC"},
                    "preview": {
                        "links": [
                            {"href": "https://github.com/abdulzakirkhan", "tooltipString": "see_on_github", "faIcon": "fa-brands fa-github"}
                        ],
                        "screenshots": [],
                        "screenshotsAspectRatio": "16:9",
                        "youtubeVideo": ""
                    },
                    "locales": {
                        "en": {
                            "title": "Cloud Native Deployment",
                            "text": "A production-oriented deployment solution using <b>Docker</b>, <b>Kubernetes</b>, and <b>CI/CD</b> to streamline delivery and scalability.",
                            "tags": ["Docker", "Kubernetes", "CI/CD"]
                        }
                    }
                }
            ]
        }
    ]
}
"""

for path, content in [
    (root / 'profile.json', profile_json),
    (root / 'sections' / 'cover.json', cover_json),
    (root / 'sections' / 'skills.json', skills_json),
    (root / 'sections' / 'portfolio.json', portfolio_json),
]:
    path.write_text(json.dumps(json.loads(content), indent=4) + '\n', encoding='utf-8')
