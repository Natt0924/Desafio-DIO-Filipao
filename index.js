let heroi = [
    {nome:"Barry", xp:10999 }
]

for (let repeticao = 0; repeticao < heroi.length; repeticao++){
    let nomeHeroi = heroi[repeticao].nome
    let xpHeroi = heroi[repeticao].xp
    let nivel = ""

    if (xpHeroi <= 1000){
        nivel ="ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivel = "ouro";
    }else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "ascedente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "imortal";
    } else {
        nivel = "radiante";
    }

    console.log("O heroi de nome" + nomeHeroi + " está no nivel " + nivel)
    
}