function change1(){
  var opt = {
    quality:1.5,
    width: 1080,
    height: 1075,
  }
  var node = document.getElementById('view');
domtoimage.toBlob(document.getElementById('view'),opt)
.then(function (blob) {
  window.saveAs(blob, 'PERINGATAN DINI.png');
});
}
//FUNCTION UNTUK DOWNLOAD HASIL GAMBAR

//FUNCTION UNTUK MEMILIH PERINGATAN DI FORM
  function change(nama,selector){
    var image = document.getElementsByName(nama)[0];
    image.src = selector.value;
  }
//FUNCTION UNTUK MEMILIH PERINGATAN DI FORM

var today=moment().add('days');
document.getElementById('date').value = today.format('D MMMM YYYY');

function timeToSet(timee,selector){
var settime = document.getElementsByName(timee)[0];
settime.value = selector.value;
}

