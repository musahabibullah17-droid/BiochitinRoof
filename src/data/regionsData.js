// Data Eksak Sesuai Gambar Referensi Endosync-GPS
// Wilayah: Jember, Kerinci, Lamongan
import jemberImg from '../assets/jember.jpeg';
import kerinciImg from '../assets/kerinci.jpeg';
import lamonganImg from '../assets/lamongan.jpeg';

export { jemberImg, kerinciImg, lamonganImg };

export const REGIONS_DATA = {
  jember: {
    id: 'jember',
    name: 'JEMBER',
    subHeader: 'Lahan Sawah Tadah Hujan – Kering Musiman',
    headerIcon: 'leaf',
    themeBg: '#dcfce7',
    headerPinColor: '#166534',
    headerTextColor: '#14532d',
    statusColor: '#d97706', // Orange / Amber
    
    // 1. Analisis Lahan
    form: {
      locationText: 'Desa Sumberanyar,\nKec. Banjarsari, Kab. Jember',
      paddyVariety: 'Inpago 13 Fortiz',
      landType: 'Lahan Kering (Tadah Hujan)',
      plantAge: 'Vegetatif (20-40 MST)',
    },

    // 2. Foto Kondisi Lahan
    photo: {
      url: jemberImg,
      caption: 'Tanah kering dengan retakan, warna coklat keabu-abuan',
      photoQuality: 'Baik',
      confidenceModel: '87%',
      note: 'Foto digunakan sebagai indikator pendukung, bukan pengukuran langsung kadar air tanah.'
    },

    // 3. Hasil Analisis
    analysis: {
      statusText: 'KEKERINGAN RINGAN',
      statusColor: '#d97706',
      confidence: '89%',
      confidenceValue: 89,
      sources: [
        { name: 'Analisis Citra Lahan', value: '86%' },
        { name: 'Riwayat Curah Hujan (30 hari)', value: '82%' },
        { name: 'Indeks Kesesuaian Lahan (IKL)', value: '79%' }
      ],
      summary: 'Lahan terindikasi mengalami kekeringan ringan. Kelembapan tanah menurun, namun masih dalam batas toleransi untuk pertumbuhan vegetatif.'
    },

    // 4. Rekomendasi Terbaik
    recommendation: {
      groupLabel: 'XEROFIT',
      iconType: 'cactus',
      suitabilityScore: '0,82',
      suitabilityStatus: '(Sangat Sesuai)',
      strainCode: 'P1',
      strainName: '(Bacillus sp. JMB-01)',
      stars: 5,
      productDetails: [
        { label: 'Nama Produk', value: 'ENDOSYNC-JM' },
        { label: 'Bentuk', value: 'Cairan' },
        { label: 'Cara Aplikasi', value: 'Biopriming Benih' },
        { label: 'Konsentrasi', value: '12 mL/L' },
        { label: 'Waktu Perendaman', value: '6-12 jam' },
        { label: 'Masa Penggunaan', value: '3-4 minggu\n(sebelum tanam)' }
      ]
    },

    // 5. Panduan Biopriming
    guide: {
      productName: 'ENDOSYNC-JM',
      soakingTime: '6-12 jam',
      steps: [
        {
          num: '01',
          title: 'Persiapan Benih',
          desc: 'Pilih benih sehat dan berkualitas baik.'
        },
        {
          num: '02',
          title: 'Perendaman',
          desc: 'Rendam benih dalam larutan ENDOSYNC-JM selama 6-12 jam.'
        },
        {
          num: '03',
          title: 'Pencucian',
          desc: 'Tiriskan benih hingga tidak menetes.'
        },
        {
          num: '04',
          title: 'Pengeringan',
          desc: 'Kering anginkan benih selama 1-2 jam di tempat teduh.'
        },
        {
          num: '05',
          title: 'Benih Siap Tanam',
          desc: 'Benih siap ditanam pada lahan yang telah disiapkan.'
        }
      ],
      note: 'Catatan: Gunakan larutan sesuai dosis dan jangan terpapar sinar matahari langsung.'
    }
  },

  kerinci: {
    id: 'kerinci',
    name: 'KERINCI',
    subHeader: 'Lahan Lereng – Beriklim Sejuk',
    headerIcon: 'mountain',
    themeBg: '#ccfbf1',
    headerPinColor: '#0f766e',
    headerTextColor: '#115e59',
    statusColor: '#ea580c', // Orange

    // 1. Analisis Lahan
    form: {
      locationText: 'Desa Sungai Penuh,\nKec. Sungai Penuh, Kab. Kerinci',
      paddyVariety: 'Inpago 13 Fortiz',
      landType: 'Lahan Lereng (Terasering)',
      plantAge: 'Generatif (50-70 MST)',
    },

    // 2. Foto Kondisi Lahan
    photo: {
      url: kerinciImg,
      caption: 'Tanah lempung berpasir, dengan vegetasi sekitar yang hijau.',
      photoQuality: 'Baik',
      confidenceModel: '90%',
      note: 'Foto digunakan sebagai indikator pendukung, bukan pengukuran langsung kadar air tanah.'
    },

    // 3. Hasil Analisis
    analysis: {
      statusText: 'KEKERINGAN MODERAT',
      statusColor: '#ea580c',
      confidence: '85%',
      confidenceValue: 85,
      sources: [
        { name: 'Analisis Citra Lahan', value: '83%' },
        { name: 'Riwayat Curah Hujan (30 hari)', value: '78%' },
        { name: 'Indeks Kesesuaian Lahan (IKL)', value: '72%' }
      ],
      summary: 'Lahan terindikasi mengalami kekeringan moderat. Kelembapan tanah mulai menurun, terutama pada area lereng yang terbuka.'
    },

    // 4. Rekomendasi Terbaik
    recommendation: {
      groupLabel: 'HALOFIT',
      iconType: 'leaf',
      suitabilityScore: '0,76',
      suitabilityStatus: '(Sesuai)',
      strainCode: 'P2',
      strainName: '(Pseudomonas fluorescens)',
      stars: 5,
      productDetails: [
        { label: 'Nama Produk', value: 'ENDOSYNC-KR' },
        { label: 'Bentuk', value: 'Cairan' },
        { label: 'Cara Aplikasi', value: 'Biopriming Benih' },
        { label: 'Konsentrasi', value: '10 mL/L' },
        { label: 'Waktu Perendaman', value: '8-12 jam' },
        { label: 'Masa Penggunaan', value: '3 minggu\n(sebelum tanam)' }
      ]
    },

    // 5. Panduan Biopriming
    guide: {
      productName: 'ENDOSYNC-KR',
      soakingTime: '8-12 jam',
      steps: [
        {
          num: '01',
          title: 'Persiapan Benih',
          desc: 'Pilih benih sehat dan berkualitas baik.'
        },
        {
          num: '02',
          title: 'Perendaman',
          desc: 'Rendam benih dalam larutan ENDOSYNC-KR selama 8-12 jam.'
        },
        {
          num: '03',
          title: 'Pencucian',
          desc: 'Tiriskan benih hingga tidak menetes.'
        },
        {
          num: '04',
          title: 'Pengeringan',
          desc: 'Kering anginkan benih selama 1-2 jam di tempat teduh.'
        },
        {
          num: '05',
          title: 'Benih Siap Tanam',
          desc: 'Benih siap ditanam pada lahan yang telah disiapkan.'
        }
      ],
      note: 'Catatan: Gunakan larutan sesuai dosis dan jangan terpapar sinar matahari langsung.'
    }
  },

  lamongan: {
    id: 'lamongan',
    name: 'LAMONGAN',
    subHeader: 'Lahan Datar – Salinitas Rendah',
    headerIcon: 'waves',
    themeBg: '#fef3c7',
    headerPinColor: '#78350f',
    headerTextColor: '#713f12',
    statusColor: '#166534', // Green

    // 1. Analisis Lahan
    form: {
      locationText: 'Desa Sukodadi,\nKec. Sukodadi, Kab. Lamongan',
      paddyVariety: 'Inpago 13 Fortiz',
      landType: 'Lahan Datar (Irigasi)',
      plantAge: 'Generatif (50-70 MST)',
    },

    // 2. Foto Kondisi Lahan
    photo: {
      url: lamonganImg,
      caption: 'Tanah berlumpur, cukup lembap dengan genangan air.',
      photoQuality: 'Baik',
      confidenceModel: '92%',
      note: 'Foto digunakan sebagai indikator pendukung, bukan pengukuran langsung kadar air tanah.'
    },

    // 3. Hasil Analisis
    analysis: {
      statusText: 'TIDAK ADA KEKERINGAN',
      statusColor: '#166534',
      confidence: '96%',
      confidenceValue: 96,
      sources: [
        { name: 'Analisis Citra Lahan', value: '94%' },
        { name: 'Riwayat Curah Hujan (30 hari)', value: '90%' },
        { name: 'Indeks Kesesuaian Lahan (IKL)', value: '88%' }
      ],
      summary: 'Kondisi lahan dalam keadaan baik, dengan kelembapan tanah optimal untuk pertumbuhan tanaman.'
    },

    // 4. Rekomendasi Terbaik
    recommendation: {
      groupLabel: 'MESOFIT',
      iconType: 'grain',
      suitabilityScore: '0,88',
      suitabilityStatus: '(Sangat Sesuai)',
      strainCode: 'K-1',
      strainName: '(Bacillus amyloliquefaciens)',
      stars: 5,
      productDetails: [
        { label: 'Nama Produk', value: 'ENDOSYNC-LM' },
        { label: 'Bentuk', value: 'Cairan' },
        { label: 'Cara Aplikasi', value: 'Biopriming Benih' },
        { label: 'Konsentrasi', value: '15 mL/L' },
        { label: 'Waktu Perendaman', value: '8-12 jam' },
        { label: 'Masa Penggunaan', value: '3 minggu\n(sebelum tanam)' }
      ]
    },

    // 5. Panduan Biopriming
    guide: {
      productName: 'ENDOSYNC-LM',
      soakingTime: '8-12 jam',
      steps: [
        {
          num: '01',
          title: 'Persiapan Benih',
          desc: 'Pilih benih sehat dan berkualitas baik.'
        },
        {
          num: '02',
          title: 'Perendaman',
          desc: 'Rendam benih dalam larutan ENDOSYNC-LM selama 8-12 jam.'
        },
        {
          num: '03',
          title: 'Pencucian',
          desc: 'Tiriskan benih hingga tidak menetes.'
        },
        {
          num: '04',
          title: 'Pengeringan',
          desc: 'Kering anginkan benih selama 1-2 jam di tempat teduh.'
        },
        {
          num: '05',
          title: 'Benih Siap Tanam',
          desc: 'Benih siap ditanam pada lahan yang telah disiapkan.'
        }
      ],
      note: 'Catatan: Gunakan larutan sesuai dosis dan jangan terpapar sinar matahari langsung.'
    }
  }
};
