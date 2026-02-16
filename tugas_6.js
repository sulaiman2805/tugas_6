// Total Keseluruhan Lapangan
function sewaLapangan(jenisLapangan, durasiSewa) {
    const biayaSewa = {
        lapanganFutsal: { sewaPertama: 80000, sewaJamBerikutnya: 50000 },
        lapanganBadminton: { sewaPertama: 80000, sewaJamBerikutnya: 50000 },
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

console.log("Total Biaya Sewa: Rp. " + totalBiayaSewa);
