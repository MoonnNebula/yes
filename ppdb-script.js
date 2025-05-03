document.addEventListener('DOMContentLoaded', function() {
    // Status PPDB: 
    // 0 = belum dibuka
    // 1 = sudah dibuka
    // 2 = sudah ditutup
    const ppdbStatus = 2; // Ubah angka sesuai status yang diinginkan
    
    const statusImage = document.getElementById('ppdb-status-image');
    const content = document.getElementById('ppdb-content');
    const tatacaraSection = document.querySelector('.tatacara-section');
    const kontakSection = document.querySelector('.kontak-section');
    const informasiPenting = document.querySelector('.informasi-penting');
    const daftarButton = document.querySelector('.daftar-button');
    const daftarContainer = document.querySelector('.daftar-button-container');
    
    const ppdbLink = 'https://karawang.demo.siap-ppdb.com/#/';
    const hasilLink = 'https://karawang.demo.siap-ppdb.com/#/'; // Ganti URL ini nanti dengan link hasil
    
    switch(ppdbStatus) {
        case 0: // Belum dibuka
            statusImage.src = 'images/ppdb-closed.jpg';
            content.style.display = 'none';
            tatacaraSection.style.display = 'none';
            kontakSection.style.display = 'none';
            informasiPenting.style.display = 'none';
            daftarContainer.style.display = 'none';
            break;
            
        case 1: // Sudah dibuka
            statusImage.src = 'images/ppdb-open.jpg';
            content.style.display = 'block';
            tatacaraSection.style.display = 'block';
            kontakSection.style.display = 'block';
            informasiPenting.style.display = 'block';
            daftarButton.textContent = 'Daftar Sekarang';
            daftarButton.href = ppdbLink;
            daftarButton.target = '_blank'; // Buka di tab baru
            daftarContainer.style.display = 'block';
            break;
            
        case 2: // Sudah ditutup
            statusImage.src = 'images/ppdb-ended.jpg';
            content.style.display = 'block';
            tatacaraSection.style.display = 'block';
            kontakSection.style.display = 'block';
            informasiPenting.style.display = 'block';
            daftarButton.textContent = 'Lihat Hasil';
            daftarButton.href = hasilLink; // Menggunakan link hasil yang berbeda
            daftarButton.target = '_blank';
            break;
    }
});