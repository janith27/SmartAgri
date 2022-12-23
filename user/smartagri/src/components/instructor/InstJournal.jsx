import React, { Component } from 'react';
import SideBar from '../common/SideBar';
import JournalTable from './JournalTable';
import JournalRightSide from './JournalRightSide';


class InstJournal extends Component {
    render() {
        return (
            <div className='instruct'>
            <div className='instructGlass'>
                <SideBar />
                <JournalTable />
                <JournalRightSide />
            </div>

            </div>
        );
    }
}

export default InstJournal;