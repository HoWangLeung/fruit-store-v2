export const API_BASE_URL = process.env.NODE_ENV === 'production' ?
    'https://howang-app.com' :
    'http://localhost:8080'
//https://ancient-headland-08346.herokuapp.com


export const ACCESS_TOKEN = "access_token"

export const OAUTH2_REDIRECT_URI = process.env.NODE_ENV === 'production' ?
    'https://wahkee-fruitstore.com/#/oauth2/redirect' :
    'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;