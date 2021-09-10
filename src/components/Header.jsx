import React from 'react';
import {useHistory} from "react-router-dom";

const Header = () => {
  const history = useHistory()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href='/#'>Githup Api</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="navbar-nav">
          <a className="nav-link active" href='/#' type='button' aria-current="page" onClick={()=>{history.push('/')}}>Home</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
        </div>
      </div>
    </nav>
  );
};

export default Header;