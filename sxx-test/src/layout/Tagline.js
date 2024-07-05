import Link from "next/link";
import { GiHeartWings } from "react-icons/gi";

const Tagline = () => {
  return (
    <div id="tagline" className="hold">
      <div className="tagline">
        <h4 className="title" style={{fontFamily:"font1", fontSize:"1.5rem", letterSpacing:"2px", display:"flex"}}>
          Shinzo &nbsp;wo &nbsp;Sasageyo &nbsp;<GiHeartWings size={50}/>
        </h4>
      </div>
    </div>
  );
};
export default Tagline;
