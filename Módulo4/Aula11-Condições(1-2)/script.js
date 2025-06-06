var vel = 160;
console.log(`A velocidade do seu carro é ${vel}Km/h`);
if(vel > 70){
    console.log(`Você está em alta a velocidade!`);
    if(vel > 70 && vel < 80){
        console.log(`Você não foi multado! Porém dirija com cuidado`);
        console.log(`Falta ${80-vel}Km/h para você atigir o limite permitido`);
    }
    else if(vel > 80){
        console.log(`Você foi multado!`);
        console.log(`Está ${vel - 80}Km/h acima do limite`);
    }
}