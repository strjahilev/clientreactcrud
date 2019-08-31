export const getBooks = (book) =>dispatch=> {dispatch({
    type: 'GET_BOOKS',
    payload: book
})};

