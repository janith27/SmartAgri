import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppURL from '../../api/AppURL';

function JournalInDetail() {
    const {jId}=useParams();
    const [journalId,setJournalId]=useState();
    const [jData,setjData]=useState();
    console.log(journalId)
    const sendRequest = async () => {
        const res = await axios
          .get(AppURL.JournalDetailView(journalId.id))
          .catch((err) => console.log(err));
        const data = await res.data;
        // console.log(data);
        return data;
      };
      useEffect(() => {
        sendRequest().then((data) => setjData(data));
      }, [jData]);
  return (
    <div></div>
  )
}

export default JournalInDetail