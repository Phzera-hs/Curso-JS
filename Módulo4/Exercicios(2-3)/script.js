function sendInfo(event){
    event.preventDefault(); 
    const AnoDeNascimento = document.getElementById('idade').value;
    console.log(AnoDeNascimento);

    const anoNasc = new Date(AnoDeNascimento).getFullYear();
    console.log(anoNasc);
    
    const atualYear = new Date().getFullYear();
    console.log(atualYear);

    const idade = atualYear - anoNasc;
    
    const content = document.createElement("p");

    if (isNaN(idade) || idade <= 0 || anoNasc > atualYear) {
        content.innerHTML = "Ano de Nascimento inválido";
      } else {
        const sexoSelect = document.querySelector('input[name="sexo"]:checked');
        const sexo = sexoSelect ? sexoSelect.value : "não informado";
        content.innerHTML = `Idade: ${idade} Sexo: ${sexo}`;
        if(idade <= 13){
            content.innerHTML += `<br>Bem vinda criança!`;
        }else if(idade > 13 && idade <= 25 && sexo == 'Masculino'){
            content.innerHTML += `<br>Bem vindo rapaz!`;
        }else if(idade > 13 && idade <= 25 && sexo == 'Feminino'){
            content.innerHTML += `<br>Bem vinda moça!`;
        }else if(idade > 25 && idade <= 55 && sexo == 'Masculino'){
            content.innerHTML += `<br>Bem vindo homem!`;
        }else if(idade > 25 && idade <= 55 && sexo == 'Feminino'){
            content.innerHTML += `<br>Bem vinda mulher!`;
        }else if(idade > 55 && sexo == 'Masculino'){
            content.innerHTML += `<br>Bem vindo senhor!`;
        }else if(idade > 55 && sexo == 'Feminino'){
            content.innerHTML += `<br>Bem vinda senhora!`;
        }
      }
      document.getElementById('saudacoes').innerHTML = "";
      document.getElementById('saudacoes').appendChild(content);
}