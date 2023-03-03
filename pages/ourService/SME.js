import Meta from "../../components/meta";
import styles from '../../styles/ourServiceContent.module.css'

import headerImage from '../../assets/header/contactBanner.png'

// .banner{
//     width: 100%;
//     background-image: linear-gradient(
//         115deg,
//         rgba(0, 0, 0, 0.8),
//         rgba(0, 0, 0, 0.7)
//       ),
//     url('../assets/header/contactBanner.png');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     color : white;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     min-height: 340px;
// }


export default function SME() {


    const Image = {
        width: '100%',
        backgroundImage: `linear-gradient(115deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${headerImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color : 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '340px',
    }
    return(
        <div>
            <Meta title="บริการธุรกิจSME และธุรกิจสตาทอัพ" />
            <div  style={Image}>
                <h1 className={styles.title}>บริการธุรกิจSME และธุรกิจสตาทอัพ</h1>
            </div>
            <main className={`${styles.main}`}>
                <div className="container">
                    Hello
                </div>
            </main>
        </div>
    );
}