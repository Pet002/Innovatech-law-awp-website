import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../assets/logo.png";
import styles from "../../styles/Footer.module.css";
import { useLanguage } from "../../contexts/language/languageContext";
import { menuItems } from "../Navbar/dropdownMenu";
import translating from "../../contents/contents";

const FooterBar = () => {

  const {language} = useLanguage()
  const router = useRouter();
  var page = router.pathname;
  return (
    <footer className={`${styles.Footertab}`}>
      <div className={`${"container"}`}>
        <div className="row">
          <div className="col-md-4 mx-md-auto my-5">
            <Image src={Logo} alt="logo" width={150} height={150} />
            <p className={`${styles.text}`}>
              {translating("contact.address",language)}
            </p>
          </div>
          <div className="col-md-4 my-md-5">
            <div className="row">
              <h4 className={`${styles.text} `}>
                {language==="TH"?"เมนู": language==="EN" ? "Menu" :"菜单"}
              </h4>

              {/* Navbar Menu in Footer */}
              {menuItems.map((menu, index) => (
                <Link href={menu.url} key={`${index}-footer-link`}>
                <a
                  key={`${index}-footer`}
                  className={`${styles.footLink} ${"my-1"} ${
                    page == `${menu.url}` ? styles.linkActive : ""
                  }`}
                >
                  {language==="TH"?menu.titleTH: language==="EN" ? menu.title : menu.titleCN}
                </a>
              </Link>
              ))}
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="row">
              <h5 className={`${styles.text} `}>
                {language==="TH"?"ติดต่อเรา": language==="EN" ? "contact us" : "联系方式"}
              </h5>

              <a
                className={`${styles.footLink} ${"my-1"} ${styles.linkActive}`}
                href="mailto: Info@innovatechlawawp.com"
              >
                Info@innovatechlawawp.com
              </a>
              <span itemProp="telephone">
                <a
                  className={`${styles.footLink} ${"my-1"} ${
                    styles.linkActive
                  }`}
                  href="tel: 099-746-2615"
                >
                  099-746-2615
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className={`${"col-md-12 text-center"} ${styles.rightCopy}`}>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBar;
