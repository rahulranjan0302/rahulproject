import { useEffect, useRef } from "react";

export const imgToSVG = () => {
  document.querySelectorAll("img.fn__svg").forEach((el) => {
    const imgID = el.getAttribute("id");
    const imgClass = el.getAttribute("class");
    const imgURL = el.getAttribute("src");

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/html");
        let svg = xmlDoc.querySelector("svg");

        setTimeout(() => {
          if (svg !== null) {
            if (typeof imgID !== "undefined") {
              svg.setAttribute("id", imgID);
            }

            if (typeof imgClass !== "undefined") {
              svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");

            el.parentNode && el.parentNode.replaceChild(svg, el);
          }
        }, 500);
      });
  });
};

export const dataBgImg = () => {
  let d = document.querySelectorAll("[data-bg-img]");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-bg-img"
    )})`;
  }
};

export const stickyNav = () => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset > 10) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};

export const holdSection = () => {
  const tagline = document.querySelector("#tagline");
  const shinnexlogo = document.querySelector(".shinnexlogo");

  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset < 400) {
      shinnexlogo.classList.add("hold");
      tagline.classList.add("hold");
    } else {
      tagline.classList.remove("hold");
      shinnexlogo.classList.remove("hold");
    }
  });
};

export const scrollTop = () => {
  const body = document.querySelector("body");

  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (offset > 300) {
      body.classList.add("totop-active");
    } else {
      body.classList.remove("totop-active");
    }
  });
};