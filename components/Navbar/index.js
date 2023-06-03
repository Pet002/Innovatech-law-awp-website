import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import banner from "../../assets/header/banner.png";
import { Nav, Button } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { useRouter } from "next/router";
import { useLanguage } from "../../contexts/language/languageContext";
import { useEffect } from "react";
import { menuItems } from "./dropdownMenu";

const Navbar = () => {
  const router = useRouter();
  var page = router.pathname;

  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => {
    if (language === "TH") {
      setLanguage("EN");
    } else {
      setLanguage("TH");
    }
  };

  useEffect(() => {
    setLanguage("TH");
  }, []);

  return (
    <div className={`${page == "/" && styles.Banner}`}>
      <Nav
        className={`${"navbar navbar-expand-lg navbar-dark"} ${
          page != "/" && styles.bgNavbar
        }`}
      >
        <div className={`${"container"}`}>
          <Link href="/">
            <a className="navbar-brand ">
              <Image src={Logo} alt="logo" width={100} height={100} />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHome"
            aria-controls="navbarHome"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarHome">
            <ul className="navbar-nav me-auto">
              
              
              {menuItems.map((menu, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link href={menu.url}>
                      <a
                        className={`${"nav-link"} ${
                          router.pathname == menu.url && "active"
                        }`}
                        aria-current="page"
                        href="#"
                      >
                        {/* TODO: when feature change language is work it must change to support to this feature */}
                        {menu.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className={`${"nav-link"} ${styles.navbarButton}`}
                  onClick={changeLanguage}
                >
                  {}
                </button>
              </li>
              <li className="nav-item">
                <Link href={"/contactUs"}>
                  <a
                    className={`${"nav-link"} ${
                      router.pathname == "/contactUs" && "active"
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
      {page == "/" && (
        <div className={styles.bannerContent}>
          <h2>เข้าใจทุกภาคธุรกิจ พร้อมแก้ทุกปัญหา ทำงานอย่างมีประสิทธิภาพ</h2>
          <h2>เพื่อให้คุณได้รับประโยชน์ที่คุ้มค่ายิ่งกว่า</h2>
          <h1>INNOVATECH LAW</h1>
          <h1>เพราะเราเป็นมากกว่าที่ปรึกษา</h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
