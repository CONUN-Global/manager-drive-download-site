import managerImg from "../../assets/managerico.svg"

function Manager(){
  return <div className="page" id="manager">
    <div className="side-by-side">
      <div className="wordsCell">
        <div className="title">CONUN MANAGER</div>
        <p>
        Our new cryptocurrency manager keeps your existing wallets together securely.</p>
        <p>
        You can easily transfer funds between wallets, as well as getting access our own blockchain network, 
        where you can utilize our distributed applications such as CONUN DRIVE.</p>
        <p>
        Our blockchain network uses a POA (Proof of Authority) methodology that allows us to provide free transactions*.<br/>
        <span>*Does not apply to transactions performed other networks (Ethereum, etc.)</span>
        </p>
      </div>
        <img src={managerImg} className="illust" alt="illustration depicting the manager app"/>
    </div>
    
  </div>
}

export default Manager