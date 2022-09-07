import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    productList: [],
    productListView: [],
    categoryList: []
}
export const productList = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setCategoryList: (state, action) => {
            state.categoryList = action.payload
        },
        setProductListView: (state, action) => {
            let searchItem = action.payload
            state.productListView = searchItem && searchItem !== "" ?
                state.productList.filter(element => element.name.toLowerCase().includes(searchItem.toLowerCase())) : state.productList
        },
        cleanProductList: (state, action) => {
            state.productList = []
            state.productListView = []
        },
    }
})
export const { setProductList, setProductListView, cleanProductList, setCategoryList } = productList.actions
export default productList.reducer