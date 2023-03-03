import Image from 'next/image'
import styles from '../../styles/aboutUs.module.css'
import baseOn from '../../assets/home/base-on.png'
import modern from '../../assets/home/Modern.png'
import team from '../../assets/home/team.png'

import Meta from '../../components/meta'

export default function Aboutus() {
  return (
    <div >
      <Meta pageTitle="เกี่ยวกับพวกเรา"/>
      <div className={`${styles.banner} ${'text-center'} `}>
          <h1 className={`${styles.h1}`}>เกี่ยวกับพวกเรา</h1>
          <h2 >กฎหมายอินโนเวเทค</h2>
      </div>
      <div className="container">
        <main className={styles.main}>
          <div className="row my-3">
            <div className="col-md-3">
              <h3 className={`${styles.contentHeader}`}>
              สิ่งที่หลายคนกำลังสงสัย เราคือใคร ?
              </h3>
            </div>
            <div className="col-md-9">
              <p>
              กฎหมายอินโนเวเทค เนื่องจากตัวเราเองก็มีพื้นฐานมาจากจากการเป็นสตาร์ทอัพเหมือนกัน เราเลยเข้าใจถึงการเป็นสตาร์ทอัพเป็นอย่างดีว่ากำลังเจอกับอะไรอยู่บ้าง จึงเป็นหัวใจหลักสำคัญในการก่อตั้ง Innovatech Law ขึ้นมาก็เพื่อต้องการที่จะเป็นเหมือนที่ปรึกษาส่วนตัวให้กับกลุ่มธุรกิจสตาร์ทอัพโดยเฉพาะ เราอยากที่จะเป็น Mentor และพร้อมช่วยให้คำปรึกษาเป็นอย่างดีในด้านกฎหมายให้กับธุรกิจกลุ่มนี้ 
              </p>
              <p className={`${styles.contentParagraph}`}>
              “เราอยากเป็นตัวเลือกที่ปลอดภัยและมีความเสี่ยงน้อยที่สุดแต่ยังคงเป็นตัวเลือกที่ยอดเยี่ยมที่สุดให้กับพวกเขา”
              </p>
            </div>
          </div>
          <hr/>
          
          <div className="row my-3 mt-5">
            <div className="col-md-5 text-center">
              <h3 className={`${styles.contentHeader}`}>
              กฎหมายอินโนเวเทคของเราดีอย่างไร ?
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
                Base on start-up type
              </h5>
              <p>
                เพราะเราเริ่มต้นจากการเป็นสตาร์ทอัพ <br />เหมือนคุณทำให้เราเข้าใจคุณมากกว่าใคร
              </p>
            </div>
            <div className='col-md-4 my-3 text-center'>
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
            <div className='col-md-4 my-3 text-center'>
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
        </main>
      </div>
    </div>
  )
}
