type CreatePostRequest = {
    title: string;
    description: string;
    tags: string[];
}

type UpdatePostRequest = {
    id: string;
    title: string;
    description: string;
    tags: string[];
}

export type { CreatePostRequest, UpdatePostRequest };