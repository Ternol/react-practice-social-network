const store = {
    _state : {
        postsPage: {
            postsData: [
                {message: 'Сегодня учу props', id: 3, likesCount: 10},
                {message: 'Как дела?', id: 2, likesCount: 14},
                {message: 'Привет всем!', id: 1, likesCount: 21},
            ],
            newPostText: '',
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
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    addPost() {
        const newMessage = {
            message: this._state.postsPage.newPostText,
            id: 4,
            likesCount: 0,
        };
        this._state.postsPage.postsData.push(newMessage)
        this._state.postsPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(text) {
        this._state.postsPage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;
