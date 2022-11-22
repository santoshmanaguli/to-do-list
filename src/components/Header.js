import React from 'react'
// import Header from ''

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className='fs-3' style={{color: 'DodgerBlue'}}>{props.title}</div>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="2">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="1">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div> */}
                </div>
            </nav>
        </div>
    )
}