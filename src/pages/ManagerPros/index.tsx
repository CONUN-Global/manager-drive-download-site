import easy from "../../assets/simple.svg";
import free from "../../assets/freeeee.svg";
import transparent from "../../assets/transparent.svg";

import style from "./ManagerPros.module.scss";

function ManagerPros() {
  return (
    <div className="page" id="manager-pros">
      <div className="page-header">MANAGER BENEFITS</div>
      <div className="pros-table">
        <div className="cell">
            <img
              src={free}
              alt="illustration depicting the app as easy to use"
            />
          <div className={style.caption}>FREE</div>
        </div>
        <div className="cell">
            <img
              src={easy}
              alt="illustration depicting the app as easy to use"
            />
          <div className={style.caption}>EASY</div>
        </div>
        <div className="cell">
            <img
              src={transparent}
              alt="illustration depicting the app as transparent"
            />
          <div className={style.caption}>TRANSPARENT</div>
        </div>
      </div>
    </div>
  );
}

export default ManagerPros;
