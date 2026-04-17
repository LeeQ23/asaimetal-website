const fs = require('fs');

const imageMappings = {
  'Personalisasi solusi sesuai budget _ kebutuhan Anda..png': 'Personalisasi solusi sesuai budget _ kebutuhan Anda..webp',
  'Teknologi AMR canggih untuk transportasi material otomatis.png': 'Teknologi AMR canggih untuk transportasi material otomatis.webp',
  'Bisa ubah mesin manual _ otomatis dengan cepat & efisien.png': 'Bisa ubah mesin manual _ otomatis dengan cepat & efisien.webp',
  'Konversi Manual ke Otomatis.png': 'Konversi Manual ke Otomatis.webp',
  'Harga termurah + kualitas premium.png': 'Harga termurah + kualitas premium.webp',
  'Automasi Line Produksi.png': 'Automasi Line Produksi.webp'
};

let htmlContent = fs.readFileSync('public/index.html', 'utf8');

for (const [oldName, newName] of Object.entries(imageMappings)) {
  const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  htmlContent = htmlContent.replace(regex, newName);
  console.log(`Replaced: ${oldName} → ${newName}`);
}

fs.writeFileSync('public/index.html', htmlContent);
console.log('HTML file updated successfully!');