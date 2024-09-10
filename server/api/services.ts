import { Service } from '~/types/service';

export default defineEventHandler<Service[]>(() => {
    return [
        {
            icon: "/websites-icon.svg",
            title: "Websites",
            description: "Responsive websites with seamless content management integration.",
        },
        {
            icon: "/online-stores-icon.svg",
            title: "Online stores",
            description: "Online stores optimized for effective product display and sales growth.",
        },
        {
            icon: "/custom-applications-icon.svg",
            title: "Custom applications",
            description: "Scalable web applications tailored to unique requirements.",
        },
        {
            icon: "/ui-ux-design-icon.svg",
            title: "UI & UX Design",
            description: "Modern, user-friendly interfaces for mobile and desktop.",
        },
        {
            icon: "/seo-performance-security-icon.svg",
            title: "SEO, Performance & Security",
            description: "Comprehensive audits, SEO, and performance optimization.",
        },
        {
            icon: "/analytics-icon.svg",
            title: "Analytics",
            description: "In-depth tracking of website traffic and user behavior to optimize performance.",
        },
    ];
});
