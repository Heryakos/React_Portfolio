const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'src', 'assets');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'mockups');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const files = [
    'Screenshot 2026-09-22 143512.png',
    'Screenshot 2026-09-22 143534.png',
    'Screenshot 2026-09-22 143547.png',
    'Screenshot 2026-09-22 143600.png',
    'Screenshot 2026-09-22 143615.png',
    'Screenshot 2026-09-22 143622.png',
    'Screenshot 2026-09-22 143636.png'
];

async function processImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        if (!fs.existsSync(inputPath)) {
            console.log(`Skipping ${file} - not found.`);
            continue;
        }

        const metadata = await sharp(inputPath).metadata();
        const screenshotWidth = 1000;
        const screenshotHeight = Math.round((metadata.height / metadata.width) * screenshotWidth);
        
        const titleBarHeight = 40;
        const frameWidth = 1000;
        const frameHeight = screenshotHeight + titleBarHeight;
        
        const canvasWidth = 1200;
        const canvasHeight = 900;
        
        const xOffset = Math.round((canvasWidth - frameWidth) / 2);
        const yOffset = Math.round((canvasHeight - frameHeight) / 2);

        const svgBackground = `
            <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f8fafc" />
                  <stop offset="100%" stop-color="#e2e8f0" />
                </linearGradient>
                <filter id="shadow" x="-5%" y="-5%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="15" stdDeviation="20" flood-opacity="0.25" />
                </filter>
              </defs>
              
              <rect width="${canvasWidth}" height="${canvasHeight}" fill="url(#bg)" />
              
              <rect x="${xOffset}" y="${yOffset}" width="${frameWidth}" height="${frameHeight}" rx="12" fill="#ffffff" filter="url(#shadow)" />
              
              <path d="M ${xOffset} ${yOffset + 12} A 12 12 0 0 1 ${xOffset + 12} ${yOffset} L ${xOffset + frameWidth - 12} ${yOffset} A 12 12 0 0 1 ${xOffset + frameWidth} ${yOffset + 12} L ${xOffset + frameWidth} ${yOffset + titleBarHeight} L ${xOffset} ${yOffset + titleBarHeight} Z" fill="#f1f5f9" />
              
              <circle cx="${xOffset + 20}" cy="${yOffset + 20}" r="6" fill="#ff5f56" />
              <circle cx="${xOffset + 40}" cy="${yOffset + 20}" r="6" fill="#ffbd2e" />
              <circle cx="${xOffset + 60}" cy="${yOffset + 20}" r="6" fill="#27c93f" />
              
              <rect x="${xOffset + 350}" y="${yOffset + 10}" width="300" height="20" rx="6" fill="#e2e8f0" />
            </svg>
        `;

        const resizedScreenshot = await sharp(inputPath)
            .resize(screenshotWidth, screenshotHeight)
            .toBuffer();

        const outputPath = path.join(outputDir, file.replace('Screenshot', 'Mockup'));

        await sharp(Buffer.from(svgBackground))
            .composite([
                {
                    input: resizedScreenshot,
                    top: yOffset + titleBarHeight,
                    left: xOffset
                }
            ])
            .toFile(outputPath);
            
        console.log(`Successfully generated mockup for ${file}`);
    }
}

processImages().catch(console.error);
