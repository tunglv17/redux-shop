const initialState: any = {
    products: []
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_PRODUCT":
            return {
                ...state,
                products: action.payload
            }
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "REMOVE_PRODUCT":
            return {
                ...state,
                products: state.products.filter((item: any) => item.id !== action.payload.id)
            }
        case "UPDATE_PRODUCT":
            const list = state.products.map((item: any) => {
                if (item.id === action.payload.id) {
                    return { ...action.payload };
                }
                return item;
            });
            return {
                ...state,
                products: [...list]
            };
        default:
            return state;
    }
}
export default productReducer