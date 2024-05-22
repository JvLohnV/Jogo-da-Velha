//let alunos = [[],[],[]]

//alunos[0][0]= "Ana"
//alunos[0][1]= "Ary"
//alunos[1][0]= "Anna"
//alunos[1][1]= "ONE PIECE É REAL!!!"
//alunos[2][0]= "Achou que eu estava brincando?"
//alunos[2][1]= "O que disseses cachorro chupetão?"

//for(let i = 0; i < alunos.length; i++){
    //for(let j = 0; j < alunos[i].length; j++){
    //    console.log(alunos[i][j])
    //}
//}

function teste1() {
    let alunos = new Array(3);
for(let i = 0; i < alunos.length; i++){
    alunos[i] = new Array(2)
}
    for(let i = 0; i < alunos.length; i++){
        for(let j = 0; j < alunos[i].length; j++){
          alunos[i][j] = prompt("Digite o nome do aluno:")
        }
    }


alert(alunos)
}

    let onePiece, quebraLinha, jogada = 1
    let tabuleiro = new Array(3)
    for(let i = 0; i < tabuleiro.length; i++){
        tabuleiro[i] = new Array(3)
    } 

    for(let i = 0; i < tabuleiro.length; i++){
        quebraLinha = document.createElement('br')
        document.body.append(quebraLinha)
        for(let j = 0; j < tabuleiro[i].length; j++){
            onePiece = document.createElement('button')
            onePiece.setAttribute('type', 'button')
            onePiece.setAttribute('id', 'bt' + i + "" + j)
            onePiece.setAttribute('class', 'btJogo', i)
            onePiece.setAttribute('onclick', 'marca(' + i + "," + j + ")")
            onePiece.append(document.createTextNode(""))
            document.body.append(onePiece)
        }
    }

function marca(linha, coluna) {
    marcaCasa("bt" + linha + "" + coluna)
}

function marcaCasa(nomeBotao) {
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "blue"

    }else{  
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "black"
    }
     
    document.getElementById(nomeBotao).disabled = true
    jogada++
    if(jogada >= 5){
        encerraJogo()
    }
    
}
function encerraJogo() {

    //Linhas ------------------------------------------------------------------------------------------
    if(document.getElementById("bt00").innerText == document.getElementById("bt01").innerText && document.getElementById("bt01").innerText == document.getElementById("bt02").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt00").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt0" + cont).style.color = "red"
        }
    }
    if(document.getElementById("bt10").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt12").innerText && document.getElementById("bt10").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt10").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt1" + cont).style.color = "red"
        }
    }
    if(document.getElementById("bt20").innerText == document.getElementById("bt21").innerText && document.getElementById("bt21").innerText == document.getElementById("bt22").innerText && document.getElementById("bt20").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt20").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt2" + cont).style.color = "red"
        }
    }

    //Diagonais ---------------------------------------------------------------------------------------
    if(document.getElementById("bt00").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt22").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt00").innerText)
        let contRegressivo = tabuleiro.length -1
        for(cont in tabuleiro){
        document.getElementById("bt" + cont + "" + cont).style.color = "red"
        }
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt20").innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt02").innerText)
        let contRegressivo = tabuleiro.length -1
        for(cont in tabuleiro){
        document.getElementById("bt" + cont + "" + contRegressivo --).style.color = "red"
        }
    }

    //Colunas ----------------------------------------------------------------------------------------
    if(document.getElementById("bt00").innerText == document.getElementById("bt10").innerText && document.getElementById("bt10").innerText == document.getElementById("bt20").innerText && document.getElementById("bt00").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt00").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "0").style.color = "red"
        }
    }
    if(document.getElementById("bt01").innerText == document.getElementById("bt11").innerText && document.getElementById("bt11").innerText == document.getElementById("bt21").innerText && document.getElementById("bt01").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt01").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "1").style.color = "red"
        }
    }
    if(document.getElementById("bt02").innerText == document.getElementById("bt12").innerText && document.getElementById("bt12").innerText == document.getElementById("bt22").innerText && document.getElementById("bt02").innerText != ""){
        alert("Jogo finalizado! \nVencedor: " + document.getElementById("bt02").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "2").style.color = "red"
        }
    }
}

