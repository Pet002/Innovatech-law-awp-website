import Head from "next/head";
import icon from "../assets/headTag/favicon.ico"
import {useRouter} from "next/router";


export default function Meta({pageTitle}){
    const router = useRouter();
    return(
        <Head>
            <meta charSet="utf-8" />
            <title>{pageTitle}</title>
            <meta name="description" content="เข้าใจทุกภาคธุรกิจ พร้อมแก้ทุกปัญหา ทำงานอย่างมีประสิทธิภาพ เพื่อให้คุณได้รับประโยชน์ที่คุ้มค่ายิ่งกว่า" />


            <meta property="og:locale" content="th_TH" />
			<meta property='og:type' content='website' />
            <meta property='og:title' content={`Innovatech Law AWP ${(pageTitle != "Innovatech Law AWP") ? (`| ${pageTitle}`) : ("")}`} />
			<meta property='og:description' content='เข้าใจทุกภาคธุรกิจ พร้อมแก้ทุกปัญหา ทำงานอย่างมีประสิทธิภาพ เพื่อให้คุณได้รับประโยชน์ที่คุ้มค่ายิ่งกว่า' />
			<meta property='og:url' content={`https://www.innovatechlawawp.com${router.pathname}`} />
			<meta property="og:site_name" content="Innovatech Law AWP"/>
            <meta property='og:image' content='https://www.innovatechlawawp.com/images/favicon-12.png' />
            <meta property='og:image:width' content='200' />
            <meta property='og:image:height' content='200' />
			<meta property='og:image:type' content='image/png' />

            <meta name="twitter:card" content="summary_large_image" />

        </Head>

    );


}