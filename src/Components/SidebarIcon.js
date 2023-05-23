import React from 'react'
import "./sidebaricon.css"

function SidebarIcon({Icon,title}) {
  return (
    <div className='sidebaricon'>
        <Icon className="sidebaricon_icon" />
        <div className='sidebaricon_title'>
            {title}
        </div>
    </div>
  )
}

export default SidebarIcon