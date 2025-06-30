interface LoginResponse{
    accessToken: string;
    refreshToken: string;
    code: number | null;
}


export type {LoginResponse}