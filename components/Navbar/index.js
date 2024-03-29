import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import banner from "../../assets/header/banner.png";
import { Nav, Button } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { useRouter } from "next/router";
import { useLanguage } from "../../contexts/language/languageContext";
import { useEffect, useRef } from "react";
import { menuItems } from "./dropdownMenu";
import Flag from "react-flagkit";

import translating from "./../../contents/contents"

import content from "./../../contents/contents.json"

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

  const dropdownRef = useRef()

  const dropdownLanguage = () => {
    if(dropdownRef.current.style.display === "none")
    dropdownRef.current.style.display = "flex"
    else{
      dropdownRef.current.style.display = "none"
      dropdownRef.current.focus = false
    }
    
    // console.log(dropdownRef.current)
  }

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
                <Image src={Logo} alt="logo" width={70} height={70} />
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
                          {(language==="TH") ? menu.titleTH : (language==="EN") ? menu.title : menu.titleCN}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* contact and language change path */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href={"/contactUs"}>
                    <a
                      className={`${"nav-link"} ${
                        router.pathname == "/contactUs" && "active"
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      {(language === "TH")? "ติดต่อเรา" :  (language === "EN") ? "Contact" : "联系方式"}
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={dropdownLanguage}
                    className={`${styles.buttonChangeLang} ${"nav-link"}`}
                  >
                    {(language === "TH") ? <Flag country="TH"/> : (language === "EN") ? <Flag country="US"/> : <Flag country="CN"/>}
                    
                  </button>
                  <ul ref={dropdownRef} className={styles.dropdown}>
                    {/* Thai Lang */}
                    <li key="1" className={styles.langMenu}>
                      <button
                        className={`${styles.navbarButton} nav-link `}
                        onClick={()=>{
                          dropdownLanguage()
                          setLanguage(() => "TH")
                        }}
                      >
                        <Flag country="TH"/> &nbsp;
                        ภาษาไทย
                      </button>
                    </li>

                    {/* English Lang */}
                    <li key="1" className={styles.langMenu}>
                      <button
                        className={`${styles.navbarButton} nav-link`}
                        onClick={()=>{
                          dropdownLanguage()
                          setLanguage(() => "EN")
                        }}
                      >
                        <Flag country="US"/> &nbsp;
                        English
                      </button>
                    </li>

                    {/* CHINA LANGUAGE */}
                    <li key="1" className={styles.langMenu}>
                      <button
                        className={`${styles.navbarButton} nav-link`}
                        onClick={()=>{
                          dropdownLanguage()
                          setLanguage(() => "CN")
                        }}
                      >
                        <Flag country="CN"/> &nbsp;
                        中国
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      {page == "/" && (
        <div className={styles.bannerContent}>
          <h2>{translating("navbar.0",language)}</h2>
          <h2>{translating("navbar.1",language)}</h2>
          <h1>{translating("navbar.2",language)}</h1>
          <h1>{translating("navbar.3",language)}</h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
