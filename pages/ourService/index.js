import Image from 'next/image'
import styles from '../../styles/ourService.module.css'
//Image SVG 
import startSME from '../../assets/SVG/startSME.svg'
import Note from '../../assets/SVG/Note.svg'
import script from '../../assets/SVG/script.svg'
import success from '../../assets/SVG/success.svg'
import TAX from '../../assets/SVG/TAX.svg'
import VAT from '../../assets/SVG/VAT.svg'
import Hummer from '../../assets/SVG/Hummer.svg'
import Card from '../../components/Card'


import Meta from '../../components/meta'
import { useLanguage } from '../../contexts/language/languageContext'
import translating from '../../contents/contents'

export default function OutServices() {

  const {language} = useLanguage();

  return (
    <div className='container'>
      <Meta pageTitle="บริการของเรา"/>
      <main className={styles.main}>
        <div className='row'>
          <h2 className={`${'text-center'} ${'mb-3'}`}>
            {
              translating("ourservice.header", language)
            }
          </h2>
        </div>
        <div className='row'>
          <Card 
          images={startSME} 
          altImages="SME" 
          title={translating("ourservice.SME.title", language)}
          text={translating("ourservice.SME.content", language)}
          link="/ourService/SME" />


          <Card 
          images={success} 
          altImages="correct" 
          title={translating("ourservice.License.title", language)}
          text={translating("ourservice.License.content", language)}
          link="/ourService" />
          
          <Card 
          images={script} 
          altImages="paper" 
          title={translating("ourservice.business.title", language)} 
          text={translating("ourservice.business.content", language)}
          link="/" />

          <Card 
          images={Note} 
          altImages="Notebook" 
          title={translating("ourservice.promise.title", language)} 
          text={translating("ourservice.promise.content", language)}
          link="/" />


          <Card 
          images={VAT} 
          altImages="VAT" 
          title={translating("ourservice.vat.title", language)} 
          text={translating("ourservice.vat.content", language)}
          link="/" />


          <Card 
          images={TAX} 
          altImages="TAX" 
          title={translating("ourservice.tax.title", language)} 
          text={translating("ourservice.tax.content", language)}
          link="/" />


          <Card 
          images={Hummer} 
          altImages="Judge Hammer" 
          title={translating("ourservice.court.title", language)} 
          text={translating("ourservice.court.content", language)}
          link="/" />
          
        </div>
      </main>

    </div>
  )
}
