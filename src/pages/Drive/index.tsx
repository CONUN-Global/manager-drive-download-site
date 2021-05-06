import driveImg from "../../assets/driveico.svg";
import SideBySide from "../../components/SideBySide";

function Drive() {
  return (
    <SideBySide id="drive" title="CONUN DRIVE" image={driveImg}>
      <p>A decentralized way to share files.</p>
      <p>
        Welcome to CONUN DRIVE, a peer-to-peer file sharing service built on our
        blockchain network.
      </p>
      <p>
        Unlike other peer-to-peer services, the decentralized nature of the
        blockchain means no-one has control of what files are available to
        download.
      </p>
      <p>Get started now!</p>
    </SideBySide>
  );
}

export default Drive;
