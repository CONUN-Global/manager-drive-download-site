import style from "./DLCell.module.scss";

type Props = {
  title: string;
  image: string;
  children: React.ReactNode;
  id:string
};

function DLCell({ children, image, title, id }: Props) {
  return (
    <div className={style.cell} id={id}>
      <div className={style.os}>
        <span className={style.label}>{title}</span>
        <img className={style.OSIcon} src={image} alt="" />
      </div>
      <ul className={style.links}>
      {children}
      </ul>
    </div>
  );
}

export default DLCell;
