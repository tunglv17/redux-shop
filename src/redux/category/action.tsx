import CategoryAPI from "../../API/Category";

export const getCategory = () => {
    return async (dispatch: any) => {
        try {
            const { data } = await CategoryAPI.getAll()
            dispatch({
                type: "GET_CATEGORY",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const addNewCategory = (item: any) => {
    return async (dispatch: any) => {
        try {
            const { data } = await CategoryAPI.add(item);
            dispatch({
                type: "ADD_CATEGORY",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
};
export const removeCategory = (id: any) => {
    return async (dispatch: any) => {
        const onDelete = window.confirm('Xóa')
        if (onDelete) {
            const { data } = await CategoryAPI.remove(id);
            dispatch({
                type: "REMOVE_CATEGORY",
                payload: data
            })
        }
    }
};
export const updateCategory = (item: any) => {
    return async (dispatch: any) => {
        try {
            const { data } = await CategoryAPI.update(item);
            dispatch({
                type: "UPDATE_CATEGORY",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
};