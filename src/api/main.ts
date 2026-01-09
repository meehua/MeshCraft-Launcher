export const mcInstanceApi =
    import.meta.env.VITE_USE_MOCK === 'true'
        ? (await import('./MCInstance.mock')).mcInstanceApi
        : (await import('./MCInstance')).MCInstanceApi;
