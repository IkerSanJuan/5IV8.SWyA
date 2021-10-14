function cifrar(){
    var tipo = document.getElementById("tipo").value;
     
    if(tipo=="128"){
        cifrar128()
    }
    if(tipo=="192"){
        cifrar192()
    }
    if(tipo=="256"){
        cifrar256()
    }

}

function cifrar128(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=16){
        alert("La clave no es valida");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-128-'+Math.random()+'.txt');
    }

}

function cifrar192(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=24){
        alert("La clave no es valida");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-192-'+Math.random()+'.txt');
    }

}

function cifrar256(){
    let txt = document.getElementById("txt").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=32){
        alert("La clave no es valida");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clave);
        document.getElementById("txtcifrado").innerHTML=cifrado;
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-256-'+Math.random()+'.txt');
    }

}

function descifrar(){
    var tipo = document.getElementById("tipo").value;
     
    if(tipo=="128"){
        descifrar128()
    }
    if(tipo=="192"){
        descifrar192()
    }
    if(tipo=="256"){
        descifrar256()
    }

}

function descifrar128(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=16){
        alert("La clave no es valida");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-128-'+Math.random()+'.txt');
    }

}

function descifrar192(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=24){
        alert("La clave no es valida");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-192-'+Math.random()+'.txt');
    }

}

function descifrar256(){
    let txt = document.getElementById("txtcifrado").value;
    let clave = document.getElementById("clave").value;

    if(clave.length!=32){
        alert("La clave no es valida");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        document.getElementById("txtdescifrado").innerHTML=descifrado.toString(CryptoJS.enc.Utf8);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-256-'+Math.random()+'.txt');
    }

}

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    
    var reader = new FileReader();
    
    reader.onload = function (event) {
      
      var save = document.createElement('a');
      save.href = event.target.result;
      save.target = '_blank';
      
      save.download = nombreArchivo;
      var clicEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      
      save.dispatchEvent(clicEvent);
      
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    
    reader.readAsDataURL(contenidoEnBlob);
  };

function generarTexto(datos) {
    let texto = [];
    texto.push(datos);

    return new Blob(texto, {
        type: 'text/plain'
    });
};