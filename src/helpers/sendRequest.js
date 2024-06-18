export const sendRequest = async (entity, method = 'GET', config, headers) => {
    return await fetch(`${entity}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        ...config
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
};