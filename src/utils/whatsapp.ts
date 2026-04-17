import { Machine } from '@/data/machines';

// WhatsApp number rotation for load balancing
export const getWhatsAppNumber = (): string => {
  const numbers = ['628170968855', '6287888411183'];
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};

// Generate WhatsApp link with UTM tracking
export const generateWhatsAppLink = (message: string, source: string, specificNumber?: string): string => {
  const number = specificNumber || getWhatsAppNumber();
  return `https://wa.me/${number}?text=${message}&utm_source=website&utm_medium=${source}&utm_campaign=lead_generation`;
};

// Generate professional WhatsApp messages for different contexts
export const generateWhatsAppMessage = (context: string, machine?: Machine): string => {
  let message = `Halo PT. Asai Metal,\n\n`;

  switch (context) {
    case 'hero_consultation':
      message += `Saya ingin konsultasi gratis untuk automasi pabrik saya.\n\n`;
      message += `Bisa bantu jelaskan solusi otomasi yang sesuai dengan kebutuhan pabrik saya?\n\n`;
      message += `Terima kasih`;
      break;

    case 'benefits_efficiency':
      message += `Saya ingin tingkatkan efisiensi produksi pabrik saya.\n\n`;
      message += `Bisa konsultasi mengenai solusi otomasi yang bisa membantu?\n\n`;
      message += `Terima kasih`;
      break;

    case 'catalog_robot_integration':
      message += `Saya tertarik dengan integrasi mesin & robot.\n\n`;
      message += `Bisa jelaskan lebih detail tentang pengalaman Anda dengan Chemco?\n\n`;
      message += `Terima kasih`;
      break;

    case 'catalog_production_automation':
      message += `Saya tertarik dengan otomasi line produksi.\n\n`;
      message += `Bisa konsultasi tentang implementasi full otomatis dari input hingga packaging?\n\n`;
      message += `Terima kasih`;
      break;

    case 'catalog_manual_conversion':
      message += `Saya tertarik dengan konversi mesin manual ke otomatis.\n\n`;
      message += `Berapa lama waktu implementasi dan berapa biaya nya?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_fukui_tandem':
      message += `Saya lihat proyek FUKUI TANDEM LINE Anda.\n\n`;
      message += `Apakah solusi tandem line press otomatis cocok untuk lini produksi saya?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_robot_arm':
      message += `Saya lihat proyek ROBOT ARM TRANSFER Anda.\n\n`;
      message += `Bisa konsultasi tentang implementasi robot arm untuk transfer material?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_die_casting':
      message += `Saya lihat proyek ROBOT HANDLING FOR DIE CASTING Anda.\n\n`;
      message += `Apakah solusi ini cocok untuk mesin die casting saya?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_komatsu_yaskawa':
      message += `Saya lihat proyek KOMATSU TANDEM + YASKAWA ROBOT HANDLING Anda.\n\n`;
      message += `Bisa jelaskan lebih detail tentang efisiensi 40% yang dicapai?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_press_line':
      message += `Saya lihat proyek ROBOT INTEGRASI PRESS LINE Anda.\n\n`;
      message += `Apakah solusi fully automated pick & place cocok untuk pabrik saya?\n\n`;
      message += `Terima kasih`;
      break;

    case 'video_injection_ube':
      message += `Saya lihat proyek MESIN INJECTION PLASTIC UBE 2500T Anda.\n\n`;
      message += `Bisa konsultasi tentang implementasi mesin injection molding?\n\n`;
      message += `Terima kasih`;
      break;

    case 'stock_general':
      message += `Saya ingin tahu lebih lanjut tentang stok mesin dan layanan automasi Anda.\n\n`;
      message += `Bisa kirim informasi produk terbaru?\n\n`;
      message += `Terima kasih`;
      break;

    case 'stock_machine':
      if (machine) {
        message += `Saya tertarik dengan mesin berikut:\n`;
        if (machine.brand) message += `• Brand: ${machine.brand}\n`;
        if (machine.type) message += `• Type: ${machine.type}\n`;
        if (machine.capacity) message += `• Kapasitas: ${machine.capacity}\n`;
        if (machine.year) message += `• Tahun: ${machine.year}\n`;
        if (machine.country) message += `• Made in: ${machine.country}\n`;
        if (machine.tableSize) message += `• Ukuran Meja: ${machine.tableSize}\n`;
        if (machine.qty && machine.unit) message += `• Quantity: ${machine.qty} ${machine.unit}\n`;

        const specsEntries = Object.entries(machine.specs).filter(([_, value]) => value);
        if (specsEntries.length > 0) {
          message += `\n• Spesifikasi:\n`;
          specsEntries.forEach(([key, value]) => {
            message += `  - ${key}: ${value}\n`;
          });
        }

        message += `\nTolong kirimkan penawaran harga & detail ketersediaan.\nTerima kasih`;
      }
      break;

    case 'footer_contact':
      message += `Saya ingin tahu lebih lanjut tentang produk dan layanan Anda.\n\n`;
      message += `Bisa kirim informasi terbaru?\n\n`;
      message += `Terima kasih`;
      break;

    case 'cta_final':
      message += `Saya siap mulai automasi pabrik saya.\n\n`;
      message += `Bisa jadwalkan konsultasi gratis untuk diskusi solusi?\n\n`;
      message += `Terima kasih`;
      break;
    
    case 'stock_custom_request':
      message += `Saya ingin mencari/request mesin, robot, atau spare part tertentu.\n\n`;
      message += `Apakah PT. Asai Metal bisa bantu mencarikan barang berikut?\n`;
      message += `[Sebutkan detail barang yang dicari di sini]\n\n`;
      message += `Terima kasih`;
      break;

    default:
      message += `Saya tertarik dengan layanan PT. Asai Metal.\n\n`;
      message += `Bisa bantu informasi lebih lanjut?\n\n`;
      message += `Terima kasih`;
  }

  return encodeURIComponent(message);
};