import type { MCInstance } from './MCInstance';

export const mockInstances: MCInstance[] = [
    {
        id: '1',
        type: 'Vanilla',
        name: 'My First MC Instance',
        description: 'A simple vanilla Minecraft instance',
        version: '1.16.5',
        imageUrl: 'https://eo-img.20240828.xyz/i/pc/img696.webp',
        userId: 'user123',
    },
    {
        id: '2',
        type: 'Modded',
        name: 'Modded Adventure',
        description: 'An adventure-packed modded instance',
        version: '1.12.2',
        imageUrl: 'https://eo-img.544521.xyz/i/pc/img180.webp',
        userId: 'user456',
    },
    {
        id: '3',
        type: 'Forge',
        name: 'Forge Fun',
        description: 'A fun Forge-based Minecraft instance',
        version: '1.15.2',
        imageUrl: 'https://eo-img.iloli.love/i/pc/img161.webp',
        userId: 'user789',
    },
    {
        id: '4',
        type: 'Fabric',
        name: 'Fabric Frenzy',
        description: 'A fast and lightweight Fabric instance',
        version: '1.17.1',
        imageUrl: 'https://eo-img.521799.xyz/i/pc/img503.webp',
        userId: 'user321',
    },
    {
        id: '5',
        type: 'Vanilla',
        name: 'Vanilla Survival',
        description: 'A vanilla survival Minecraft instance',
        version: '1.20.4',
        imageUrl: 'https://eo-img.loliapi.cn/i/pc/img296.webp',
        userId: 'user123',
    }
];

export const mcInstanceApi = {
    async getInstances(): Promise<MCInstance[]> {
        return mockInstances;
    },
    async getInstanceById(id: string): Promise<MCInstance | null> {
        const instance = mockInstances.find((inst) =>   inst.id === id);
        return instance || null;
    },
};