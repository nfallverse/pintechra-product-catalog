# PINTECHRA — Website

Website ini dibuat dengan **HTML, CSS, dan JavaScript biasa**. Tidak perlu React, Node.js, `npm install`, atau `npm run build`.

## Cara membuka website

### Dengan Laragon

1. Pastikan folder project berada di `C:\laragon\www\katalog web new`.
2. Buka Laragon, lalu klik **Start All**.
3. Buka browser dan kunjungi `http://localhost/katalog%20web%20new/`.

Kalau alamat itu tidak terbuka, buka folder project di File Explorer lalu klik dua kali `index.html`. Cara ini cukup untuk melihat dan mengedit halaman; koneksi internet hanya dibutuhkan untuk memuat font Google.

## Cara mengedit

Buka folder project di VS Code. File yang dipakai website:

| Yang ingin diubah | File |
| --- | --- |
| Teks beranda | `index.html` |
| Informasi produk dan spesifikasi | `product.html` |
| Cerita PINTECHRA | `about.html` |
| Nomor dan tautan kontak | `contact.html` |
| Warna, ukuran, dan tampilan | `assets/css/style.css` |
| Menu mobile dan pilihan casing/galeri | `assets/js/main.js` |
| Foto produk | `assets/images/` |

### Mengganti kontak

Nomor dan tautan kontak juga tampil di footer beberapa halaman. Di VS Code, tekan **Ctrl+Shift+F**, cari nomor, alamat email, atau nama akun yang lama, lalu ganti di semua hasil yang sesuai. Pastikan alamat pada tautan (`href`) dan teks yang terlihat sama-sama diperbarui.

Untuk WhatsApp, tautan memakai nomor format internasional tanpa tanda `+`, spasi, atau tanda hubung. Contoh: `https://wa.me/6281234567890`.

### Mengganti foto

Simpan foto baru ke `assets/images/`, lalu perbarui nama file pada `src` gambar yang ingin diganti. Jangan hapus foto lama sebelum semua halaman yang memakainya ikut diperbarui.

## Struktur folder yang aktif

```text
katalog web new/
├── index.html
├── product.html
├── about.html
├── contact.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
```

File HTML utama berada di folder yang sama agar tautan antarhalaman tetap bekerja. Kalau masih menemukan folder lama seperti `public/`, `dist/`, `src/`, atau `node_modules/`, folder itu bukan bagian dari website aktif—jangan diedit atau diunggah. Yang dipakai adalah empat file HTML di atas dan folder `assets/`.

Tahun hak cipta di footer diperbarui otomatis.

## Sebelum mengunggah ke hosting

1. Buka semua halaman dan coba tautan navigasi.
2. Coba menu dan tampilan di layar ponsel.
3. Pastikan nomor, media sosial, email, dan foto sudah benar.
4. Unggah file HTML bersama folder `assets/` ke folder utama website di hosting. Jangan hanya mengunggah file HTML.
