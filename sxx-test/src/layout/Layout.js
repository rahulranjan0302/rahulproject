import Head from "next/head";
import { Fragment, useEffect } from "react";
import { dataBgImg, holdSection, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import ScrollTop from "./ScrollTop";
import Banner from "./Banner";
import Tagline from "./Tagline";
import UserProfile from "./UserProfile";
import Logo from "./Logo";

const Layout = ({ children, pageTitle }) => {
  
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navigation />
      <Banner />
      <UserProfile />
      <MobileNavigation />
      <div className="main-container">
        <Header />
        <div className="main-content">
          {children}
        </div>
        <Footer />
        <Tagline />
        <ScrollTop />
        <Logo />
      </div>
    </Fragment>
  );
};
export default Layout;
