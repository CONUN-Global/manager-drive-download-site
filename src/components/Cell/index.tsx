import style from "./Cell.module.scss"

type Props = {
  image:string,
  caption:string
}

function Cell({image, caption}:Props){
  return <div className={style.cell}>
  <img src={image} alt="" />
  <div className={style.caption}>{caption}</div>
</div>
}
export default Cell