type PostResponse = {
    id: string;
    title: string;
    description: string;
    tags: string[];
}

type PostsResponse   = {
    current_page: number ;
    page_size: number;
    posts: PostResponse[];
    total: number;
    total_pages: number;
}

export type { PostResponse, PostsResponse };