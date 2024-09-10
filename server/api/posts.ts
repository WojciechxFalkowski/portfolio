// server/api/posts.ts
export default defineEventHandler(() => {
    return [
        {
            title: "The Rise of Cryptocurrencies",
            category: "Economy, Information Technology",
            description: "Transforming Finance and Economy",
            date: "2024-02-01",
            author: {
                name: "Emily Pasek",
                avatar: "https://i.pravatar.cc/128?u=5",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/1048/640/360",
            alt: "The Rise of Cryptocurrencies",
            url: "/blog/cryptocurrencies",
        },
        {
            title: "I tested Nuxt UI",
            category: "Web development, Nuxt",
            description:
                "Nuxt UI is a module that provides a set of Vue components and composables built with Tailwind CSS and Headless UI",
            date: "2023-10-19",
            author: {
                name: "Kevin Browski",
                avatar: "https://i.pravatar.cc/128?u=6",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://ui.nuxt.com/social-card.png",
            alt: "I tested Nuxt UI",
            url: "/blog/nuxt-ui",
        },
        {
            title: "Exploring the Culinary Wonders of Asia",
            category: "Cooking",
            description:
                "Embark on a tantalizing expedition through the diverse and enchanting flavors of Asia",
            date: "2023-08-25",
            author: {
                name: "Alexia Wong",
                avatar: "https://i.pravatar.cc/128?u=0",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/490/640/360",
            alt: "Exploring the Culinary Wonders of Asia",
            url: "/blog/asian-cuisine",
        },
        {
            title: "Discovering the Majestic Peaks",
            category: "Nature",
            description:
                "Embark on an unforgettable odyssey through the Pyrenees, where majestic peaks, pristine valleys, and rich cultural tapestries await in this immersive exploration.",
            date: "2022-07-08",
            author: {
                name: "Nicolas Maillet",
                avatar: "https://i.pravatar.cc/128?u=1",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/29/640/360",
            alt: "Discovering the Majestic Peaks",
            url: "/blog/pyrenees",
        },
        {
            title: "The Benefits of Meditation",
            category: "Health",
            description:
                "The Benefits of Meditation and Mindfulness Practices on Mental Health",
            date: "2021-04-23",
            author: {
                name: "Rebecca Millers",
                avatar: "https://i.pravatar.cc/128?u=3",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/691/640/360",
            alt: "The Benefits of Meditation",
            url: "/blog/meditation",
        },
        {
            title: "Unveiling the Marvel",
            category: "Science, Astronomy, History",
            description: "The Journey to Create the James Webb Space Telescope",
            date: "2020-12-12",
            author: {
                name: "Josh Bayers",
                avatar: "https://i.pravatar.cc/128?u=2",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/903/640/360",
            alt: "Unveiling the Marvel",
            url: "/blog/james-webb",
        },
        {
            title: "The 10 Most Dangerous Creatures on Earth",
            category: "Animals",
            description: "From Predators to the Ultimate Threat",
            date: "2018-05-15",
            author: {
                name: "Emilio Manuel",
                avatar: "https://i.pravatar.cc/128?u=4",
                twitter: "https://twitter.com/benjamincanac",
            },
            image: "https://picsum.photos/id/219/640/360",
            alt: "The 10 Most Dangerous Creatures on Earth",
            url: "/blog/animals",
        },
    ];
});
