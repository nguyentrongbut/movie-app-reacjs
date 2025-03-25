export const get = async (path) => {
    try {
        const response = await fetch(`${import.meta.env.BACK_END}${path}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`API GET request failed: ${error.message}`);
        return null;
    }
};
