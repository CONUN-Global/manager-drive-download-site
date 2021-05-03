import conunLogo from "../../assets/conunLogo.svg"

import style from "./HeadBar.module.scss"


function HeadBar(){
  return <nav className={style.HeadBar}>
    <img src={conunLogo} alt="CONUN Logo"/>
  
  </nav>
}

export default HeadBar