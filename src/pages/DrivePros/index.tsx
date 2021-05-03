import fast from "../../assets/clocky.svg";
import decent from "../../assets/sunAndNodes.svg";
import peer from "../../assets/connectPhones.svg";

import style from "./DrivePros.module.scss";

function DrivePros() {
  return (
    <div className="page" id="drive-pros">
      <div className="page-header">DRIVE BENEFITS</div>
      <div className="pros-table">
        <div className="cell">
          <img src={fast} alt="illustration depicting the app as fast" />
          <div className={style.caption}>FAST</div>
        </div>
        <div className="cell">
          <img
            src={decent}
            alt="illustration depicting the app as decentralized"
          />
          <div className={style.caption}>DECENTRALIZED</div>
        </div>
        <div className="cell">
          <img
            src={peer}
            alt="illustration depicting the app as a peer to peer service"
          />
          <div className={style.caption}>PEER TO PEER</div>
        </div>
      </div>
    </div>
  );
}

export default DrivePros;
