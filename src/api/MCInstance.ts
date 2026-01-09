export interface MCInstance {
    id: string;
    type: string;
    name: string;
    description?: string;
    version: string;
    imageUrl?: string;
    userId: string;
}

export interface MCInstanceApi {
    getInstances(): Promise<MCInstance[]>;
    getInstanceById(id: string): Promise<MCInstance | null>;
}

export const MCInstanceApi: MCInstanceApi = {
    async getInstances() {
        // Implementation to fetch all Minecraft instances
        return [];
    },
    async getInstanceById(id: string) {
        // Implementation to fetch a Minecraft instance by ID
        return null;
    },
};