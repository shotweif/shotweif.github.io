var arrayDate = new Array();
var archivoTxt = new XMLHttpRequest();
var fileRute = '../resources/media/image/GaleryDir.txt';

archivoTxt.open("GET",fileRute, false);
archivoTxt.send();

var txt = archivoTxt.responseText;

for(var i=0; i<txt.length; i++){
    arrayDate.push(txt[i]);
}

arrayDate.forEach(function(data){
    console.log(data);
})