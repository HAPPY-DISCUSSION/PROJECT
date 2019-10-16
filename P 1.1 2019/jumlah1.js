function Input(idElemen)
{
   data = parseInt(document.getElementById(idElemen).value);
    return data;
}
function Jumlah(bil1,bil2)
{
    hasil = bil1 + bil2;
    return hasil;
}
function Output(hasil)
{
    document.getElementById("hasil").innerHTML= hasil;
}
function Penjumlahan()
{
    //input
    bil1 = input("txtBil1");
    bil2 = input("txtBil2");
    //proses
    hasil = Jumlah(bil1,bil2);
    //output
    Output(hasil);
}