

let valore = 0;
let resultado = 0;

let form = document.getElementById("form1");

document.getElementById("form1").addEventListener("submit",function(e){
  
    valore = Number(document.getElementById("valor").value);
    Divisa1 = document.getElementById("DIVISA1").value;
    Divisa2 = document.getElementById("DIVISA2").value;
  
    
    if (Divisa1 === 'USD' && Divisa2 === 'EUR2'){ 
        valore = valore * 0.86;
        resultado= valore;
        
        alert(resultado);
    }else if (Divisa1 === 'USD' && Divisa2 === 'GBP2') {
        valore = valore * 0.72;
        resultado= valore;
    } else if (Divisa1 === 'USD' && Divisa2 === 'MXN2') {
        valore = valore * 20.20;
        resultado = valore;

    } else if (Divisa1==='USD' && Divisa2==='COP2') {
        valore = valore * 3782.46;
        resultado = valore;
    } else if (Divisa1==='EUR' && Divisa2==='USD2') {
        valore = valore * 1.16;
        resultado = valore;
    } else if (Divisa1==='EUR' && Divisa2==='COP2') {
        valore = valore * 4393;
        resultado = valore;
    } else if (Divisa1==='EUR' && Divisa2==='MXN2') {
        valore = valore * 23.50;
        resultado = valore;
    } else if (Divisa1==='EUR' && Divisa2==='GBP2') {
        valore = valore * 0.85;
        resultado = valore;
    } else if (Divisa1==='COP' && Divisa2==='USD2') {
        valore = valore * 0.0026;
        resultado = valore;
    } else if (Divisa1==='COP' && Divisa2==='EUR2') {
        valore = valore * 0.0023;
        resultado = valore;
    } else if (Divisa1==='COP' && Divisa2==='MXN2') {
        valore = valore * 0.053;
        resultado = valore;
    } else if (Divisa1==='COP' && Divisa2==='GBP2') {
        valore = valore * 0.00019;
        resultado = valore;
    } else if (Divisa1==='MXN' && Divisa2==='USD2') {
        valore = valore * 0.050;
        resultado = valore;
    } else if (Divisa1==='MXN' && Divisa2==='COP2') {
        valore = valore * 187.01;
        resultado= valore;
    }else if (Divisa1==='MXN' && Divisa2==='EUR2') {
        valore = valore * 0.043;
        resultado= valore;
    }else if (Divisa1==='MXN' && Divisa2==='GBP2') {
        valore = valore * 0.036;
        resultado = valore;
    }else if (Divisa1==='GBP' && Divisa2==='USD2') {
        valore = valore * 1.38;
        resultado = valore;
    } else if (Divisa1==='GBP' && Divisa2==='EUR2') {
        valore = valore * 1.18;
        resultado = valore;
    } else if (Divisa1==='GBP' && Divisa2==='COP2') {
        valore = valore * 5192;
        resultado = valore;
    } else if (Divisa1==='GBP' && Divisa2==='MXN2') {
        valore = valore * 27.76;
        resultado= valore;
    } else
    {
    valore = 0;
    resultado= 0;
    alert ("Necesita ingresar datos");
        }

    document.getElementById("resultado").value=resultado.toFixed(2);
    e.preventDefault();
});
