function sewaLapangan(jenisLapangan, durasiSewa) {
    const biayaSewa =  {
        lapanganFutsal: {sewaPertama: 80000, sewaJamBerikutnya: 50000},
        lapanganBadminton: {sewaPertama: 80000, sewaJamBerikutnya: 50000},
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

const lapangan = [
        {jenis: "lapanganFutsal", durasi:3},
        {jenis: "lapanganFutsal", durasi:1},
        {jenis: "lapanganBadminton", durasi:2},
        {jenis: "lapanganBadminton", durasi:4},
        {jenis: "lapanganBadminton", durasi:1},
];

let totalBiayaSewa = 0;

for (let i = 0; i < lapangan.length; i++) {
    totalBiayaSewa += sewaLapangan(lapangan[i].jenis, lapangan[i].durasi);
}

console.log("Total Biaya Sewa: Rp. " + totalBiayaSewa);
