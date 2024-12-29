import { Service } from '~/types/service';

export default defineEventHandler<Service[]>(() => {
    return [
        {
            icon: "/crown.svg",
            title: "services.offerings.websites.title",
            description: "services.offerings.websites.description",
        },
        {
            icon: "/layers.svg",
            title: "services.offerings.onlineStores.title",
            description: "services.offerings.onlineStores.description",
        },
        {
            icon: "/web.svg",
            title: "services.offerings.customApplications.title",
            description: "services.offerings.customApplications.description",
        },
    ];
});
