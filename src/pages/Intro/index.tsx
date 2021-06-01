import Button from "../../components/Button";
import SideBySide from "../../components/SideBySide";

import { getPlatform } from "../../utilities/functions";

import dlLinks from "../../config/downloadURLS.json";

import MainImage from "../../assets/glacksy.svg";

import style from "./Intro.module.scss";

function Intro() {
  const platform = getPlatform();

  const handleDL = () => {
    if (platform === "windows") {
      document.getElementById("win_default")?.click();
    } else if (platform === "mac") {
      document.getElementById("mac_default")?.click();
    } else if (platform === "linux") {
      document.getElementById("linux_default")?.click();
    } else {
      document.getElementById("all_downloads")?.click();
    }
  };

  let platformLabel = "DOWNLOAD MANAGER + DRIVE .ZIP";
  let driveVerLabel, managerVerLabel;

  switch (platform) {
    case "mac":
      driveVerLabel = dlLinks.mac.driveVersion;
      managerVerLabel = dlLinks.mac.managerVersion;
      break;
    case "windows":
      driveVerLabel = dlLinks.windows.driveVersion;
      managerVerLabel = dlLinks.windows.managerVersion;
      break;
    case "linux":
      driveVerLabel = dlLinks.linux.driveVersion;
      managerVerLabel = dlLinks.linux.managerVersion;
      break;
    default:
      platformLabel = "SEE DOWNLOAD OPTIONS";
      driveVerLabel = "";
      managerVerLabel = "";
      break;
  }

  return (
    <SideBySide
      id="intro"
      title="Introducing CONUN MANAGER and DRIVE"
      image={MainImage}
    >
      <p>
        Download and get free access to the CONUN manager and CONUN drive
        services. A new way to manage your cryptocurrency and discover endless
        digital assets.
      </p>
      <div className={style.buttonbox}>
        <Button click={handleDL}>
          <div>
            <span className={style.main}>{platformLabel}</span>
            {platform && <span className={style.sub}> FOR {platform}</span>}
          </div>
        </Button>
        {platform && (
          <>
            <div className={style.versionBox}>
              {managerVerLabel && (
                <p className={style.version}>Manager ver. {managerVerLabel}</p>
              )}
              {driveVerLabel && (
                <p className={style.version}>Drive ver. {driveVerLabel}</p>
              )}
            </div>
            <span className={style.dlOther}>Not on {platform}? </span>
            <a className={style.dlOther} href="#downloads" id="all_downloads">
              See all download options
            </a>
          </>
        )}
      </div>
    </SideBySide>
  );
}

export default Intro;
