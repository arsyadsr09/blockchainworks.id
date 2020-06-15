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

class OurWork extends React.Component {
  constructor(props) {
    super(props);
    this.onArticleClick = this.onArticleClick.bind(this);
    this.onArticleMouseLeave = this.onArticleMouseLeave.bind(this);
    this.state = {
      ourWork: [
        {
          name: "DJP Private Ethereum Network",
          company: "Direktorat Jenderal Pajak",
          desc: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          imageFront: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-2.jpg"}`,
        },
        {
          name: "title",
        },
        {
          name: "Kk",
          subName: "Chief Technology Officer",
          desc: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          imageFront: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-2.jpg"}`,
        },
        {
          name: "Kk",
          subName: "Chief Technology Officer",
          desc: `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          imageFront: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL +
            "/images/our-work/arsyad-2.jpg"}`,
        },
      ],
    };
  }

  onArticleClick = (e) => {
    e.currentTarget.classList.add("selected");
  };

  onArticleMouseLeave = (e) => {
    e.currentTarget.classList.remove("selected");
  };

  render() {
    const { ourWork } = this.state;

    return (
      <section className="our-team" id="our-team">
        <div className="filter-white">
          <OwlCarousel ref="our-team" options={OwlOption}>
            {ourWork.map((item, i) => {
              if (item.name === "title") {
                return (
                  <div key={i} className="owl-panel-item title-team">
                    <div>
                      <h2>OUR</h2>
                      <h2>WORK.</h2>
                    </div>
                  </div>
                );
              } else {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <article
                    key={i}
                    className={`owl-panel-item regular client `}
                    style={{
                      backgroundImage: `url(${item.imageBack})`,
                    }}
                    title={`${item.name}`}
                    onClick={this.onArticleClick}
                    onMouseLeave={this.onArticleMouseLeave}
                  >
                    <div
                      className="mask"
                      style={{
                        backgroundImage: `url(${item.imageFront})`,
                      }}
                    >
                      <div className="banner-white" />
                      <label className="foot">{item.name} </label>
                      <div className="banner-transparent">
                        <div className="top">
                          <label>
                            CHECK IT &nbsp;
                            <i
                              className="fa fa-chevron-right"
                              style={{ lineHeight: 1.3 }}
                            />
                          </label>
                        </div>
                        <div className="bottom">
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="narrative">
                      <div className="content">
                        <div className="top">
                          <h5 className="position">{item.name}</h5>
                          <p className="reason">{item.desc}</p>
                        </div>
                      </div>
                    </div>
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

export default OurWork;
