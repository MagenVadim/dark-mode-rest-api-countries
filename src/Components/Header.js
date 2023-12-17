import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Header() {
  return (
    <div className='header'>
        <div className="header_container">
            <h2 className="logo">Where in the world?</h2>
            <div className="switch_mode">
                <DarkModeIcon/>
                <h3>Dark mode</h3>
            </div>
        </div>      
    </div>
  )
}

export default Header
