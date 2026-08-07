import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        const htmlPath = `file://${path.join(__dirname, 'tender.html').replace(/\\/g, '/')}`;
        console.log(`Loading page: ${htmlPath}`);
        
        await page.goto(htmlPath, { waitUntil: 'networkidle0' });
        
        const pdfPath = path.join(__dirname, 'Shivaanya_Realcon_Tender.pdf');
        console.log(`Generating PDF at: ${pdfPath}`);
        
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });
        
        console.log('PDF generated successfully!');
        await browser.close();
    } catch (e) {
        console.error('Error generating PDF:', e);
    }
})();
