const fs = require('fs');
const path = require('path');

// Read the areas file
const areasFilePath = path.join(__dirname, '../src/data/areas.js');
const areasFileContent = fs.readFileSync(areasFilePath, 'utf8');

// Quick hack to make it usable in Node without Babel: remove 'export '
const jsContent = areasFileContent.replace('export const areas', 'const areas') + '\nmodule.exports = { areas };';

// Write to a temp file
const tempFilePath = path.join(__dirname, 'temp_areas.js');
fs.writeFileSync(tempFilePath, jsContent);

// Require the temp file
const { areas } = require('./temp_areas');

// Base URL
const BASE_URL = 'https://winchenqaz.com';

// Start XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${BASE_URL}/areas</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
`;

// Add Areas
areas.forEach(mainArea => {
    // Add Main Area URL
    sitemap += `    <url>
        <loc>${BASE_URL}/areas/${encodeURIComponent(mainArea.name)}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>\n`;

    // Add Sub Areas URL
    mainArea.areas.forEach(subArea => {
        // Avoid duplicate if subArea name is same as mainArea (which happens sometimes in data)
        if (subArea !== mainArea.name) {
            sitemap += `    <url>
        <loc>${BASE_URL}/areas/${encodeURIComponent(subArea)}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>\n`;
        }
    });
});

sitemap += `</urlset>`;

// Write sitemap.xml to public folder
const publicPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, sitemap);

console.log(`Sitemap generated with ${areas.reduce((acc, curr) => acc + 1 + curr.areas.length, 0)} links.`);

// Cleanup
fs.unlinkSync(tempFilePath);
