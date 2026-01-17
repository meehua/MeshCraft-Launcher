export const MCInstanceApi =
    import.meta.env.VITE_USE_MOCK === 'true'
        ? (await import('./MCInstance.mock')).MCInstanceApi
        : (await import('./MCInstance')).MCInstanceApi;
export const ResourceApi =
    import.meta.env.VITE_USE_MOCK === 'true'
        ? (await import('./resource.mock')).ResourceApi
        : (await import('./resource')).ResourceApi;