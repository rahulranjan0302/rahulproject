import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserProfile = ({ walletToggle, wallet }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />
      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div className="title_holder">
            <img
              src={
                session?.user.image ||
                "https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
              }
              alt=""
            />
            <h3>{session?.user.name || "Aniket Kumar"}</h3>
          </div>
          {/* <button>Edit Name</button> */}
          <button
            onClick={() => {
              router.push("/avatar");
            }}
          >
            Edit Avatar
          </button>

          <button onClick={() => signOut()}>Logout</button>
          {/* <button onClick={() => signIn("google")}>Login</button> */}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  wallet: state.site.wallet,
});

export default connect(mapStateToProps, { walletToggle })(UserProfile);
