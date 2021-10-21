import usersReducer, {followSuccess, InitialStateType, unFollowSuccess} from "./usersReducer";


let state: InitialStateType;

beforeEach(()=> {
    state = {
        usersData: [
            {id: 0, name:'User 0', followed:false, photos: {small: null, large: null}, status: 'status 0'},
            {id: 1, name:'User 1', followed:false, photos: {small: null, large: null}, status: 'status 1'},
            {id: 2, name:'User 2', followed:true, photos: {small: null, large: null}, status: 'status 2'},
            {id: 3, name:'User 3', followed:true, photos: {small: null, large: null}, status: 'status 3'},
        ] ,
        pageSize: 100,
        totalUsersCount: 1000,
        currentPage: 1,
        isFollowingInProgress: [],
        isLoading: false,
    }
})

test('follow success', ()=> {
    const newState = usersReducer(state, followSuccess(1))
    expect(newState.usersData[0].followed).toBeFalsy()
    expect(newState.usersData[1].followed).toBeTruthy()
})

test('unfollow success', ()=> {
    const newState = usersReducer(state, unFollowSuccess(3))
    expect(newState.usersData[1].followed).toBeFalsy()
    expect(newState.usersData[3].followed).toBeFalsy()
})