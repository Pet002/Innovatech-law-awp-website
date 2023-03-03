import React from 'react'
import fs from "fs"

const Sitemap = () => {};

export const getServerSideProps = ({ res }) =>{

    const baseUrl = {
        development : "http://localhost:3000",
        production : "https://www.innovatechlawawp.com"
    }[process.env.NODE_ENV];


    const staticPages = fs
    .readdirSync("pages")
    .filter((staticPages) => {
        return ![
            "_app.js",
            "_document.js",
            "_error.js",
            "sitemap.xml.js",
        ].includes(staticPages);
    })
    .map((staticPagesPath) => {
        return `${baseUrl}/${staticPagesPath}`;
    })



    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                    ${
                        staticPages.map((url) => {
                            return `<url>
                                <loc>${url}</loc>
                                <lastmod>${new Date().toISOString()}</lastmod>
                                <changefreq>mothly</changefreq>
                                <priority>1.0</priority>
                            </url>`;
                        })
                        .join("")}
                    </urlset>`;
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props:{},
    };
};



export default Sitemap;