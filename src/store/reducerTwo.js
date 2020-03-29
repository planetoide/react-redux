const initialState = {
    age:50
}

//funciones reductoras
const reducerTwo = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_EDAD':
            return {
                ...state,
                age: state.age + 1
            };
        case 'QUITAR_EDAD':
            return {
                ...state,
                age: state.age -1
            };
        default:
            return state;
    }
}

export default reducerTwo;