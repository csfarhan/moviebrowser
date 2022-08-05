import {useNavigate, Link} from 'react-router-dom';

function Navbar({searchText, setSearchText}){

    let navigate = useNavigate()
    const updateSearchText = (e) =>{
      navigate('/search')
      setSearchText(e.target.value)
    }
    return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Movie Browser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">About Us</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Coming Soon</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input 
              className="form-control me-2" 
              type="search"
              placeholder="Search" 
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              ></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar;