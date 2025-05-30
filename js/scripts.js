//toggle class
const navbarNav = document.querySelector('.navbar-nav');
//ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar side bar umtuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

// Dapatkan elemen navbar
const navbar = document.querySelector('.navbar');

// Tambahkan event listener ke event scroll window
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
    navbar.classList.add('sticky');
} else {
    navbar.classList.remove('sticky');
}
});

// Dapatkan semua elemen img dengan kelas "item"
const gambar = document.querySelectorAll('.item img');

// Tambahkan event listener ke setiap gambar
gambar.forEach((gambar) => {
    gambar.addEventListener('klik', () => {
        // Arahkan ke URL Shopee (ganti dengan URL toko Anda yang sebenarnya)
        window.location.href = 'https://shopee.co.id/url-toko-anda';
    });
});