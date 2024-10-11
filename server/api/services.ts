import { Service } from '~/types/service';
import { useI18n } from 'vue-i18n'

export default defineEventHandler<Service[]>(() => {
    return [
        {
            icon: "/websites-icon.svg",
            title: "services.offerings.websites.title",
            description: "services.offerings.websites.description",
        },
        {
            icon: "/online-stores-icon.svg",
            title: "services.offerings.onlineStores.title",
            description: "services.offerings.onlineStores.description",
        },
        {
            icon: "/custom-applications-icon.svg",
            title: "services.offerings.customApplications.title",
            description: "services.offerings.customApplications.description",
        },
        {
            icon: "/ui-ux-design-icon.svg",
            title: "services.offerings.uiUxDesign.title",
            description: "services.offerings.uiUxDesign.description",
        },
        {
            icon: "/seo-performance-security-icon.svg",
            title: "services.offerings.seoPerformanceSecurity.title",
            description: "services.offerings.seoPerformanceSecurity.description",
        },
        {
            icon: "/analytics-icon.svg",
            title: "services.offerings.analytics.title",
            description: "services.offerings.analytics.description",
        },
    ];
});
