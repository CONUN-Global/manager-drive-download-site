import ALink from "../../components/ALink";
import DLCell from "../../components/DLCell";
import TripleTable from "../../components/TripleTable";

import windowsLogo from "../../assets/windowsLogo.svg";
import appleLogo from "../../assets/appleLogo.svg";
import ubuntuLogo from "../../assets/ubuntuLogo.svg";

import dlLinks from "../../config/downloadURLS.json";

function Downloads() {
  return (
    <TripleTable id="downloads" title="DOWNLOAD">
      <DLCell title="Windows" image={windowsLogo} id="windows-downloads">
        <ALink to={dlLinks.windows.both} id="win_default">
          Manager &amp; Drive (64 Bit) .zip File
        </ALink>
        <ALink to={dlLinks.windows.manager} id="win_manager">
          Manager {dlLinks.windows.managerVersion} Installer (64 Bit) 
        </ALink>
        <ALink to={dlLinks.windows.drive} id="win_drive">
          Drive {dlLinks.windows.driveVersion} Installer (64 Bit) 
        </ALink>
        
      </DLCell>
      <DLCell title="Mac" image={appleLogo} id="mac-downloads">
        <ALink to={dlLinks.mac.manager} id="mac_manager">
          Manager {dlLinks.mac.managerVersion}.dmg Installer 
        </ALink>
      </DLCell>
      <DLCell title="Linux" image={ubuntuLogo} id="linux-downloads">
        <ALink to={dlLinks.linux.both} target="_blank" id="linux_default">
          Manager &amp; Drive .zip File
        </ALink>
        <ALink to={dlLinks.linux.manager} target="_blank" id="linux_manager">
          Manager {dlLinks.linux.managerVersion}.deb Installer 
        </ALink>
        <ALink to={dlLinks.linux.drive} target="_blank" id="linux_drive">
          Drive  {dlLinks.linux.driveVersion}.deb Installer
        </ALink>
      </DLCell>
    </TripleTable>
  );
}

export default Downloads;
