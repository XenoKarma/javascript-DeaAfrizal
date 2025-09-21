document.title = "Belajar DOM Javascript";

const body = document.body;

body.append("Hello World");

const h1 = document.createElement("h1");
h1.textContent = "<marquee>Selamat Datang di Belajar DOM Javascript</marquee>";

const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>Nama Saya Andika Purnama</marquee>";

const namaKamu = document.createElement("b");
namaKamu.innerText = "<marquee>Nama Kamu Dea Afrizal</marquee>";


body.append(h1);
body.append(namaSaya);
body.append(namaKamu);
