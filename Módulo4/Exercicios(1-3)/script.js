// My Version

// var horario = new Date();
// var horarioDiv = horario.getHours();
// var divMinutes = horario.getMinutes();

// var horarioTxt = document.getElementById('horario');
// horarioTxt.innerHTML = `Agora são <b>${horarioDiv}h${divMinutes}</b>`
// horarioTxt.style.textAlign = 'center';
// horarioTxt.style.fontSize = '30px';

// var conteudo = document.getElementById('content');
// conteudo.style.marginTop = '40px'
// conteudo.style.textAlign = 'center'
// conteudo.style.fontFamily = 'Georgia'

// if(horarioDiv.toString() < '12'){
//     conteudo.innerHTML = `<b>Bom dia</b>`
//     document.body.style.backgroundColor = '#b7ae7f'
// }else if(horarioDiv.toString() <= '18'){
//     conteudo.innerHTML = `<b>Boa tarde</b>`
//     document.body.style.backgroundColor = '#cb915f'

// }else{
//     conteudo.innerHTML = `<b>Boa noite</b>`
//     document.body.style.backgroundColor = '#232865'
// }

// Professor version
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var conteudo = document.getElementById('content');

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // img.src = 'fotomanha.jpg'
        conteudo.innerHTML = `<b>Bom dia</b>`
        document.body.style.backgroundColor = '#b7ae7f'
     }else if(hora <= 18){
        //   img.src = 'fototarde.jpg'
         conteudo.innerHTML = `<b>Boa tarde</b>`
         document.body.style.backgroundColor = '#cb915f'
     }else{
        // img.src = 'fotonoite.jpg'
         conteudo.innerHTML = `<b>Boa noite</b>`
         document.body.style.backgroundColor = '#232865'
     }

}