interface ResourceClient {
    modLoader: "vanilla" | "fabric" | "forge" | "neoforge" | "quilt";
}

interface ResourceMod {
    type: "vanilla" | "fabric" | "forge" | "neoforge" | "quilt";
    modLoader: "fabric" | "forge" | "neoforge" | "quilt";
}

interface ResourceResourcePack {
}

interface ResourceShaderPack {
}

export interface Resource {
    id: string;
    version: Array<string>;
    name: string;
    type: "client" | "mod" | "resourcePack" | "shaderPack";
    info: ResourceClient | ResourceMod | ResourceResourcePack | ResourceShaderPack;
    description?: string;
    imageUrl?: string;
    tags?: Array<string>;
}

export interface ResourceApi {
    getResources(): Promise<Resource[]>;
    getResourceById(id: string): Promise<Resource | null>;
}

export const ResourceApi: ResourceApi = {
    async getResources() {
        // Implementation to fetch all resources
        return [];
    },
    async getResourceById(id: string) {
        // Implementation to fetch a resource by ID
        return null;
    },
};

