import LikeButton from "./LikeButton";
import Sorry from "./Sorry";
import { useState } from "react";
import { Loading } from "@nextui-org/react";

function MediaComponent({ videos }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
  return (
    <>
      <div className="container">
      <div>
        {videos.map((items) => (
          <div key={items.id}>
            {!isVideoLoaded && (
              <div
                className="loading-spinner"
                style={{
                  maxWidth: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  paddingTop: "10rem",
                }}
              >
                {/* Add your loading animation or spinner here */}
                <Loading size="lg" type="points-opacity" />
                Loading...
              </div>
            )}
            <div style={{ paddingTop: "56%", position: "relative" }}>
              <iframe
                src={items.url}
                style={{
                  border: "0",
                  maxWidth: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                }}
                allowFullScreen="true"
                allow="encrypted-media"
                onLoad={handleVideoLoad}
              ></iframe>
            </div>
            <LikeButton vidId={items.id} />
          </div>
        ))}
      </div>

        <div className="descc">
          <p className="desccp">
            Attack on Titan: The Final Season Part 3 HINDI DUB | Shinnex
            Production | Shinnextream
          </p>
          {/* <Sorry/> */}
          <p>
            In the wake of Eren Yeager's cataclysmic actions, his friends and
            former enemies form an alliance against his genocidal rampage.
            Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the
            remaining members of the Scout Regiment join forces with Reiner
            Braun and the survivors of the Marleyan military. Their meager
            united front sets out on a mission to stop Eren's wrath and—if
            possible—save their old comrade in the process. <br /> As Eren
            pushes forward at any cost, he battles his own internal turmoil.
            Although he feels immense remorse over his horrific invasion, Eren
            believes he harbors noble intentions: he believes the path ahead is
            the only way to save his friends and, to a greater extent, his
            people. <br /> The opposing battalions spiral toward an inevitable
            final clash that may claim the lives of millions. Though they face
            an army of monsters beyond anything they could have previously
            imagined, Mikasa, Armin, and their allies stand brave in the face of
            certain doom.
          </p>
          <p>
            <b style={{ fontSize: "21px" }}>Type : </b> TV Series
          </p>
          <p>
            <b style={{ fontSize: "21px" }}>Studios : </b> MAPPA
          </p>
          <p>
            <b style={{ fontSize: "21px" }}>Genre : </b> Action, Drama
          </p>
          <p>
            <b style={{ fontSize: "21px" }}>Duration : </b> 61 min
          </p>
          <p>
            <b style={{ fontSize: "21px" }}>Casts : </b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/enter_nutshell/"
            >
              @enter_nutshell{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/bhumikavalmike/"
            >
              @bhumikavalmike{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/gaayiika/"
            >
              @gaayiika{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/kaumudi_voiceovers/"
            >
              @kaumudi_voiceovers{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/narugami_kenji/"
            >
              @narugami_kenji{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/neuro.noise/"
            >
              @neuro.noise{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/payal_vishal/"
            >
              @payal_vishal{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/rishirajpandeyofficial/"
            >
              @rishirajpandeyofficial{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/akshdeep_singh_vohra/"
            >
              @akshdeep_singh_vohra{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/rubysnita/"
            >
              @rubysnita{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/shikhashivi/"
            >
              @shikhashivi{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/viraj_dub/"
            >
              @viraj_dub{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/_its_me_vaibhavi_02/"
            >
              @_its_me_vaibhavi_02{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/introvert_banda_/"
            >
              @introvert_banda_{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/raj_naam.toh.suna.hoga/"
            >
              @raj_naam.toh.suna.hoga{" "}
            </a>
          </p>
          <p>
            <b>Posters and Thumbnail By : </b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/mrp_network/"
            >
              @mrp_network{" "}
            </a>
          </p>
          <p>
            <b>Mixing and Mastering By : </b>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#CDCDCD",
                textDecoration: "none",
                margin: "0.5rem",
              }}
              href="https://www.instagram.com/ik_khwaish_byrachitmishra/"
            >
              @ik_khwaish_byrachitmishra{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default MediaComponent;
