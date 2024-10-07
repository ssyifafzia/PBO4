class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} orang memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
    }
    hitungLuasDek() {
        return `Luas dek kapal ${this.nama} adalah ${this.panjang * this.lebar} m².`;
    }
    infoKapasitas() {
        return `Kapal ${this.nama} memiliki kapasitas ${this.kapasitas} orang.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama,jenis, kapasitas, panjang, lebar, jumlahPenumpang) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.jumlahPenumpang = jumlahPenumpang; 
    
    }
    infoPenumpang() {
        return `Kapal ${this.nama} saat ini mengangkut ${this.jumlahPenumpang} penumpang.`;
    }
}
let kapalPenumpang1 = new KapalPenumpang("Budiono Siregar","penumpang", 500, 200, 100, 300);
console.log(kapalPenumpang1.infoKapal());
console.log(kapalPenumpang1.hitungLuasDek());
console.log(kapalPenumpang1.infoKapasitas());
console.log(kapalPenumpang1.infoPenumpang());

class KapalKargo extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, muatan) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.muatan = muatan; 
    }
    infoMuatan() {
        return `Kapal ${this.nama} saat ini mengangkut ${this.muatan} ton muatan.`;
    }
}

let kapalKargo1 = new KapalKargo("Kargo Sejahtera", "barang", 1000, 250, 50, 800);
console.log(kapalKargo1.infoKapal());
console.log(kapalKargo1.hitungLuasDek());
console.log(kapalKargo1.infoKapasitas());
console.log(kapalKargo1.infoMuatan());

class KapalTitanic extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, senjata) {
        super(nama, jenis, kapasitas, panjang, lebar); 
        this.senjata = senjata;
    }
    infoSenjata() {
        return `Kapal ${this.nama} dilengkapi dengan senjata ${this.senjata}.`;
    }
    siapTempur() {
        return `Kapal ${this.nama} siap untuk bertempur dengan kapasitas ${this.kapasitas} prajurit dan dilengkapi senjata ${this.senjata}.`;
    }
}

let kapalTitanic1 = new KapalTitanic("Titanic abadi", "penumpang", 300, 150, 30, "roket");
console.log(kapalTitanic1.infoKapal());
console.log(kapalTitanic1.hitungLuasDek());
console.log(kapalTitanic1.siapTempur());
console.log(kapalTitanic1.infoSenjata());

class KapalFeri extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, hargatiket) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.hargatiket= hargatiket;
        this._status = "Tersedia";
    }
    tiketFeri() {
        return `Kapal ${this.nama} digunakan untuk penelitian mengenai ${this.hargatiket}.`;
    }
    getStatus() {
        return `${this._status}`;
    }
    setStatusTersedia(){
        this._status = 'Tersedia';
        return `${this.nama} ${this._status}`
    }
    setStatusTidakTersedia(){
        this._status = 'Tidak Tersedia';
        return `${this.nama} ${this._status}`
    }
}

let kapalFeri1 = new KapalFeri("Feri makmur", "penumpang", 100, 120, 40, 108.000 );
console.log(kapalFeri1.infoKapal());
console.log(kapalFeri1.hitungLuasDek());
console.log(kapalFeri1.tiketFeri());
console.log(kapalFeri1.getStatus());


