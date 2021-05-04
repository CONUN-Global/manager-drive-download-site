import React from "react";

import windowsLogo from "../../assets/windowsLogo.svg";
import appleLogo from "../../assets/appleLogo.svg";
import ubuntuLogo from "../../assets/ubuntuLogo.svg";

import dlLinks from "../../config/downloadURLS.json"

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
              to={dlLinks.windows.both}
              id="win_default"
            >
              Manager &amp; Drive (64 Bit) .zip File
            </ALink>

          </ul>
          <ul className={style.managerLinks}>
            <ALink
              to={dlLinks.windows.manager}
              id="win_manager"
            >
              Manager Installer (64 Bit)
            </ALink>
          </ul>
          <ul className={style.driveLinks}>
            <ALink
              to={dlLinks.windows.drive}
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
              to={dlLinks.mac.manager}
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
              to={dlLinks.linux.both}
              target="_blank"
              id="linux_default"
            >
              Manager &amp; Drive .zip File
            </ALink>
          </ul>
          <ul className={style.managerLinks}>
            <ALink
              to={dlLinks.linux.manager}
              target="_blank"
              id="linux_manager"
            >
              Manager .deb Installer
            </ALink>
          </ul>
          <ul className={style.driveLinks}>
            <ALink
              to={dlLinks.linux.drive}
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
