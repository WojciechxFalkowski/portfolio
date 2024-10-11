export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pl',
    messages: {
        en: {
            header: {
                greeting: "Hi, I'm Wojtek",
                title: "Software Engineer",
                description: "I specialize in creating websites",
                contact: "Contact me"
            },
            services: {
                title: 'Programming services',
                description: 'Every project starts with an idea, and I support you at every stage.', // Every project starts with an idea, and I support you at every stage – from requirements gathering to the final solution.
                offerings: {
                    websites: {
                        title: 'Websites',
                        description: 'Responsive websites with seamless content management integration.'
                    },
                    onlineStores: {
                        title: 'Online stores',
                        description: 'Online stores optimized for effective product display and sales growth.'
                    },
                    customApplications: {
                        title: 'Custom applications',
                        description: 'Scalable web applications tailored to unique requirements.'
                    },
                    uiUxDesign: {
                        title: 'UI & UX Design',
                        description: 'Modern, user-friendly interfaces for mobile and desktop.'
                    },
                    seoPerformanceSecurity: {
                        title: 'SEO, Performance & Security',
                        description: 'Comprehensive audits, SEO, and performance optimization.'
                    },
                    analytics: {
                        title: 'Analytics',
                        description: 'In-depth tracking of website traffic and user behavior to optimize performance.'
                    }
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
                home: 'Home',
                aboutMe: 'About me',
                projects: 'Projects',
                blog: 'Blog',
                contact: 'Contact'
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
                greeting: "Cześć, jestem Wojtek",
                title: "Software Engineer",
                description: "Specjalizuję się w tworzeniu stron internetowych",
                contact: "Skontaktuj się"
            },
            services: {
                title: 'Usługi programistyczne',
                description: 'Każdy projekt zaczyna się od pomysłu, a ja wspieram Cię na każdym jego etapie.', // Każdy projekt zaczyna się od pomysłu, a ja wspieram Cię na każdym jego etapie – od zbierania wymagań po wdrożenie ostatecznego rozwiązania.
                offerings: {
                    websites: {
                        title: 'Strony internetowe',
                        description: 'Responsywne strony internetowe z płynną integracją systemu zarządzania treścią.'
                    },
                    onlineStores: {
                        title: 'Sklepy internetowe',
                        description: 'Sklepy internetowe zoptymalizowane pod kątem efektywnej prezentacji produktów i wzrostu sprzedaży.'
                    },
                    customApplications: {
                        title: 'Dedykowane aplikacje',
                        description: 'Skalowalne aplikacje internetowe dostosowane do unikalnych wymagań.'
                    },
                    uiUxDesign: {
                        title: 'Projektowanie UI & UX',
                        description: 'Nowoczesne, przyjazne użytkownikom interfejsy na urządzenia mobilne i komputery stacjonarne.'
                    },
                    seoPerformanceSecurity: {
                        title: 'SEO, wydajność i bezpieczeństwo',
                        description: 'Kompleksowe audyty, SEO oraz optymalizacja wydajności.'
                    },
                    analytics: {
                        title: 'Analityka',
                        description: 'Dogłębne śledzenie ruchu na stronie i zachowań użytkowników w celu optymalizacji wydajności.'
                    }
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
                home: 'Strona główna',
                aboutMe: 'O mnie',
                projects: 'Projekty',
                blog: 'Blog',
                contact: 'Kontact'
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
