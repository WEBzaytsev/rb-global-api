const getArticles = async (params) => {
    console.log('params: ', params);
    const limit = params.limit || 5;
    const tag = params.tag || 59229;

    try {
        const response = await fetch(`https://rb.ru/api/articles?tag=${tag}&limit=${limit}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8",
                // "Authorization": `Basic ${credentials}`
            }
        });

        return await response.json();
    } catch (e) {
        return [];
    }
}

export default {getArticles};