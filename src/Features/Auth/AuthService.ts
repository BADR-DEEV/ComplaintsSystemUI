import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'
import setAuthToken from '../../../Utilities/SetAuthToken'




// export interface AxiosResponse<T = any, D = any> {
//     data: T;
//     status: number;
//     statusText: string;
//     headers: AxiosResponseHeaders;
//     config: AxiosRequestConfig<D>;
//     request?: any;
// }

const login = async (formData) => {

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"
        }
    }
    const response = await axios.post("api/v1/web-login", formData, config).then(res => {

        if (res) {
            localStorage.setItem('user', JSON.stringify(res.data.access_token))
            setAuthToken(res.data.access_token)
            console.log(res)
        }
        return res
    })
    return response
}

const AuthService = {

    login,

}

export default AuthService