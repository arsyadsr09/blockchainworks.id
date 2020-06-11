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
          name: { first: "Arsyad", last: "Ramadhan" },
          nickname: "arsyad",
          position: "Chief Technology Officer",
          github: "https://github.com/arsyadsr09",
          email: "blacklistdark1987@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: "title",
        },
        {
          name: { first: "Furqan", last: "Maudhudy" },
          nickname: "fvrqan",
          position: "Chief Financial Officer",
          github: "https://github.com/fvrqan",
          email: "furqanmaudhudy@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Rina", last: "Hafizhah" },
          nickname: "rina",
          position: "Chief Product Officer",
          github: "https://github.com/rinahafizhah",
          email: "rinahafizhah@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Azerino", last: "Yogananta" },
          nickname: "Gatot",
          position: "President",
          github: "https://github.com/ayogatot",
          email: "azerino25@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Christian", last: "Jehoshaphat" },
          nickname: "龙",
          position: "VP, Designer",
          github: "https://github.com/ChristianJehoshaphatS",
          email: "christianjehoshaphat@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Desi", last: "Mandasari" },
          nickname: "Manda",
          position: "VP, Talent",
          github: "https://github.com/mandasari93",
          email: "desimandasari1993@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Dheta", last: "Catur" },
          nickname: "dheta",
          position: "VP, Creative Services",
          github: "https://github.com/dhetacm",
          email: "theresiadhetacm@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Ipul", last: "Saepulloh" },
          nickname: "ipul",
          position: "SVP, Strategy",
          github: "https://github.com/ipulsaepulloh",
          email: "ipulsaepulloh9@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Iwin", last: "Pradana" },
          nickname: "iwin",
          position: "Chief Happiness Officer",
          github: "https://github.com/Iwinrahardjo",
          email: "iwinrahardjo@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Masagus", last: "Hariadi" },
          nickname: "adi",
          position: "Chief Executive Officer",
          github: "https://github.com/hariadiarief",
          email: "rinahafizhah@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Panji", last: "Gumelar" },
          nickname: "Panji",
          position: "VP, Technology",
          github: "https://github.com/panjiggm",
          email: "panjiggm@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
        },
        {
          name: { first: "Yusuf", last: "Habibi" },
          nickname: "yusuf",
          position: "VP, Executive Producer",
          github: "https://github.com/yusuf1998",
          email: "yusufhabibi1998@gmail.com",
          imageFront: `${process.env.PUBLIC_URL + "/images/team/arsyad-1.jpg"}`,
          imageBack: `${process.env.PUBLIC_URL + "/images/team/arsyad-2.jpg"}`,
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
                    className={`owl-panel-item regular team `}
                    style={{
                      backgroundImage: `url(${item.imageBack})`,
                    }}
                    title={`${item.name.first} ${item.name.last}`}
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
                      <label className="foot">{item.nickname} </label>
                      <div className="banner-transparent">
                        <div className="top">
                          <label>
                            WHY INDONESIA CREATIVE &nbsp;
                            <i
                              className="fa fa-chevron-right"
                              style={{ lineHeight: 1.3 }}
                            />
                          </label>
                        </div>
                        <div className="bottom">
                          <h5>{item.position}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="narrative">
                      <div className="content">
                        <div className="top">
                          <h4 className="first-name">{item.name.first}</h4>
                          <h6 className="last-name">{item.name.last}</h6>
                          <h6 className="position">{item.position}</h6>
                          <p className="reason">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className="bottom">
                          <a href={item.github} className="links">
                            <i className="fa fa-github" />
                          </a>
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
