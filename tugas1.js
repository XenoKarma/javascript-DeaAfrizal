function mintaAngka(pesan) {
    let angka = parseInt(prompt(pesan));
    while (isNaN(angka)) {
        alert("Input tidak valid! Harus angka.");
        angka = parseInt(prompt(pesan));
    }
    return angka;
}

let saldoAwal = mintaAngka("Masukkan saldo awal kamu:");
let saldoTambahan = mintaAngka("Masukkan saldo tambahan kamu:");
let hutang = mintaAngka("Masukkan hutang kamu:");

const saldoAkhir = saldoAwal + saldoTambahan - hutang;
alert("Total saldo kamu sekarang adalah Rp. " + saldoAkhir);




//tugas 2
let hari = new Date().getDay();
let namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

alert("Hari ini hari " + namaHari[hari]);
//selesai

