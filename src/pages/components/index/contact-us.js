import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.onContactClick = this.onContactClick.bind(this);
    this.onJoinClick = this.onJoinClick.bind(this);
    this.state = {
      joinStatus: false,
      contactStatus: false
    };
  }

  onContactClick = () => {
    const currentState = this.state.contactStatus;
    this.setState({
      contactStatus: !currentState,
      joinStatus: false
    });
  };

  onJoinClick = () => {
    const currentState = this.state.joinStatus;
    this.setState({
      joinStatus: !currentState,
      contactStatus: false
    });
  };

  render() {
    const { joinStatus, contactStatus } = this.state;

    return (
      <section className="contact-us">
        <div
          className={`contact ${contactStatus ? "selected" : ""} ${
            joinStatus ? "close" : ""
          }`}
        >
          <div className="row h-100">
            <div className="col-6 flex-fix overlay-maroon">
              <div className="btn-close" onClick={this.onContactClick}>
                <i className="fa fa-times" />
              </div>
              <div>
                <div className="top">
                  <h2>READY TO CREATE BETTER,</h2>
                  <h2>TOGETHER?</h2>
                </div>
                <div className="bottom">
                  <h5>We'd love to hear from you.</h5>
                  <form className="form">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="What is your name?"
                      style={{ margin: "15px 0" }}
                    />
                    <input
                      className="form-control"
                      type="text"
                      name="e-mail"
                      placeholder="What is your email?"
                      style={{ margin: "15px 0" }}
                    />
                    <div
                      className="dropdown w-100"
                      style={{ margin: "15px 0" }}
                    >
                      <button
                        className="btn btn-light text-left w-100"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Choose Subject
                        <i className="fa fa-sort-down pull-right" />
                      </button>
                      <div
                        className="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item">General Inquiry</a>
                        <a className="dropdown-item">Suggestion</a>
                        <a className="dropdown-item">Booking</a>
                        <a className="dropdown-item">Technical Support</a>
                        <a className="dropdown-item">Other</a>
                      </div>
                    </div>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      style={{ margin: "15px 0" }}
                    />
                    <div className="pull-right">
                      <button className="btn btn-animate btn-animate-vertical btn-success btn-submit">
                        <span>
                          <i
                            className="icon fa fa-paper-plane"
                            aria-hidden="true"
                          />
                          SUBMIT
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 flex-fix overlay-orange">
              <div className="square yellow" onClick={this.onContactClick}>
                <div>
                  <h2>WORK</h2>
                  <h2>WITH US</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`join ${joinStatus ? "selected" : ""} ${
            contactStatus ? "close" : ""
          }`}
        >
          <div className="row h-100">
            <div className="col-6 flex-fix overlay-orange">
              <div className="square sia" onClick={this.onJoinClick}>
                <div>
                  <h2>COME</h2>
                  <h2>JOIN US</h2>
                </div>
              </div>
            </div>
            <div className="col-6 flex-fix overlay-maroon">
              <div className="btn-close" onClick={this.onJoinClick}>
                <i className="fa fa-times" />
              </div>
              <div>
                <div className="top">
                  <h3>MAKING GREAT $%*# HAPPEN TAKES </h3>
                  <h3>THE RIGHT PEOPLE.</h3>
                </div>
                <div className="bottom">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a className="btn btn-animate btn-animate-vertical btn-secondary btn-more">
                    <span>
                      <i
                        className="icon fa fa-chevron-right"
                        aria-hidden="true"
                      />
                      SEE CURRENT OPENINGS
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
