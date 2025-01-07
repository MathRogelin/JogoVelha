// Carregar a página para verificar se ta tudo certo
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os quadrados, que torna um array
    const quadrados = document.querySelectorAll(".container div")
    // selecionar o span para mostrar os pontos
    const player1 = document.querySelector("#player1")
    const player2 = document.querySelector("#player2")
    // atual posição do jogador
    let atualJogador = "X"
    // array que guarda as areas que estão marcadas
    let tabelaPosicao = ["", "", "", "", "", "", "", "", ""]
    //array que vaise usada para saber se o jogador ganhou
    let tabelaAcerto = [["X", "X", "X"], ["O", "O", "O"]]
    // função para ficar mudando de jogador, que será chamada depois que o primeiro marca
    const escolhaJogador = () => {
        atualJogador = (atualJogador === "X") ? "O" : "X"
    }
    //função verificar
    const verificar = () =>{
        //linhas horizontais
        const linhaHorizontal1 = tabelaPosicao.slice(0, 3)
        const linhaHorizontal2 = tabelaPosicao.slice(3, 6)
        const linhaHorizontal3 = tabelaPosicao.slice(6, tabelaPosicao.length)
        //linhas verticais
        const linhaVertical1 = [tabelaPosicao[0],tabelaPosicao[3],tabelaPosicao[6]]
        const linhaVertical2 = [tabelaPosicao[1],tabelaPosicao[4],tabelaPosicao[7]]
        const linhaVertical3 = [tabelaPosicao[2],tabelaPosicao[5],tabelaPosicao[8]]
        //linhas diagonais
        const linhaDiagonal1 = [tabelaPosicao[0],tabelaPosicao[4],tabelaPosicao[8]]
        const linhaDiagonal2 = [tabelaPosicao[2],tabelaPosicao[4],tabelaPosicao[6]]

        console.log(linhaHorizontal1.toString() + " -- " + linhaHorizontal2.toString() + " -- " + linhaHorizontal3.toString())
        //verificar se jogador X venceu
        if (linhaHorizontal1.toString() == tabelaAcerto[0] || linhaHorizontal2.toString() == tabelaAcerto[0] || linhaHorizontal3.toString() == tabelaAcerto[0] ||
            linhaVertical1.toString() == tabelaAcerto[0] || linhaVertical2.toString() == tabelaAcerto[0] || linhaVertical3.toString() == tabelaAcerto[0] || 
            linhaDiagonal1.toString() == tabelaAcerto[0] || linhaDiagonal2.toString() == tabelaAcerto[0]) {
            alert("Jogador X ganhou")
            location.reload()
        //verificar se jogador O venceu
        }else if(linhaHorizontal1.toString() == tabelaAcerto[1] || linhaHorizontal2.toString() == tabelaAcerto[1] || linhaHorizontal3.toString() == tabelaAcerto[1] ||
            linhaVertical1.toString() == tabelaAcerto[1] || linhaVertical2.toString() == tabelaAcerto[1] || linhaVertical3.toString() == tabelaAcerto[1] || 
            linhaDiagonal1.toString() == tabelaAcerto[1] || linhaDiagonal2.toString() == tabelaAcerto[1]){

            alert("Jogador O ganhou")
            location.reload()

        // se ninguem acertou nada
        }else if(!tabelaPosicao.includes("")){
            alert("Deu velha!")
            location.reload()
            
        }
    }
    //percorre os quadrados, onde pego a posição e indice
    quadrados.forEach((quadrado, i) => {
        //quando ele for clicado
        quadrado.addEventListener("click", () => {
            // se ele não tiver texto
            if (quadrado.innerText == "") {
                // quadrado ficara marcado
                quadrado.innerText = atualJogador
                // a array tabelaPosicao guarda a posição
                tabelaPosicao[i] = atualJogador
                //cor para Jogadores
                if (quadrado.innerText == "X") {
                    quadrado.style.backgroundColor = "#f00"
                }else{
                    quadrado.style.backgroundColor = "#00f"
                }
                // e o quadrado clicado ganha a class .letraX ou .letraO se não for X
                quadrado.classList.add(atualJogador === "X" ? "letraX" : "letraO")
                //chamar função que muda o jogador se ele for X ou O
                escolhaJogador()
                verificar()
            }
        })
    })
})