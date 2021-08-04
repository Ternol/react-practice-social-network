const initialState = {
    myFriends: [
        {name: 'Александр', id: 1},
        {name: 'Владислав', id: 2},
        {name: 'Настя', id: 3},
        {name: 'Володя', id: 4},
        {name: 'Илон Маск', id: 5},
        {name: 'Брат', id: 6}
    ]
};


const friendsSidebarReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}

export default friendsSidebarReducer;

