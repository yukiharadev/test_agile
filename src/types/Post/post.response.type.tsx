type PostResponse = {
    id: string ;
    title: string;
    description: string;
    tags: string[];
}

type PostsResponse = {
    current_page: number ;
    page_size: number;
    posts: PostResponse[];
    total: number;
    total_page: number;
}

export type { PostResponse, PostsResponse };