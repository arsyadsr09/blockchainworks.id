import React from "react";
import logo from "../../assets/images/logo-white.png";
import $ from "jquery";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
    $(".banner").click(function() {
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
          <a href="/" className="logo absolute" id="logo-header">
            <img src={logo} alt="Logo Indonesia Creative" />
          </a>
          <div id="ham-menu" className="ham-menu spinning absolute">
            <span className="text-menu">MENU</span>
            <i className="icon-menu fa fa-bars first-icon" />
            <i className="icon-menu fa fa-times second-icon" />
          </div>
        </div>
        <div className="menu-sheet">
          <div className="row">
            <div className="col-6 menu-items work">
              <AnchorLink href="#our-work" className="banner">
                <h1>WORK</h1>
              </AnchorLink>
            </div>
            <div className="col-3 menu-items people">
              <AnchorLink href="#our-team" className="banner">
                <h1>PEOPLE</h1>
              </AnchorLink>
            </div>
            <div className="col-3 menu-items news">
              <div className="banner">
                <h1>NEWS</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 menu-items what">
              <AnchorLink href="#why" className="banner">
                <h1>WHY?</h1>
              </AnchorLink>
            </div>
            <div className="col-3 menu-items locations">
              <AnchorLink href="#location" className="banner">
                <h1>LOCATIONS</h1>
              </AnchorLink>
            </div>
            <div className="col-3 menu-items contacts">
              <AnchorLink href="#contact" className="banner">
                <h1>CONTACTS</h1>
              </AnchorLink>
            </div>
            <div className="col-3 menu-items jobs">
              <AnchorLink href="#jobs" className="banner">
                <h1>JOBS</h1>
              </AnchorLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
