import React from "react";

import windowsLogo from "../../assets/windowsLogo.svg";
import appleLogo from "../../assets/appleLogo.svg";
import ubuntuLogo from "../../assets/ubuntuLogo.svg";

import style from "./Downloads.module.scss";

function ALink({
  to,
  target,
  rel,
  children,
  id,
}: {
  to: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <li>
      <a href={to} id={id} target={target} rel={rel}>
        {children}
      </a>
    </li>
  );
}

function Downloads() {
  return (
    <div className="page" id="downloads">
      <div className="page-header">DOWNLOAD</div>
      <div className="pros-table">
        <div className="cell dlcell">
          <div className={style.os}>
            <span className={style.label}>Windows</span>
            <img className={style.OSIcon} src={windowsLogo} alt="" />
          </div>
          <ul className={style.bothLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v0.1.0-beta/Conun.Drive.And.Manager.WINDOWS.0.1.0.zip"
              id="win_default"
            >
              Manager &amp; Drive (64 Bit) .zip File
            </ALink>

          </ul>
          <ul className={style.managerLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v0.1.0-beta/Conun.Manager.Setup.0.1.0-beta.exe"
              id="win_manager"
            >
              Manager Installer (64 Bit)
            </ALink>
          </ul>
          <ul className={style.driveLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-drive/releases/download/v0.1.0-beta/Conun.Drive.Setup.0.1.0-beta.exe"
              id="win_drive"
            >
              Drive Installer (64 Bit)
            </ALink>
          </ul>
        </div>
        <div className="cell dlcell" id="mac_dls">
          <div className={style.os}>
            <span className={style.label}>Mac</span>
            <img className={style.OSIcon} src={appleLogo} alt="" />
          </div>

          <ul className={style.managerLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v0.1.0-beta/Conun.Manager-0.1.0-beta.dmg"
              id="mac_manager"
            >
              Manager .dmg Installer
            </ALink>
          </ul>

        </div>
        <div className="cell dlcell">
          <div className={style.os}>
            <span className={style.label}>Linux (Ubuntu)</span>
            <img className={style.OSIcon} src={ubuntuLogo} alt="" />
          </div>
          <ul className={style.bothLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v0.1.0-beta/Conun.Drive.And.Manager.LINUX.0.1.0.zip"
              target="_blank"
              id="linux_default"
            >
              Manager &amp; Drive .zip File
            </ALink>
          </ul>
          <ul className={style.managerLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-main-dapplication/releases/download/v0.1.0-beta/conun-manager_0.1.0-beta_amd64.deb"
              target="_blank"
              id="linux_manager"
            >
              Manager .deb Installer
            </ALink>
          </ul>
          <ul className={style.driveLinks}>
            <ALink
              to="https://github.com/CONUN-Global/conun-drive/releases/download/v0.1.0-beta/conun-drive_0.1.0-beta_amd64.deb"
              target="_blank"
              id="linux_drive"
            >
              Drive .deb Installer
            </ALink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
