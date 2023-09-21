

let nome = document.querySelector("#nome")

const campoQtd = document.querySelector("#qtde")
const output = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")

const layoutSim = document.querySelector("#layout_sim")
const layoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")

    campoPrazo.addEventListener("input",   function() {
        
        const labelPrazo = document.querySelector("label[for = 'prazo']")

        labelPrazo.innerHTML = `Prazo :  ${campoPrazo.value} semanas`
        calcular()
    })

layoutSim.addEventListener("change", calcular)
layoutNao.addEventListener("change", calcular)


campoQtd.addEventListener("change" , calcular )
campoTipo.addEventListener("change" , calcular )


campoJs.addEventListener("change", calcular)

function calcular(){
//R$100 por pagina
console.log("Calcular Orçameto")
let qtde = campoQtd.value
let valor = qtde * 100;
//console.log(qtde * 100);
console.log(campoTipo.value)


if (campoTipo.value == 2){

    valor = valor + 1000
}

if(layoutSim.checked){

        valor += qtde * 50

}

if(campoJs.checked){
valor *= 1.1

}

let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
valor *= 1 + taxaDeUrgencia


output.innerHTML=  `R$${valor.toFixed(2)}`
}