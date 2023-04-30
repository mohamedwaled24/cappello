import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
    products:[],
    error:null,
    status:'idle'
}
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled , (state,action)=>{
            state.status='fulfilled'
            state.products= [...action.payload.products]
        });
        builder.addCase(fetchProducts.pending , (state,action)=>{
            state.status = 'pending'
        })
        
    }
})
export const {getProducts}=productSlice.actions
export default productSlice.reducer
export const fetchProducts = createAsyncThunk('products/fetchProducts' , async(cat)=>{
    const response = await fetch('http://localhost:5000/products-category')
    const data = await response.json()

    return data
    
    

})
export const selectAllProducts = state=> state.products