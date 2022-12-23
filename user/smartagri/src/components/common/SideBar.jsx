import React, { Component } from 'react';
import { SidebarData } from '../../Data/Data';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <div className='Sidebar'>
               {/* menu */}
               <div className='menu'>
                    {SidebarData.map((item, index) => {
                        return(
                        
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon} ></i>
                                <span>{item.heading}</span>
                                </Link>
                                
                        
                                
                          
                            
                        )
                    })}

                  

                    
               </div>
               
            
            </div>
        );
    }
}

export default SideBar;