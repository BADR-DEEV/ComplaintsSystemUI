import axios from 'axios'
import setAuthToken from '../../../Utilities/SetAuthToken'
import { LoginForm } from './ObjectInterface'


const login = async (formData: LoginForm) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        }
    }
    const response = await axios.post("http://localhost:5018/api/Authentication/LoginUser", formData, config).then(res => {

        if (res) {
            localStorage.setItem('user', JSON.stringify(res.data.access_token))
            setAuthToken(res.data.access_token)
        }
    console.log(res)


    })
    return response
}

const AuthService = {
    login,
}

export default AuthService