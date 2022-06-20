import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getNotes } from "./actions/notes";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch, currentId]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={[<Form currentId={currentId} setCurrentId={setCurrentId}/>,<Notes setCurrentId={setCurrentId} />]}
          
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
