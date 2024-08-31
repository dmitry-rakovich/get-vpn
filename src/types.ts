export type UserResponse = {
    results: Array<{
        name: {
            first: string;
            last: string;
        };
    }>;
}