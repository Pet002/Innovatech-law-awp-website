import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import baseOn from '../assets/home/base-on.png'
import modern from '../assets/home/Modern.png'
import team from '../assets/home/team.png'


//Image SVG 
import startSME from '../assets/SVG/startSME.svg'
import Note from '../assets/SVG/Note.svg'
import script from '../assets/SVG/script.svg'
import success from '../assets/SVG/success.svg'
import TAX from '../assets/SVG/TAX.svg'
import VAT from '../assets/SVG/VAT.svg'
import Hummer from '../assets/SVG/Hummer.svg'


//Image customer
import temp from '../assets/home/customers/TEMP.png'
import buddyworking from '../assets/home/customers/buddyworking.png'
import keen from '../assets/home/customers/KEEN.png'
import OnTime from '../assets/home/customers/OnTime.png'
import penguin from '../assets/home/customers/penguin.png'
import YAKstart from '../assets/home/customers/YAKstart.png'

import customer from '../assets/home/customers/customer.jpg'


import Meta from '../components/meta'

export default function Home() {

  return (
    <div className='container'>
      <Meta pageTitle="Innovatech Law AWP"/>
      <main className={styles.main}>

        <div className={`${'row'} ${styles.firstContent} ${'my-2'}`}>
          <h3 className={`${'text-center'} ${'mb-3'} `}>
            Why  Innovatech law ?
          </h3>
          <br />
          <br />

          <div className='row'>
            <div className='col-md-4 my-3' >
              <p className='text-center'>
                <Image src={baseOn} alt='base on startUp' width={264} height={191} />
              </p>
              <h5 className='text-center'>
                Base on start-up type
              </h5>
              <p>
                เพราะเราเริ่มต้นจากการเป็นสตาร์ทอัพ <br />เหมือนคุณทำให้เราเข้าใจคุณมากกว่าใคร
              </p>
            </div>
            <div className='col-md-4 my-3'>
              <p className='text-center'>
                <Image src={modern} alt=' Modern business attorney & consultant' width={264} height={191} />
              </p>
              <h5 className='text-center'>
                Modern business	attorney & consultant
              </h5>
              <p>
                เราเป็นทนายความและที่ปรึกษาที่มีมากประสบการ์กว่า 15 ปี<br />เราสามารถช่วยวิเคราะห์และหาแนวทางแก้ไขเพื่อช่วยให้ธุรกิจ<br />
                ที่คุณต้องการจะทำนั้นไม่ฝ่าฝืนกฎหมายและยังคงตอบโจทย์ความต้องการของคุณอยู่เช่นเดิมได้เป็นอย่างดีแน่นอน
              </p>
            </div>
            <div className='col-md-4 my-3'>
              <p className='text-center'>
                <Image src={team} alt='You are my team' width={300} height={191} />
              </p>
              <h5 className='text-center'>
                You are my team
              </h5>
              <p>
                เราให้ความสำคัญกับปัญหาของคุณเพราะคืองานของเรา<br />
                มูลค่าของงานจะมากหรือน้อยต่างกันแต่คุณค่าที่คุณจะได้<br />
                รับยังคงมาตราฐานเดียวกันคือการได้รอบมอบงานที่ผ่าน<br />
                การคิด วิเคราะห์พิจารณาไตร่ตรองมาแล้วอย่างดีที่สุด เพราะเราคือทีมเดียวกัน

              </p>
            </div>
          </div>


        </div>

        <hr />
        <div className={`${'row'} ${styles.secondContent}  ${'text-center'} ${'my-5'}`}>
          <h2 className={`${styles.renderLine} ${'mb-4'}`}>
            Our Services
          </h2>
          
          <div className={`${'row'} ${'my-3 mt-5'}`}>
            <div className='col-md-4 my-4'>
              <Image src={startSME} alt="start SME" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}>บริการธุรกิจSME <br />และธุรกิจสตาทอัพ</h5>
            </div>

            <div className='col-md-4 my-4'>
              <Image src={success} alt="success" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}>
                บริการด้านกฎหมายทรัพย์ทางปัญญา
              </h5>
            </div>
            <div className='col-md-4 my-4'>
              <Image src={Note} alt="Note" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}> บริการจัดทำสัญญาและข้อตกลงทุกประเภท </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 my-4'>
              <Image src={script} alt="script" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}> บริการจดทะเบียนธุรกิจทุกประเภท </h5>
            </div>
            <div className='col-md-4 my-4'>
              <Image src={VAT} alt="VAT" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}> บริการจดทะเบียนภาษีมูลค่าเพิ่ม</h5>
            </div>
            <div className='col-md-4 my-4'>
              <Image src={TAX} alt="TAX" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}>บริการจดทะเบียนภาษีธุรกิจเฉพาะ</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12my-4'>
              <Image src={Hummer} alt="Hummer" width={150} height={100} />
              <h5 className={`${styles.textBold2} ${'mt-3'}`}>บริการดำเนินคดีทางศาล</h5>
            </div>
          </div>
        </div>
        <hr/>
        <div className={`${'row text-center '} ${styles.textBold}`}>
          <h2 className={`${styles.textBold} ${'my-5'}`}>
            ลูกค้าที่เราไว้วางใจ
          </h2>
          
          <div className='col-md-12'>
            <Image src={customer} alt='customer' />
          </div>
          {/* <div className='col-4 '>
            <Image src={temp} alt='TEMP'  />
          </div>
          <div className='col-4 mt-2'>
            <Image src={keen} alt='KEEN PROFILE'  />
          </div>
          <div className='col-4 mt-2'>
            <Image src={OnTime} alt='On Time Coding'  />
          </div>
          <div className='col-4 mt-4'>
          <Image src={penguin} alt='Penguin'  />
          </div>
          <div className='col-4 mt-2'>
          <Image src={buddyworking} alt='buddyworking'  />
          </div>
          <div className='col-4 mt-2'>
          <Image src={YAKstart} alt='YAK Start'  />
          </div>*/}
        </div> 
      </main>
    </div>
  )
}