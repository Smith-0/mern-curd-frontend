import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteNote } from '../actions/notes';



const Note = ({note , setCurrentId}) => {

  const dispatch  = useDispatch();

  
  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{note.name}</h5>
                <p className="card-text">{note.note}</p>
                <i className="bi bi-pencil-square" onClick={()=> setCurrentId(note._id)}></i>
                <i className="bi bi-trash mx-3 text-danger" onClick={()=> dispatch(deleteNote(note._id))}></i>
            </div>
            </div>
    </>
  )
}

export default Note;