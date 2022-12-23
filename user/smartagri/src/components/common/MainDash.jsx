
import React, { Component } from 'react';
import Cards from './Cards';
import RecentTable from '../common/RecentTable'

class MainDash extends Component {
    render() {
        return (
            <div className='MainDash'>
                <h2><b>Dashboard</b></h2>
                <Cards/>
                <RecentTable />
                
                
            </div>
        );
    }
}

export default MainDash;