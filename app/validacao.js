    function verificaValorChuteValido(chute){
        const numero = +chute                               
        if(chuteForInvalido(numero)){
            elementochute.innerHTML += `<div>Valor Invalido</div>`
        }
        if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
            elementochute.innerHTML += `<div> Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        }
        if( numero === numeroSecreto){
            document.body.innerHTML = `
            <h2> Você acertou!! </h2>
            <h3> O número secreto era ${numeroSecreto} </h3>
            `
        } else if(numero > numeroSecreto) {

         elementochute.innerHTML += `<div> O número secreto é menor</div>`

        } else{

          elementochute.innerHTML += `<div> O número secreto é maior </div>`  

        }
        
    }

    function chuteForInvalido(numero){
        return Number.isNaN(numero)
    }

    function numeroForMaiorOuMenorQueOValorPermitido(numero){
        return numero > maiorValor || numero < menorValor
    }
