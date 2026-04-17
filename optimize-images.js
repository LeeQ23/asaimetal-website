const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const largeImages = [
  'public/Automasi Line Produksi.png',
  'public/Kapabilitas ekspor-impor kelas dunia..png',
  'public/After-sales service terbaik - downtime bukan masalah Anda lagi..png',
  'public/Personalisasi solusi sesuai budget _ kebutuhan Anda..png',
  'public/Teknologi AMR canggih untuk transportasi material otomatis.png',
  'public/Bisa ubah mesin manual _ otomatis dengan cepat & efisien.png',
  'public/Konversi Manual ke Otomatis.png',
  'public/Harga termurah + kualitas premium.png'
];

async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const imagePath of largeImages) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      const fileName = path.basename(imagePath, '.png');
      const webpPath = path.join(path.dirname(imagePath), `${fileName}.webp`);

      console.log(`\nProcessing: ${imagePath}`);
      console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

      // Convert to WebP with compression
      await sharp(imagePath)
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

      console.log(`WebP size: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Space saved: ${savings}%`);

      // Also create a compressed PNG version
      const compressedPngPath = path.join(path.dirname(imagePath), `${fileName}-compressed.png`);
      await sharp(imagePath)
        .png({
          compressionLevel: 9,
          quality: 80
        })
        .toFile(compressedPngPath);

      const compressedSize = fs.statSync(compressedPngPath).size;
      const pngSavings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

      console.log(`Compressed PNG size: ${(compressedSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`PNG space saved: ${pngSavings}%`);

    } catch (error) {
      console.error(`Error processing ${imagePath}:`, error.message);
    }
  }

  console.log('\nImage optimization completed!');
}

optimizeImages().catch(console.error);