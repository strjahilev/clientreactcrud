

// const booksReducerDefaultState = [];
// export default (state = booksReducerDefaultState, action) => {
// if (action.type = 'GET_BOOKs'){
//     return action.books;
// }
//     return state
// }
export default function booksReducerGet(state=[],action) {
    if (action.type === 'GET_BOOKS'){
        return [
            ...state,
            action.payload];
        }
    return state
}
