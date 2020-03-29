const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                age: state.age + 1
            };
        case 'SUBSTRACT':
            return {
                ...state,
                age: state.age - 1
            };
    
        default:
            return state;
    }
}

export default reducer;