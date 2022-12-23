import React, { Component } from 'react';
import SideBar from '../common/SideBar';
import MainDash from '../common/MainDash';
import RightSide from '../common/RightSide';



class InstructorDashboard extends Component {
    render() {
        return (
            <div className='instruct'>
                <div className='instructGlass'>
                    <SideBar />
                    <MainDash />
                    <RightSide />
                </div>

                </div>
                
            
        );
    }
}

export default InstructorDashboard;