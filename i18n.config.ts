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
            portfolios: {
                title: 'Featured Portfolios',
                description: 'My works',
                projects: [
                    {
                        title: "Travel",
                        image: "portfolio_1.jpg",
                        tags: [
                            {
                                title: "Single Page Application",
                                link: "",
                                icon: "",
                            },
                            { title: "HTML", link: "", icon: "" },
                            { title: "CSS", link: "", icon: "" },
                            {
                                title: "",
                                link: "https://wojciechxfalkowski.github.io/Travel-website",
                                icon: "",
                            },
                        ],
                    },
                    {
                        title: "Trip Guide",
                        image: "portfolio_2.jpg",
                        tags: [
                            { title: "Vue", link: "", icon: "" },
                            { title: "Bootstrap", link: "", icon: "" },
                            { title: "CMS", link: "", icon: "" },
                            { title: "Docker", link: "", icon: "" },
                            { title: "", link: "http://141.144.224.51", icon: "" },

                        ],
                    },
                    {
                        title: "Well Rent",
                        image: "portfolio_3.jpg",
                        tags: [
                            { title: "Vue", link: "", icon: "" },
                            { title: "Custom CMS", link: "", icon: "" },
                            // { title: "Case study", link: "", icon: "" },
                            { title: "", link: "https://wellrent-nieruchomosci.pl/", icon: "" },

                        ],
                    },
                ]
            },
            contactForm: {
                "title": "Contact",
                "subtitle": "Text me",
                "name": "Name",
                "email": "Email",
                "message": "Message",
                "button": "Send Message"
            },
            contactInfo: [
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
                    "value": "wojtexfalkowski@gmail.com",
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
            testimonialSection: {
                title: 'Testimonials',
                subtitle: 'MY CLIENTS',
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
                    }
                ],
            },
            workExperienceSection: {
                title: 'Work Experices',
                subtitle: 'career path',
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
            },
            educationSection: {
                grade: 'Ocena',
                description: "Od ponad 4 lat nieustannie uczę się z zakresu frontendu oraz eksperymentuję z nowymi technologiami i frameworkami. Tutaj możesz zobaczyć podsumowanie moich umiejętności.",
                title: 'Edukacja & Umiejętności',
                subtitle: 'Ścieżka rozwoju',
                education: [
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
            },
            privacyPolicy: {
                introduction: {
                    lastUpdated: 'Last updated',
                    title: "Privacy Policy",
                    lastUpdatedDate: "January 03, 2025",
                    description: `
                      This Privacy Policy describes Our policies and procedures on the
                      collection, use and disclosure of Your information when You use the
                      Service and tells You about Your privacy rights and how the law protects
                      You.
                    `,
                    details: `
                      We use Your Personal data to provide and improve the Service. By using
                      the Service, You agree to the collection and use of information in
                      accordance with this Privacy Policy. This Privacy Policy has been
                      created with the help of the 
                      <a href="https://www.privacypolicies.com/privacy-policy-generator/" 
                         target="_blank" class="text-blue-600 underline">Privacy Policy Generator</a>.
                    `,
                },
                definitions: {
                    title: "Definitions",
                    introduction: "For the purposes of this Privacy Policy:",
                    terms: [
                        {
                            term: "Account",
                            description:
                                "means a unique account created for You to access our Service or parts of our Service.",
                        },
                        {
                            term: "Affiliate",
                            description:
                                'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
                        },
                        {
                            term: "Company",
                            description:
                                '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Web Developer - Wojciech Falkowski.',
                        },
                        {
                            term: "Cookies",
                            description:
                                "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
                        },
                        {
                            term: "Country",
                            description: "refers to: Poland",
                        },
                        {
                            term: "Device",
                            description:
                                "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                        },
                        {
                            term: "Personal Data",
                            description:
                                "is any information that relates to an identified or identifiable individual.",
                        },
                        {
                            term: "Service",
                            description: "refers to the Website.",
                        },
                        {
                            term: "Service Provider",
                            description:
                                "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
                        },
                        {
                            term: "Usage Data",
                            description:
                                "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
                        },
                        {
                            term: "Website",
                            description:
                                "refers to Web Developer - Wojciech Falkowski, accessible from https://wojciechfalkowski.pl/",
                        },
                        {
                            term: "You",
                            description:
                                "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                        },
                    ],
                },
                collectingAndUsingPersonalData: {
                    title: "Collecting and Using Your Personal Data",
                    subtitle: "Types of Data Collected",
                    personalData: {
                        title: "Personal Data",
                        description: `
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information 
                        that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                      `,
                        list: [
                            "Email address",
                            "First name and last name",
                            "Usage Data",
                        ],
                    },
                    usageData: {
                        title: "Usage Data",
                        description: `
                        Usage Data is collected automatically when using the Service.
                
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), 
                        browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, 
                        the time spent on those pages, unique device identifiers and other diagnostic data.
                        
                        When You access the Service by or through a mobile device, We may collect certain information automatically, 
                        including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of 
                        Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device 
                        identifiers and other diagnostic data.
                
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service 
                        by or through a mobile device.
                      `,
                    },
                },
                trackingTechnologiesAndCookies: {
                    title: "Tracking Technologies and Cookies",
                    introduction: `
                      We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. 
                      Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. 
                      The technologies We may include:
                    `,
                    technologies: [
                        {
                            name: "Cookies or Browser Cookies",
                            description: `
                          A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to 
                          indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts 
                          of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                        `,
                        },
                        {
                            name: "Web Beacons",
                            description: `
                          Certain sections of our Service and our emails may contain small electronic files known as web beacons 
                          (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, 
                          to count users who have visited those pages or opened an email and for other related website statistics 
                          (for example, recording the popularity of a certain section and verifying system and server integrity).
                        `,
                        },
                    ],
                    cookieTypesIntroduction: `
                      Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device 
                      when You go offline, while Session Cookies are deleted as soon as You close Your web browser. 
                      Learn more about cookies on the Privacy Policies website article.
                    `,
                    cookiesPurposeIntroduction: 'We use both Session and Persistent Cookies for the purposes set out below',
                    cookiePurposes: [
                        {
                            name: "Necessary / Essential Cookies",
                            typeLabel: "Type",
                            type: "Session Cookies",
                            administeredBy: "Administered by",
                            administeredByValue: "Us",
                            purposeLabel: "Purpose",
                            purpose: `
                          These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. 
                          They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked 
                          for cannot be provided, and We only use these Cookies to provide You with those services.
                        `,
                        },
                        {
                            name: "Cookies Policy / Notice Acceptance Cookies",
                            typeLabel: "Type",
                            type: "Persistent Cookies",
                            administeredBy: "Administered by",
                            administeredByValue: "Us",
                            purposeLabel: "Purpose",
                            purpose: `
                          These Cookies identify if users have accepted the use of cookies on the Website.
                        `,
                        },
                        {
                            name: "Functionality Cookies",
                            typeLabel: "Type",
                            type: "Persistent Cookies",
                            administeredBy: "Administered by",
                            administeredByValue: "Us",
                            purposeLabel: "Purpose",
                            purpose: `
                          These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. 
                          The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences 
                          every time You use the Website.
                        `,
                        },
                    ],
                    footerText: `
                      For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or 
                      the Cookies section of our Privacy Policy.
                    `,
                },
                useOfPersonalData: {
                    title: "Use of Your Personal Data",
                    introduction: `
                      The Company may use Personal Data for the following purposes:
                    `,
                    purposes: [
                        {
                            name: "To provide and maintain our Service",
                            description: "including to monitor the usage of our Service.",
                        },
                        {
                            name: "To manage Your Account",
                            description: `
                          to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of 
                          the Service that are available to You as a registered user.
                        `,
                        },
                        {
                            name: "For the performance of a contract",
                            description: `
                          the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any 
                          other contract with Us through the Service.
                        `,
                        },
                        {
                            name: "To contact You",
                            description: `
                          To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's 
                          push notifications regarding updates or informative communications related to the functionalities, products or contracted services, 
                          including the security updates, when necessary or reasonable for their implementation.
                        `,
                        },
                        {
                            name: "To provide You",
                            description: `
                          with news, special offers and general information about other goods, services and events which we offer that are similar to those that 
                          you have already purchased or enquired about unless You have opted not to receive such information.
                        `,
                        },
                        {
                            name: "To manage Your requests",
                            description: "To attend and manage Your requests to Us.",
                        },
                        {
                            name: "For business transfers",
                            description: `
                          We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or 
                          transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in 
                          which Personal Data held by Us about our Service users is among the assets transferred.
                        `,
                        },
                        {
                            name: "For other purposes",
                            description: `
                          We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our 
                          promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                        `,
                        },
                    ],
                    sharingTitle: `
                      We may share Your personal information in the following situations:
                    `,
                    sharingSituations: [
                        {
                            name: "With Service Providers",
                            description: `
                          We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                        `,
                        },
                        {
                            name: "For business transfers",
                            description: `
                          We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, 
                          financing, or acquisition of all or a portion of Our business to another company.
                        `,
                        },
                        {
                            name: "With Affiliates",
                            description: `
                          We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. 
                          Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that 
                          are under common control with Us.
                        `,
                        },
                        {
                            name: "With business partners",
                            description: `
                          We may share Your information with Our business partners to offer You certain products, services or promotions.
                        `,
                        },
                        {
                            name: "With other users",
                            description: `
                          when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all 
                          users and may be publicly distributed outside.
                        `,
                        },
                        {
                            name: "With Your consent",
                            description: `
                          We may disclose Your personal information for any other purpose with Your consent.
                        `,
                        },
                    ],
                },
                retentionOfPersonalData: {
                    title: "Retention of Your Personal Data",
                    content: `
                      The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. 
                      We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are 
                      required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                
                      The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of 
                      time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally 
                      obligated to retain this data for longer time periods.
                    `,
                },
                transferOfPersonalData: {
                    title: "Transfer of Your Personal Data",
                    content: `
                      Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties 
                      involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located 
                      outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those 
                      from Your jurisdiction.
                
                      Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                
                      The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this 
                      Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate 
                      controls in place including the security of Your data and other personal information.
                    `,
                },
                deleteYourPersonalData: {
                    title: "Delete Your Personal Data",
                    content: `
                      You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                
                      Our Service may give You the ability to delete certain information about You from within the Service.
                
                      You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the 
                      account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, 
                      or delete any personal information that You have provided to Us.
                
                      Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                    `,
                },
                disclosureOfPersonalData: {
                    title: "Disclosure of Your Personal Data",
                    sections: [
                        {
                            subtitle: "Business Transactions",
                            subcontent: "",
                            content: `
                          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. 
                          We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                        `,
                        },
                        {
                            subtitle: "Law enforcement",
                            subcontent: "",
                            content: `
                          Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or 
                          in response to valid requests by public authorities (e.g. a court or a government agency).
                        `,
                        },
                        {
                            subtitle: "Other legal requirements",
                            subcontent: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
                            content: [
                                "Comply with a legal obligation",
                                "Protect and defend the rights or property of the Company",
                                "Prevent or investigate possible wrongdoing in connection with the Service",
                                "Protect the personal safety of Users of the Service or the public",
                                "Protect against legal liability",
                            ],
                        },
                    ],
                },
                securityOfPersonalData: {
                    title: "Security of Your Personal Data",
                    content: `
                      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, 
                      or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your 
                      Personal Data, We cannot guarantee its absolute security.
                    `,
                },
                childrensPrivacy: {
                    title: "Children's Privacy",
                    content: `
                      Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information 
                      from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, 
                      please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of 
                      parental consent, We take steps to remove that information from Our servers.
                
                      If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, 
                      We may require Your parent's consent before We collect and use that information.
                    `,
                },
                linksToOtherWebsites: {
                    title: "Links to Other Websites",
                    content: `
                      Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, 
                      You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                
                      We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    `,
                },
                changesToPrivacyPolicy: {
                    title: "Changes to this Privacy Policy",
                    content: `
                      We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                
                      We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" 
                      date at the top of this Privacy Policy.
                
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are 
                      posted on this page.
                    `,
                },
                contactUs: {
                    title: "Contact Us",
                    description: "If you have any questions about this Privacy Policy, You can contact us:",
                    contactMethods: {
                        email: {
                            type: "email",
                            subValue: "By email:",
                            value: "wojtexfalkowski@gmail.com",
                            href: "mailto:wojtexfalkowski@gmail.com",
                        },
                        website: {
                            type: "website",
                            subValue: "By visiting this page on our website:",
                            value: "https://wojciechfalkowski.pl/#contact",
                            href: "https://wojciechfalkowski.pl/#contact",
                        },
                        phone: {
                            type: "phone",
                            subValue: "By phone number:",
                            value: "+48 698 444 030",
                        },
                    },
                },
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
            portfolios: {
                title: 'Wyróżnione Portfolio',
                description: 'Moje prace',
                projects: [
                    {
                        title: "Strona internetowa podróży",
                        image: "portfolio_1.jpg",
                        tags: [
                            {
                                title: "Statyczna strona",
                                link: "",
                                icon: "",
                            },
                            { title: "HTML", link: "", icon: "" },
                            { title: "CSS", link: "", icon: "" },
                            {
                                title: "",
                                link: "https://wojciechxfalkowski.github.io/Travel-website",
                                icon: "",
                            },
                        ],
                    },
                    {
                        title: "Trip Guide",
                        image: "portfolio_2.jpg",
                        tags: [
                            { title: "Vue", link: "", icon: "" },
                            { title: "Bootstrap", link: "", icon: "" },
                            { title: "CMS", link: "", icon: "" },
                            { title: "Docker", link: "", icon: "" },
                            { title: "", link: "http://141.144.224.51", icon: "" },
                        ],
                    },
                    {
                        title: "Well Rent",
                        image: "portfolio_3.jpg",
                        tags: [
                            { title: "Vue", link: "", icon: "" },
                            { title: "Autorski CMS", link: "", icon: "" },
                            // { title: "Studium przypadku", link: "", icon: "" },
                            { title: "", link: "https://wellrent-nieruchomosci.pl/", icon: "" },
                        ],
                    },
                ]
            },
            contactForm: {
                "title": "Kontakt",
                "subtitle": "Napisz do mnie",
                "name": "Imię",
                "email": "Email",
                "message": "Wiadomość",
                "button": "Wyślij wiadomość"
            },
            contactInfo: [
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
                    "value": "wojtexfalkowski@gmail.com",
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
            testimonialSection: {
                title: 'Referencje',
                subtitle: 'Klienci',
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
                ],
            },
            workExperienceSection: {
                title: 'Doświadczenie',
                subtitle: 'Ścieżka kariery',
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
            },
            educationSection: {
                grade: 'Grade',
                description: "For 4+ years I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks. Here you can see a summary of my skills.",
                title: 'Education & Skills',
                subtitle: 'learning path',
                education: [
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
            },
            privacyPolicy: {
                introduction: {
                    title: "Polityka Prywatności",
                    lastUpdated: 'Ostatnia aktualizacja',
                    lastUpdatedDate: "03 stycznia 2025",
                    description: `
                      Niniejsza Polityka Prywatności opisuje nasze zasady i procedury dotyczące
                      zbierania, wykorzystywania i ujawniania Twoich informacji podczas
                      korzystania z Usługi oraz informuje Cię o Twoich prawach w zakresie prywatności
                      i o tym, jak prawo chroni Cię.
                    `,
                    details: `
                      Używamy Twoich danych osobowych, aby świadczyć i ulepszać Usługę. Korzystając
                      z Usługi, zgadzasz się na zbieranie i wykorzystywanie informacji
                      zgodnie z niniejszą Polityką Prywatności. Niniejsza Polityka Prywatności została
                      utworzona przy pomocy 
                      <a href="https://www.privacypolicies.com/privacy-policy-generator/" 
                         target="_blank" class="text-blue-600 underline">Generatora Polityki Prywatności</a>.
                    `,
                },
                definitions: {
                    title: "Definicje",
                    introduction: "Na potrzeby niniejszej Polityki Prywatności:",
                    terms: [
                        {
                            term: "Konto",
                            description:
                                "oznacza unikalne konto utworzone dla Ciebie w celu uzyskania dostępu do naszej Usługi lub jej części.",
                        },
                        {
                            term: "Podmiot powiązany",
                            description:
                                'oznacza podmiot, który kontroluje, jest kontrolowany przez lub znajduje się pod wspólną kontrolą z daną stroną, gdzie "kontrola" oznacza posiadanie 50% lub więcej udziałów, udziałów kapitałowych lub innych papierów wartościowych uprawniających do głosowania na wybór dyrektorów lub innego organu zarządzającego.',
                        },
                        {
                            term: "Firma",
                            description:
                                '(określana w niniejszej Umowie jako "Firma", "My", "Nas" lub "Nasza") odnosi się do Web Developer - Wojciech Falkowski.',
                        },
                        {
                            term: "Pliki cookie",
                            description:
                                "to małe pliki, które są umieszczane na Twoim komputerze, urządzeniu mobilnym lub innym urządzeniu przez witrynę internetową i zawierają szczegóły Twojej historii przeglądania w tej witrynie w ramach jej wielu zastosowań.",
                        },
                        {
                            term: "Kraj",
                            description: "odnosi się do: Polska",
                        },
                        {
                            term: "Urządzenie",
                            description:
                                "oznacza każde urządzenie, które może uzyskać dostęp do Usługi, takie jak komputer, telefon komórkowy lub tablet cyfrowy.",
                        },
                        {
                            term: "Dane osobowe",
                            description:
                                "to wszelkie informacje, które odnoszą się do zidentyfikowanej lub możliwej do zidentyfikowania osoby.",
                        },
                        {
                            term: "Usługa",
                            description: "odnosi się do Witryny.",
                        },
                        {
                            term: "Dostawca usług",
                            description:
                                "oznacza każdą osobę fizyczną lub prawną, która przetwarza dane w imieniu Firmy. Odnosi się to do firm zewnętrznych lub osób zatrudnionych przez Firmę w celu ułatwienia świadczenia Usługi, świadczenia Usługi w imieniu Firmy, wykonywania usług związanych z Usługą lub pomocy Firmie w analizie sposobu korzystania z Usługi.",
                        },
                        {
                            term: "Dane eksploatacyjne",
                            description:
                                "odnoszą się do danych zbieranych automatycznie, generowanych przez korzystanie z Usługi lub z samej infrastruktury Usługi (na przykład czas trwania wizyty na stronie).",
                        },
                        {
                            term: "Witryna internetowa",
                            description:
                                "odnosi się do Web Developer - Wojciech Falkowski, dostępnej pod adresem https://wojciechfalkowski.pl/",
                        },
                        {
                            term: "Ty",
                            description:
                                "oznacza osobę uzyskującą dostęp do Usługi lub korzystającą z niej, lub firmę, lub inny podmiot prawny, w imieniu którego taka osoba uzyskuje dostęp do Usługi lub z niej korzysta, jeśli ma to zastosowanie.",
                        },
                    ],
                },
                collectingAndUsingPersonalData: {
                    title: "Zbieranie i wykorzystywanie Twoich danych osobowych",
                    subtitle: "Rodzaje zbieranych danych",
                    personalData: {
                        title: "Dane osobowe",
                        description: `
                        Korzystając z naszej Usługi, możemy poprosić Cię o podanie nam pewnych danych osobowych, które można wykorzystać do kontaktu z Tobą 
                        lub identyfikacji. Dane osobowe mogą obejmować między innymi:
                      `,
                        list: [
                            "Adres e-mail",
                            "Imię i nazwisko",
                            "Dane eksploatacyjne",
                        ],
                    },
                    usageData: {
                        title: "Dane eksploatacyjne",
                        description: `
                        Dane eksploatacyjne są zbierane automatycznie podczas korzystania z Usługi.
                
                        Dane eksploatacyjne mogą obejmować informacje takie jak adres IP Twojego urządzenia (np. adres IP), typ przeglądarki, wersja przeglądarki, odwiedzane strony naszej Usługi, data i godzina Twojej wizyty, czas spędzony na tych stronach, unikalne identyfikatory urządzeń i inne dane diagnostyczne.
                        
                        Gdy uzyskujesz dostęp do Usługi za pośrednictwem urządzenia mobilnego, możemy automatycznie zbierać pewne informacje, w tym między innymi rodzaj używanego urządzenia mobilnego, unikalny identyfikator Twojego urządzenia mobilnego, adres IP Twojego urządzenia mobilnego, mobilny system operacyjny, typ mobilnej przeglądarki internetowej, unikalne identyfikatory urządzeń i inne dane diagnostyczne.
                
                        Możemy również zbierać informacje, które Twoja przeglądarka wysyła za każdym razem, gdy odwiedzasz naszą Usługę lub gdy uzyskujesz dostęp do Usługi za pośrednictwem urządzenia mobilnego.
                      `,
                    },
                },
                trackingTechnologiesAndCookies: {
                    title: "Technologie śledzenia i pliki cookie",
                    introduction: `
                      Używamy plików cookie i podobnych technologii śledzenia, aby śledzić aktywność w naszej Usłudze i przechowywać określone informacje. 
                      Technologie śledzenia obejmują znaczniki, tagi i skrypty do zbierania i śledzenia informacji oraz poprawy i analizy naszej Usługi. 
                      Technologie, które możemy stosować, to:
                    `,
                    technologies: [
                        {
                            name: "Pliki cookie lub pliki cookie przeglądarki",
                            description: `
                          Plik cookie to mały plik umieszczany na Twoim urządzeniu. Możesz skonfigurować przeglądarkę tak, aby odrzucała wszystkie pliki cookie 
                          lub informowała o wysyłaniu pliku cookie. Jednak jeśli nie zaakceptujesz plików cookie, możesz nie być w stanie korzystać z niektórych części 
                          naszej Usługi. O ile nie zmieniłeś ustawień przeglądarki tak, aby odrzucały pliki cookie, nasza Usługa może używać plików cookie.
                        `,
                        },
                        {
                            name: "Sygnały nawigacyjne (Web Beacons)",
                            description: `
                          Niektóre sekcje naszej Usługi oraz nasze wiadomości e-mail mogą zawierać małe pliki elektroniczne znane jako sygnały nawigacyjne 
                          (nazywane również czystymi gifami, znacznikami pikselowymi i jednopikselowymi gifami), które pozwalają Firmie, na przykład, zliczać użytkowników, 
                          którzy odwiedzili te strony lub otworzyli wiadomość e-mail, oraz na inne powiązane statystyki witryny (na przykład rejestrowanie popularności 
                          określonej sekcji i weryfikacja integralności systemu i serwera).
                        `,
                        },
                    ],
                    cookieTypesIntroduction: `
                      Pliki cookie mogą być trwałe („Persistent”) lub sesyjne („Session”). Trwałe pliki cookie pozostają na Twoim komputerze osobistym lub urządzeniu mobilnym 
                      po przejściu w tryb offline, podczas gdy pliki cookie sesji są usuwane natychmiast po zamknięciu przeglądarki internetowej. 
                      Więcej informacji o plikach cookie znajdziesz w artykule na stronie Polityki Prywatności.
                    `,
                    cookiesPurposeIntroduction: 'Używamy zarówno sesyjnych, jak i trwałych plików cookie w celach określonych poniżej',
                    cookiePurposes: [
                        {
                            name: "Niezbędne / podstawowe pliki cookie",
                            typeLabel: "Typ",
                            type: "Pliki cookie sesji",
                            administeredBy: "Zarządzane przez",
                            administeredByValue: "My",
                            purposeLabel: "Cel",
                            purpose: `
                          Te pliki cookie są niezbędne do świadczenia Ci usług dostępnych za pośrednictwem Witryny i umożliwienia korzystania z niektórych jej funkcji. 
                          Pomagają uwierzytelniać użytkowników i zapobiegać oszukańczemu wykorzystaniu kont użytkowników. Bez tych plików cookie usługi, o które prosiłeś, 
                          nie mogą być świadczone, a my używamy tych plików cookie wyłącznie w celu świadczenia tych usług.
                        `,
                        },
                        {
                            name: "Polityka plików cookie / pliki cookie akceptacji powiadomień",
                            typeLabel: "Typ",
                            type: "Trwałe pliki cookie",
                            administeredBy: "Zarządzane przez",
                            administeredByValue: "My",
                            purposeLabel: "Cel",
                            purpose: `
                          Te pliki cookie identyfikują, czy użytkownicy zaakceptowali korzystanie z plików cookie w Witrynie.
                        `,
                        },
                        {
                            name: "Pliki cookie funkcjonalne",
                            typeLabel: "Typ",
                            type: "Trwałe pliki cookie",
                            administeredBy: "Zarządzane przez",
                            administeredByValue: "My",
                            purposeLabel: "Cel",
                            purpose: `
                          Te pliki cookie pozwalają nam zapamiętać wybory dokonywane przez Ciebie podczas korzystania z Witryny, takie jak zapamiętywanie danych logowania 
                          lub preferencji językowych. Celem tych plików cookie jest zapewnienie Ci bardziej spersonalizowanego doświadczenia i uniknięcie konieczności 
                          ponownego wprowadzania preferencji za każdym razem, gdy korzystasz z Witryny.
                        `,
                        },
                    ],
                    footerText: `
                      Aby uzyskać więcej informacji na temat używanych przez nas plików cookie i Twoich wyborów dotyczących plików cookie, odwiedź naszą Politykę plików cookie 
                      lub sekcję Pliki cookie naszej Polityki Prywatności.
                    `,
                },
                useOfPersonalData: {
                    title: "Wykorzystanie Twoich Danych Osobowych",
                    introduction: `
                      Firma może wykorzystywać Dane Osobowe w następujących celach:
                    `,
                    purposes: [
                        {
                            name: "Aby świadczyć i utrzymywać naszą Usługę",
                            description: "w tym monitorować korzystanie z naszej Usługi.",
                        },
                        {
                            name: "Aby zarządzać Twoim Kontem",
                            description: `
                          aby zarządzać Twoją rejestracją jako użytkownika Usługi. Dane Osobowe, które podajesz, mogą zapewnić Ci dostęp do różnych funkcjonalności 
                          Usługi dostępnych dla Ciebie jako zarejestrowanego użytkownika.
                        `,
                        },
                        {
                            name: "Do wykonania umowy",
                            description: `
                          rozwój, zgodność i realizacja umowy zakupu produktów, przedmiotów lub usług, które nabyłeś, lub innej umowy zawartej z nami za 
                          pośrednictwem Usługi.
                        `,
                        },
                        {
                            name: "Aby się z Tobą skontaktować",
                            description: `
                          Aby skontaktować się z Tobą za pomocą wiadomości e-mail, połączeń telefonicznych, SMS-ów lub innych równoważnych form komunikacji 
                          elektronicznej, takich jak powiadomienia push aplikacji mobilnych dotyczące aktualizacji lub komunikatów informacyjnych związanych z 
                          funkcjonalnościami, produktami lub zamówionymi usługami, w tym aktualizacjami zabezpieczeń, gdy jest to konieczne lub uzasadnione ich 
                          wdrożeniem.
                        `,
                        },
                        {
                            name: "Aby dostarczyć Ci",
                            description: `
                          wiadomości, specjalne oferty i ogólne informacje o innych towarach, usługach i wydarzeniach, które oferujemy, a które są podobne do tych, 
                          które już kupiłeś lub o które pytałeś, chyba że zdecydowałeś się nie otrzymywać takich informacji.
                        `,
                        },
                        {
                            name: "Aby zarządzać Twoimi zapytaniami",
                            description: "Aby obsługiwać i zarządzać Twoimi zapytaniami do nas.",
                        },
                        {
                            name: "W przypadku transferów biznesowych",
                            description: `
                          Możemy wykorzystać Twoje informacje do oceny lub przeprowadzenia fuzji, sprzedaży, restrukturyzacji, reorganizacji, rozwiązania lub innego 
                          rodzaju sprzedaży lub transferu niektórych lub wszystkich naszych aktywów, czy to jako działającego przedsiębiorstwa, czy w ramach upadłości, 
                          likwidacji lub podobnego postępowania, w którym Twoje Dane Osobowe, które przechowujemy, są częścią przenoszonych aktywów.
                        `,
                        },
                        {
                            name: "Do innych celów",
                            description: `
                          Możemy wykorzystać Twoje informacje w innych celach, takich jak analiza danych, identyfikacja trendów użytkowania, określenie skuteczności 
                          naszych kampanii promocyjnych oraz ocena i poprawa naszych Usług, produktów, usług, marketingu i Twojego doświadczenia.
                        `,
                        },
                    ],
                    sharingTitle: `
                      Możemy udostępniać Twoje dane osobowe w następujących sytuacjach:
                    `,
                    sharingSituations: [
                        {
                            name: "Z dostawcami usług",
                            description: `
                          Możemy udostępniać Twoje dane osobowe dostawcom usług w celu monitorowania i analizowania korzystania z naszej Usługi, a także w celu 
                          kontaktowania się z Tobą.
                        `,
                        },
                        {
                            name: "W przypadku transferów biznesowych",
                            description: `
                          Możemy udostępniać lub przekazywać Twoje dane osobowe w związku z negocjacjami lub w trakcie negocjacji dotyczących fuzji, sprzedaży aktywów 
                          Firmy, finansowania lub przejęcia całości lub części naszej działalności przez inną firmę.
                        `,
                        },
                        {
                            name: "Z podmiotami powiązanymi",
                            description: `
                          Możemy udostępniać Twoje informacje naszym podmiotom powiązanym, w którym to przypadku będziemy wymagać od tych podmiotów przestrzegania tej 
                          Polityki Prywatności. Podmioty powiązane obejmują naszą spółkę macierzystą oraz wszelkie inne spółki zależne, partnerów joint venture lub 
                          inne firmy, które kontrolujemy lub które znajdują się pod wspólną kontrolą z nami.
                        `,
                        },
                        {
                            name: "Z partnerami biznesowymi",
                            description: `
                          Możemy udostępniać Twoje informacje naszym partnerom biznesowym, aby oferować Ci określone produkty, usługi lub promocje.
                        `,
                        },
                        {
                            name: "Z innymi użytkownikami",
                            description: `
                          gdy udostępniasz dane osobowe lub w inny sposób wchodzisz w interakcję w publicznych obszarach z innymi użytkownikami, takie informacje 
                          mogą być widoczne dla wszystkich użytkowników i mogą być publicznie rozpowszechniane na zewnątrz.
                        `,
                        },
                        {
                            name: "Za Twoją zgodą",
                            description: `
                          Możemy ujawniać Twoje dane osobowe w każdym innym celu za Twoją zgodą.
                        `,
                        },
                    ],
                },
                retentionOfPersonalData: {
                    title: "Przechowywanie Twoich Danych Osobowych",
                    content: `
                      Firma będzie przechowywać Twoje Dane Osobowe tylko tak długo, jak będzie to konieczne do realizacji celów określonych w tej Polityce Prywatności. 
                      Będziemy przechowywać i wykorzystywać Twoje Dane Osobowe w zakresie niezbędnym do spełnienia naszych obowiązków prawnych (na przykład, jeśli jesteśmy 
                      zobowiązani do przechowywania Twoich danych w celu przestrzegania obowiązujących przepisów prawa), rozstrzygania sporów i egzekwowania naszych 
                      umów i polityk prawnych.
                
                      Firma będzie również przechowywać Dane Eksploatacyjne do celów analizy wewnętrznej. Dane Eksploatacyjne są zazwyczaj przechowywane przez krótszy okres, 
                      z wyjątkiem przypadków, gdy te dane są wykorzystywane do wzmocnienia bezpieczeństwa lub poprawy funkcjonalności naszej Usługi, albo gdy mamy prawny 
                      obowiązek przechowywania tych danych przez dłuższy okres.
                    `,
                },
                transferOfPersonalData: {
                    title: "Przekazywanie Twoich Danych Osobowych",
                    content: `
                      Twoje informacje, w tym Dane Osobowe, są przetwarzane w biurach operacyjnych Firmy oraz w innych miejscach, w których znajdują się 
                      strony zaangażowane w przetwarzanie. Oznacza to, że te informacje mogą być przekazywane i przechowywane na komputerach znajdujących się 
                      poza Twoim stanem, prowincją, krajem lub inną jurysdykcją rządową, gdzie przepisy o ochronie danych mogą różnić się od tych obowiązujących 
                      w Twojej jurysdykcji.
                
                      Twoja zgoda na tę Politykę Prywatności, a następnie przekazanie takich informacji oznacza Twoją zgodę na takie przekazanie.
                
                      Firma podejmie wszelkie rozsądne kroki, aby zapewnić, że Twoje dane są traktowane w sposób bezpieczny i zgodny z tą Polityką Prywatności, 
                      a przekazanie Twoich Danych Osobowych do organizacji lub kraju nie nastąpi, chyba że istnieją odpowiednie zabezpieczenia, w tym ochrona 
                      Twoich danych i innych informacji osobowych.
                    `,
                },
                deleteYourPersonalData: {
                    title: "Usuwanie danych",
                    content: `
                      Masz prawo do usunięcia lub zażądania naszej pomocy w usunięciu Danych Osobowych, które zebraliśmy na Twój temat.
                
                      Nasza Usługa może umożliwiać Ci usunięcie określonych informacji na Twój temat bezpośrednio w ramach Usługi.
                
                      Możesz zaktualizować, zmienić lub usunąć swoje informacje w dowolnym momencie, logując się na swoje konto (jeśli je posiadasz) 
                      i odwiedzając sekcję ustawień konta, która umożliwia zarządzanie Twoimi danymi osobowymi. Możesz również skontaktować się z nami, 
                      aby zażądać dostępu, poprawienia lub usunięcia wszelkich danych osobowych, które nam dostarczyłeś.
                
                      Pamiętaj jednak, że możemy potrzebować zachować niektóre informacje, jeśli mamy prawny obowiązek lub podstawę prawną, aby to zrobić.
                    `,
                },
                disclosureOfPersonalData: {
                    title: "Ujawnienie Twoich Danych Osobowych",
                    sections: [
                        {
                            subtitle: "Transakcje biznesowe",
                            subcontent: "",
                            content: `
                          Jeśli Firma jest zaangażowana w fuzję, przejęcie lub sprzedaż aktywów, Twoje Dane Osobowe mogą zostać przekazane. 
                          Poinformujemy Cię o tym fakcie przed przekazaniem Twoich Danych Osobowych oraz zanim zaczną obowiązywać inne zasady Polityki Prywatności.
                        `,
                        },
                        {
                            subtitle: "Organy ścigania",
                            subcontent: "",
                            content: `
                          W określonych okolicznościach Firma może być zobowiązana do ujawnienia Twoich Danych Osobowych, jeśli wymagają tego przepisy prawa 
                          lub w odpowiedzi na ważne żądania organów publicznych (np. sądu lub agencji rządowej).
                        `,
                        },
                        {
                            subtitle: "Inne wymagania prawne",
                            subcontent: "Firma może ujawnić Twoje Dane Osobowe w dobrej wierze, wierząc, że takie działanie jest konieczne, aby:",
                            content: [
                                "Spełnić obowiązek prawny",
                                "Chronić i bronić praw lub własności Firmy",
                                "Zapobiegać lub badać potencjalne wykroczenia w związku z Usługą",
                                "Chronić bezpieczeństwo osobiste Użytkowników Usługi lub społeczeństwa",
                                "Chronić przed odpowiedzialnością prawną",
                            ],
                        },
                    ],
                },
                securityOfPersonalData: {
                    title: "Bezpieczeństwo Twoich Danych Osobowych",
                    content: `
                      Bezpieczeństwo Twoich Danych Osobowych jest dla nas ważne, ale pamiętaj, że żadna metoda transmisji przez Internet 
                      ani metoda przechowywania elektronicznego nie jest w 100% bezpieczna. Chociaż staramy się stosować komercyjnie akceptowalne 
                      środki w celu ochrony Twoich Danych Osobowych, nie możemy zagwarantować ich całkowitego bezpieczeństwa.
                    `,
                },
                childrensPrivacy: {
                    title: "Prywatność dzieci",
                    content: `
                      Nasza Usługa nie jest przeznaczona dla osób poniżej 13 roku życia. Nie zbieramy świadomie danych osobowych od osób poniżej 13 roku życia. 
                      Jeśli jesteś rodzicem lub opiekunem i wiesz, że Twoje dziecko przekazało nam dane osobowe, skontaktuj się z nami. 
                      Jeśli dowiemy się, że zebraliśmy dane osobowe od osoby poniżej 13 roku życia bez weryfikacji zgody rodzica, podejmiemy kroki, aby usunąć 
                      te informacje z naszych serwerów.
                
                      Jeśli musimy polegać na zgodzie jako podstawie prawnej przetwarzania Twoich informacji, a Twój kraj wymaga zgody rodzica, 
                      możemy wymagać zgody rodzica przed zebraniem i wykorzystaniem tych informacji.
                    `,
                },
                linksToOtherWebsites: {
                    title: "Linki do innych stron internetowych",
                    content: `
                      Nasza Usługa może zawierać linki do innych stron internetowych, które nie są obsługiwane przez nas. Jeśli klikniesz w link do strony trzeciej, 
                      zostaniesz przekierowany na tę stronę. Zdecydowanie zalecamy zapoznanie się z Polityką Prywatności każdej odwiedzanej strony.
                
                      Nie mamy kontroli ani nie ponosimy odpowiedzialności za treść, polityki prywatności lub praktyki jakichkolwiek stron lub usług stron trzecich.
                    `,
                },
                changesToPrivacyPolicy: {
                    title: "Zmiany w tej Polityce Prywatności",
                    content: `
                      Od czasu do czasu możemy aktualizować naszą Politykę Prywatności. Powiadomimy Cię o wszelkich zmianach, publikując nową Politykę Prywatności na tej stronie.
                
                      Poinformujemy Cię również za pomocą wiadomości e-mail i/lub widocznego powiadomienia w naszej Usłudze, zanim zmiany wejdą w życie, oraz zaktualizujemy datę "Ostatnia aktualizacja" u góry tej Polityki Prywatności.
                
                      Zaleca się okresowe przeglądanie tej Polityki Prywatności w celu sprawdzenia ewentualnych zmian. Zmiany w tej Polityce Prywatności obowiązują od momentu ich opublikowania na tej stronie.
                    `,
                },
                contactUs: {
                    title: "Kontakt",
                    description: "Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, możesz skontaktować się z nami:",
                    contactMethods: {
                        email: {
                            type: "email",
                            subValue: "Przez email:",
                            value: "wojtexfalkowski@gmail.com",
                            href: "mailto:wojtexfalkowski@gmail.com",
                        },
                        website: {
                            type: "strona internetowa",
                            subValue: "Przez odwiedzenie strony:",
                            value: "https://wojciechfalkowski.pl/#contact",
                            href: "https://wojciechfalkowski.pl/#contact",
                        },
                        phone: {
                            type: "telefon",
                            subValue: "Prze telefon: ",
                            value: "+48 698 444 030",
                        },
                    },
                },
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
