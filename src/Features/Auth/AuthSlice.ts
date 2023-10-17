import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './AuthService'


interface AuthState {
    user: string | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,


};
const user: string | null = JSON.parse(localStorage.getItem('user') as string);
const initialState: AuthState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
// Login user
export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        console.log(formData)

        return await authService.login(formData)


    } catch (error : any) { 
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})







export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.user = null


        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload as any
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
            })

    }
});

export const { reset } = AuthSlice.actions
export default AuthSlice.reducer
