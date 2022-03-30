import 'isomorphic-fetch';
import dotenv from 'dotenv'

dotenv.config();

let { USERNAME, PASSWORD, CLIENT_ID } = process.env;

let header = { 
    "content-type": "application/json",
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br",
    ":authority": "login.seek.com",
    "accept-language": "en-AU,en;q=0.9,en-US;q=0.8,fr;q=0.7,en-GB;q=0.6",

}

let url = `https://login.seek.com`;
let path = 'usernamepassword/login';
let body = {"client_id":`${CLIENT_ID}`,
            "redirect_uri":"https://www.seek.com.au/oauth/callback/",
            "tenant":"seekanz",
            "response_type":"code",
            "scope":"openid profile email offline_access",
            "audience":"https://seek/api/candidate",
            "_csrf":"X8pAF7sR-i3h2wrm8uzMv6mpr-aSpViUivxQ",
            "state":"hKFo2SAxWHdoYXdaTmJpcTIyTC1pODJodTZLSm1OSF9OR016YaFupWxvZ2luo3RpZNkgM2J5ZUlmSWVaWGNFSW5oRl9kdTRQdkIySWNrNHNKOFKjY2lk2SB5R0JWZ2U2Nks1TkpwU041dTcxZlU5MFZjVGxFQVNOdQ",
            "_intstate":"deprecated",
            "nonce":"aTA0YnJ6MX5VMzVBMnFLaGdPfmxTUFFsa1hVZ3BLcGJXUjNfRjF1cUI1ZQ==",
            "username": PASSWORD,
            "password": USERNAME,
            "connection":"Candidate"
        };

let jwts = () => {
 console.log(header)
 console.log(path)
 return fetch(`${url}/${path}`, {
     method: 'POST',
     header,
     body
     
 });
}

let awt = (path) => {
    let outcome = fetch(`https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=stackoverflow.com`).then(function(response) {
        if(response.status != 200) {
            dispatch(setError(response.status + '===>' + response.statusText + '===>' + response.url));
        }
        return response;
    })
    return outcome;
    outcome.then(function (data) {
        console.log(data);
    });

}


export const jwt = async () =>  {

    let outcome = await fetch('https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=stackoverflow.com', {
        method: 'GET'
    })
    
    try {
        return outcome.body/*json()
        .then((data) => {console.log(data)});*/
    }
    catch(e) {
        throw e
    }

}

let getToken = async() => {
    return await fetch(`https://www.seek.com.au/api/iam/oauth2/token`, {
        method: 'POST',
        authorization: `Basic {client_id: ${CLIENT_ID}, client_secret: ${PASSWORD}}`,
        "Content-Type": 'application/x-www-form-urlencoded',
        body: {
            code: {client_id: "yGBVge66K5NJpSN5u71fU90VcTlEASNu", client_secret: "seek_profile_pw_{010}", redirect_uri:'https%3A%2F%2Fats.seek.com.au.dev%3A44300%2Fseek.aspx&grant_type=authorization_code'}
        }
    })
}

export default jwt

