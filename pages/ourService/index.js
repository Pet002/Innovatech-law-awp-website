import Image from "next/image";
import styles from "../../styles/ourService.module.css";
//Image SVG
import startSME from "../../assets/SVG/startSME.svg";
import Note from "../../assets/SVG/Note.svg";
import script from "../../assets/SVG/script.svg";
import success from "../../assets/SVG/success.svg";
import TAX from "../../assets/SVG/TAX.svg";
import VAT from "../../assets/SVG/VAT.svg";
import Hummer from "../../assets/SVG/Hummer.svg";
import Card from "../../components/Card";

import hummerOutline from "../../assets/Service/lawer-firstpage.svg"
import court from "../../assets/Service/court.svg"

import Meta from "../../components/meta";

export default function OutServices() {
  const test = () => {
    console.log("test");
  };
  return (
    <div className="container">
      <Meta pageTitle="บริการของเรา" />
      <main className={styles.main}>
        <div className="row">
          <h2 className={`${"text-center"} ${"mb-3"}`}>บริการของเรา</h2>
        </div>
        {/* <div className='row'>
          <Card images={startSME} altImages="SME" title="บริการธุรกิจSME และธุรกิจสตาทอัพ" text="ในโลกยุคใหม่ การค้าขาย การทำธุรกิจ เป็นออนไลน์กันหมดแทบจะ 100% ทำให้มีช่องทางการถูกเอารัดเอาเปรียบจากคนบางกลุ่มได้ง่าย และกฎหมายใดบ้างล่ะที่เกี่ยวข้องกับธุรกิจสตาทอัพของคุณเพื่อที่จะคุ้มครองสิทธิของ คุณก็ขึ้นอยู่กับว่าคุณทำธุรกิจเกี่ยวข้องกับอะไรส่งข้อความหาเรา เพื่อขอคำปรึกษากับเราโดยไม่เสียค่าใช้จ่าย และเราจะติดต่อกลับให้เร็วที่สุด " link="/ourService/SME" />
          <Card images={success} altImages="correct" title="บริการด้านกฎหมายทรัพย์ทางปัญญา" text="ทรัพย์สินทางปัญญา (Intellectual Property) ผลงานอันเกิดจากการ ประดิษฐ์ คิดค้น หรือสร้างสรรค์ของมนุษย์ ซึ่งเน้นที่ผลผลิตของสติปัญญาและความชำนาญ โดยไม่คำนึงถึงชนิดของการสร้างสรรค์หรือวิธีใน การแสดงออก เช่น สินค้าต่าง ๆ การบริการ กรรมวิธีการผลิตทางอุตสาหกรรม เป็นต้น" link="/ourService" />
          <Card images={script} altImages="paper" title="บริการจดทะเบียนธุรกิจทุกประเภท" text="&nbsp&nbsp&nbsp&nbsp&nbsp มีได้แก่ <br/>
                                                                        >> จดทะเบียนบริษัท <br/>
                                                                        >> จดทะเบียนบริษัทมหาชนจำกัด <br/>
                                                                        >> ห้างหุ้นส่วนจำกัด <br/>
                                                                        >> จดทะเบียนพาณิชย์ <br/>
                                                                        >> จดทะเบียนขออนุญาติปลูกกัญชา <br/>
                                                                        >> จดทะเบียนขออนุญาติเปิดคลินิค <br/>
                                                                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp etc.
                                                                        " link="/" />
          <Card images={Note} altImages="Notebook" title="บริการจัดทำสัญญาและข้อตกลงทุกประเภท" text="ทางพวกเราสามารถให้ท่านออกแบบสัญญา และข้อตกลงในทุกรูปแบบ ไม่ว่าจะเป็น สัญญาการร่วมลงทุน สัญญาการเข้าเป็นผู้ถือหุ้น หรือสัญญากู้ยืมเงินของบริษัทฯ และอื่นๆ โดยเราให้ท่านสามารถสร้างเองได้ หรือ ให้เราจัดทำให้ได้เลยโดยตรงเพียงแค่ท่านติดต่อมาหาเรา เราจะจัดการให้ในทันที" link="/" />
          <Card images={VAT} altImages="VAT" title="บริการจดทะเบียนภาษีมูลค่าเพิ่ม" text="การเก็บภาษีจากการขายสินค้า หรือการให้บริการในแต่ละขั้นตอนการผลิต และจำหน่ายสินค้า หรือบริการ ทั้งที่ผลิตภายในประเทศและนำเข้าจากต่างประเทศ โดยอัตราที่ผู้ประกอบการจะเก็บภาษีมูลค่าเพิ่มในประเทศไทยคือ 7%" link="/" />
          <Card images={TAX} altImages="TAX" title="บริการจดทะเบียนภาษีธุรกิจเฉพาะ" text="ภาษีที่เก็บจากกิจการบางประเภทที่กฎหมายกำหนดเป็นพิเศษแยกจากภาษีมูลค่าเพิ่ม โดยกรมสรรพากรเป็นผู้จัดเก็บจากธุรกิจที่เป็นบุคคลธรรมดาหรือนิติบุคคล โดยผู้ประกอบการที่มีหน้าที่เสียภาษีธุรกิจเฉพาะ ต้องยื่นคำขอจดทะเบียนภาษีธุรกิจเฉพาะด้วยแบบคำขอ ภ.ธ.01 ภายใน 30 วันนับแต่วันเริ่มกิจการ" link="/" />
          <Card images={Hummer} altImages="Judge Hammer" title="บริการดำเนินคดีทางศาล" text="ในการดำเนินคดีทางกฎหมายทางเราได้มีทนายที่จะช่วยเหลือคุณในการจัดการทางด้านกฎหมายมากความสามารถ โดยเรามีความสามารถทั้งในด้าน คดีแพ่ง คดีอาญา คดีแรงงาน คดีมรดก คดีครอบครัว คดีคุ้มครองผู้บริโภค " link="/" />
          
        </div> */}
        <div className={`${styles.contentBlock}`}>
          <div className={`${styles.card}`} onClick={test} tabIndex={1}>
            <div className={`${styles.cardImage}`}>
              <Image src={hummerOutline} height={100} width={200} />
            </div>
            <h4 className={`${styles.cardTitle}`}>บริการทางกฎหมาย</h4>
          </div>

          <div className={`${styles.card}`} onClick={test} tabIndex={2}>
            <div className={`${styles.cardImage}`}>
              <Image src={court} height={100} width={200} />
            </div>
            <h4 className={`${styles.cardTitle}`}>บริการดำเนินคดี/ทางศาล</h4>
          </div>

          <div className={`${styles.card}`} onClick={test} tabIndex={3}>
            <div className={`${styles.cardImage}`}>
              <Image src={Note} height={100} width={200} />
            </div>
            <h4 className={`${styles.cardTitle}`}>บริการเกี่ยวกับบัญชี</h4>
          </div>

          {/* <div className={`${styles.card}`} onClick={test} tabIndex={4}>
            <div className={`${styles.cardImage}`}>
              <Image src={Note} height={100} width={200} />
            </div>
            <h4 className={`${styles.cardTitle}`}>บริการทางกฎหมาย</h4>
          </div> */}
          
          
        </div>
      </main>
    </div>
  );
}
