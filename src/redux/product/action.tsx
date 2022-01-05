import ProductAPI from "../../API/ProductAPI";
export const getProducts = () => {
    return async (dispatch: any) => {
        try {
            const { data } = await ProductAPI.getAll()
            dispatch({
                type: "GET_PRODUCT",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const addNewProducts = (item: any) => {
    return async (dispatch: any) => {
        try {
            const { data } = await ProductAPI.add(item);
            dispatch({
                type: "ADD_PRODUCT",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
};
export const removeProducts = (id: any) => {
    return async (dispatch: any) => {
        const onDelete = window.confirm('Xóa')
        if (onDelete) {
            const { data } = await ProductAPI.remove(id);
            dispatch({
                type: "REMOVE_PRODUCT",
                payload: data
            })
        }
    }
};
export const updateProduct = (item: any) => {
    return async (dispatch: any) => {
        try {
            const { data } = await ProductAPI.update(item);
            dispatch({
                type: "UPDATE_PRODUCT",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
};