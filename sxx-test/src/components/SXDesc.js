import Link from "next/link";
const SXDesc = () => {
  return (
    <section id="shinnextream">
      <div className="container">
        <div className="shinnex-wrapper">
          <div className="news_part">
            <div className="left_items">
              <div data-aos="fade-up" className="blog__item">
                <img src="/img/shinnexBanner.webp" alt="" />
              </div>
            </div>

          </div>
          <div data-aos="fade-up" className="shinnex-desc2" >
            <p style={{ fontFamily: "ubuntu" }}>
              Shinnex Is An Initiative Taken By Fans To Take Hindi Fan-Dubbings Of Anime To The Next Level. We Will Provide The Best Possible Quality Of Anime In Hindi So That Anime Could Reach The Parts of Country Where English Is Not Majorly Spoken.
              <br />
              <br />
              Shinnextream Is A Streaming Site Where You Can Stream All The Content Made Or Dubbed By Shinnex Productions
              <br /><br /> <i>"AUR AAKHIR ME BAS YEH BOLNA CHAHUNGA KI APNI BHASHA KI BAAT HI KUCH AUR HA"</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SXDesc;
