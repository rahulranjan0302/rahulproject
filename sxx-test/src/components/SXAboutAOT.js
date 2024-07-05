import React from 'react'

const SXAboutAOT = () => {
  return (
    <>
      <div className="fn_cs_about" id='about'>
        <div className="left_part">
          <div data-aos="fade-right" className="img">
            <div className="img_in" data-bg-img="../img/poster1.webp">
              <img src="../img/poster1.webp" alt="" />
            </div>
          </div>
          <div data-aos="fade-left" className="right_in">
            <h3
              style={{ lineHeight: "45px", fontFamily: "font1" }}
              className="maintitle"
              data-text="ATTACK ON TITAN: THE FINAL SEASON PART 3"
            >
              ATTACK ON TITAN: THE FINAL SEASON PART 3
            </h3>
            <div className="shinnexdivider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Known in Japan as Shingeki no Kyojin, many years ago, the last
                remnants of humanity were forced to retreat behind the towering
                walls of a fortified city to escape the massive, man-eating
                Titans that roamed the land outside their fortress. Only the
                heroic members of the Scouting Legion dared to stray beyond the
                safety of the walls – but even those brave warriors seldom
                returned alive. Those within the city clung to the illusion of a
                peaceful existence until the day that dream was shattered, and
                their slim chance at survival was reduced to one horrifying
                choice: kill – or be devoured!
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Type :</b> TV Series
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Studios:</b> MAPPA
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Genre:</b> Action, Drama
              </p>
              <p>
                <b style={{ fontSize: "20px" }}>Duration:</b> 61 min
              </p>
            </div>
            <a
              href="https://chapmanganato.com/manga-oa952283"
              className="ossm_btn"
              target="_blank"
              rel="noreferrer"
            >
              <span>Manga</span>
            </a>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/aot_poster2.webp" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SXAboutAOT