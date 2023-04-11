let selecUl = document.getElementsByClassName("listaCards")[0]
console.log(selecUl)
function insereCards(lista){
    for(let i = 0; i < lista.length; i++){
        let elementolista = document.createElement("li")
        elementolista.classList.add("card")
        

        let divImg = document.createElement("div")
        divImg.classList.add("img")
        elementolista.appendChild(divImg)

        let imgCard = document.createElement("img")
        imgCard.classList.add("imgcard")
        imgCard.src = lista[i].img
        divImg.appendChild(imgCard)

        let spanTag = document.createElement("span")
        spanTag.classList.add("tag")
        spanTag.innerText = `${lista[i].tag}`
        elementolista.appendChild(spanTag)

        let h2TituloCard = document.createElement("h2")
        h2TituloCard.classList.add("nomeItemCard")
        h2TituloCard.innerText = `${lista[i].nameItem}`
        elementolista.appendChild(h2TituloCard)

        let pDescricao = document.createElement("p")
        pDescricao.classList.add("descricaoCard")
        pDescricao.innerText = `${lista[i].description}`
        elementolista.appendChild(pDescricao)

        let pValor = document.createElement("p")
        pValor.classList.add("valorCard")
        pValor.innerText = `R$ ${lista[i].value}`
        elementolista.appendChild(pValor)

        let botaoCards = document.createElement("button")
        botaoCards.classList.add("BotaoCard")
        botaoCards.innerText = `Adicionar ao Carrinho`
        botaoCards.id = lista[i].id
        elementolista.appendChild(botaoCards)

        selecUl.appendChild(elementolista)

    }
} 
insereCards(data)

let capturaBotaoAdicionar = document.querySelectorAll(".BotaoCard");
let quantidade = 0
let valorCarrinho = 0
document.querySelector(".quantItensCarrinho").innerHTML = quantidade
document.querySelector(".valorCompra").innerHTML = `R$ ${valorCarrinho}`


for(let i = 0; i < capturaBotaoAdicionar.length; i++){
    let botao = capturaBotaoAdicionar[i]

    botao.addEventListener('click', function(e){
        let idElemento = parseInt(e.target.id)
        let id = idElemento

        let produto = procuraitem(id)
        
        let elementoCarrinho = criarCardCarrinho(produto)
        let capturaUlCarrinho = document.querySelector(".listaCarrinho")
        capturaUlCarrinho.appendChild(elementoCarrinho)
        
        quantidade++
        valorCarrinho += produto.value
        document.querySelector(".quantItensCarrinho").innerHTML = quantidade
        document.querySelector(".valorCompra").innerHTML = `R$ ${valorCarrinho}`
        
    })
    
}

function procuraitem(id){
    for(let i = 0; i < data.length; i++){
        let produto = data[i]
        if(produto.id == id){
            return produto
        }
    }
    return "Produto não encontrado"
}

function criarCardCarrinho(produto){
    let liCarrinho = document.createElement("li")
    liCarrinho.id = `li_${produto.id}`
    liCarrinho.classList.add("cardCarrinho")
    
    let imgCarrinho = document.createElement("img")
    imgCarrinho.classList.add("imgCarrinho")
    imgCarrinho.src = produto.img
    liCarrinho.appendChild(imgCarrinho)

    let divCarrinho = document.createElement('div')
    divCarrinho.classList.add("produtosCarrinho")
    liCarrinho.appendChild(divCarrinho)

    let pNomeCarrinho = document.createElement("p")
    pNomeCarrinho.classList.add("nomeCarrinho")
    pNomeCarrinho.innerText = `${produto.nameItem}`
    divCarrinho.appendChild(pNomeCarrinho)
    
    let pValorItem = document.createElement("p")
    divCarrinho.appendChild(pValorItem)
    pValorItem.classList.add("valorItem")
    pValorItem.innerText = `R$ ${produto.value}`

    let buttonCarrinho = document.createElement("button")
    buttonCarrinho.classList.add("remover")
    buttonCarrinho.innerText = `Remover Produto`
    buttonCarrinho.id = `PCarrinho_${produto.id}`
    
    buttonCarrinho.addEventListener("click", function(e){
        let liCarrinho = document.querySelector("#li_"+produto.id)
        liCarrinho.remove()

        quantidade--
        valorCarrinho -= produto.value
        document.querySelector(".quantItensCarrinho").innerHTML = quantidade
        document.querySelector(".valorCompra").innerHTML = `R$ ${valorCarrinho}`

    })
    
    
    divCarrinho.appendChild(buttonCarrinho)

    return liCarrinho

}

capturaQuantidade.innerText = quantidade
capturaValor.innerText = valorCarrinho

