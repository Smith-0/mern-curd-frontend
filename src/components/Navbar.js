import React , {useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate , Link} from 'react-router-dom'

import {searchNote ,getNotes} from '../actions/notes';



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('')

  console.log(searchQuery);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchNote(searchQuery));
  }
  
  useEffect(() => {
    navigate('/');
    dispatch(searchNote(searchQuery)); 
    if(searchQuery === '') {
      dispatch(getNotes())
    }
  }, [dispatch, searchQuery , navigate])
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={searchQuery} onChange={handleOnChange} placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" onClick={(e) => {e.preventDefault();  dispatch(searchNote(searchQuery))}}>Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
