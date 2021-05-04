import style from "./ALink.module.scss"

function ALink({
  to,
  target,
  rel,
  children,
  id,
}: {
  to: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <li className={style.link}>
      <a href={to} id={id} target={target} rel={rel}>
        {children}
      </a>
    </li>
  );
}

export default ALink