import { Fragment } from "react";
import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
import InfiniteCr from "../components/InfiniteCr";
const Banner = ({ searchToggle, search }) => {
  return (
    <Fragment>
      <div
        className={`shinnexlogo_closer ${search ? "active" : ""}`}
        onClick={() => searchToggle(false)}
      />
      <div className={`shinnexlogo_banner ${search ? "active" : ""}`}>
        <InfiniteCr />
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  search: state.site.search,
});

export default connect(mapStateToProps, { searchToggle })(Banner);
