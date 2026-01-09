export const MCInstanceApi =
    import.meta.env.VITE_USE_MOCK === 'true'
        ? (await import('./MCInstance.mock')).MCInstanceApi
        : (await import('./MCInstance')).MCInstanceApi;
