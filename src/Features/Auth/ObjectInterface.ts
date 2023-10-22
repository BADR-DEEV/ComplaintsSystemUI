export interface LoginForm {
    email: string,
    password: string,

}

export interface RegisterForm {
    email: string,
    password: string,
    phoneNumber: string,
    createdAt: string,
}

export interface AuthState {
    user: string | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,


};



export interface AuthResponse {

    data: any | null,
    statusCode: number,
    message: string,
    success: boolean,
    validationMessages: [],
    access_token:  string | null
}

