
import React, { Component } from 'react';
import SideBar from '../common/SideBar';
import MainNotify from '../instructor/MainNotify';
import SideNotify from '../instructor/SideNotify';


class Notification extends Component {
  render() {
    return (
        <div className='instruct'>
        <div className='instructGlass'>
            <SideBar />
            <MainNotify />
            
            
        </div>

        </div>
    )
  }
}

export default Notification
