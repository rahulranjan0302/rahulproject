import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaDonate } from "react-icons/fa";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const { data: session, status } = useSession();
  useEffect(() => {
    stickyNav();
  }, []);
  const [subMenu, setSubMenu] = useState(null);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div
          className="mob_top"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="social_trigger">
            <div
              className="trigger"
              style={{ width: "20px" }}
              onClick={() => navigationToggle(true)}
            >
              <span />
            </div>
          </div>
          <img
            src="/img/shinnextream.webp"
            width="100px"
            style={{ margin: "0 25px" }}
            alt=""
          />

          <div className="wallet" style={{ display: "flex" }}>
            <Link href="#donation">
              <FaDonate
                color="white"
                size={30}
                style={{ margin: "0.4rem 1rem", cursor:"pointer" }}
              />
            </Link>
            {status === "authenticated" && (
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  walletToggle(true);
                }}
                className="wallet_opener"
              >
                <img
                  src={session.user.image}
                  width="45px"
                  style={{ borderRadius: "50%", border: "1px solid white" }}
                  alt=""
                />
              </a>
            )}
            {status === "unauthenticated" && (
              <Button
                className="loginBtn"
                color="secondary"
                auto
                onClick={() => signIn("google")}
                style={{ padding: "0 10px" }}
              >
                <a
                  style={{
                    fontFamily: "font1",
                    fontSize: "16px",
                    padding: "0.4rem 0rem",
                  }}
                  className="wallet_opener"
                >
                  Login
                </a>
              </Button>
            )}
            {status === "loading" && (
              <Loading type="points-opacity" size="lg" />
            )}
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <Link href="#">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">About</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  setSubMenu("pages");
                }}
                className={`${subMenu == "pages" ? "active" : ""}`}
              >
                <span className="creative_link">
                  Shinnextream
                  <img src="/svg/down.svg" alt="" className="fn__svg" />
                </span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a
                    href="#shinnextream"
                    className="prev"
                    onClick={() => setSubMenu(null)}
                  >
                    <span className="creative_link">
                      <img src="/svg/down.svg" alt="" className="fn__svg" />
                      Shinnextream
                    </span>
                  </a>
                </li>

                <li>
                  <Link href="#shinnextream">
                    <a onClick={() => navigationToggle(false)}>
                      <span className="creative_link">About</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#voice_artists">
                    <a onClick={() => navigationToggle(false)}>
                      <span className="creative_link">Voice Artists</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link href="#anime_poll">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Anime Poll</span>
                </a>
              </Link>
            </li> */}
            <li>
              <Link href="#donation">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Donation</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#avatars">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Our Avatars</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a onClick={() => navigationToggle(false)}>
                  <span className="creative_link">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
