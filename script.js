// Fungsi untuk menampilkan keranjang
function tampilkanKeranjang() {
    const daftarKeranjang = document.getElementById('daftar-keranjang');
    const totalHargaElement = document.getElementById('total-harga');
    daftarKeranjang.innerHTML = '';
    let totalHarga = 0;

    // Ambil data dari localStorage
    const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

    keranjang.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - Rp ${item.harga}`;
        daftarKeranjang.appendChild(li);
        totalHarga += item.harga;
    });

    totalHargaElement.textContent = `Total: Rp ${totalHarga}`;
}

// Menambahkan event listener untuk tombol tambah
document.querySelectorAll('.tambah').forEach(button => {
    button.addEventListener('click', function() {
        const produk = this.parentElement;
        const nama = produk.getAttribute('data-nama');
        const harga = parseInt(produk.getAttribute('data-harga'));

        // Tambahkan produk ke keranjang
        const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
        keranjang.push({ nama, harga });
        localStorage.setItem('keranjang', JSON.stringify(keranjang));

        alert(`${nama} telah ditambahkan ke keranjang!`);
        tampilkanKeranjang(); // Tampilkan keranjang setelah menambah produk
    });
});

document.getElementById('hapus-keranjang').addEventListener('click', function() {
    // Menghapus data dari localStorage
    localStorage.removeItem('keranjang');

    // Mengosongkan daftar keranjang di UI
    document.getElementById('daftar-keranjang').innerHTML = '';
    document.getElementById('total-harga').innerText = 'Total: Rp 0';
});

// Menampilkan keranjang saat halaman dimuat
window.onload = tampilkanKeranjang;

// Tema Gelap
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});