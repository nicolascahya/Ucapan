function tampilkanUcapan() {
    var nama = document.getElementById("nama").value.trim();

    if (nama !== "") {
        var pesan = "Halo " + nama + " yang spesial!<br><br>" +
                    "Aku cuma mau bilang...<br>" +
                    "Aku bersyukur banget bisa kenal kamu.<br>" +
                    "Kamu selalu bikin hariku lebih cerah.<br>" +
                    "Terima kasih sudah jadi kamu.<br><br>" +
                    "Semoga hari-harimu selalu bahagia ya!<br>" +
                    "Dari seseorang yang selalu sayang kamu.";

        document.getElementById("pesan").innerHTML = pesan;
        document.getElementById("ucapan").style.display = "block";
    } else {
        alert("Tolong masukkan namamu dulu ya.");
    }
}

function senyum() {
    alert("Senyum dong! Karena kamu manis kalau senyum :)");
}
