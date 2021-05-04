import Cell from "../../components/Cell";
import TripleTable from "../../components/TripleTable";

import decent from "../../assets/sunAndNodes.svg";
import fast from "../../assets/clocky.svg";
import peer from "../../assets/connectPhones.svg";


function DrivePros() {
  return (
    <TripleTable id="drive-pros" title="DRIVE BENEFITS">
      <Cell image={fast} caption="FAST"/>
      <Cell image={decent} caption="DECENTRALIZED"/>
      <Cell image={peer} caption="PEER TO PEER"/>
    </TripleTable>
  );
}

export default DrivePros;
