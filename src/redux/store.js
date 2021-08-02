import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsSidebarReducer from "./friendsSidebarReducer";

const store = {
    _state : {
        postsPage: {
            postsData: [
                {message: 'Сегодня учу props', id: 3, likesCount: 10},
                {message: 'Как дела?', id: 2, likesCount: 14},
                {message: 'Привет всем!', id: 1, likesCount: 21},
            ],
            newPostText: ''
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
            newMessageBody : '',
        },

        friendsSidebar: {
            myFriends: [
                {name: 'Александр', id: 1},
                {name: 'Владислав', id: 2},
                {name: 'Настя', id: 3},
                {name: 'Володя', id: 4},
                {name: 'Илон Маск', id: 5},
                {name: 'Брат', id: 6}
            ]
        },
    },
    _callSubscriber() {
        console.log('redux changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer; //_callSubscriber присвоится то,
        // что передадут в функцию subscribe() как аргумент.
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        profileReducer(this._state.postsPage, action);
        dialogsReducer(this._state.dialogsPage, action);
        friendsSidebarReducer(this._state.friendsSidebar,action)
        this._callSubscriber(this._state) // вызывается как callback функция
        // rerenderEntireTree(this._state)
        // но нет циклической зависимости
    },
}



