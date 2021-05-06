import Button from "../../components/Button";
import { getPlatform } from "../../utilities/functions";

import MainImage from "../../assets/glacksy.svg";

import style from "./Intro.module.scss";

function Intro() {
  const platform = getPlatform();

  const handleDL = () => {
    if (platform === "windows") {
      document.getElementById("win_default")?.click();
    } else if (platform === "mac") {
      document.getElementById("mac_manager")?.click();
    } else if (platform === "linux") {
      document.getElementById("linux_default")?.click();
    } else {
      document.getElementById("all_downloads")?.click();
    }
  };

  let platformLabel;

  if (platform === "mac") {
    platformLabel = "DOWNLOAD MANAGER";
  } else if (!platform) {
    platformLabel = "SEE DOWNLOAD OPTIONS";
  } else {
    platformLabel = "DOWNLOAD MANAGER + DRIVE .ZIP";
  }

  return (
    <div className="page" id="intro">
      <div className="side-by-side">
        <div className="wordsCell">
          <div className="title">Introducing CONUN MANAGER and DRIVE</div>
          <p>
            Download and get free access to the CONUN manager and CONUN drive
            services. A new way to manage your cryptocurrency and discover
            endless digital assets.
          </p>
          <div className={style.buttonbox}>
            <Button click={handleDL}>
              <div>
                <span className={style.main}>{platformLabel}</span>
                {platform && 
                <span className={style.sub}> FOR {platform}</span>
                }
              </div>
            </Button>
            {platform && (
              <>
                <span className={style.dlOther}>Not on {platform}? </span>
                <a
                  className={style.dlOther}
                  href="#downloads"
                  id="all_downloads"
                >
                  See all download options
                </a>
              </>
            )}
          </div>
        </div>
        <img src={MainImage} className="illust" alt=""/>
      </div>
    </div>
  );
}

export default Intro;
