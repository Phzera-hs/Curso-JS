var text1 = document.getElementById('txt1');
text1.innerHTML = `Celsius:`

var text2 = document.getElementById('txt2');
text2.innerHTML = `Fahreinht:`


document.getElementById('Converter').addEventListener('click', function(e){
    e.preventDefault();
    if(text1.innerHTML == `Celsius:`){
        var val1 = parseFloat(document.getElementById('valor1').value);
        var resultado = (val1 * 1.8) + 32;
    }else{
        var val1 = parseFloat(document.getElementById('valor1').value);
        var resultado = (val1 - 32) * 5/9;
    }
    document.getElementById('valor2').value = resultado.toFixed(2);
})

document.getElementById('Inverter').addEventListener('click', function(e){
    e.preventDefault();
    if( text1.innerHTML == `Fahreinht:`){
    text1.innerHTML = `Celsius:`
    text2.innerHTML = `Fahreinht:`
    }else{
    text1.innerHTML = `Fahreinht:`
    text2.innerHTML = `Celsius:`
    }
})

document.getElementById('Limpar').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
})