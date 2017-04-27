/**
 * Created by Ucenik on 2017-04-27.
 */
//var Element = document.getElementById("prvi").innerHTML;
//document.getElementById("drugi").innerHTML=Element;


function Ucitaj()
{
    document.getElementById("slika").src="slike/preuzmi.jpg";
}
function promijeni()
{
    document.getElementById("slika").src="slike/images.jpg";
}
function boja()
{
    document.getElementById("prvi").style.backgroundColor="red";
}
function sakrij() {
    var div = document.getElementById('mojdiv');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        document.getElementById("buttoncic").innerHTML="sakrij";
    } else {
        div.style.display = 'none';
        document.getElementById("buttoncic").innerHTML="prikazi";
    }
}