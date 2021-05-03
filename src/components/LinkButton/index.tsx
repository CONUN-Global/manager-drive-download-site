import style from "./LinkButton.module.scss"

type Props = {

  children: React.ReactNode;
  to:string;
  styling?:string
}

function LinkButton({children, styling, to}: Props) {
  return <a className={`${style.Butto} ${styling}`} href={to}>
    {children}
  </a>
}

export default LinkButton