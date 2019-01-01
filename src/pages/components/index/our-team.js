import React from "react";
import OwlCarousel from "react-owl-carousel2";

//images
import ChevronLeft from "../../../assets/images/chevron-left.png";
import ChevronRight from "../../../assets/images/chevron-right.png";

import Arsyad1 from "../../../assets/images/team/arsyad-1.jpg";
import Arsyad2 from "../../../assets/images/team/arsyad-2.jpg";
import Christian1 from "../../../assets/images/team/christian-1.jpg";
import Christian2 from "../../../assets/images/team/christian-2.jpg";
import Dheta1 from "../../../assets/images/team/dheta-1.jpg";
import Dheta2 from "../../../assets/images/team/dheta-2.jpg";
import Furqan1 from "../../../assets/images/team/furqan-1.jpg";
import Furqan2 from "../../../assets/images/team/furqan-2.jpg";
import Gatot1 from "../../../assets/images/team/gatot-1.jpg";
import Gatot2 from "../../../assets/images/team/gatot-2.jpg";
import Hariadi1 from "../../../assets/images/team/hariadi-1.jpg";
import Hariadi2 from "../../../assets/images/team/hariadi-2.jpg";
import Ipul1 from "../../../assets/images/team/ipul-1.jpg";
import Ipul2 from "../../../assets/images/team/ipul-2.jpg";
import Iwin1 from "../../../assets/images/team/iwin-1.jpg";
import Iwin2 from "../../../assets/images/team/iwin-2.jpg";
import Manda1 from "../../../assets/images/team/manda-1.jpg";
import Manda2 from "../../../assets/images/team/manda-2.jpg";
import Panji1 from "../../../assets/images/team/panji-1.jpg";
import Panji2 from "../../../assets/images/team/panji-2.jpg";
import Rina1 from "../../../assets/images/team/rina-1.jpg";
import Rina2 from "../../../assets/images/team/rina-2.jpg";
import Yusuf1 from "../../../assets/images/team/yusuf-1.jpg";
import Yusuf2 from "../../../assets/images/team/yusuf-2.jpg";

const OwlOption = {
  stagePadding: 50,
  loop: true,
  nav: true,
  navText: [`<img src='${ChevronLeft}'>`, `<img src='${ChevronRight}'>`],
  autoWidth: true,
  dots: false
};

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.onArticleClick = this.onArticleClick.bind(this);
    this.onArticleMouseLeave = this.onArticleMouseLeave.bind(this);
    this.state = {
      ourTeam: [
        {
          name: { first: "Arsyad", last: "Ramadhan" },
          nickname: "arsyad",
          position: "Chief Technology Officer",
          github: "https://github.com/arsyadsr09",
          email: "blacklistdark1987@gmail.com",
          imageFront: Arsyad1,
          imageBack: Arsyad2
        },
        {
          name: "title"
        },
        {
          name: { first: "Furqan", last: "Maudhudy" },
          nickname: "fvrqan",
          position: "Chief Financial Officer",
          github: "https://github.com/fvrqan",
          email: "furqanmaudhudy@gmail.com",
          imageFront: Furqan1,
          imageBack: Furqan2
        },
        {
          name: { first: "Rina", last: "Hafizhah" },
          nickname: "rina",
          position: "Chief Product Officer",
          github: "https://github.com/rinahafizhah",
          email: "rinahafizhah@gmail.com",
          imageFront: Rina1,
          imageBack: Rina2
        },
        {
          name: { first: "Azerino", last: "Yogananta" },
          nickname: "Gatot",
          position: "President",
          github: "https://github.com/ayogatot",
          email: "azerino25@gmail.com",
          imageFront: Gatot1,
          imageBack: Gatot2
        },
        {
          name: { first: "Christian", last: "Jehoshaphat" },
          nickname: "龙",
          position: "VP, Designer",
          github: "https://github.com/ChristianJehoshaphatS",
          email: "christianjehoshaphat@gmail.com",
          imageFront: Christian1,
          imageBack: Christian2
        },
        {
          name: { first: "Desi", last: "Mandasari" },
          nickname: "Manda",
          position: "VP, Talent",
          github: "https://github.com/mandasari93",
          email: "desimandasari1993@gmail.com",
          imageFront: Manda1,
          imageBack: Manda2
        },
        {
          name: { first: "Dheta", last: "Catur" },
          nickname: "dheta",
          position: "VP, Creative Services",
          github: "https://github.com/dhetacm",
          email: "theresiadhetacm@gmail.com",
          imageFront: Dheta1,
          imageBack: Dheta2
        },
        {
          name: { first: "Ipul", last: "Saepulloh" },
          nickname: "ipul",
          position: "SVP, Strategy",
          github: "https://github.com/ipulsaepulloh",
          email: "ipulsaepulloh9@gmail.com",
          imageFront: Ipul1,
          imageBack: Ipul2
        },
        {
          name: { first: "Iwin", last: "Pradana" },
          nickname: "iwin",
          position: "Chief Happiness Officer",
          github: "https://github.com/Iwinrahardjo",
          email: "iwinrahardjo@gmail.com",
          imageFront: Iwin1,
          imageBack: Iwin2
        },
        {
          name: { first: "Masagus", last: "Hariadi" },
          nickname: "adi",
          position: "Chief Executive Officer",
          github: "https://github.com/hariadiarief",
          email: "rinahafizhah@gmail.com",
          imageFront: Hariadi1,
          imageBack: Hariadi2
        },
        {
          name: { first: "Panji", last: "Gumelar" },
          nickname: "Panji",
          position: "VP, Technology",
          github: "https://github.com/panjiggm",
          email: "panjiggm@gmail.com",
          imageFront: Panji1,
          imageBack: Panji2
        },
        {
          name: { first: "Yusuf", last: "Habibi" },
          nickname: "yusuf",
          position: "VP, Executive Producer",
          github: "https://github.com/yusuf1998",
          email: "yusufhabibi1998@gmail.com",
          imageFront: Yusuf1,
          imageBack: Yusuf2
        }
      ]
    };
  }

  onArticleClick = e => {
    e.currentTarget.classList.add("selected");
  };

  onArticleMouseLeave = e => {
    e.currentTarget.classList.remove("selected");
  };

  render() {
    const { selected, ourTeam } = this.state;

    return (
      <section className="our-team">
        <div className="filter-white">
          <OwlCarousel ref="our-team" options={OwlOption}>
            {ourTeam.map((item, i) => {
              if (item.name === "title") {
                return (
                  <div key={i} className="owl-panel-item title-team">
                    <div>
                      <h2>OUR</h2>
                      <h2>TEAM.</h2>
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
                      backgroundImage: `url(${item.imageBack})`
                    }}
                    title={`${item.name.first} ${item.name.last}`}
                    onClick={this.onArticleClick}
                    onMouseLeave={this.onArticleMouseLeave}
                  >
                    <div
                      className="mask"
                      style={{
                        backgroundImage: `url(${item.imageFront})`
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

export default OurTeam;
