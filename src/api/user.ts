export interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}
export interface UserApi {
    getUserById(id: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
}
export const UserApi: UserApi = {
    async getUserById(id: number) {
        // Implementation to fetch a user by ID
        return null;
    },
    async getAllUsers() {
        // Implementation to fetch all users
        return [];
    },
};