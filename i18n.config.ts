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
            "contactForm": {
                "title": "Contact",
                "subtitle": "Text me",
                "name": "Name",
                "email": "Email",
                "message": "Message",
                "button": "Send Message"
            },
            "contactInfo": [
                {
                    "type": "Address",
                    "value": "Warsaw, Poland",
                    "icon": "icon_pin.svg"
                },
                {
                    "type": "Phone",
                    "value": "(+48) 698-444-030",
                    "icon": "icon_phone.svg"
                },
                {
                    "type": "E-Mail",
                    "value": "wojtekfalkowski@gmail.com",
                    "icon": "icon_mail.svg"
                }
            ],
            form: {
                fieldIsRequired: 'Field is required',
            },
            navigationLinks: {
                services: 'Services',
                portfolios: 'Portfolios',
                experience: 'Experience',
                testimonials: 'Referencje',
                skills: 'Skills',
                contact: 'Contact',
            },
            projects: {
                title: 'My portfolio',
                subtitle: 'Recent projects'
            },
            testimonials: [
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D4D03AQGxycTdmxs6TA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732022992308?e=1741219200&v=beta&t=kruf-71ySNOcOJ6wR-jWQWr08UnUdHG9cT6bXDZH7oI", // Link do zdjęcia
                    message:
                        "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
                    name: "Javlon Khalimjanov",
                    role: "Front-end Developer",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D5603AQGjUK41NW3nnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701690824735?e=1741219200&v=beta&t=sDqUhtdpgRMRVoOw-UZ_rn8wuoAmjSBUO4Qr7zwStN8",
                    message:
                        "I'm glad I decided to work with you. The project was delivered on time with all the requirements.",
                    name: "Michał Krawczycki",
                    role: "Founder & Real estate agent - WellRent",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/C5603AQEpNOUHIn0MAg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1616015148417?e=1741219200&v=beta&t=cclfzVh0d1YyP16TWfGdONdiPWfT3GqBkbWUl3F5QHU",
                    message:
                        "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
                    name: "Xavier Zielinski",
                    role: "Founder & CEO - CityEcoView",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D4D03AQGxycTdmxs6TA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732022992308?e=1741219200&v=beta&t=kruf-71ySNOcOJ6wR-jWQWr08UnUdHG9cT6bXDZH7oI", // Link do zdjęcia
                    message:
                        "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
                    name: "Javlon Khalimjanov",
                    role: "Front-end Developer",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D5603AQGjUK41NW3nnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701690824735?e=1741219200&v=beta&t=sDqUhtdpgRMRVoOw-UZ_rn8wuoAmjSBUO4Qr7zwStN8",
                    message:
                        "I'm glad I decided to work with you. The project was delivered on time with all the requirements.",
                    name: "Michał Krawczycki",
                    role: "Founder & Real estate agent - WellRent",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/C5603AQEpNOUHIn0MAg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1616015148417?e=1741219200&v=beta&t=cclfzVh0d1YyP16TWfGdONdiPWfT3GqBkbWUl3F5QHU",
                    message:
                        "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
                    name: "Xavier Zielinski",
                    role: "Founder & CEO - CityEcoView",
                },
            ],
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
            "contactForm": {
                "title": "Kontakt",
                "subtitle": "Napisz do mnie",
                "name": "Imię",
                "email": "Email",
                "message": "Wiadomość",
                "button": "Wyślij wiadomość"
            },
            "contactInfo": [
                {
                    "type": "Adres",
                    "value": "Warszawa, Polska",
                    "icon": "icon_pin.svg"
                },
                {
                    "type": "Telefon",
                    "value": "(+48) 698-444-030",
                    "icon": "icon_phone.svg"
                },
                {
                    "type": "E-Mail",
                    "value": "wojtekfalkowski@gmail.com",
                    "icon": "icon_mail.svg"
                }
            ],
            form: {
                fieldIsRequired: 'Pole jest wymagane',
            },
            navigationLinks: {
                services: 'Usługi',
                portfolios: 'Portfolio',
                experience: 'Doświadczenie',
                testimonials: 'Referencje',
                skills: 'Umiejętności',
                contact: 'Kontakt',
            },
            projects: {
                title: 'Moje portfolio',
                subtitle: 'Ostatnie projeky'
            },
            testimonials: [
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D4D03AQGxycTdmxs6TA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732022992308?e=1741219200&v=beta&t=kruf-71ySNOcOJ6wR-jWQWr08UnUdHG9cT6bXDZH7oI", // Link do zdjęcia
                    message:
                        "Byliśmy bardzo zadowoleni, gdy dowiedzieliśmy się, jak rozwiązałeś problemy i wyzwania związane z interfejsem użytkownika naszej strony internetowej.",
                    name: "Javlon Khalimjanov",
                    role: "Programista Front-end",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D5603AQGjUK41NW3nnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701690824735?e=1741219200&v=beta&t=sDqUhtdpgRMRVoOw-UZ_rn8wuoAmjSBUO4Qr7zwStN8",
                    message:
                        "Cieszę się, że zdecydowałem się na współpracę z Tobą. Projekt został dostarczony na czas, zgodnie ze wszystkimi wymaganiami.",
                    name: "Michał Krawczycki",
                    role: "Założyciel i agent nieruchomości - WellRent",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/C5603AQEpNOUHIn0MAg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1616015148417?e=1741219200&v=beta&t=cclfzVh0d1YyP16TWfGdONdiPWfT3GqBkbWUl3F5QHU",
                    message:
                        "Byliśmy bardzo zadowoleni, gdy dowiedzieliśmy się, jak rozwiązałeś problemy i wyzwania związane z interfejsem użytkownika naszej strony internetowej.",
                    name: "Xavier Zielinski",
                    role: "Założyciel i CEO - CityEcoView",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D4D03AQGxycTdmxs6TA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732022992308?e=1741219200&v=beta&t=kruf-71ySNOcOJ6wR-jWQWr08UnUdHG9cT6bXDZH7oI", // Link do zdjęcia
                    message:
                        "Byliśmy bardzo zadowoleni, gdy dowiedzieliśmy się, jak rozwiązałeś problemy i wyzwania związane z interfejsem użytkownika naszej strony internetowej.",
                    name: "Javlon Khalimjanov",
                    role: "Programista Front-end",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/D5603AQGjUK41NW3nnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701690824735?e=1741219200&v=beta&t=sDqUhtdpgRMRVoOw-UZ_rn8wuoAmjSBUO4Qr7zwStN8",
                    message:
                        "Cieszę się, że zdecydowałem się na współpracę z Tobą. Projekt został dostarczony na czas, zgodnie ze wszystkimi wymaganiami.",
                    name: "Michał Krawczycki",
                    role: "Założyciel i agent nieruchomości - WellRent",
                },
                {
                    avatar:
                        "https://media.licdn.com/dms/image/v2/C5603AQEpNOUHIn0MAg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1616015148417?e=1741219200&v=beta&t=cclfzVh0d1YyP16TWfGdONdiPWfT3GqBkbWUl3F5QHU",
                    message:
                        "Byliśmy bardzo zadowoleni, gdy dowiedzieliśmy się, jak rozwiązałeś problemy i wyzwania związane z interfejsem użytkownika naszej strony internetowej.",
                    name: "Xavier Zielinski",
                    role: "Założyciel i CEO - CityEcoView",
                },
            ],
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
