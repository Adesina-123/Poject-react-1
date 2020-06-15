import React from 'react'
import './Nav.scss'

const NavBar = () => {
    return (
        <div>
            <div className="sec">
            <div className="icon"><i class="far fa-user-circle joy"></i></div>
            <div className="two-ames">
            <div className="ame"><h3 className="hello"> Hello Ibukun adeniyi</h3></div>
            <div>
                <a href="/" className="profile">View Profile</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default NavBar
