var cidade_estado = require('./estados_cidades.js')

const getListaDeEstados = function(){
   let listaEstadosJSON = {}
   let listaEstadosArray = []

  
    cidade_estado.estadosCidades.estados.forEach(function(sigla, indice){

        listaEstadosArray.push(cidade_estado.estadosCidades.estados[indice].sigla)
    })
      
    listaEstadosJSON.uf = listaEstadosArray
    listaEstadosJSON.quantidade = listaEstadosArray.length

    console.log(listaEstadosJSON)
    return listaEstadosJSON
}

// getListaDeEstados()

const getDadosEstado = function(siglaDigitada){

    let sigla = siglaDigitada
   let dadosEstadoJSON = {}

   cidade_estado.estadosCidades.estados.forEach(function(estado){

        if(estado.sigla.includes(sigla)){

            dadosEstadoJSON.uf = estado.sigla
            dadosEstadoJSON.descricao = estado.nome
            dadosEstadoJSON.capital = estado.capital
            dadosEstadoJSON.regiao = estado.regiao

        }

    })

    
    console.log(dadosEstadoJSON)

}

// getDadosEstado('SP')

const getCapitalEstado = function(siglaEscolhida){
    
    let sigla = siglaEscolhida
    let dadosCapitalJSON = {}

    cidade_estado.estadosCidades.estados.forEach(function(estado){

        if(estado.sigla.includes(sigla)){

            dadosCapitalJSON.uf = estado.sigla
            dadosCapitalJSON.descricao = estado.nome
            dadosCapitalJSON.capital = estado.capital
        }
    })

    console.log(dadosCapitalJSON)
}

// getCapitalEstado('AC')

const getEstadosRegiao = function(regiaoEstado){
    let estadoReg = String(regiaoEstado)
    let estadosRegiaoJSON = {}
    let regiaoEstadoArray = []

    estadosRegiaoJSON.regiao = estadoReg

    cidade_estado.estadosCidades.estados.forEach(function(regiao){

        if(regiao.regiao.includes(estadoReg)){
            let estadosRegiaoJSON = {}

            estadosRegiaoJSON.uf = regiao.sigla
            estadosRegiaoJSON.descricao = regiao.nome

           regiaoEstadoArray.push(estadosRegiaoJSON)
        }
    })

    estadosRegiaoJSON.estados = regiaoEstadoArray

    console.log(estadosRegiaoJSON)
    


}

// getEstadosRegiao('Sul')

const getCapitalPais = function(){
    let paisCap = []
    let capital = {}

        cidade_estado.estadosCidades.estados.forEach(function(capitais){
            if(capitais.capital_pais != undefined){
                let capitalJSON = {}
    
                capitalJSON.capital_atual = capitais.capital_pais.capital
                capitalJSON.uf = capitais.sigla
                capitalJSON.descricao = capitais.nome
                capitalJSON.capital = capitais.capital
                capitalJSON.regiao = capitais.regiao
                capitalJSON.capital_pais_inicio = capitais.capital_pais.ano_inicio
                capitalJSON.capital_pais_final = capitais.capital_pais.ano_fim

                paisCap.push(capitalJSON)
            }   
})

capital.capitais = paisCap
console.log(capital)
return capital
    
}

// getCapitalPais()

const getCidades = function(sigla){
   let siglaEstado = sigla
    let cidadesEstado = []
    let cidades = {}

    cidade_estado.estadosCidades.estados.forEach(function(estadoCidade){

        if(estadoCidade.sigla.includes(siglaEstado)){

            cidades.uf = estadoCidade.sigla
            cidades.descricao = estadoCidade.nome
            cidades.quantidade_cid = estadoCidade.cidades.length

            estadoCidade.cidades.forEach(function(cidade){
                let nomeCidades = cidade.nome
                cidadesEstado.push(nomeCidades)
            })

        }
    })

    cidades.cidades = cidadesEstado
    console.log(cidades)
}

// getCidades('AC')