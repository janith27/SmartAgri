// import './SearchItem.css'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

const SearchItem = ({ item }) => {
  return (
    <div>
      <div className="searchItems">
        <div className="siDec">
          <span className="siTitles">Name : Karunarathna Wijesinghe</span>
          <span className="siFinal">{item.name} </span>
          <span className="siFinal">Time : </span>
          <span className="siFinal">Contact Number : </span>
          <span className="siFinal">Appoinment description : </span>
        </div>

        <div>
          <span className="siFinal">Appoinment Status : </span>

          <select className="color">
            <option className="approved">Approved</option>
            <option className="pending">Pending</option>
            <option className="cancel">Cancel</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
