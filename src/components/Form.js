import React , { useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { createNote } from '../actions/notes';
import { updateNote } from '../actions/notes';
import Pagination from './Pagination';




const Form = ({setCurrentId , currentId}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((state) => (currentId ? state.notes.find((p)=> p._id === currentId) : null));
  const [noteData, setNoteData] = useState({name: '' , note: ''});

  useEffect(() => {
    if(note) setNoteData(note);
  
  }, [note])
  

  const addNote = (e)=> {
    e.preventDefault();
    if (currentId) {
      dispatch(updateNote(currentId, noteData));
    } else {
      if (noteData.name !== '' && noteData.note !== '') { 
        dispatch(createNote(noteData));
        navigate("/");
      } else {
        alert ("Fields can't be blank");
      }
    }
    setNoteData({name: '' , note: ''});
    setCurrentId(null);
  }

  return (
    <div className="container my-5">
      <h3 className="mb-3 btn btn-dark">{(currentId ? 'UPDATEING' : 'CREATING')} A NOTE</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="email" className="form-control" id="name" value={noteData.name} onChange={(e) => setNoteData( { ...noteData , name : e.target.value})} placeholder="name@example.com" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="form-label">Add Note</label>
          <textarea className="form-control" id="note" value={noteData.note} onChange={(e) => setNoteData({...noteData , note: e.target.value})} rows="3" required></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-outline-primary" onClick={addNote}>Submit</button>
          <Pagination/>
        </div>
      </form>
    </div>
  )
}

export default Form