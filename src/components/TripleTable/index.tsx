import style from "./TripleTable.module.scss";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function TripleTable({ title, id, children }: Props) {
  return (
    <div className={style.page} id={id}>
      <div className={style.pageHeader}>{title}</div>
      <div className={style.table}>{children}</div>
    </div>
  );
}

export default TripleTable;
