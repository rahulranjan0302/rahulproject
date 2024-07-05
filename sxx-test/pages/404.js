import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout pageTitle={"404 Page Not Found"}>
      <div className="container-404">
        <div className="container small">
          <div className="message_holder">
            <h3 className="gradient_title">404</h3>
            <h4
              className="maintitle"
              data-text="Page Not Found"
              data-align="center"
            >
              Page Not Found
            </h4>
            <p>
              Sorry, but the page you are looking for was moved, removed,
              renamed or might never existed...
            </p>
            <div className="container-custom">
              <form>
                <input name="s" type="text" />
                <a href="#" className="ossm_btn">
                  <img src="/svg/loupe.svg" alt="" className="fn__svg" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default E404;
