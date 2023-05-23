import React from 'react'
import "./sidebar.css"
import { Home,WhatshotOutlined,SubscriptionsOutlined,VideoLibraryOutlined } from '@mui/icons-material';
import SidebarIcon from './SidebarIcon';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarIcon Icon={Home} title="Home" />
      <SidebarIcon Icon={WhatshotOutlined} title="Shorts" />
      <SidebarIcon Icon={SubscriptionsOutlined} title="Subscriptions" />
      <SidebarIcon Icon={VideoLibraryOutlined} title="Library" />
    </div>
  )
}

export default Sidebar