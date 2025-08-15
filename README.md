# Aplikasi Kalkulator Web

Kalkulator modern dan responsif yang dibuat dengan HTML, CSS, dan JavaScript dengan tema gelap yang elegan dan antarmuka pengguna yang intuitif.

## Fitur

- **Operasi Aritmatika Dasar**: Penjumlahan, pengurangan, perkalian, dan pembagian
- **Fungsi Lanjutan**: 
  - Clear (AC) - Reset kalkulator
  - Delete (DEL) - Hapus karakter terakhir yang dimasukkan
  - Persen (%) - Hitung persentase
  - Dukungan desimal dengan tombol titik (.)
- **Desain Responsif**: Bekerja dengan sempurna di desktop dan perangkat mobile
- **UI Modern**: Tema gelap dengan latar belakang gradien dan interaksi yang halus
- **Penanganan Error**: Menampilkan pesan kesalahan yang sesuai untuk perhitungan yang tidak valid

## Desain

- **Skema Warna**: Tema gelap dengan tombol aksen oranye
- **Tata Letak**: Tata letak tombol berbasis grid untuk jarak yang optimal
- **Tipografi**: Font Helvetica Neue yang bersih untuk keterbacaan yang sangat baik
- **Elemen Interaktif**: Tombol menjadi lebih terang saat diklik/fokus untuk umpan balik visual

## Struktur File

```
calculator/
├── index.html          # Struktur HTML utama
├── style.css           # Styling dan desain responsif
├── script.js           # Fungsionalitas dan logika kalkulator
└── README.md           # Dokumentasi proyek
```

## Teknologi yang Digunakan

- **HTML5**: Struktur semantik dan aksesibilitas
- **CSS3**: Styling modern dengan tata letak Grid dan properti kustom
- **Vanilla JavaScript**: Fungsionalitas interaktif tanpa ketergantungan eksternal

## Memulai

1. **Clone atau Unduh** file-file proyek
2. **Buka** `index.html` di browser web Anda
3. **Mulai menghitung** langsung - tidak perlu instalasi!

## Cara Penggunaan

### Operasi Dasar
- Klik tombol angka (0-9) untuk memasukkan angka
- Klik tombol operasi (+, -, *, /) untuk melakukan perhitungan
- Tekan = untuk mengeksekusi perhitungan
- Gunakan . untuk angka desimal

### Fungsi Khusus
- **AC**: Hapus semua input dan reset ke 0
- **DEL**: Hapus karakter terakhir yang dimasukkan
- **%**: Hitung nilai persentase

### Contoh Penggunaan
```
Penjumlahan Dasar: 5 + 3 = 8
Perhitungan Desimal: 12.5 * 2 = 25
Persentase: 50 % = 0.5
```

## Kompatibilitas Browser

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Kustomisasi

### Mengubah Warna
Edit properti kustom CSS di `style.css`:
```css
:root {
  --primary-bg: #000000;      /* Latar belakang kalkulator */
  --accent-color: #ff9501;    /* Tombol operasi oranye */
  --secondary-color: #a6a6a6; /* Tombol utilitas abu-abu */
}
```

### Menambahkan Fungsi Baru
1. Tambahkan tombol di `index.html`
2. Beri style di `style.css`
3. Implementasikan logika di `script.js`

## Masalah yang Diketahui

- Angka yang sangat panjang mungkin meluap area tampilan
- Ekspresi matematika kompleks tidak didukung (gunakan tanda kurung dengan hati-hati)

## Pengembangan Masa Depan

- [ ] Fungsi kalkulator saintifik
- [ ] Riwayat perhitungan
- [ ] Dukungan input keyboard
- [ ] Opsi kustomisasi tema
- [ ] Fungsi memori (M+, M-, MR, MC)

## Kontribusi

Jangan ragu untuk mengirimkan masalah dan permintaan peningkatan! Kontribusi sangat diterima.

## Lisensi

Proyek ini adalah open source dan tersedia di bawah [Lisensi MIT](LICENSE).

## Kredit

Dibuat dengan teknologi web modern dan terinspirasi oleh desain kalkulator iOS.

---

**Selamat menghitung!** 🧮
