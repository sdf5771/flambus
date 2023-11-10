async function getStoreMapData(){
    const response = await fetch(`http://explorer-cat-api.p-e.kr:2000/api/v1/map/store`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(async (res) => {
        if (!res.ok) {
            throw new Error()
        } else {
            return res;
        }
    }).catch((e) => {
        console.log(e)
        return e
    })
    
    return response.json();
}

export default getStoreMapData;