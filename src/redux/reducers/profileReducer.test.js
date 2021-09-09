import profileReducer, {addPost, deletePost} from "./profileReducer";

const initialState = {
    postsData: [
        {message: 'Сегодня учу props', id: 3, likesCount: 10},
        {message: 'Как дела?', id: 2, likesCount: 14},
        {message: 'Привет всем!', id: 1, likesCount: 21},
    ]
}

it('Length of postsData array should be incremented', ()=> {
    const action = addPost('test text')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(4)
})

it('Text body correct', ()=> {
    const action = addPost('test text')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData[0].message).toBe('test text')
})

it('After deleting post, length of postData array should be decrement', ()=> {
    const action = deletePost(2);
    let newState = profileReducer(initialState, action);
    expect(newState.postsData.length).toBe(2)
})