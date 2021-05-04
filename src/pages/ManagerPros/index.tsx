import Cell from "../../components/Cell";
import TripleTable from "../../components/TripleTable";

import easy from "../../assets/simple.svg";
import free from "../../assets/freeeee.svg";
import transparent from "../../assets/transparent.svg";


function ManagerPros() {

  return <TripleTable id="manager-pros" title="MANAGER BENEFITS">
    <Cell image={free} caption="FREE"/>
    <Cell image={easy} caption="EASY"/>
    <Cell image={transparent} caption="TRANSPARENT"/>
  </TripleTable>
}

export default ManagerPros;
