export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        en: {
            header: {
                greeting: "Hello, my name is",
                title: "Wojciech Falkowski",
                description: "Software Engineer with 4+ years of experience, who specialize in building modern, responsive, and user-friendly websites.",
                contact: "Contact me"
            },
            services: {
                title: 'Specialized in',
                description: 'Services',
                offerings: {
                    websites: {
                        title: 'UI/UX Design',
                        description: 'Turn what you have in mind of a digital product into reality. For any platform you consider.'
                    },
                    onlineStores: {
                        title: 'Application Development',
                        description: 'Standard designing, building, and implementing your applications with documentation.'
                    },
                    customApplications: {
                        title: 'Web Development',
                        description: 'Create and maintain your websites and also take care of its performance and traffic capacity.'
                    },
                }
            },
            contact: {
                title: 'Contact',
                subtitle: "Let's talk about growing your business",

            },
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send',
                fieldIsRequired: 'Field is required',
            },
            navigationLinks: {
                services: 'Services',
                portfolios: 'Portfolios',
                experience: 'Experience',
                skills: 'Skills'
            },
            projects: {
                title: 'My portfolio',
                subtitle: 'Recent projects'
            },
            work: [
                {
                    id: 1,
                    name: "Samsung",
                    title: "Software Engineer Samsung",
                    location: "Warsaw, Poland",
                    date: "June 2024 - Present · Full-time",
                    logo: "logo_samsung.jpg",
                    technologies: [
                        "JavaScript",
                        "TypeScript",
                        "Vue",
                        "Java",
                        "Sprint boot",
                        "PostgreSQL",
                    ],
                    tasks: [
                        "Improving overall website performance for mobile users.",
                        "Collaborate with back-end developers and web designers to improve usability. Collaborate with back-end developers and web designers to improve usability.",
                        "Add voice search feature for mobile app.",
                        "Developing an admin panel to manage contents, users, products.",
                    ],
                },
                {
                    id: 2,
                    name: "Ready4S",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_ready4s.jpg",
                    technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },

                {
                    id: 3,
                    name: "E Net Production",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_enetproduction.jpg",

                    technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
                {
                    id: 4,
                    name: "CityEcoView",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "icon_cityecoview.png",
                    technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
                {
                    id: 5,
                    name: "Move Closer",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_move_close.jpg",
                    technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
            ],
            "education": [
                {
                    "id": 1,
                    "institution": "WIT Academy",
                    "degree": "Master's degree",
                    "field": "Software Engineering",
                    "date": "2022 - 2024",
                    "grade": "5",
                    "logo": "akademia_wit_logo.jpg"
                },
                {
                    "id": 2,
                    "institution": "WIT Academy",
                    "degree": "Bachelor's degree",
                    "field": "Computer Engineering",
                    "date": "2018 - 2022",
                    "grade": "5",
                    "logo": "akademia_wit_logo.jpg"
                }
            ],
            common: {
                privacyPolicy: 'Privacy policy',
                cookiesSettings: 'Cookies settings',
                allRightsReserve: 'All rights reserved.',
                // madeWithLove: 'Made with 💖 by Wojciech Falkowski'
            },
        },
        pl: {
            header: {
                greeting: "Cześć, nazywam się",
                title: "Wojciech Falkowski",
                description: "Jestem programistą z ponad 4-letnim doświadczeniem, specjalizujący się w budowaniu nowoczesnych, responsywnych i przyjaznych dla użytkownika stron internetowych.",
                contact: "Skontaktuj się"
            },
            services: {
                title: 'Specjalizuje się w',
                description: 'Usługi',
                offerings: {
                    websites: {
                        title: 'UI/UX Design',
                        description: 'Przekształcam Twój pomysł cyfrowego produktu w realną wartość dopasowaną do różnych platform.'
                    },
                    onlineStores: {
                        title: 'Tworzenie aplikacji',
                        description: 'Projektowanie, budowa i wdrażanie aplikacji wraz z pełną dokumentacją.'
                    },
                    customApplications: {
                        title: 'Dedykowane aplikacje',
                        description: 'Tworzę i utrzymuję strony internetowe, dbając jednocześnie o ich wydajność i monitorując ruch na stronie.'
                    },
                }
            },
            contact: {
                title: 'Kontakt',
                subtitle: 'Porozmawiajmy o rozwoju Twojego biznesu',
            },
            form: {
                name: 'Imię',
                email: 'Email',
                message: 'Wiadomość',
                send: 'Wyślij',
                fieldIsRequired: 'Pole jest wymagane',
            },
            navigationLinks: {
                services: 'Usługi',
                portfolios: 'Portfolio',
                experience: 'Doświadczenie',
                skills: 'Umiejętności'
            },
            projects: {
                title: 'Moje portfolio',
                subtitle: 'Ostatnie projeky'
            },
            work: [
                {
                    id: 1,
                    name: "Samsung",
                    title: "Software Engineer Samsung",
                    location: "Warszawa, Polska",
                    date: "June 2024 - Present · Full-time",
                    logo: "logo_samsung.jpg",
                    technologies: [
                        "JavaScript",
                        "TypeScript",
                        "Vue",
                        "Java",
                        "Sprint boot",
                        "PostgreSQL",
                    ],
                    tasks: [
                        "Improving overall website performance for mobile users.",
                        "Collaborate with back-end developers and web designers to improve usability. Collaborate with back-end developers and web designers to improve usability.",
                        "Add voice search feature for mobile app.",
                        "Developing an admin panel to manage contents, users, products.",
                    ],
                },
                {
                    id: 2,
                    name: "Ready4S",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_ready4s.jpg", technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
                {
                    id: 3,
                    name: "E Net Production",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_enetproduction.jpg", technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
                {
                    id: 4,
                    name: "CityEcoView",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "icon_cityecoview.png", technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                },
                {
                    id: 5,
                    name: "Move Closer",
                    title: "Frontend Developer at Ready4S",
                    location: "Krakow, Poland",
                    date: "2022 - 2024",
                    logo: "logo_move_close.jpg",
                    technologies: ["JavaScript", "TypeScript", "Vue"],
                    tasks: [
                        "Built new features in Vue + TypeScript.",
                        "Optimized app performance.",
                        "Refactored legacy JavaScript code.",
                    ],
                }
            ],
            "education": [
                {
                    "id": 1,
                    "institution": "Akademia WIT",
                    "degree": "Magister",
                    "field": "Inżynieria oprogramowania",
                    "date": "2022 - 2024",
                    "grade": "5",
                    "logo": "akademia_wit_logo.jpg"
                },
                {
                    "id": 2,
                    "institution": "Akademia WIT",
                    "degree": "Inżynier",
                    "field": "Inżynieria komputerowa",
                    "date": "2018 - 2022",
                    "grade": "5",
                    "logo": "akademia_wit_logo.jpg"
                }
            ],
            common: {
                privacyPolicy: 'Polityka prywatności',
                cookiesSettings: 'Ustawienia cookies',
                allRightsReserve: 'Wszystkie prawa zastrzeżone.',
                // madeWithLove: 'Made with 💖 by Wojciech Falkowski'
            },
        }
    }
}));
