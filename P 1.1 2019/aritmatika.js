function Penjumlahan()
{
    //input
    bil1 = parseInt(Input("txtBil1"));
    bil2 = parseInt(Input("txtBil2"));
    //prosess
    hasil = Jumlah(bil1, bil2);
    //output
    Tampil(hasil);
    Swal.fire('Hasilnya adalah = '+hasil , '', 'success');
}

function Input(idElemen)
{
    // Mengembalikan data berupa value dari elemen yang diambil
    return document.getElementById(idElemen).value;
}

function Bagi(bil1, bil2)
{
    hasil = bil1 / bil2;
    return hasil;
}

function Jumlah(bil1, bil2)
{
    hasil = bil1 + bil2;
    return hasil;
}

function Tampil(tampil)
{
    document.getElementById("hasil").innerHTML = tampil;
}

function Pembagian()
{
    //input
    bil1 = parseInt(Input("txtBil1"));
    bil2 = parseInt(Input("txtBil2"));
    //prosess
    hasil = Bagi(bil1, bil2);
    //output
    Tampil(hasil);
    Swal.fire('Hasilnya adalah = '+hasil , '', 'success');
}

function pesan()
{
    Swal.fire('Namanya aja usaha :D', '', 'success');
}

function reset()
{
    document.getElementById("txtBil1").value = "";
    document.getElementById("txtBil2").value = "";
    
}