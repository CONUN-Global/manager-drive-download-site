
import style from "./SideBySide.module.scss"

type Props = {
  id:string
  title:string
  reverse?:boolean
  children:React.ReactNode
  image:string
}

function SideBySide({
  id,
  title,
  reverse,
  children,
  image
}:Props){
  return <div className={style.page} id={id}>
    <div className={style.sideBySide}>
      <div className={style.wordsCell}>
        <div className={style.title}>
          {title}
        </div>
        {children}
      </div>
      <img className={style.illust} alt="" src={image}/>
    </div>
  </div>
}

export default SideBySide