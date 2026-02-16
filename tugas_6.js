// Identifikasi nama lapangan dan biaya
console.log("Selamat datang di GOR ABC. Berikut adalah harga sewa lapangan kami");

function gorABC(namaLapangan, biayaLapangan, biayaberikutnya) {
    const daftarLapangan = `Ini adalah ${namaLapangan}, dengan harga ${biayaLapangan}, & biaya 1 jam berikutnya adalah ${biayaberikutnya}`;
    return daftarLapangan;
}

const lapangan1 = gorABC("Lapangan Futsal",80000,50000);
console.log(lapangan1);

const lapangan2 = gorABC("Lapangan Badminton",40000,25000);
console.log(lapangan2);

// Total Keseluruhan Lapangan

console.log("Total Biaya Sewa Lapangan Perusahaan ABC");

function sewaLapangan(jenisLapangan, durasiSewa) {
    const biayaSewa = {
        lapanganFutsal: { sewaPertama: 80000, sewaJamBerikutnya: 50000 },
        lapanganBadminton: { sewaPertama: 40000, sewaJamBerikutnya: 25000 },
    }

    if (jenisLapangan == "lapanganFutsal") {
        if (durasiSewa <= 1) {
            return biayaSewa.lapanganFutsal.sewaPertama;
        } else {
            return biayaSewa.lapanganFutsal.sewaPertama + (durasiSewa - 1) * biayaSewa.lapanganFutsal.sewaJamBerikutnya;
        }
    } else {
        if (durasiSewa <= 1) {
            return biayaSewa.lapanganBadminton.sewaPertama;
        } else {
            return biayaSewa.lapanganBadminton.sewaPertama + (durasiSewa - 1) * biayaSewa.lapanganBadminton.sewaJamBerikutnya;
        }
    }
}

// Lapangan Futsal
const nomorFutsal = [
    { nomorLapangan: "lapanganNomor1", durasi: 3 },
    { nomorLapangan: "lapanganNomor2", durasi: 1 },
];

// Lapangan Bandminton 
const nomorBadminton = [
    { nomorBadminton: "lapanganBadminton", durasi: 2 },
    { nomorBadminton: "lapanganBadminton", durasi: 4 },
    { nomorBadminton: "lapanganBadminton", durasi: 1 },
];

// Semua Lapangan
const semuaLapangan = [
    { jenis: "lapanganFutsal", durasi: 3 },
    { jenis: "lapanganFutsal", durasi: 1 },
    { jenis: "lapanganBadminton", durasi: 2 },
    { jenis: "lapanganBadminton", durasi: 4 },
    { jenis: "lapanganBadminton", durasi: 1 },
];

let totalBiayaSewa = 0;

// Biaya Keseluruhan
for (let i = 0; i < nomorFutsal.length; i++) {
    totalBiayaSewa += sewaLapangan(nomorFutsal[i].jenis, nomorFutsal[i].durasi);
}
console.log("Total Biaya Lapangan Futsal: Rp. " + totalBiayaSewa);

// Lapangan Badminton
for (let i = 0; i < nomorBadminton.length; i++) {
    totalBiayaSewa += sewaLapangan(nomorBadminton[i].jenis, nomorBadminton[i].durasi);
}
console.log("Total Biaya Lapangan Badminton: Rp. " + totalBiayaSewa);

// Biaya Keseluruhan
for (let i = 0; i < semuaLapangan.length; i++) {
    totalBiayaSewa += sewaLapangan(semuaLapangan[i].jenis, semuaLapangan[i].durasi);
}

console.log("Total Keseluruhan: Rp. " + totalBiayaSewa);
