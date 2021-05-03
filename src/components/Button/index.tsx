import style from "./Button.module.scss"

type Props = {

  children: React.ReactNode;
  styling?:string
  click: () => void;
}

function Button({children, styling, click}: Props) {
  return <button className={`${style.Butto} ${styling}`} onClick={click}>
    {children}
  </button>
}

export default Button