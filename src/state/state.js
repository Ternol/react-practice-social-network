import {rerenderEntireTree} from "../render";

const state = {
    postsPage: {
        postsData: [
            {message: 'Сегодня учу props', id: 3, likesCount: 10},
            {message: 'Как дела?', id: 2, likesCount: 14},
            {message: 'Привет всем!', id: 1, likesCount: 21},
        ],
        newPostText: 'ternolz',
    },
    dialogsPage: {

        dialogsData: [{name: 'Александр', id: 1},
            {name: 'Владислав', id: 2},
            {name: 'Настя', id: 3},
            {name: 'Володя', id: 4},
            {name: 'Илон Маск', id: 5},
        ],

        messagesData: [{message: '42', id: 1},
            {message: 'Как дела?', id: 2},
            {message: 'Привет', id: 3},
        ],
    },
    myFriendsSidebar: {
        myFriends: [
            {name: 'Александр', id: 1},
            {name: 'Владислав', id: 2},
            {name: 'Настя', id: 3},
            {name: 'Володя', id: 4},
            {name: 'Илон Маск', id: 5},
            {name: 'Брат', id: 6}
        ]
    },
}

export const addPost = () => {
    const newMessage = {
        message: state.postsPage.newPostText,
        id: 4,
        likesCount: 0,
    };
    state.postsPage.postsData.push(newMessage)
    state.postsPage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
    state.postsPage.newPostText = text;
    rerenderEntireTree(state);
}

export default state;
