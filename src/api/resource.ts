interface ResourceClient {
    modLoader: "vanilla" | "fabric" | "forge" | "neoforge" | "quilt";
}

interface ResourceMod {
    type: "vanilla" | "fabric" | "forge" | "neoforge" | "quilt";
    modLoader: "fabric" | "forge" | "neoforge" | "quilt";
}

export interface ResourceTab {
    name: string;
    type: "client" | "mod" | "resourcePack" | "shaderPack";
}

interface ResourceResourcePack {
}

interface ResourceShaderPack {
}

export interface Resource {
    id: string;
    version: Array<string>;
    name: string;
    type: ResourceTab['type'];
    info: ResourceClient | ResourceMod | ResourceResourcePack | ResourceShaderPack;
    description?: string;
    imageUrl?: string;
    tags?: Array<string>;
}

export interface ResourceApi {
    getResources(): Promise<Resource[]>;
    getResourceById(id: string): Promise<Resource | null>;
    getResourceTabs(): Promise<ResourceTab[]>
}

export const ResourceApi: ResourceApi = {
    async getResources() {
        // Implementation to fetch all resources
        return [];
    },
    async getResourceByType(type: ResourceTab['type']) {
        // Implementation to fetch a resource by type
        return null;
    },
    async getResourceTabs() {
        // Implementation to fetch resource tabs
        return [];
    }
};

