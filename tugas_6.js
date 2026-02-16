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
        {jenis: "lap"}
    ]