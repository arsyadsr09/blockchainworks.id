import React from "react";
import OwlCarousel from "react-owl-carousel2";

const OwlOption = {
  stagePadding: 50,
  loop: true,
  nav: true,
  navText: [
    `<img src='${process.env.PUBLIC_URL + "/images/chevron-left.png"}'>`,
    `<img src='${process.env.PUBLIC_URL + "images/chevron-right.png"}'>`,
  ],
  autoWidth: true,
  dots: false,
};

class OurClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ourClient: [
        {
          company: "DEFIWORKS",
          companySpread: ["DEFIWORKS"],
          image: `${process.env.PUBLIC_URL + "images/our-client/defi.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/defi.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
          projects: [
            "DID: Indonesian Decentralized Identity (indid.io)",
            "Payment: Stable-token money streaming (monstream.io)",
            "Lending: Credit Union on Blockchain (credion.io)",
            "Asset Tokenization & Decentralized Exchange",
          ],
        },
        {
          company: "title",
        },
        {
          company: "DIREKTORAT JENDERAL PAJAK",
          companySpread: ["DIREKTORAT", "JENDERAL", "PAJAK"],
          image: `${process.env.PUBLIC_URL + "images/our-client/djp.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/djp.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`,
          projects: [
            "DJP Private Ethereum Network",
            "TAX ID & KYC Shared Storage on Blockchain",
            "Training: Blockchain Introduction for KYC",
          ],
        },
        {
          company: "TELKOM INDONESIA",
          companySpread: ["TELKOM", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/telkom.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/telkom.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.`,
          projects: [
            "Telkom Private Ethereum Network",
            "Blockchain for Logistics (Telkommetra Logee)",
            "Training: How to Create Private Ethereum Network",
          ],
        },
        {
          company: "BANK NEGARA INDONESIA",
          companySpread: ["BANK", "NEGARA", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/bni.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/bni.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          projects: [
            "KYC Shared Storage on Blockchain",
            "Training: Blockchain Introduction for KYC",
          ],
        },
        {
          company: "INDONESIA STOCK EXCHANGE",
          companySpread: ["INDONESIA", "STOCK", "EXCHANGE"],
          image: `${process.env.PUBLIC_URL + "images/our-client/idx.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/idx.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`,
          projects: [
            "Blockchain Training for PMO Division",
            "Blockchain Training for IT Division",
          ],
        },
        {
          company: "BADAN WAKAF INDONESIA",
          companySpread: ["BADAN", "WAKAF", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/bwi.png"}`,
          logo: `${process.env.PUBLIC_URL + "images/our-client/logo/bwi.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          projects: [
            "Quorum Consortium BWI-Telkom-Nazhir-Sharia Banks (LSPWU)",
            "CWLS (Cash Waqf Linked Sukuk) on Blockchain for Ministry of Finance",
            "Productive Waqf (Land and Property) for Office of Religious Affairs (KUA)",
          ],
        },
        {
          company: "TOKOIN",
          companySpread: ["TOKOIN"],
          image: `${process.env.PUBLIC_URL + "images/our-client/tokoin.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/tokoin.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`,
          projects: [
            "TOKO Coin ERC20, API & Admin Dashboard",
            "Blockchain for MSME Training Certification (Moodle Plugin)",
          ],
        },
        {
          company: "INDOCO CRYPTO EXCHANGE",
          companySpread: ["INDOCO", "CRYPTO", "EXCHANGE"],
          image: `${process.env.PUBLIC_URL + "images/our-client/indoco.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/indoco.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`,
          projects: [
            "RAJA Coin ERC20, Wallet & Admin Dashboard",
            "Indoco Decentralized Crypto-Exchange",
          ],
        },
        {
          company: "HIMPUNAN PERS ONLINE INDONESIA",
          companySpread: ["HIMPUNAN", "PERS", "ONLINE", "INDONESIA"],
          image: `${process.env.PUBLIC_URL + "images/our-client/hipoli.png"}`,
          logo: `${process.env.PUBLIC_URL +
            "images/our-client/logo/hipoli.png"}`,
          desc: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`,
          projects: [
            "HPL Coin ERC20, Wallet & IEO Landing page",
            "IEO Consultancy, Online Marketing & Community Management",
          ],
        },
      ],
      // selectedClient: {},
      // selectedProject: {},
    };
  }

  onArticleClick = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("selected");
    // this.setState({
    //   selectedClient: data,
    //   selectedProject: data.projects[0],
    // });
  };

  onArticleMouseLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("selected");
    // this.setState({
    //   selectedClient: {},
    //   selectedProject: {},
    // });
  };

  // onProjectClicked = (e, data) => {
  //   e.preventDefault();
  //   console.log(data);
  //   this.setState({
  //     selectedProject: data,
  //   });
  // };

  render() {
    const { ourClient } = this.state;

    return (
      <section className="our-work" id="our-client">
        <div className="filter-white">
          <OwlCarousel ref="our-client" options={OwlOption}>
            {ourClient.map((item, i) => {
              if (item.company === "title") {
                return (
                  <div key={i} className="owl-panel-item title">
                    <div>
                      <h2>OUR</h2>
                      <h2>CLIENT.</h2>
                    </div>
                  </div>
                );
              } else {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <article
                    key={i}
                    className={`owl-panel-item regular`}
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                    title={item.company}
                    onClick={this.onArticleClick}
                    onMouseLeave={this.onArticleMouseLeave}
                  >
                    <div
                      className="mask"
                      // style={{
                      //   backgroundImage: `url(${item.imageFront})`,
                      // }}
                    >
                      <div className="plus">
                        <img
                          className="button-expand"
                          src={
                            process.env.PUBLIC_URL +
                            "images/expand-plus-white.png"
                          }
                          alt="expand-button"
                        />
                      </div>
                      <label className="foot">{item.company} </label>
                      <div className="banner">
                        <div className="top">
                          <img src={item.logo} alt={item.company} />
                        </div>
                        <div className="bottom">
                          <div className="company">
                            {item.companySpread.map((company, j) => {
                              return <h4 key={j}>{company}</h4>;
                            })}
                          </div>
                          <label>
                            View Project &nbsp;
                            <i
                              className="fa fa-chevron-right"
                              style={{ lineHeight: 1.3 }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="narrative">
                      <div className="left-content">
                        <h5 className="name">{item.company}</h5>
                        <p className="reason">{item.desc}</p>
                      </div>
                      <div className="right-content">
                        <div className="top">
                          <h6>List Of Project</h6>
                          <div className="list-projects">
                            {item.projects.map((project, key) => {
                              return (
                                <span
                                  key={key}
                                  // onClick={(e) =>
                                  //   this.onProjectClicked(e, project)
                                  // }
                                >
                                  {project}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        {/* <div className="bottom">
                          <h5 className="company">{item.company}</h5>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="plus">
                      <img
                        className="button-expand"
                        src={
                          process.env.PUBLIC_URL +
                          "images/expand-plus-white.png"
                        }
                        alt="expand-button"
                      />
                    </div>
                    <label className="foot">{item.company}</label>
                    <div className="banner">
                      <div className="top">
                        <img src={item.logo} alt={item.company} />
                      </div>
                      <div className="bottom">
                        <div>
                          {item.companySpread.map((company, j) => {
                            return <h4 key={j}>{company}</h4>;
                          })}
                        </div>
                      </div> 
                        </div> */}
                  </article>
                );
              }
            })}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default OurClient;
