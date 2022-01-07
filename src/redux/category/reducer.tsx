const initialState: any = {
  category: [],
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        category: state.category.filter(
          (item: any) => item.id !== action.payload.id,
        ),
      };
    case "UPDATE_CATEGORY":
      const list = state.category.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        category: [...list],
      };
    default:
      return state;
  }
};
export default categoryReducer;
