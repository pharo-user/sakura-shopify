export async function doLogin(email, password) {

    let url = "https://sakura.eco/api/user/login";
    let data = { 'email' : email, 'password' : password };
  
    return await fetch( url , {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((r) => r.json())
        .then((d) => {
            return d;
          })
}