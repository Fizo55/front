import axios from 'axios'

async function Register(username, email, password) {
    const response = await axios.post(
        process.env.REACT_URL_API,
        { username: username, email: email, password: password },
        { headers: { 'Content-Type': 'application/json' } }
    )

    // TODO : Add popup (200 = Success / Others = Error)
}

export default Register