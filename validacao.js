    function verificaValorChuteValido(chute){
        const numero = +chute

        if(chuteForInvalido(numero)){
            Elementochute.innerHTML += `<div>Valor Inválido</div>`
        }
        if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
            Elementochute.innerHTML += `<div> Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        }
        if( numero === numeroSecreto){
            document.body.innerHTML = `
            <h2> Você acertou!! </h2>
            <h3> O número secreto era ${numeroSecreto} </h3>
            `
        }else if(numero > numeroSecreto) {
         Elementochute.innerHTML += `<div> O número secreto é menor</div>`
        } else{
          Elementochute.innerHTML += `<div> O número secreto é maior </div>`  
        }
    }

    function chuteForInvalido(numero){
        return Number.isNaN(numero)
    }

    function numeroForMaiorOuMenorQueOValorPermitido(numero){
        return numero > maiorValor || numero < menorValor
    }
