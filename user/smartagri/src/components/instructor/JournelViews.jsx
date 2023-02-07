import React, { Component } from 'react'
import {  Form,Button } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';






function JournelViews() {

    const navigate=useNavigate()
    const [name,setName]= useState("");
    const [description,setDescription]= useState("");
    const [photo,setPhoto]= useState(null);

    const createJournal =async (e)=> {
        e.preventDefault()

        const formData =new FormData()
         formData.append('name',name)
         formData.append('description', description)
         formData.append('photo', photo)

         await axios.post(AppURL.JournalData, formData)
            .then(({data})=> {
                console.log('Successfully Added')
            })
            navigate("/")
            .catch(({Response})=>{
               
            })
    }

   

    return (
        <div className='appoinmentback'>
            <div>Add Journals</div>
      <div className='journalviews'>
        <Form  onSubmit={(event)=>createJournal(event)}>
        <Form.Label>Journal Name :</Form.Label>
        <Form.Control type="text" placeholder="Enter Journal Name" value={name} onChange={(event)=>{setName(event.target.value)}} />
        <Form.Label>Description :</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
        <Form.Label>Upload Image :</Form.Label>
        <Form.Control type="file" value={photo} onChange={(event)=>{setPhoto(event.target.value)}} />
        <Button className='' type='submit'>Submit</Button>
        
      
    </Form>
    
        
      </div>
      <div className='empty'>
        
      </div>
      </div>
    )
  
}
export default JournelViews