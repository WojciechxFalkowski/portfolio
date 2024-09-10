import { Project } from "~/types/project";

// server/api/projects.ts
export default defineEventHandler<Project[]>(() => {
    return [
        {
            title: "WellRent",
            category: "Real Estate, Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            date: "2023-06-10",
            badge: "Landing",
            image: "/screenshot-wellrent.png",
            alt: "WellRent Real Estate Platform",
            url: "wellrent-nieruchomosci.pl",
        },
        {
            title: "Trip guide",
            category: "Web Development, Corporate",
            description: "A corporate landing page showcasing company services and offerings with a modern design.",
            date: "2023-09-30",
            badge: "Landing",
            image: "/screenshot-trip-guide.png",
            alt: "Corporate Landing Page showcasing modern design and services",
            url: "141.144.224.51",
        },
        {
            title: "Travel",
            category: "Web Development, Travel",
            description: "A modern website project for showcasing travel destinations and holiday packages.",
            date: "2023-09-15",
            badge: "Landing",
            image: "/screenshot-travel-website.png",
            alt: "Travel Website showcasing various travel packages and destinations",
            url: "wojciechxfalkowski.github.io/Travel-website",
        },
        {
            title: "Innox",
            category: "Web Development, React",
            description: "A modern, responsive React application showcasing services and company features.",
            date: "2023-09-25",
            badge: "Landing",
            image: "/screenshot-innox.png",
            alt: "Innox React App showcasing company services and features",
            url: "wojciechxfalkowski.github.io/innox-react-app",
        },
    ];
});
