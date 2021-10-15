const SET_LOADER = 'UIUtilsReducer/SET_LOADER'
export type InitialStateType = {
    isLoading: boolean
}
const initialState:InitialStateType = {
    isLoading: false
}

const UIUtilsReducer = (state = initialState, action:ShowLoaderType):InitialStateType => {
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

type ShowLoaderType = {
    type: typeof SET_LOADER,
    bool: boolean
}
export const showLoader = (bool:boolean):ShowLoaderType => ({type: SET_LOADER, bool})