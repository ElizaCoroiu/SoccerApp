export interface ApiResponse<T> {
    get: string;
    parameters: { [key: string]: string[] };
    errors: { [key: string]: string[] };
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: T[];
}