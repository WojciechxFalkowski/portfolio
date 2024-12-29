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
            common: {
                privacyPolicy: 'Polityka prywatności',
                cookiesSettings: 'Ustawienia cookies',
                allRightsReserve: 'Wszystkie prawa zastrzeżone.',
                // madeWithLove: 'Made with 💖 by Wojciech Falkowski'
            },
        }
    }
}));
