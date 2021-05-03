import driveImg from "../../assets/driveico.svg";

import style from "./Drive.module.scss";

function Drive() {
  return (
    <div className="page" id="drive">
      <div className="side-by-side">
        <div className="wordsCell">
          <div className="title">CONUN DRIVE</div>
          <p className={style.para}>A decentralized way to share files.</p>
          <p className={style.para}>
            Welcome to CONUN DRIVE, a peer-to-peer file sharing service built on
            our blockchain network.
          </p>

          <p className={style.para}>
            Unlike other peer-to-peer services, the decentralized nature of the
            blockchain means no-one has control of what files are available to
            download.
          </p>
          <p className={style.para}>Get started now!</p>
        </div>
        <img src={driveImg} className="illust" alt="illustration depicting the drive app" />
      </div>
    </div>
  );
}

export default Drive;
