let nama = "Andika Purnama"; //string
let usia = 22; //number
let tinggiBadan = 170; //number
let beratBadan  //number
let pacar = null //null

beratBadan = 60;

if (pacar == null) {
    pacar = "Belum Punya Pacar";
} else {
    pacar = "Punya Pacar";
}

let saldoAwal = 10000;
let saldoTambahan = 5000;
const hutang = 2000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

let totalSaldo = saldoAkhir;

const x = 4;
const y = 18
const z = 3;

alert(`nilai x = ${x} * nilai y = ${y} + nilai z = ${z} adalah ${x * y + z}`);


alert(
    "Nama saya " +nama+
    "\nUsia saya " +usia+ " tahun"+
    "\nTinggi badan saya " +tinggiBadan+ " cm"+
    "\nBerat badan saya " +beratBadan+
    "\nStatus pacar saya " +pacar
)
alert("Total saldo saya sekarang adalah Rp. " +totalSaldo)

