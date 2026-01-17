import type { Resource } from './resource.ts';

export const Resources: Resource[] = [
    {
        id: 'example-mod',
        version: ['1.0.0'],
        name: 'Example Mod',
        type: 'mod',
        info: {
            type: 'fabric',
            modLoader: 'fabric',
        },
        description: 'An example mod for demonstration purposes.',
        imageUrl: 'https://example.com/image.png',
        tags: ['example', 'mod'],
    },
    {
        id: 'example-resource-pack',
        version: ['1.0.0'],
        name: 'Example Resource Pack',
        type: 'resourcePack',
        info: {},
        description: 'An example resource pack for demonstration purposes.',
        imageUrl: 'https://example.com/resource-pack-image.png',
        tags: ['example', 'resourcePack'],
    },
];  

export const ResourceApi = {
    async getResources() {
        // Return the mock resources
        return Resources;
    },
    async getResourceById(id: string) {
        // Find and return the resource by ID
        const resource = Resources.find((res) => res.id === id);
        return resource || null;
    },
};