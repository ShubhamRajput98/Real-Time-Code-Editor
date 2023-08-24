export const GetApiCall = async (url, token) => {
    let response = '';
    var header = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    if (token) {
        header['Authorization'] = `${token}`;
    }

    await fetch(url, {
        method: 'GET',
        headers: header,
    })
        .then(req => req.json())
        .then(res => {
            response = res
            return res
        })
    return response
}
