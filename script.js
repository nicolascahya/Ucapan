const menu = [
    { nama: "Nasi Goreng", harga: 12000 },
    { nama: "Mie Goreng", harga: 12000 },
    { nama: "Mie Kuah", harga: 12000 },
    { nama: "Kwetiau", harga: 12000 },
    { nama: "Nasi Goreng Gila", harga: 18000 },
    { nama: "CapCay", harga: 12000 },
    { nama: "Es Teh", harga: 3000 },
    { nama: "Es Jeruk", harga: 4000 },
    { nama: "Es Susu", harga: 4000 }
];

let pesanan = [];

function tampilkanMenu() {
    let menuList = document.getElementById("menu-list");
    menu.forEach((item, index) => {
        menuList.innerHTML += `<p>${index + 1}. ${item.nama} - Rp${item.harga}</p>`;
    });
}

function tambahPesanan() {
    let nomorMenu = document.getElementById("nomorMenu").value;
    let jumlah = document.getElementById("jumlahPesanan").value;

    if (nomorMenu < 1 || nomorMenu > menu.length || jumlah < 1) {
        alert("Nomor menu atau jumlah tidak valid!");
        return;
    }

    let item = menu[nomorMenu - 1];
    pesanan.push({ nama: item.nama, harga: item.harga, jumlah: parseInt(jumlah) });
    tampilkanStruk();
}

function tampilkanStruk() {
    let strukDiv = document.getElementById("struk");
    strukDiv.innerHTML = "";

    let totalHarga = 0;
    pesanan.forEach(item => {
        let subtotal = item.harga * item.jumlah;
        totalHarga += subtotal;
        strukDiv.innerHTML += `<p>${item.nama} x${item.jumlah} = Rp${subtotal}</p>`;
    });

    strukDiv.innerHTML += `<h3>Total: Rp${totalHarga}</h3>`;
}

function hitungTotal() {
    let uangDibayar = document.getElementById("uangDibayar").value;
    let totalHarga = pesanan.reduce((sum, item) => sum + (item.harga * item.jumlah), 0);

    let hasilText = "";
    if (uangDibayar >= totalHarga) {
        let kembalian = uangDibayar - totalHarga;
        hasilText = `Total Bayar: Rp${totalHarga} <br> Uang Dibayar: Rp${uangDibayar} <br> Kembalian: Rp${kembalian}`;
    } else {
        let kurang = totalHarga - uangDibayar;
        hasilText = `Total Bayar: Rp${totalHarga} <br> Uang Dibayar: Rp${uangDibayar} <br> Kekurangan: Rp${kurang}`;
    }

    document.getElementById("hasil").innerHTML = hasilText;
}

tampilkanMenu();