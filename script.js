// Image Slider
const sliderImages = [
    'slider1.jpg',
    'slider2.jpg',
    'slider3.jpg'
];

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function initializeSlider() {
    const sliderElement = document.getElementById('slider');
    
    // Create slides
    sliderImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="images/${image}" alt="Slide ${index + 1}">`;
        sliderElement.appendChild(slide);
    });
}

// Initialize main slider
initializeSlider();
setInterval(nextSlide, 5000);

// Keunggulan Slider
const keunggulanItems = [
    {
        title: 'Mengapresiasi Capaian Luar Biasa Siswa',
        image: 'keunggulan1.jpg',
        description: 'Di sekolah kami, komitmen terhadap keunggulan tidak terbatas pada raihan akademis semata, melainkan mencakup juga partisipasi-partisipasi signifikan siswa dalam kompetisi regional dan nasional. Para siswa tidak hanya didorong untuk secara aktif terlibat dalam berbagai kontes dan olimpiade, tetapi juga kami berikan platform untuk terus mengembangkan ketrampilan.'
    },
    {
        title: 'Menemukan Passion dan Potensi Lebih dalam Ekstrakurikuler Sekolah',
        image: 'keunggulan2.jpg',
        description: 'Di sekolah kami, kami percaya bahwa esensi pendidikan melampaui sekedar akademis pengetahuan dan eksamina semata. Pendidikan sejati mencakup proses penemuan diri dan pengembangan bakat-bakat yang tidak selalu dapat diluar di luar lingkungan kelas formal.'
    },
    {
        title: 'Fasilitas Pendidikan Modern',
        image: 'keunggulan3.jpg',
        description: 'SMA NEGERI 1 KARAWANG dilengkapi dengan fasilitas pendidikan modern seperti laboratorium sains lengkap, perpustakaan, laboratorium komputer, dan fasilitas olahraga yang mendukung perkembangan siswa secara holistik.'
    }
];

// Remove or comment out these lines:
// function initializeKeunggulanSlider() { ... }
// initializeKeunggulanSlider();

// Keep only the navigation logic:
const keunggulanContainer = document.querySelector('.keunggulan-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentPosition = 0;

function updateKeunggulanSlider(direction) {
    const items = document.querySelectorAll('.keunggulan-item');
    const containerWidth = keunggulanContainer.offsetWidth;
    const itemWidth = containerWidth < 768 ? containerWidth : containerWidth / 3;
    const maxScroll = -(items.length - (containerWidth < 768 ? 1 : 3)) * itemWidth;
    
    if (direction === 'next' && currentPosition > maxScroll) {
        currentPosition -= itemWidth;
    } else if (direction === 'prev' && currentPosition < 0) {
        currentPosition += itemWidth;
    }
    
    keunggulanContainer.style.transform = `translateX(${currentPosition}px)`;
}

// Add window resize handler
window.addEventListener('resize', () => {
    currentPosition = 0;
    keunggulanContainer.style.transform = `translateX(0)`;
});

// Event Listeners
prevBtn.addEventListener('click', () => updateKeunggulanSlider('prev'));
nextBtn.addEventListener('click', () => updateKeunggulanSlider('next'));

// Touch Support
let touchStartX = 0;
let touchEndX = 0;

keunggulanContainer.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
});

keunggulanContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        updateKeunggulanSlider('next');
    } else if (touchEndX - touchStartX > 50) {
        updateKeunggulanSlider('prev');
    }
});

// Gallery overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = document.getElementById('overlayImage');
    const overlayCaption = document.querySelector('.overlay-caption');
    const closeBtn = document.querySelector('.close-overlay');

    // Open overlay
    document.querySelectorAll('.zoom-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const galleryItem = this.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            const caption = galleryItem.querySelector('.gallery-caption').innerHTML;

            overlayImg.src = img.src;
            overlayImg.alt = img.alt;
            overlayCaption.innerHTML = caption;
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close overlay
    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close overlay when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Fungsi untuk mengecek status PPDB
function checkPPDBStatus() {
    // Ganti true/false sesuai status PPDB
    const isPPDBOpen = false; // Ubah menjadi true jika PPDB sudah dibuka
    
    const statusImage = document.getElementById('ppdb-status-image');
    const content = document.getElementById('ppdb-content');
    
    if (isPPDBOpen) {
        statusImage.src = 'images/ppdb-open.jpg';
        content.style.display = 'block';
    } else {
        statusImage.src = 'images/ppdb-closed.jpg';
        content.style.display = 'none';
    }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', checkPPDBStatus);

// Tambahkan kode ini di script.js
window.addEventListener('scroll', function() {
    const banner = document.querySelector('.akademik-banner');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) { // Mulai blur setelah scroll 50px
        banner.classList.add('blur-on-scroll');
    } else {
        banner.classList.remove('blur-on-scroll');
    }
});

// Fungsi untuk toggle konten prestasi
document.querySelector('.read-more').addEventListener('click', function(e) {
    e.preventDefault();
    const prestasiContent = document.querySelector('.prestasi-content');
    prestasiContent.classList.toggle('active');
    
    // Mengubah teks tombol
    if(this.textContent === 'Selengkapnya') {
        this.textContent = 'Tutup';
    } else {
        this.textContent = 'Selengkapnya';
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});