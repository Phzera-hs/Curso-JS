var idade = 19
var dinheiro = 10000.00
var nome = "arroz"
var sobrenome = `feijao`
var isBrasileiro = true
var passaporte = null
var nome_sobrenome = nome + " " + sobrenome


if(isBrasileiro && dinheiro > 1000)
    { 
        passaporte = true 
    }

if(idade != null && nome_sobrenome != null){
    if(passaporte){
        alert("nome: " + nome_sobrenome + "\n" + "idade: " + idade + "\n"+ "há passaporte");
    }else{
        alert("nome: " + nome_sobrenome + "\n" + "idade: " + idade + "\n"+ "não há passaporte");
    }
}

var doc = document.getElementById("txt");
doc.innerHTML = "nome: " + nome_sobrenome + " idade: " + idade;
