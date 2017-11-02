import { LOAD_BOOKS, ADD_BOOK } from '../actions/books';

// const initialState = {    // our data is coming in as an array,
//   bookList: []           // so set initial state as an empty array
// };

const initialState = [];


const bookList = (state = initialState, action) => {
  //                  ^^^
// ES6, if state is "true" set it to state, otherwise set it to initialState
  console.log('REDUCERS: activated');
  console.log("REDUCERS: ", action);

  switch (action.type){
    case LOAD_BOOKS:
      console.log("Loading the book");
     // return Object.assign({}, state, { bookList : [...action.books] })
     return [...action.books];
    case ADD_BOOK:
      return [...state, action.book ];
      //return Object.assign({}, state, { bookList : [...state.bookList, action.book]
      // });
    default:
      return state
  }
}


export default bookList;


