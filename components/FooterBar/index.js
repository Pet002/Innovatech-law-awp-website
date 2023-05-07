import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../assets/logo.png";
import styles from "../../styles/Footer.module.css";

const FooterBar = () => {
  const router = useRouter();
  var page = router.pathname;
  return (
    <footer className={`${styles.Footertab}`}>
      <div className={`${"container"}`}>
        <div className="row">
          <div className="col-md-4 mx-md-auto my-5">
            <Image src={Logo} alt="logo" width={150} height={150} />
            <p className={`${styles.text}`}>
              41-43 soi.ladprao 55 saphan-song <br />
              subdistrict wang thonglang district bangkok, Thailand
            </p>
          </div>
          <div className="col-md-4 my-md-5">
            <div className="row">
              <h4 className={`${styles.text} `}>เมนู</h4>
              <Link href="/">
                <a
                  className={`${styles.footLink} ${"my-1"} ${
                    page == "/" ? styles.linkActive : ""
                  }`}
                >
                  หน้าหลัก
                </a>
              </Link>
              <Link href="/ourService">
                <a
                  className={`${styles.footLink} ${"my-1"} ${
                    page == "/ourService" ? styles.linkActive : ""
                  }`}
                >
                  Our Service
                </a>
              </Link>
              <Link href="/aboutUs">
                <a
                  className={`${styles.footLink} ${"my-1"} ${
                    page == "/aboutUs" ? styles.linkActive : ""
                  }`}
                >
                  About Us
                </a>
              </Link>
              <Link href="/executiveProfile">
                <a
                  className={`${styles.footLink} ${"my-1"} ${
                    page == "/executiveProfile" ? styles.linkActive : ""
                  }`}
                >
                  Executive Profile
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="row">
              <h5 className={`${styles.text} `}>ติดต่อเรา</h5>

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
                  href="tel: 083-516-2915"
                >
                  083-516-2915
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
