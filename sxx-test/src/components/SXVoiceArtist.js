import { useEffect } from "react";

const SXVoiceArtist = () => {
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 3000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  return (
    <section id="voice_artists">
      <div data-aos="fade-up" className="container">
        <h3
          className="maintitle big"
          data-text="OUR VOICE ARTISTS"
          data-align="center"
          style={{ fontFamily: "font1" }}
        >
          OUR VOICE ARTISTS
        </h3>
        {/* Slider */}
        <div className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src="/img/1x1.jpg" alt="" />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item ">
                  <img src="/img/va/1.webp" alt="vomaharaja" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vomaharaja/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/1.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item ">
                  <img src="/img/va/2.webp" alt="narugami_kenji" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/narugami_kenji/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/2.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item">
                  <img src="/img/va/3.webp" alt="bhumikavalmike" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bhumikavalmike/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/3.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src="/img/va/4.webp" alt="enter_nutshell" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/enter_nutshell/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/4.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <img src="/img/va/5.webp" alt="kaumudi_voiceovers" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kaumudi_voiceovers/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/5.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <img src="/img/va/6.webp" alt="neuro.noise" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/neuro.noise/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/6.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={7}>
                <div className="item">
                  <img src="/img/va/7.webp" alt="payal_vishal" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/payal_vishal/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/7.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={8}>
                <div className="item">
                  <img src="/img/va/8.webp" alt="raj_naam.toh.suna.hoga" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/raj_naam.toh.suna.hoga/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/8.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={9}>
                <div className="item">
                  <img src="/img/va/9.webp" alt="rishirajpandeyofficial" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rishirajpandeyofficial/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/9.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={10}>
                <div className="item">
                  <img src="/img/va/10.webp" alt="sahil07_x" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sahil07_x/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/10.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={11}>
                <div className="item">
                  <img src="/img/va/11.webp" alt="rubysnita" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rubysnita/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/11.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={12}>
                <div className="item">
                  <img src="/img/va/12.webp" alt="shikhashivi" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shikhashivi/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/12.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={13}>
                <div className="item">
                  <img src="/img/va/13.webp" alt="gaayiika" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gaayiika/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/13.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={14}>
                <div className="item">
                  <img src="/img/va/14.webp" alt="introvert_banda_" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/introvert_banda_/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/14.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li data-index={15}>
                <div className="item">
                  <img src="/img/va/15.webp" alt="viraj_dub" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/viraj_dub/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/15.webp" />
                    </div>
                  </a>
                </div>
              </li>
              <li className="prev2" data-index={16}>
                <div className="item">
                  <img src="/img/va/16.webp" alt="_itsmevaibhavi_" />
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_itsmevaibhavi_/">
                    <div className="item_in">
                      <div className="img" data-bg-img="/img/va/16.webp" />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}

        {/* !Description */}
      </div>
    </section>
  );
};
export default SXVoiceArtist;
