import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Cookies = () => {
  return (
    <Layout pageTitle={"Cookies Page"}>
      <PageBanner pageName={"Cookies"} />
      <div className="privacy-container">
        <div className="container small">
          <h3
            className="maintitle"
            data-text="Cookie Policy for Shinnextream"
          >
            Cookie Policy for Shinnextream
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            This is the Cookie Policy for Shinnextream, accessible from
            shinnextream.vercel.app
          </p>
          <h3 className="maintitle" data-text="What Are Cookies ?">
            What Are Cookies ?
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>

          <h3 className="maintitle" data-text="How We Use Cookies ?">
            How We Use Cookies ?
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <h3 className="maintitle" data-text="Disabling Cookies">
            Disabling Cookies
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{" "}
            <a
              style={{ color: "#9ba0b8" }}
              href="https://www.termsfeed.com/cookies-policy-generator/"
            >
              Cookies Policy Generator
            </a>
            .
          </p>

          <h3 className="maintitle" data-text="The Cookies We Set">
            The Cookies We Set
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <ul>
            <li>
              <p>Account related cookies</p>
              <p>
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out.
              </p>
            </li>

            <li>
              <p>Login related cookies</p>
              <p>
                We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single
                time you visit a new page. These cookies are typically removed
                or cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </p>
            </li>

            <li>
              <p>Forms related cookies</p>
              <p>
                When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to remember
                your user details for future correspondence.
              </p>
            </li>
          </ul>

          <h3 className="maintitle" data-text="Third Party Cookies">
            Third Party Cookies
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
          <ul>
            <li>
              <p>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimisations our users appreciate
                the most.
              </p>
            </li>

            <li>
              <p>
                We also use social media buttons and/or plugins on this site
                that allow you to connect with your social network in various
                ways. For these to work the following social media sites
                including; Instagram, Gmail, Youtube will set cookies through
                our site which may be used to enhance your profile on their site
                or contribute to the data they hold for various purposes
                outlined in their respective privacy policies.
              </p>
            </li>
          </ul>
          <h3 className="maintitle" data-text="More Information">
            More Information
          </h3>
          <div className="shinnexdivider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>

          <p>
            For more general information on cookies, please read{" "}
            <a
              style={{ color: "#9ba0b8" }}
              href="https://www.cookiepolicygenerator.com/sample-cookies-policy/"
            >
              the Cookies Policy article
            </a>
            .
          </p>

          <p>
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods:
          </p>

          <ul>
            <li>Email: shinnextream@gmail.com</li>
            <li>By visiting this link: </li>{" "}
            <a
              style={{ color: "#9ba0b8" }}
              href="https://shinnextream.vercel.app/"
            >
              shinnextream.vercel.app
            </a>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Cookies;
