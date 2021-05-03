import logo from "../../assets/conunLogoWhite.svg";
import tele from "../../assets/telegramIcon.png";
import face from "../../assets/facebookIcon.png";
import twit from "../../assets/twitterIcon.png";
import kack from "../../assets/kakaoIcon.png";
import git from "../../assets/githubIcon.png";
import disc from "../../assets/discordIcon.png";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={logo} className={style.logo} alt="Our Logo" />
      <div className={style.table}>
        <div className={style.cell} id="contact-links">
          <div className={style.title}>CONNECT TO CONUN</div>
          <div className={style.contactLinks}>
            
            <a
              href="https://t.me/conun_global"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tele} alt="telegram"></img>
            </a>
            <a
              href="https://www.facebook.com/conunglobal/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={face} alt="facebook"></img>
            </a>
            <a
              href="https://twitter.com/conunglobal"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twit} alt="twitter"></img>
            </a>
            <a
              href="https://open.kakao.com/o/gCsycmhb"
              target="_blank"
              rel="noreferrer"
            >
              <img src={kack} alt="kakao"></img>
            </a>
            <a
              href="https://github.com/CONUN-Global/CONUN"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="github"></img>
            </a>
            <a
              href="https://discord.gg/VvXvQfa3Za"
              target="_blank"
              rel="noreferrer"
            >
              <img src={disc} alt="disco"></img>
            </a>
          </div>
         
        </div>
        <div className={style.cell}>
          <div className={style.title}>OUR COMPANY</div>
          <div className={style.links}>
            <a
              href="https://conun.io/#overview"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              About Us
            </a>

            <a
              href="https://conun.io/contactus"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              Contact Us
            </a>

            <a
              href="https://conun.io/policy/termsandcondition"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className={style.cell}>
          <div className={style.title}>OUR COMMUNITY</div>
          <div className={style.links}>
          <a
            className={style.link}
            href="https://conun.io/"
            target="_blank"
            rel="noreferrer"
          >
            Main Site
          </a>

          <a
            href="https://discord.gg/VvXvQfa3Za"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            Discord
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
