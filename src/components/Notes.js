import React from 'react'
import {useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Note from './Note';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Notes = ({setCurrentId}) => {
  const notes = useSelector((state) => state.notes);

  let query = useQuery();
  let page = query.get('page') || 1;

  return (
    <div className="container">
        <div className="row">

          
            {
                notes.slice(0).reverse().slice((page*3)-3, page*3).map((note) => {
                    return <div key={note.id} className="col-sm-12 col-md-6 col-xl-4 mb-4">
                        <Note key={note.id} note={note} setCurrentId={setCurrentId}/>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default Notes;