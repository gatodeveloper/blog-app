export interface IBlogArticle {
    title: string;
    description: string;
    slug?: string
    content?: string
    image?: string;
}

export interface IBlogAuthor {
    name: string;
    avatar?: string;
}
