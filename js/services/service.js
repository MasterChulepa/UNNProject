const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Contant-type': 'application/json'
        },
        body: data
    });
    return await res.json();
}
async function getData(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();                               //дожидаемся окончания перевода данных из промиса в json
}

export {postData};
export {getData};