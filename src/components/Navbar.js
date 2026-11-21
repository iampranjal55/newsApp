import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div className={`bg-${props.mode}`}>
      <nav className={`navbar fixed-top navbar-expand-lg bg-body-${props.mode} `} style={{backgroundColor:"inherit"}}>
  <div className={`container-fluid `}> 
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">Apka Akbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link active text-${props.mode==='light'?'dark':'light'} `} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/technology">Technology</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode ==='light'?'dark':'light' } Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
