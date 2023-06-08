import Image from "next/image";
import styles from "../../styles/executiveProfile.module.css";
import Meta from "../../components/meta";

import Lawer1 from "../../assets/profiles/Apichet-Wogsantisuk.png";
import Lawer2 from "../../assets/profiles/Apichet-Wogsantisuk2.png";

import Lawer3 from "../../assets/profiles/Chanatip-Wu.png";
import Lawer4 from "../../assets/profiles/Chanatip-Wu2.png";

import Khunwarin1 from "../../assets/profiles/Khunwarin.jpg"
import Khunwarin2 from "../../assets/profiles/Khunwarin2.jpg"
import { useLanguage } from "../../contexts/language/languageContext";
import translating from "../../contents/contents";


export default function ExcutiveProfile() {
  const { language } = useLanguage();
  return (
    <main>
      <Meta pageTitle="Excutive Profile" />
      <div id="banner" className={`${styles.banner}`}>
        <h1>{translating("profile.header.t",language)}</h1>
        <hr />
      </div>
      <section className={` ${styles.main}`}>
        <div className={`${"container"} `}>
          <div className="row my-3">
            <div className="col-md-12 text-center">
              <h2>{translating("profile.section1.name",language)}</h2>
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-3 m-3 text-center">
              <Image
                src={Lawer1}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>
              {translating("profile.section1.name",language)}<br />
              {translating("profile.section1.role",language)}
                <br />
                {translating("profile.section1.role2",language)}
              </h2>
              <p className="mt-3">
              {translating("profile.section1.name",language)} <br />
              {translating("profile.section1.detail",language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.main} ${styles.oddContent}`}>
        <div className={`${"container"}`}>
          <div className={`${"row my-3"} ${styles.flexRps}`}>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>{translating("profile.section2.t",language)}</h2>
              <p className={`mt-3 ${styles.text}`}>
              {translating("profile.section2.detail",language)}
              </p>
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-3 m-3 text-center">
              <Image
                src={Lawer2}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* //Lawer2 start =========================================================== */}

      <section className={` ${styles.main}`}>
        <div className={`${"container"} `}>
          <div className="row my-3">
            <div className="col-md-12 text-center">
              <h2>{translating("profile.section3.name",language)}</h2>
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-3 m-3 text-center">
              <Image
                src={Lawer3}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>
              {translating("profile.section3.name",language)} <br />
              {translating("profile.section3.role",language)} <br />
              {translating("profile.section3.role2",language)}
              </h2>
              <p className="mt-3">
              {translating("profile.section3.detail",language)} 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.main} ${styles.oddContent}`}>
        <div className={`${"container"}`}>
          <div className={`${"row my-3"} ${styles.flexRps}`}>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>{translating("profile.section4.t",language)}</h2>
              <p className={`mt-3 ${styles.text}`}>
              {translating("profile.section4.detail",language)}
              </p>
            </div>

            <div className="col-md-4 m-3 text-center">
              <Image
                src={Lawer4}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* //Lawer3 start =========================================================== */}

      <section className={` ${styles.main}`}>
        <div className={`${"container"} `}>
          <div className="row my-3">
            <div className="col-md-12 text-center">
              <h2>{translating("profile.section5.name",language)}</h2>
              {/* <h3 className="mb-4">นางสาวกุลวรินทร์ วรธนินท์สรณ์</h3> */}
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-3 m-3 text-center">
              <Image
                src={Khunwarin1}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>
              {translating("profile.section5.name",language)} <br />
              {translating("profile.section5.role",language)}
              </h2>
              <p className="mt-3">
              {translating("profile.section5.name",language)} <br />
              {translating("profile.section5.detail",language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.main} ${styles.oddContent}`}>
        <div className={`${"container"}`}>
          <div className={`${"row my-3"} ${styles.flexRps}`}>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-6 my-auto">
              <h2>{translating("profile.section6.t",language)}</h2>
              <p className={`mt-3 ${styles.text}`}>
              {translating("profile.section6.detail",language)}
              </p>
            </div>

            <div className="col-md-4 m-3 text-center">
              <Image
                src={Khunwarin2}
                alt="Apichet Wogsantisuk"
                className={`${styles.imagesLawers}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
