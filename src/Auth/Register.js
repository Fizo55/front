import axios from 'axios'
import qs from 'querystring'

function Register(username, email, password, lname, captchaToken) {
    const requestBody = {
        email: email,
        username: username,
        password: password,
        lname: lname,
        captchaToken: captchaToken
    }

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const response = axios.post(process.env.REACT_APP_URL_API+'/register/', qs.stringify(requestBody), config)
    return response // return the promise
}

export default Register