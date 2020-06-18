import React from "react";
import { Parallax } from "react-parallax";

class What extends React.Component {
  render() {
    return (
      <section className="what" id="what">
        <Parallax
          bgImage={process.env.PUBLIC_URL + "/images/background/blockchain.jpg"}
          strength={350}
        >
          <div className="what-content">
            <div className="row">
              <div
                className={`col-md-6 col-sm-12 col-xs-12 no-margin ${
                  window.matchMedia("(min-width: 768px)").matches
                    ? "border-right"
                    : ""
                }`}
              >
                <div className="title-what">
                  <div>
                    <h1>WHAT IS</h1>
                    <h1>BLOCKCHAIN</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 padding-p">
                <p>
                  First and foremost, blockchain is a public electronic ledger
                  built around a P2P system that can be openly shared among
                  disparate users to create an unchangeable record of
                  transactions, each time-stamped and linked to the previous
                  one. Every time a set of transactions is added, that data
                  becomes another block in the chain (hence, the name).
                </p>
                <p>
                  Blockchain can only be updated by consensus between
                  participants in the system, and once new data is entered it
                  can never be erased. It is a write-once, append-many
                  technology, making it a verifiable and auditable record of
                  each and every transaction.
                </p>
                <p>
                  While it has great potential, blockchain technology
                  development is still early days; CIOs and their business
                  counterparts should expect setbacks in deploying the
                  technology, including the real possibility of serious bugs in
                  the software used atop a blockchain. And as some companies
                  have already discovered, it's not the be-all solution to many
                  tech problems.
                </p>
                <h6>THE NEXT TECHNOLOGY</h6>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default What;
