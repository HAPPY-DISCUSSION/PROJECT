// Modul pertama menggunakan typeScript :)
function Input(idElemen) {
    var data;
    data = parseInt(document.getElementById(idElemen).value);
    return data;
}
function Jumlah(bil1, bil2) {
    var hasil;
    hasil = bil1 + bil2;
    return hasil;
}
function Output(hasil) {
    document.getElementById("hasil").innerHTML = hasil.toString();
    return hasil;
}
function doPenjumlahan() {
    var bil1, bil2, hasil;
    bil1 = Input("bil1");
    bil2 = Input("bil2");
    hasil = Jumlah(bil1, bil2);
    Output(hasil);
    alert('Hasilnya adalah ' + hasil);
    if (confirm('Ingin mengulangi?')) {
        hapus()
    }
}

function hapus() 
{
    bil1 = document.getElementById("bil1").value = "";
    bil2 = document.getElementById("bil2").value = "";
    hasil = document.getElementById("hasil").innerHTML = "Hitung";
    return bil1, bil2, hasil;
}
