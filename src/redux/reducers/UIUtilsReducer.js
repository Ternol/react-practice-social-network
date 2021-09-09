const SET_LOADER = 'UIUtilsReducer/SET_LOADER'

const initialState = {
    isLoading: false
}

const UIUtilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADER:
            return {
                ...state, isLoading: action.bool
            }

        default:
            return state
    }
}

export default UIUtilsReducer;


export const showLoader = (bool) => ({type: SET_LOADER, bool})