import {FETCH_ALL , CREATE , UPDATE , DELETE , SEARCH} from '../constants/actiontypes';

const noteReducer =  (notes = [] , action) => {
    
    switch (action.type) {
        case UPDATE:
            return notes.map((note) => (note._id === action.payload._id ? action.payload : note));
        case DELETE:
            return notes.filter((note) => note._id !== action.payload);
        case SEARCH:
            return (action.payload === '' ? notes : notes.slice(0).filter((note) => note.note.toLowerCase().indexOf(action.payload) >= 0));
            
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...notes , action.payload];
        default:
            return notes;
    }

}

export default noteReducer;