/**
 * PINTECHRA — Vanilla JavaScript Interactions
 * Handles:
 * - Sticky Navbar Shadow
 * - Mobile Menu Drawer
 * - Interactive Casing Selector (Aluminium, Filamen 3D, Kayu Natural)
 * - Interactive Gallery Viewer (Jam Masjid vs Signage P10)
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-current-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // 1. Sticky Navbar on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 2. Mobile Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    const setMenuOpen = (isOpen) => {
      mobileDrawer.classList.toggle('is-open', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileDrawer.classList.contains('is-open');
      setMenuOpen(isOpen);

      if (isOpen) {
        mobileDrawer.querySelector('a')?.focus();
      }
    });

    // Close when clicking links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        setMenuOpen(false);
        mobileToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && mobileDrawer.classList.contains('is-open')) {
        setMenuOpen(false);
      }
    });
  }

  // 3. Interactive Casing Selector
  const casingData = {
    'aluminium': {
      name: 'Aluminium',
      material: 'Aluminium Alloy Anodized Frame',
      desc: 'Profil aluminium hitam anodized dengan konstruksi rigid. Menghadirkan ketahanan maksimal dan estetika industrial minimalis untuk instalasi komersial maupun kantor.',
      image: './assets/images/pintechra-running-text-p10-black.jpg',
      alt: 'PINTECHRA Jam Digital IoT Casing Aluminium',
      features: [
        'Finishing aluminium anodized warna hitam pekat',
        'Struktur sasis presisi dan kokoh',
        'Desain profil ramping untuk pemasangan rapi di dinding',
        'Tahan lama untuk pemakaian harian nonstop'
      ]
    },
    'filament-3d': {
      name: 'Filamen 3D',
      material: 'Custom 3D-Printed Chamfered Enclosure',
      desc: 'Enclosure cetak 3D bertoleransi ketat dengan sudut chamfer industrial dan bezel pelindung silau. Ringan, presisi, dan memiliki tekstur matte khas.',
      image: './assets/images/pintechra-smart-clock-3d-enclosure.png',
      alt: 'PINTECHRA Jam Digital IoT Casing Filamen 3D',
      features: [
        'Sudut chamfer fungsional pelindung panel LED',
        'Tekstur permukaan matte yang menyerap pantulan cahaya',
        'Ukiran relief monogram PINTECHRA',
        'Port modul internal yang terintegrasi presisi'
      ]
    },
    'natural-wood': {
      name: 'Kayu Natural',
      material: 'Solid Natural Hardwood Framing',
      desc: 'Bingkai kayu natural solid dengan serat kayu alami yang hangat dan elegan. Didesain secara khusus untuk interior berkarakter seperti mihrab masjid atau ruang eksekutif.',
      image: './assets/images/pintechra-custom-wood-casing.jpg',
      alt: 'PINTECHRA Jam Digital IoT Casing Kayu Natural',
      features: [
        'Kayu solid dengan guratan serat alami autentik',
        'Finishing pelindung doff tanpa kilau plastik berlebih',
        'Sambungan presisi menahan modul LED secara kokoh',
        'Perpaduan estetika alami dengan teknologi modern'
      ]
    }
  };

  const casingButtons = document.querySelectorAll('.casing-tab-btn');
  const casingImg = document.querySelector('.casing-active-img');
  const casingTitle = document.querySelector('.casing-detail-title');
  const casingSubtitle = document.querySelector('.casing-detail-subtitle');
  const casingDesc = document.querySelector('.casing-detail-desc');
  const casingList = document.querySelector('.casing-specs-list ul');
  const casingBtnAction = document.querySelector('.casing-cta-btn span');

  if (casingButtons.length > 0 && casingImg) {
    casingButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-casing');
        const data = casingData[id];
        if (!data) return;

        // Update active tab button
        casingButtons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        // Smooth image fade
        casingImg.style.opacity = '0.3';
        casingImg.style.transform = 'scale(0.99)';

        setTimeout(() => {
          casingImg.src = data.image;
          casingImg.alt = data.alt;
          casingTitle.textContent = data.name;
          casingSubtitle.textContent = data.material;
          casingDesc.textContent = data.desc;
          if (casingBtnAction) {
            casingBtnAction.textContent = `Konsultasi Casing ${data.name}`;
          }

          // Update bullet points
          casingList.replaceChildren(...data.features.map(feature => {
            const item = document.createElement('li');
            item.textContent = feature;
            return item;
          }));

          casingImg.style.opacity = '1';
          casingImg.style.transform = 'scale(1)';
        }, 150);
      });
    });
  }

  // 4. Interactive Gallery Viewer (Mode 01 vs Mode 02)
  const galleryData = {
    'jam-masjid': {
      title: 'Jam Digital & Jadwal Salat',
      desc: 'Konfigurasi waktu otomatis berbasis lokasi untuk 5 waktu salat, jeda iqamah, dan tampilan hadis secara periodik.',
      image: './assets/images/pintechra-smart-clock-3d-enclosure.png',
      features: [
        'Perhitungan waktu salat terintegrasi otomatis',
        'Sinkronisasi waktu via Wi-Fi (NTP)',
        'Waktu tetap aman saat listrik padam via modul RTC DS3231',
        'Siklus tampilan jam, tanggal, dan pengingat jeda salat'
      ]
    },
    'signage-p10': {
      title: 'Signage & Running Text P10',
      desc: 'Media informasi publik dan teks berjalan yang dapat diprogram secara nirkabel melalui antarmuka web dan MQTT.',
      image: './assets/images/pintechra-running-text-p10-black.jpg',
      features: [
        'Pesan berjalan dinamis dengan pengaturan kecepatan variabel',
        'Pengiriman pesan nirkabel via protokol MQTT & Wi-Fi',
        'Keterbacaan tajam di berbagai pencahayaan ruangan',
        'Pengaturan fleksibel langsung dari browser tanpa aplikasi tertutup'
      ]
    }
  };

  const modeButtons = document.querySelectorAll('.mode-btn');
  const galleryImg = document.querySelector('.gallery-image');
  const galleryTitle = document.querySelector('.gallery-title');
  const galleryDesc = document.querySelector('.gallery-description');
  const galleryList = document.querySelector('.gallery-features-list ul');

  if (modeButtons.length > 0 && galleryImg) {
    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-mode');
        const data = galleryData[id];
        if (!data) return;

        modeButtons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        galleryImg.style.opacity = '0.3';
        setTimeout(() => {
          galleryImg.src = data.image;
          galleryTitle.textContent = data.title;
          galleryDesc.textContent = data.desc;
          galleryList.replaceChildren(...data.features.map(feature => {
            const item = document.createElement('li');
            item.textContent = feature;
            return item;
          }));
          galleryImg.style.opacity = '1';
        }, 150);
      });
    });
  }
});
