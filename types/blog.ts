export interface Author {
    name: string;
    avatar: string;
    twitter: string;
}

export interface Post {
    title: string;
    category: string;
    description: string;
    date: string;
    author: Author;
    image: string;
    alt: string;
    url: string;
}
