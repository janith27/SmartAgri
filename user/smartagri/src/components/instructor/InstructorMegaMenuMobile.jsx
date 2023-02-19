import React, { Component } from "react";
import { Link } from "react-router-dom";

class InstructorMegaMenuMobile extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var acc = document.getElementsByClassName("accordionMobile");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          <Link to="/">
            <button className="accordion">Chat</button>
          </Link>
          <Link to="/">
            <button className="accordion">Cart</button>
          </Link>
          <Link to="/">
            <button className="accordion">Notification</button>
          </Link>

          <Link to="/" onClick={this.logout}>
            <button className="accordion">Logout</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default InstructorMegaMenuMobile;
