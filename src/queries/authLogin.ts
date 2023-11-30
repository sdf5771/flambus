async function authLogin({email, password}: {email: string, password: string}){
    let data = {
        email, password
    }

    const response = await fetch(`http://explorer-cat-api.p-e.kr:2000/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
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

export default authLogin;