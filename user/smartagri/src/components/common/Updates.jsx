import React, { Component } from 'react';
import { UpdatesData } from '../../Data/Data';

class Updates extends Component {
    render() {
        return (
            <div className='Updates'>
                {UpdatesData.map((update) => {
                    return(
                        <div className='updates'>
                            <img src={update.src} alt=''/>
                            <div className='noti'>
                                <div style={{marginBottom: '0.5rem'} }>
                                    <span>{update.name}</span>
                                    <span> {update.noti}</span>
                                </div>
                                <span>{update.time}</span>
                            </div>
                           
                        </div>
                    )
                })}
                
            </div>
        );
    }
}

export default Updates;