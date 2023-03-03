import Meta from "../../components/meta"
import styles from '../../styles/contact.module.css'


export default function OutServices() {
    return (
        <main>

            <Meta pageTitle="ติดต่อเรา" />
            <div className={`${styles.banner}`}>
                <h1>
                    Contact
                </h1>
                <h3>
                    ติดต่อเรา
                </h3>
            </div>
            <div className={`${'container'} ${styles.main}  ${styles.centerContent}`}>
                <div className={`${"row "} `}>
                    <div className="col-md-4"></div>
                    <div className={`${"col-md-4 "}`}>
                        <h4 className="text-center">
                            ให้เราติดต่อกลับหาคุณ
                        </h4>
                        <p className="text-center">
                            หากมีข้อสงสัยใดๆเพิ่มเติม หรือต้องการรับคำปรึกษาฟรีจากทางเรา คุณสามารถติดต่อหาเราได้ที่นี่
                        </p>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className={`${"row "} `}>
                    <div className="col-md-4"></div>
                    <div className={`${"col-md-4 "}`}>
                        <h5>
                            <i className="bi bi-envelope"></i>  Email : &nbsp;
                            <a href="mailto: Innovatechlaw.awp@gmail.com" className={styles.link}>
                                Innovatechlaw.awp@gmail.com
                            </a>
                        </h5>
                        <h5>
                            <i className="bi bi-phone"></i>  Phone : &nbsp;
                            <span itemProp="telephone">
                                <a href="tel: 083-516-2915" className={styles.link}>
                                    083-516-2915
                                </a>
                            </span>
                        </h5>
                        <h5>
                            <i className="bi bi-geo-alt-fill"></i> Address :&nbsp;41-43 soi.ladprao 55 saphan-song subdistrict wang thonglang district bangkok, Thailand
                            
                        </h5>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>

        </main>
    )
}


