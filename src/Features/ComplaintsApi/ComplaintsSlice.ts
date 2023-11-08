import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Complaintservice from "./ComplaintsService";


export interface ComplaintState {
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
};


var initialState: ComplaintState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
// Login user
export const getComplaints = createAsyncThunk('api/complaints', async (_, thunkAPI ) => {
    try {
        const response = await Complaintservice.getComplaints()
        return thunkAPI.fulfillWithValue(response)


    } catch (error: any) {
        const message =  (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)

    }



})

export const ComplaintsSlice = createSlice({
    name: "complaints",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getComplaints.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getComplaints.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload as any
                state.isError = false
            })
            .addCase(getComplaints.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as any

            })
    }
});

// export const { reset } = ComplaintsSlice.actions
// export default ComplaintsSlice.reducer;

export const {reset} = ComplaintsSlice.actions
export default ComplaintsSlice.reducer