const initialState = {
    moreComponents: null,
};

export const HeaderState = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MORE":
            return {...state, moreComponents: state.moreComponents = action.Component }
        default:
          return state;
    }
};

export default HeaderState;