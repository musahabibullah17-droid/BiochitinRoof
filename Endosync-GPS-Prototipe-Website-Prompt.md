# Prompt Agent AI --- Prototipe Website Endosync-GPS

## Peran dan tujuan

Bertindaklah sebagai **senior UI/UX designer dan frontend developer**.
Buat sebuah **prototipe website yang menampilkan pengalaman aplikasi
mobile bernama Endosync-GPS**.

Website ini adalah prototipe antarmuka untuk mendemonstrasikan alur
aplikasi mobile pertanian. Hasil akhirnya harus terlihat seperti
aplikasi smartphone yang ditampilkan dan dapat dicoba melalui browser
desktop maupun mobile.

**Fokus tugas hanya membuat prototipe frontend.** Jangan membangun
backend, database, autentikasi sungguhan, integrasi IoT, integrasi AI
sungguhan, pembayaran, atau layanan eksternal. Gunakan data dummy yang
realistis untuk mendemonstrasikan interaksi.

## Referensi desain

Gunakan gambar referensi yang diberikan bersama prompt ini sebagai acuan
visual dan alur halaman. Jangan menyalin teks yang tidak terbaca secara
membabi buta; rapikan copywriting agar mudah dibaca dan konsisten.

Referensi menampilkan tiga skenario wilayah: - **Jember** --- lahan
sawah tadah hujan, kondisi contoh kekeringan ringan. - **Kerinci** ---
lahan lereng/terasering, kondisi contoh kekeringan moderat. -
**Lamongan** --- lahan datar/irigasi, kondisi contoh tidak terdeteksi
kekeringan.

Setiap skenario mengikuti alur: **Analisis Lahan → Foto Kondisi Lahan →
Hasil Analisis → Rekomendasi Terbaik → Panduan Biopriming**.

## Arahan visual

Buat antarmuka yang terasa seperti aplikasi pertanian modern,
profesional, bersih, dan mudah digunakan.

-   Nama aplikasi: **Endosync-GPS**.
-   Gaya visual: mobile-first, modern, rapi, ilmiah, dan ramah pengguna.
-   Warna utama: hijau tua dan hijau pertanian; gunakan latar
    putih/off-white dengan aksen warna lembut.
-   Gunakan kartu dengan sudut membulat, bayangan tipis, ikon yang
    konsisten, indikator progres, dan tipografi yang jelas.
-   Buat header wilayah dengan ikon pin lokasi dan ilustrasi yang sesuai
    dengan karakteristik wilayah.
-   Gunakan gambar lahan pertanian yang relevan. Jika gambar eksternal
    tidak tersedia, sediakan placeholder visual yang menarik dan tetap
    konsisten.
-   Pada layar desktop, tampilkan beberapa layar smartphone dalam layout
    showcase agar menyerupai lembar presentasi desain referensi. Pada
    layar kecil, ubah menjadi satu layar/halaman aplikasi yang
    responsif.
-   Jangan membuat tampilan desktop biasa yang hanya berisi tabel. Hasil
    harus jelas terasa seperti **prototipe aplikasi mobile**.
-   Pastikan seluruh teks penting terbaca; hindari teks mini yang
    terlalu padat seperti pada mockup generatif.

## Struktur halaman dan fitur prototipe

### 1. Beranda / pilih wilayah

Buat halaman awal dengan: - Logo atau wordmark **Endosync-GPS**. -
Tagline singkat, misalnya: "Analisis lahan dan rekomendasi biopriming
berbasis lokasi". - Ringkasan fungsi aplikasi. - Kartu pilihan lokasi:
Jember, Kerinci, dan Lamongan. - Informasi ringkas karakteristik lahan
pada setiap kartu. - Tombol untuk memulai analisis pada tiap wilayah.

Ketika pengguna memilih wilayah, tampilkan alur analisis untuk wilayah
tersebut. Pengguna juga harus bisa berpindah wilayah dengan mudah.

### 2. Formulir Analisis Lahan

Buat form interaktif dengan field: - Lokasi/nama desa. -
Kabupaten/wilayah. - Varietas padi. - Tipe lahan: sawah tadah hujan,
lahan lereng/terasering, atau lahan datar/irigasi. - Umur tanaman atau
fase pertumbuhan (dalam MST). - Tombol **Ambil Foto** dan **Pilih dari
Galeri**.

Gunakan nilai awal dummy yang sesuai dengan wilayah terpilih. Karena ini
prototipe, tombol kamera dan galeri boleh membuka pemilih file browser
atau menampilkan simulasi yang jelas. Tampilkan pratinjau gambar setelah
pengguna memilih file jika implementasi memungkinkan.

Validasi input dasar di sisi frontend. Tombol **Lanjutkan** harus
berpindah ke layar foto/analisis berikutnya, bukan menjadi tombol
dekoratif.

### 3. Foto Kondisi Lahan

-   Tampilkan foto lahan terpilih atau gambar contoh sesuai wilayah.
-   Berikan keterangan singkat kondisi visual lahan.
-   Tampilkan indikator kualitas foto dan confidence model sebagai
    **data simulasi**.
-   Sediakan aksi untuk mengganti foto dan melanjutkan analisis.

### 4. Hasil Analisis

Tampilkan hasil contoh yang berubah sesuai wilayah:

**Jember** - Status: Kekeringan ringan. - Confidence contoh: 89%.

**Kerinci** - Status: Kekeringan moderat. - Confidence contoh: 85%.

**Lamongan** - Status: Tidak ada kekeringan terdeteksi. - Confidence
contoh: 96%.

Setiap hasil perlu memuat: - Status kondisi lahan dengan warna indikator
yang sesuai. - Persentase confidence dan progress bar. - Ringkasan
kondisi lahan. - Daftar sumber/indikator analisis sebagai data dummy,
misalnya analisis citra lahan, riwayat curah hujan, dan indeks
kelembapan. - Tombol **Lihat Rekomendasi**.

Beri penanda yang jelas bahwa hasil AI, confidence, serta indikator di
dalam prototipe adalah data simulasi dan bukan hasil pengukuran lapangan
sungguhan.

### 5. Rekomendasi Terbaik

Tampilkan kartu rekomendasi yang memuat: - Kelompok biologi atau
kelompok mikroorganisme yang direkomendasikan. - Skor kesesuaian. - Kode
formulasi contoh. - Rating visual sebagai elemen mockup jika
diperlukan. - Informasi larutan: nama produk/formulasi, bentuk, cara
aplikasi, konsentrasi, waktu perendaman, dan masa penggunaan. - Tombol
**Lihat Panduan Biopriming**.

Gunakan data contoh berikut hanya untuk kebutuhan visual prototipe: -
Jember: kelompok **XEROFIT**, skor **0,82**, formulasi **P1**. -
Kerinci: kelompok **HALOFIT**, skor **0,76**, formulasi **P2**. -
Lamongan: kelompok **MESOFIT**, skor **0,88**, formulasi **K-1**.

Detail teknis formulasi harus diberi label sebagai **data dummy/contoh
prototipe**. Jangan menyajikannya sebagai anjuran agronomis yang telah
terbukti atau langsung siap diterapkan di lapangan.

### 6. Panduan Biopriming

Buat tampilan panduan berbentuk timeline vertikal dengan lima
langkah: 1. **Persiapan Benih** --- pilih benih sehat dan berkualitas.
2. **Perendaman** --- tampilkan durasi contoh sebagai data dummy. 3.
**Pencucian** --- tampilkan petunjuk ringkas. 4. **Pengeringan** ---
tampilkan petunjuk ringkas. 5. **Benih Siap Tanam** --- tampilkan
ilustrasi dan ringkasan akhir.

Gunakan ikon/ilustrasi yang konsisten untuk setiap langkah. Sertakan
catatan bahwa durasi, konsentrasi, dan tata cara pada prototipe hanyalah
contoh UI dan harus diverifikasi oleh ahli sebelum digunakan secara
nyata.

## Interaksi yang wajib berfungsi

Buat navigasi prototipe yang bisa dicoba dari awal hingga akhir: - Pilih
wilayah. - Isi atau ubah data lahan. - Pilih atau ganti foto. -
Lanjutkan dari analisis ke hasil. - Lihat hasil analisis berdasarkan
wilayah yang aktif. - Buka rekomendasi. - Buka panduan biopriming. -
Kembali ke halaman sebelumnya. - Ganti wilayah tanpa memuat ulang
seluruh aplikasi jika memungkinkan.

Gunakan state frontend untuk menyimpan wilayah aktif, input form, foto
pratinjau, dan halaman yang sedang dibuka. Semua tombol utama harus
mempunyai aksi yang jelas. Tidak boleh ada tombol penting yang hanya
menjadi dekorasi.

## Implementasi teknis

-   Ikuti stack dan struktur project yang sudah tersedia jika agent
    bekerja di dalam repository.
-   Jika belum ada project, gunakan stack frontend modern yang sesuai
    dengan lingkungan yang tersedia.
-   Buat komponen reusable untuk header, kartu wilayah, input, indikator
    confidence, kartu rekomendasi, dan timeline panduan.
-   Pisahkan data dummy per wilayah dari komponen UI agar mudah diedit.
-   Buat layout responsif untuk desktop, tablet, dan smartphone.
-   Hindari backend dan integrasi eksternal; seluruh alur harus berjalan
    menggunakan data lokal/dummy.
-   Jangan merombak bagian project yang tidak relevan dengan prototipe.
-   Jangan hanya memberikan rencana atau potongan kode.
    **Implementasikan prototipe langsung di project**, jalankan
    pemeriksaan yang tersedia, dan perbaiki error yang muncul.

## Kriteria hasil akhir

Prototipe dianggap selesai apabila: 1. Identitas **Endosync-GPS**
terlihat jelas. 2. Tiga skenario wilayah tersedia dan memiliki data
hasil/rekomendasi berbeda. 3. Pengguna bisa mencoba seluruh alur dari
pemilihan wilayah sampai panduan biopriming. 4. Tampilan menyerupai
aplikasi mobile pada referensi dan tetap responsif. 5. Foto dan tombol
navigasi utama dapat digunakan atau disimulasikan secara masuk akal. 6.
Data simulasi dan catatan validasi ilmiah ditandai dengan jelas. 7.
Tidak ada halaman kosong, tombol utama tanpa aksi, atau error frontend
yang diketahui.

**Prioritas utama: kualitas UI/UX dan prototipe frontend yang
interaktif. Jangan memperluas ruang lingkup menjadi pembangunan sistem
produksi.**
