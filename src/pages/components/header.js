import React from "react";
import logo from "../../assets/images/logo-white.png";
import $ from "jquery";

class Header extends React.Component {
  componentDidMount() {
    var menuSheet = false;
    $("#ham-menu").click(function() {
      menuSheet = !menuSheet;
      if (menuSheet === true) {
        $(".menu-sheet")
          .css("opacity", 1)
          .css("z-index", 9);
        $("#ham-menu")
          .removeClass("spinning")
          .addClass("spinning-result");
        $("#logo-header")
          .css("opacity", 0)
          .css("z-index", -1);
      } else {
        $(".menu-sheet")
          .css("opacity", 0)
          .css("z-index", -1);
        $("#ham-menu")
          .removeClass("spinning-result")
          .addClass("spinning");
        $("#logo-header")
          .css("opacity", 1)
          .css("z-index", 9);
      }
    });
  }
  render() {
    return (
      <header>
        <div className="header">
          <a href="/" className="logo" id="logo-header">
            <img src={logo} width="100%" alt="Logo Indonesia Creative" />
          </a>
          <a id="ham-menu" className="ham-menu spinning">
            <span className="text-menu">MENU</span>
            <i className="icon-menu fa fa-bars first-icon" />
            <i className="icon-menu fa fa-times second-icon" />
          </a>
        </div>
        <div className="menu-sheet">
          <div className="row">
            <div className="col-6 menu-items work">
              <div className="banner">
                <h1>WORK</h1>
              </div>
            </div>
            <div className="col-3 menu-items people">
              <div className="banner">
                <h1>PEOPLE</h1>
              </div>
            </div>
            <div className="col-3 menu-items news">
              <div className="banner">
                <h1>NEWS</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 menu-items clients">
              <div className="banner">
                <h1>CLIENTS</h1>
              </div>
            </div>
            <div className="col-3 menu-items locations">
              <div className="banner">
                <h1>LOCATIONS</h1>
              </div>
            </div>
            <div className="col-3 menu-items contacts">
              <div className="banner">
                <h1>CONTACTS</h1>
              </div>
            </div>
            <div className="col-3 menu-items jobs">
              <div className="banner">
                <h1>JOBS</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
