document.title = "Belajar DOM Javascript";

const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.getElementById("btn3"); // <= ini ditambahkan
const btn4 = document.getElementById("btn4");
const defaultText = "COBA KESINI";



// Styling tombol 1
btn1.style.backgroundColor = "blue";
btn1.style.color = "white";
btn1.style.padding = "10px 20px";
btn1.style.border = "none";
btn1.style.borderRadius = "5px";
btn1.style.cursor = "pointer";

// Styling tombol 2
btn2.style.backgroundColor = "red";
btn2.style.color = "white";
btn2.style.padding = "10px 20px";
btn2.style.border = "none";
btn2.style.borderRadius = "5px";
btn2.style.cursor = "pointer";

// isi default untuk btn3
btn3.textContent = defaultText;

// Event tombol 2
btn2.onclick = function () {
  alert("Tombol Dua di Klik");
};

// Fungsi ubah text btn3
function gantiNama() {
  btn3.innerText = "Nama sudah diganti!";
}

function ubahText() {
  btn3.textContent = "Halo Massbro!";
}

function oriText() {
  btn3.textContent = defaultText;
}

// Fungsi untuk tombol 1
function clickButton() {
  btn1.style.backgroundColor = "green";
  const newText = document.createElement("p");
  newText.textContent = "Tombol sudah di klik";
  body.append(newText);
}

// Fungsi untuk tombol 4
function tambahText() {
  const tambahanText = document.createElement("p");
  tambahanText.textContent = "Tombol ini untuk tugas DOM";
  body.append(tambahanText);
}
function ubahWarna() {
  btn4.style.backgroundColor = "yellow";
  tambahText.style.color = "red";
}
