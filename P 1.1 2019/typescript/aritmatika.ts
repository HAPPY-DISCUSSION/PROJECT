// Modul pertama menggunakan typeScript :)

function Input(idElemen : string)
{
    let data : number;
    data = parseInt(document.getElementById(idElemen).nodeValue);
    return data;
}

function Jumlah(bil1 : number, bil2 : number)
{
    let hasil : number;
    hasil = bil1 + bil2;
    return hasil;
}

function Output(hasil : number)
{
    document.getElementById("hasil").innerHTML = hasil.toString();
    return hasil;
}

function doPenjumlahan()
{
    let bil1, bil2, hasil : number;
    bil1 = Input("bil1");
    bil2 = Input("bil2");
    hasil = Jumlah(bil1, bil2);
    Output(hasil);
}