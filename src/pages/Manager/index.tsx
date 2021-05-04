import SideBySide from "../../components/SideBySide";
import managerImg from "../../assets/managerico.svg";

function Manager() {
  return (
    <SideBySide id="manager" title="CONUN MANAGER" image={managerImg}>
      <p>
        Our new cryptocurrency manager keeps your existing wallets together
        securely.
      </p>
      <p>
        You can easily transfer funds between wallets, as well as getting access
        our own blockchain network, where you can utilize our distributed
        applications such as CONUN DRIVE.
      </p>
      <p>
        Our blockchain network uses a POA (Proof of Authority) methodology that
        allows us to provide free transactions*.
        <br />
        <span>
          *Does not apply to transactions performed other networks (Ethereum,
          etc.)
        </span>
      </p>
    </SideBySide>
  );
}

export default Manager;
