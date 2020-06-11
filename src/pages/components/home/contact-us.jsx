import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.onContactClick = this.onContactClick.bind(this);
    this.onJoinClick = this.onJoinClick.bind(this);
    this.onSubjectSelected = this.onSubjectSelected.bind(this);
    this.state = {
      joinStatus: false,
      contactStatus: false,
      subjectText: "",
    };
  }

  onContactClick = (e) => {
    e.preventDefault();
    const currentState = this.state.contactStatus;
    this.setState({
      contactStatus: !currentState,
      joinStatus: false,
    });
  };

  onJoinClick = (e) => {
    e.preventDefault();
    const currentState = this.state.joinStatus;
    this.setState({
      joinStatus: !currentState,
      contactStatus: false,
    });
  };

  onSubjectSelected = (text, e) => {
    e.preventDefault();
    this.setState({
      subjectText: text,
    });
  };

  render() {
    const { joinStatus, contactStatus, subjectText } = this.state;

    return (
      <section className="contact-us">
        <div
          className={`contact ${contactStatus ? "selected" : ""} ${
            joinStatus ? "close" : ""
          }`}
          id="contact"
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
                        {subjectText ? subjectText : "Choose Subject"}
                        <i className="fa fa-sort-down pull-right" />
                      </button>
                      <div
                        className="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          href=""
                          className="dropdown-item"
                          onClick={(e) =>
                            this.onSubjectSelected("General Inquiry", e)
                          }
                        >
                          General Inquiry
                        </a>
                        <a
                          href=""
                          className="dropdown-item"
                          onClick={(e) =>
                            this.onSubjectSelected("Suggestion", e)
                          }
                        >
                          Suggestion
                        </a>
                        <a
                          href=""
                          className="dropdown-item"
                          onClick={(e) => this.onSubjectSelected("Booking", e)}
                        >
                          Booking
                        </a>
                        <a
                          href=""
                          className="dropdown-item"
                          onClick={(e) =>
                            this.onSubjectSelected("Technical Support", e)
                          }
                        >
                          Technical Support
                        </a>
                        <a
                          href=""
                          className="dropdown-item"
                          onClick={(e) => this.onSubjectSelected("Other", e)}
                        >
                          Other
                        </a>
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
          className={`jobs ${joinStatus ? "selected" : ""} ${
            contactStatus ? "close" : ""
          }`}
          id="jobs"
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
                    Work hard, play harder, and enjoy the heck out of both. We
                    create better for everyone in BlockchainWorks because we
                    work hard to make this a place that you can look forward to
                    being part of. Intrigued? We're looking for great people to
                    help us keep building something special.
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
