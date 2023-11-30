async function createAccount({email, password, nickname}: {email: string, password: string, nickname: string}){
    let data = {
        "email": email,
        "password": password,
        "nickName": nickname,
        "platform": 0
      }

    const response = await fetch(`http://explorer-cat-api.p-e.kr:2000/api/v1/auth/join`, {
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

export default createAccount;