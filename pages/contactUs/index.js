import Meta from "../../components/meta";
import translating from "../../contents/contents";
import { useLanguage } from "../../contexts/language/languageContext";
import styles from "../../styles/contact.module.css";

export default function OutServices() {
  const {language} = useLanguage()
  return (
    <main>
      <Meta pageTitle="ติดต่อเรา" />
      <div className={`${styles.banner}`}>
        <h1>{translating("contact.header.t",language)}</h1>
      </div>
      <div className={`${"container"} ${styles.main}  ${styles.centerContent}`}>
        <div className={`${"row "} `}>
          <div className="col-md-4"></div>
          <div className={`${"col-md-4 "}`}>
            <h4 className="text-center">{translating("contact.section1.t1",language)}</h4>
            <p className="text-center">
            {translating("contact.section1.t2",language)}
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className={`${"row "} `}>
          <div className="col-md-4"></div>
          <div className={`${"col-md-4 "}`}>
            <h5>
              <i className="bi bi-envelope"></i> {translating("contact.section1.email",language)} : &nbsp;
              <a
                href="mailto: Info@innovatechlawawp.com"
                className={styles.link}
              >
                Info@innovatechlawawp.com
              </a>
            </h5>
            <h5>
              <i className="bi bi-phone"></i> {translating("contact.section1.phone",language)} : &nbsp;
              <span itemProp="telephone">
                <a href="tel: 083-516-2915" className={styles.link}>
                  083-516-2915
                </a>
              </span>
            </h5>
            <h5>
              <i className="bi bi-geo-alt-fill"></i> {translating("contact.section1.address",language)} :&nbsp;41-43
              {translating("contact.address",language)}
            </h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </main>
  );
}
