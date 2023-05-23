import React, { useState } from 'react'
import './head.css'
import { MenuSharp,SearchSharp,VideoCallOutlined,NotificationsOutlined,Circle } from '@mui/icons-material'
import { Link } from 'react-router-dom';

function Head() {

  const [ inputSearch, setInputSearch] = useState("");


  return (
    <div className='head'>
        <div className="head_left">
            <MenuSharp />
            <Link to="/">
              <img src="/logo.jpg" alt="YouTube Logo" className='head_logo' />
            </Link>
        </div>

        <div className="head_mid">
            <input type="text" onChange={e=>setInputSearch(e.target.value)} value={inputSearch} className="head_search" placeholder='Search'></input>
            <div className="link_search_button"><Link to={`/search/${inputSearch}`}>
              <SearchSharp className='search_button' />
            </Link>
            </div>
        </div>

        <div className="head_right">
            <VideoCallOutlined className='right_icon video_icon' />
            <NotificationsOutlined className='right_icon noti_icon' />
            <Circle className='right_icon circle_icon' />
            {/* <div className="head_login"></div> */}
        </div>

    </div>
  )
}

export default Head