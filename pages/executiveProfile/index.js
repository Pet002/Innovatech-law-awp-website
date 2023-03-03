import Image from 'next/image'
import styles from '../../styles/executiveProfile.module.css'
import Meta from '../../components/meta'

import Lawer1 from '../../assets/profiles/Apichet-Wogsantisuk.png';
import Lawer2 from '../../assets/profiles/Apichet-Wogsantisuk2.png';

import Lawer3 from '../../assets/profiles/Chanatip-Wu.png';
import Lawer4 from '../../assets/profiles/Chanatip-Wu2.png';

export default function ExcutiveProfile() {
  return (
    <main>
      <Meta pageTitle="Excutive Profile"/>
      <div id='banner' className={`${styles.banner}`}>
        <h1>
          Executive Profile
        </h1>
        <h3>
          ทีมของพวกเรา
        </h3>
        <hr/>
      </div>

      <div className={` ${styles.main}`}>
        <div className={`${"container"} `}>
          <div className='row my-3'>
            <div className='col-md-12 text-center'>
              <h2>
              Mr.Apichet  Wogsantisuk
              </h2>
              <h3 className='mb-4'>
              นายอภิเชฏฐ์  วงศ์สันติสุข
              </h3>
            </div>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-3 m-3 text-center'>
            <Image src={Lawer1} alt="Apichet Wogsantisuk"  className={`${styles.imagesLawers}`}/>
            </div>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-6 my-auto'>
              <h2 >
              Mr.Apichet  Wogsantisuk <br/>
              Chief Executive Officer<br/>
              Attorney
              </h2>
              <p className='mt-3'>
              นายอภิเชฏฐ์  วงศ์สันติสุข <br/>
              ผู้บริหารของ Innovatech law awp
              ที่มีความเชี่ยวชาญทั้งกฎหมายแพ่งและกฎหมายการลงทุน
              และเป็นที่ปรึกษากฎหมายให้กับบริษัทชั้นนำ
              ของไทยและต่างประเทศ มีประสบการณ์มากกว่า 15 ปี 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} ${styles.oddContent}`}>
      <div className={`${"container"}`}>
          <div className={`${'row my-3'} ${styles.flexRps}`}>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-6 my-auto'>
              <h2 >
              วุฒิการศึกษา
              </h2>
                <p className='mt-3'>
                ปริญญาตรี นิติ ศาสตร์บัณฑิต มหาวิทยาลัยรามคำแหง <br/><br/>
                ปริญญาโท สาขาวิชากฎหมายธุรกิจ มหาวิทยาลัยรามคำแหง <br/><br/>
                ปริญญาโท บริหารธุรกิจ มหาบัณฑิต สาขาวิชาการตลาด มหาวิทยาลัยรามคำแหง<br/><br/>
                ประกาศนียบัตร หลักสูตรวิชาว่าความ ของสานักฝึกอบรมวิชาว่าความ ปี พ.ศ 2549<br/><br/>
                ประกาศนียบัตร หลักสูตรทนายความ ผู้ทาคารับรองลายมือชื่อและเอกสาร (Notarial Services)<br/><br/>
                ประกาศนียบัตร หลักสูตรที่ปรึกษา กฎหมายในศาลที่มีอำนาจพิจารณาคดี เยาวชนและครอบครัว
                </p>
            
            </div>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-3 m-3 text-center'>
              <Image src={Lawer2} alt="Apichet Wogsantisuk" className={`${styles.imagesLawers}`}/>
            </div>
          </div>
        </div>
      </div>


{/* //Lawer2 start =========================================================== */}

      <div className={` ${styles.main}`}>
        <div className={`${"container"} `}>
          <div className='row my-3'>
            <div className='col-md-12 text-center'>
              <h2>
              Mr.Chanatip Wu
              </h2>
              <h3 className='mb-4'>
              นายชนาธิป วู
              </h3>
            </div>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-3 m-3 text-center'>
            <Image src={Lawer3} alt="Apichet Wogsantisuk"  className={`${styles.imagesLawers}`}/>
            </div>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-6 my-auto'>
              <h2 >
              Mr.Chanatip Wu <br/>
Partner <br/>
International Legal Consultant
              </h2>
              <p className='mt-3'>
              นายชนาธิป วู <br/>
              ผู้เป็นหุ้นส่วน ของ Innovatech law awp
เป็นที่ปรึกษากฎหมายที่เป็นสมาชิกสมาคมธุรกิจ
ประเทศใต้หวันและเชี่ยวชาญด้านธุรกิจของคนต่างชาติ
ในประเทศไทย สามารถสื่อสารได้ 3 ภาษา (ไทย,จีน,อังกฤษ)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.main} ${styles.oddContent}`}>
      <div className={`${"container"}`}>
          <div className={`${'row my-3'} ${styles.flexRps}`}>
            <div className='col-md-1 text-center'>
              
            </div>
            <div className='col-md-6 my-auto'>
              <h2 >
              วุฒิการศึกษา
              </h2>
                <p className='mt-3'>
                Thammasat LL.B Bachelor of Business Law International Program<br/><br/>
Advance Placement Chinese 5<br/><br/>
Masters Contract Drafting Course at University of  Wisconsin - Madison
                </p>
            
            </div>

            <div className='col-md-4 m-3 text-center'>
              <Image src={Lawer4} alt="Apichet Wogsantisuk" className={`${styles.imagesLawers}`}/>
            </div>
          </div>
        </div>
      </div>


    </main>
    
  )
}
