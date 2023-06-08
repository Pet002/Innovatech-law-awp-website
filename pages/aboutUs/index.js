import Image from 'next/image'
import styles from '../../styles/aboutUs.module.css'
import baseOn from '../../assets/home/base-on.png'
import modern from '../../assets/home/Modern.png'
import team from '../../assets/home/team.png'

import Meta from '../../components/meta'
import translating from '../../contents/contents'
import { useLanguage } from '../../contexts/language/languageContext'

export default function Aboutus() {

  const {language} = useLanguage();
  
  return (
    <div >
      <Meta pageTitle="เกี่ยวกับพวกเรา"/>
      <div className={`${styles.banner} ${'text-center'} `}>
          <h1 className={`${styles.h1}`}>{translating("aboutus.header.t1",language)}</h1>
          <h2 >{translating("aboutus.header.t2",language)}</h2>
      </div>
      <div className="container">
        <main className={styles.main}>
          <div className="row my-3">
            <div className="col-md-3">
              <h3 className={`${styles.contentHeader}`}>
              {translating("aboutus.section1.t",language)}
              </h3>
            </div>
            <div className="col-md-9">
              <p>
              {translating("aboutus.section1.detail",language)}
              </p>
              <p className={`${styles.contentParagraph}`}>
              {translating("aboutus.section1.quote",language)}
              </p>
            </div>
          </div>
          <hr/>
          
          <div className="row my-3 mt-5">
            <div className="col-md-5 text-center">
              <h3 className={`${styles.contentHeader}`}>
              {translating("aboutus.section2.t",language)}
              </h3>
            </div>
            <div className='col-md-7'></div>
          </div>
          <div className='row mt-3'>
            <div className='col-md-4 my-3 text-center' >
              <p className='text-center'>
                <Image src={baseOn} alt='base on startUp' width={264} height={191} />
              </p>
              <h5 className='text-center'>
              {translating("aboutus.section2.t1",language)}
              </h5>
              <p>
              {translating("aboutus.section2.det1",language)}
              </p>
            </div>
            <div className='col-md-4 my-3 text-center'>
              <p className='text-center'>
                <Image src={modern} alt=' Modern business attorney & consultant' width={264} height={191} />
              </p>
              <h5 className='text-center'>
              {translating("aboutus.section2.t2",language)}
              </h5>
              <p>
              {translating("aboutus.section2.det2",language)}
              </p>
            </div>
            <div className='col-md-4 my-3 text-center'>
              <p className='text-center'>
                <Image src={team} alt='You are my team' width={300} height={191} />
              </p>
              <h5 className='text-center'>
              {translating("aboutus.section2.t3",language)}
              </h5>
              <p>
              {translating("aboutus.section2.det3",language)}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
