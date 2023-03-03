
import Link from 'next/link';
import styles from '../../styles/ourService.module.css';
import Image from 'next/image';


export default function Card({ images, altImages, title, text, link }) {
    return(
        <div className='col-md-5 my-2 mx-auto'>
            <div className={`${"card "} ${styles.cardHeight} `} style={{minHeight : "25em" , paddingTop: "1.25em"}}>
              <Image src={images} alt={altImages} width={200} height={100} className="pt-2"/>
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title text-center"><b>{title}</b></h5>
                <p className="card-text text-start" dangerouslySetInnerHTML={{__html : text}}></p>

                
              </div>
            </div>
          </div>
    );
}