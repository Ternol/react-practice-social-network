import {authMe} from "./authReducer";

const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';
export type InitialStateType = {
    initialized: boolean
}

const initialState:InitialStateType = {
    initialized: false
};


const appReducer = (state = initialState, action:InitializedSuccessActionType):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state;
    }

}

export default appReducer;

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch:any) => {
    const promise = dispatch(authMe())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}






